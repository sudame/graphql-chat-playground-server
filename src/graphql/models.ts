import type { Message, Reaction, Room } from ".";

export type MessageParent = Omit<Message, "createdBy" | "reactions">;

export type ReactionParent = Omit<Reaction, "createdBy">;

export type RoomParent = Omit<Room, "belongingUsers" | "messages">;
