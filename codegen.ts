import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql/schema.graphql",
  generates: {
    "src/graphql/index.ts": {
      config: {
        useIndexSignature: true,
        mappers: {
          Message: "./models#MessageParent",
          Reaction: "./models#ReactionParent",
          Room: "./models#RoomParent",
        },
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
