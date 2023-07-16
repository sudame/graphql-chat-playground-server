import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { RoomOrderBy, MessageOrderBy, ReactionOrderBy } from "./graphql";
import type { Message, Reaction, Resolvers, Room } from "./graphql";
import { PrismaClient } from "@prisma/client";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { GraphQLError } from "graphql";

interface Context {
  loginUserId: string;
}

const dirname = path.dirname(fileURLToPath(import.meta.url));
const prisma = new PrismaClient();

const resolvers: Resolvers<Context> = {
  Query: {
    rooms: async (_, input, { loginUserId }) => {
      let orderByKey: keyof Room | null = null;
      switch (input.orderBy) {
        case RoomOrderBy.CreatedAt: {
          orderByKey = "createdAt";
          break;
        }
        case RoomOrderBy.Id: {
          orderByKey = "id";
          break;
        }
        case RoomOrderBy.LastMessagePostedAt: {
          orderByKey = "lastMessagePostedAt";
          break;
        }
        case RoomOrderBy.Name: {
          orderByKey = "name";
          break;
        }
        default: {
          orderByKey = null;
          break;
        }
      }

      const orderByDirection = (input.orderByDirection ?? "ASC").toLowerCase();

      const orderBy =
        orderByKey === null ? {} : { [orderByKey]: orderByDirection };

      if (loginUserId === undefined || loginUserId === null) {
        return await findManyCursorConnection(
          async (args) =>
            await prisma.room.findMany({
              ...args,
              orderBy,
            }),
          async () => await prisma.room.count(),
          input
        );
      }

      return await findManyCursorConnection(
        async (args) =>
          (await prisma.user.findUnique({ where: { id: loginUserId } }).rooms({
            ...args,
            orderBy,
          })) ?? [],
        async () =>
          await prisma.room.count({
            where: {
              belongingUsers: {
                some: {
                  id: loginUserId,
                },
              },
            },
          }),
        input
      );
    },

    message: async (_, { id }) => {
      return await prisma.message.findUnique({ where: { id } });
    },

    reaction: async (_, { id }) => {
      return await prisma.reaction.findUnique({ where: { id } });
    },

    user: async (_, { id }) => {
      return await prisma.user.findUnique({ where: { id } });
    },
  },

  Room: {
    messages: async (room, input) => {
      let orderByKey: keyof Message | null = null;
      switch (input.orderBy) {
        case MessageOrderBy.CreatedAt: {
          orderByKey = "createdAt";
          break;
        }
        case MessageOrderBy.CreatedBy: {
          orderByKey = "createdBy";
          break;
        }
        case MessageOrderBy.DeletedAt: {
          orderByKey = "deletedAt";
          break;
        }
        case MessageOrderBy.Id: {
          orderByKey = "id";
          break;
        }
        default: {
          orderByKey = null;
          break;
        }
      }

      const orderByDirection = (input.orderByDirection ?? "ASC").toLowerCase();

      const orderBy =
        orderByKey === null ? {} : { [orderByKey]: orderByDirection };

      return await findManyCursorConnection(
        async (args) =>
          (await prisma.room
            .findUnique({ where: { id: room.id } })
            .messages({ ...args, orderBy })) ?? [],
        async () => await prisma.message.count({ where: { roomId: room.id } }),
        input
      );
    },

    belongingUsers: async (room, input) => {
      return await findManyCursorConnection(
        async (args) => {
          const hoge =
            (await prisma.room
              .findUnique({ where: { id: room.id } })
              .belongingUsers(args)) ?? [];

          return hoge;
        },
        async () =>
          await prisma.user.count({
            where: {
              rooms: {
                some: {
                  id: room.id,
                },
              },
            },
          }),
        input
      );
    },
  },

  Message: {
    createdBy: async (message) => {
      const createdBy = await prisma.message
        .findUniqueOrThrow({ where: { id: message.id } })
        .createdBy();

      if (createdBy === null)
        throw new GraphQLError("The createdBy user is not found.");

      return createdBy;
    },

    reactions: async (message, input) => {
      let orderByKey: keyof Reaction | null = null;
      switch (input.orderBy) {
        case ReactionOrderBy.CreatedAt: {
          orderByKey = "createdAt";
          break;
        }
        case ReactionOrderBy.CreatedBy: {
          orderByKey = "createdBy";
          break;
        }
        case ReactionOrderBy.Emoji: {
          orderByKey = "emoji";
          break;
        }
        case ReactionOrderBy.Id: {
          orderByKey = "id";
          break;
        }
      }

      const orderByDirection = (input.orderByDirection ?? "ASC").toLowerCase();

      const orderBy =
        orderByKey === null ? {} : { [orderByKey]: orderByDirection };

      return await findManyCursorConnection(
        async (args) =>
          (await prisma.message
            .findUnique({ where: { id: message.id } })
            .reactions({ ...args, orderBy })) ?? [],
        async () =>
          await prisma.reaction.count({ where: { messageId: message.id } }),
        input
      );
    },
  },

  Reaction: {
    createdBy: async (reaction) => {
      const createdBy = await prisma.reaction
        .findUniqueOrThrow({
          where: { id: reaction.id },
        })
        .createdBy();

      if (createdBy === null) {
        throw new GraphQLError("The createdBy user is not found.");
      }

      return createdBy;
    },
  },

  Mutation: {
    createRoom: async (_, { input }, { loginUserId }) => {
      const loginUser = await prisma.user.findUniqueOrThrow({
        where: { id: loginUserId },
      });

      const room = await prisma.room.create({
        data: {
          name: input.name,
          lastMessagePostedAt: new Date(),
          belongingUsers: {
            connect: [loginUser],
          },
        },
      });

      return {
        room,
      };
    },

    deleteRoom: async (_, { input }) => {
      const deletedRoom = await prisma.room.delete({
        where: {
          id: input.roomId,
        },
      });

      return { deletedRoomId: deletedRoom.id };
    },

    createUser: async (_, { input }) => {
      const user = await prisma.user.create({
        data: {
          name: input.name,
        },
      });

      return { user };
    },

    postMessage: async (_, { input }, { loginUserId }) => {
      const loginUser = await prisma.user.findUniqueOrThrow({
        where: { id: loginUserId },
      });

      const message = await prisma.message.create({
        data: {
          body: input.body,
          roomId: input.roomId,
          createdByUserId: loginUser.id,
        },
      });

      return {
        message,
      };
    },

    deleteMessage: async (_, { input }) => {
      const deletedMessage = await prisma.message.update({
        data: {
          deletedAt: new Date(),
        },
        where: {
          id: input.messageId,
        },
      });

      return { deletedMessage };
    },

    addReaction: async (_, { input }, { loginUserId }) => {
      const loginUser = await prisma.user.findUniqueOrThrow({
        where: { id: loginUserId },
      });

      const reaction = await prisma.reaction.create({
        data: {
          emoji: input.emoji,
          createdByUserId: loginUser.id,
          messageId: input.messageId,
        },
        include: {
          message: true,
        },
      });

      return {
        reaction,
        message: reaction.message,
      };
    },

    deleteReaction: async (_, { input }) => {
      const deletedReaction = await prisma.reaction.delete({
        where: { id: input.reactionId },
      });

      return {
        deletedReactionId: deletedReaction.id,
      };
    },

    joinRoom: async (_, { input }) => {
      const user = await prisma.user.update({
        where: {
          id: input.userId,
        },
        data: {
          rooms: {
            connect: {
              id: input.roomId,
            },
          },
        },
      });

      const room = await prisma.room.findUniqueOrThrow({
        where: { id: input.roomId },
      });

      return {
        user,
        room,
      };
    },

    leaveRoom: async (_, { input }) => {
      const user = await prisma.user.update({
        where: {
          id: input.userId,
        },
        data: {
          rooms: {
            disconnect: {
              id: input.roomId,
            },
          },
        },
      });

      const room = await prisma.room.findUniqueOrThrow({
        where: { id: input.roomId },
      });

      return {
        user,
        room,
      };
    },
  },
};

async function main(): Promise<void> {
  const typeDefs = (
    await readFile(path.resolve(dirname, "../graphql/schema.graphql"))
  ).toString("utf-8");

  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
  });

  await startStandaloneServer(server, {
    listen: {
      port: 4000,
    },
    context: async ({ req }) => {
      const loginUserId = req.headers["x-user-id"];
      if (loginUserId === undefined || Array.isArray(loginUserId)) {
        throw new GraphQLError(
          "HTTPリクエストに X-USER-ID が設定されていません。ログイン中のユーザーのIDを X-USER-ID に設定してください。"
        );
      }
      return { loginUserId };
    },
  });

  console.log("🚀 Server ready at: http://localhost:4000/");
}

void main();
