import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MessageParent, ReactionParent, RoomParent } from './models';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
};

export type AddReactionInput = {
  emoji: Scalars['String']['input'];
  messageId: Scalars['ID']['input'];
};

export type AddReactionPayload = {
  __typename?: 'AddReactionPayload';
  message: Message;
  reaction: Reaction;
};

export type CreateRoomInput = {
  name: Scalars['String']['input'];
};

export type CreateRoomPayload = {
  __typename?: 'CreateRoomPayload';
  room: Room;
};

export type CreateUserInput = {
  name: Scalars['String']['input'];
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  user: User;
};

export type DeleteMessageInput = {
  messageId: Scalars['ID']['input'];
};

export type DeleteMessagePayload = {
  __typename?: 'DeleteMessagePayload';
  deletedMessage: Message;
};

export type DeleteReactionInput = {
  reactionId: Scalars['ID']['input'];
};

export type DeleteReactionPayload = {
  __typename?: 'DeleteReactionPayload';
  deletedReactionId: Scalars['ID']['output'];
};

export type DeleteRoomInput = {
  roomId: Scalars['ID']['input'];
};

export type DeleteRoomPayload = {
  __typename?: 'DeleteRoomPayload';
  deletedRoomId: Scalars['ID']['output'];
};

export type JoinRoomInput = {
  roomId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type JoinRoomPayload = {
  __typename?: 'JoinRoomPayload';
  room: Room;
  user: User;
};

export type LeaveRoomInput = {
  roomId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type LeaveRoomPayload = {
  __typename?: 'LeaveRoomPayload';
  room: Room;
  user: User;
};

export type Message = Node & {
  __typename?: 'Message';
  body: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  createdBy: User;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  reactions: ReactionConnection;
};


export type MessageReactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReactionOrderBy>;
  orderByDirection?: InputMaybe<OrderByDirection>;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  edges: Array<MessageEdge>;
  pageInfo: PageInfo;
};

export type MessageEdge = {
  __typename?: 'MessageEdge';
  cursor: Scalars['Cursor']['output'];
  node: Message;
};

export enum MessageOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  DeletedAt = 'DELETED_AT',
  Id = 'ID'
}

export type Mutation = {
  __typename?: 'Mutation';
  addReaction?: Maybe<AddReactionPayload>;
  createRoom?: Maybe<CreateRoomPayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteMessage?: Maybe<DeleteMessagePayload>;
  deleteReaction?: Maybe<DeleteReactionPayload>;
  deleteRoom?: Maybe<DeleteRoomPayload>;
  joinRoom?: Maybe<JoinRoomPayload>;
  leaveRoom?: Maybe<LeaveRoomPayload>;
  postMessage?: Maybe<PostMessagePayload>;
};


export type MutationAddReactionArgs = {
  input: AddReactionInput;
};


export type MutationCreateRoomArgs = {
  input: CreateRoomInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteMessageArgs = {
  input: DeleteMessageInput;
};


export type MutationDeleteReactionArgs = {
  input: DeleteReactionInput;
};


export type MutationDeleteRoomArgs = {
  input: DeleteRoomInput;
};


export type MutationJoinRoomArgs = {
  input: JoinRoomInput;
};


export type MutationLeaveRoomArgs = {
  input: LeaveRoomInput;
};


export type MutationPostMessageArgs = {
  input: PostMessageInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type PostMessageInput = {
  body: Scalars['String']['input'];
  roomId: Scalars['ID']['input'];
};

export type PostMessagePayload = {
  __typename?: 'PostMessagePayload';
  message: Message;
};

export type Query = {
  __typename?: 'Query';
  message?: Maybe<Message>;
  reaction?: Maybe<Reaction>;
  room?: Maybe<Room>;
  rooms: RoomConnection;
  user?: Maybe<User>;
};


export type QueryMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRoomArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRoomsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  loginUserId?: InputMaybe<Scalars['ID']['input']>;
  orderBy?: InputMaybe<RoomOrderBy>;
  orderByDirection?: InputMaybe<OrderByDirection>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Reaction = Node & {
  __typename?: 'Reaction';
  createdAt: Scalars['Date']['output'];
  createdBy: User;
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ReactionConnection = {
  __typename?: 'ReactionConnection';
  edges: Array<ReactionEdge>;
  pageInfo: PageInfo;
};

export type ReactionEdge = {
  __typename?: 'ReactionEdge';
  cursor: Scalars['Cursor']['output'];
  node: Reaction;
};

export enum ReactionOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  Emoji = 'EMOJI',
  Id = 'ID'
}

export type Room = Node & {
  __typename?: 'Room';
  belongingUsers: UserConnection;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  isMuted: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  lastMessagePostedAt: Scalars['Date']['output'];
  messages: MessageConnection;
  name: Scalars['String']['output'];
};


export type RoomBelongingUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type RoomMessagesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MessageOrderBy>;
  orderByDirection?: InputMaybe<OrderByDirection>;
};

export type RoomConnection = {
  __typename?: 'RoomConnection';
  edges: Array<RoomEdge>;
  pageInfo: PageInfo;
};

export type RoomEdge = {
  __typename?: 'RoomEdge';
  cursor: Scalars['Cursor']['output'];
  node: Room;
};

export enum RoomOrderBy {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  LastMessagePostedAt = 'LAST_MESSAGE_POSTED_AT',
  Name = 'NAME'
}

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['Cursor']['output'];
  node: User;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Node: ( MessageParent ) | ( ReactionParent ) | ( RoomParent ) | ( User );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddReactionInput: AddReactionInput;
  AddReactionPayload: ResolverTypeWrapper<Omit<AddReactionPayload, 'message' | 'reaction'> & { message: ResolversTypes['Message'], reaction: ResolversTypes['Reaction'] }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateRoomInput: CreateRoomInput;
  CreateRoomPayload: ResolverTypeWrapper<Omit<CreateRoomPayload, 'room'> & { room: ResolversTypes['Room'] }>;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DeleteMessageInput: DeleteMessageInput;
  DeleteMessagePayload: ResolverTypeWrapper<Omit<DeleteMessagePayload, 'deletedMessage'> & { deletedMessage: ResolversTypes['Message'] }>;
  DeleteReactionInput: DeleteReactionInput;
  DeleteReactionPayload: ResolverTypeWrapper<DeleteReactionPayload>;
  DeleteRoomInput: DeleteRoomInput;
  DeleteRoomPayload: ResolverTypeWrapper<DeleteRoomPayload>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JoinRoomInput: JoinRoomInput;
  JoinRoomPayload: ResolverTypeWrapper<Omit<JoinRoomPayload, 'room'> & { room: ResolversTypes['Room'] }>;
  LeaveRoomInput: LeaveRoomInput;
  LeaveRoomPayload: ResolverTypeWrapper<Omit<LeaveRoomPayload, 'room'> & { room: ResolversTypes['Room'] }>;
  Message: ResolverTypeWrapper<MessageParent>;
  MessageConnection: ResolverTypeWrapper<Omit<MessageConnection, 'edges'> & { edges: Array<ResolversTypes['MessageEdge']> }>;
  MessageEdge: ResolverTypeWrapper<Omit<MessageEdge, 'node'> & { node: ResolversTypes['Message'] }>;
  MessageOrderBy: MessageOrderBy;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  OrderByDirection: OrderByDirection;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PostMessageInput: PostMessageInput;
  PostMessagePayload: ResolverTypeWrapper<Omit<PostMessagePayload, 'message'> & { message: ResolversTypes['Message'] }>;
  Query: ResolverTypeWrapper<{}>;
  Reaction: ResolverTypeWrapper<ReactionParent>;
  ReactionConnection: ResolverTypeWrapper<Omit<ReactionConnection, 'edges'> & { edges: Array<ResolversTypes['ReactionEdge']> }>;
  ReactionEdge: ResolverTypeWrapper<Omit<ReactionEdge, 'node'> & { node: ResolversTypes['Reaction'] }>;
  ReactionOrderBy: ReactionOrderBy;
  Room: ResolverTypeWrapper<RoomParent>;
  RoomConnection: ResolverTypeWrapper<Omit<RoomConnection, 'edges'> & { edges: Array<ResolversTypes['RoomEdge']> }>;
  RoomEdge: ResolverTypeWrapper<Omit<RoomEdge, 'node'> & { node: ResolversTypes['Room'] }>;
  RoomOrderBy: RoomOrderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddReactionInput: AddReactionInput;
  AddReactionPayload: Omit<AddReactionPayload, 'message' | 'reaction'> & { message: ResolversParentTypes['Message'], reaction: ResolversParentTypes['Reaction'] };
  Boolean: Scalars['Boolean']['output'];
  CreateRoomInput: CreateRoomInput;
  CreateRoomPayload: Omit<CreateRoomPayload, 'room'> & { room: ResolversParentTypes['Room'] };
  CreateUserInput: CreateUserInput;
  CreateUserPayload: CreateUserPayload;
  Cursor: Scalars['Cursor']['output'];
  Date: Scalars['Date']['output'];
  DeleteMessageInput: DeleteMessageInput;
  DeleteMessagePayload: Omit<DeleteMessagePayload, 'deletedMessage'> & { deletedMessage: ResolversParentTypes['Message'] };
  DeleteReactionInput: DeleteReactionInput;
  DeleteReactionPayload: DeleteReactionPayload;
  DeleteRoomInput: DeleteRoomInput;
  DeleteRoomPayload: DeleteRoomPayload;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  JoinRoomInput: JoinRoomInput;
  JoinRoomPayload: Omit<JoinRoomPayload, 'room'> & { room: ResolversParentTypes['Room'] };
  LeaveRoomInput: LeaveRoomInput;
  LeaveRoomPayload: Omit<LeaveRoomPayload, 'room'> & { room: ResolversParentTypes['Room'] };
  Message: MessageParent;
  MessageConnection: Omit<MessageConnection, 'edges'> & { edges: Array<ResolversParentTypes['MessageEdge']> };
  MessageEdge: Omit<MessageEdge, 'node'> & { node: ResolversParentTypes['Message'] };
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  PageInfo: PageInfo;
  PostMessageInput: PostMessageInput;
  PostMessagePayload: Omit<PostMessagePayload, 'message'> & { message: ResolversParentTypes['Message'] };
  Query: {};
  Reaction: ReactionParent;
  ReactionConnection: Omit<ReactionConnection, 'edges'> & { edges: Array<ResolversParentTypes['ReactionEdge']> };
  ReactionEdge: Omit<ReactionEdge, 'node'> & { node: ResolversParentTypes['Reaction'] };
  Room: RoomParent;
  RoomConnection: Omit<RoomConnection, 'edges'> & { edges: Array<ResolversParentTypes['RoomEdge']> };
  RoomEdge: Omit<RoomEdge, 'node'> & { node: ResolversParentTypes['Room'] };
  String: Scalars['String']['output'];
  User: User;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
}>;

export type AddReactionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddReactionPayload'] = ResolversParentTypes['AddReactionPayload']> = ResolversObject<{
  message?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  reaction?: Resolver<ResolversTypes['Reaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateRoomPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateRoomPayload'] = ResolversParentTypes['CreateRoomPayload']> = ResolversObject<{
  room?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = ResolversObject<{
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeleteMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteMessagePayload'] = ResolversParentTypes['DeleteMessagePayload']> = ResolversObject<{
  deletedMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteReactionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteReactionPayload'] = ResolversParentTypes['DeleteReactionPayload']> = ResolversObject<{
  deletedReactionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteRoomPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteRoomPayload'] = ResolversParentTypes['DeleteRoomPayload']> = ResolversObject<{
  deletedRoomId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JoinRoomPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['JoinRoomPayload'] = ResolversParentTypes['JoinRoomPayload']> = ResolversObject<{
  room?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LeaveRoomPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeaveRoomPayload'] = ResolversParentTypes['LeaveRoomPayload']> = ResolversObject<{
  room?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = ResolversObject<{
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactions?: Resolver<ResolversTypes['ReactionConnection'], ParentType, ContextType, Partial<MessageReactionsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageConnection'] = ResolversParentTypes['MessageConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['MessageEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEdge'] = ResolversParentTypes['MessageEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addReaction?: Resolver<Maybe<ResolversTypes['AddReactionPayload']>, ParentType, ContextType, RequireFields<MutationAddReactionArgs, 'input'>>;
  createRoom?: Resolver<Maybe<ResolversTypes['CreateRoomPayload']>, ParentType, ContextType, RequireFields<MutationCreateRoomArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteMessage?: Resolver<Maybe<ResolversTypes['DeleteMessagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteMessageArgs, 'input'>>;
  deleteReaction?: Resolver<Maybe<ResolversTypes['DeleteReactionPayload']>, ParentType, ContextType, RequireFields<MutationDeleteReactionArgs, 'input'>>;
  deleteRoom?: Resolver<Maybe<ResolversTypes['DeleteRoomPayload']>, ParentType, ContextType, RequireFields<MutationDeleteRoomArgs, 'input'>>;
  joinRoom?: Resolver<Maybe<ResolversTypes['JoinRoomPayload']>, ParentType, ContextType, RequireFields<MutationJoinRoomArgs, 'input'>>;
  leaveRoom?: Resolver<Maybe<ResolversTypes['LeaveRoomPayload']>, ParentType, ContextType, RequireFields<MutationLeaveRoomArgs, 'input'>>;
  postMessage?: Resolver<Maybe<ResolversTypes['PostMessagePayload']>, ParentType, ContextType, RequireFields<MutationPostMessageArgs, 'input'>>;
}>;

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Message' | 'Reaction' | 'Room' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostMessagePayload'] = ResolversParentTypes['PostMessagePayload']> = ResolversObject<{
  message?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryMessageArgs, 'id'>>;
  reaction?: Resolver<Maybe<ResolversTypes['Reaction']>, ParentType, ContextType, RequireFields<QueryReactionArgs, 'id'>>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<QueryRoomArgs, 'id'>>;
  rooms?: Resolver<ResolversTypes['RoomConnection'], ParentType, ContextType, Partial<QueryRoomsArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
}>;

export type ReactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reaction'] = ResolversParentTypes['Reaction']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  emoji?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReactionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReactionConnection'] = ResolversParentTypes['ReactionConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ReactionEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReactionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReactionEdge'] = ResolversParentTypes['ReactionEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Reaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = ResolversObject<{
  belongingUsers?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, Partial<RoomBelongingUsersArgs>>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isMuted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastMessagePostedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  messages?: Resolver<ResolversTypes['MessageConnection'], ParentType, ContextType, Partial<RoomMessagesArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomConnection'] = ResolversParentTypes['RoomConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['RoomEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomEdge'] = ResolversParentTypes['RoomEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AddReactionPayload?: AddReactionPayloadResolvers<ContextType>;
  CreateRoomPayload?: CreateRoomPayloadResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DeleteMessagePayload?: DeleteMessagePayloadResolvers<ContextType>;
  DeleteReactionPayload?: DeleteReactionPayloadResolvers<ContextType>;
  DeleteRoomPayload?: DeleteRoomPayloadResolvers<ContextType>;
  JoinRoomPayload?: JoinRoomPayloadResolvers<ContextType>;
  LeaveRoomPayload?: LeaveRoomPayloadResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageConnection?: MessageConnectionResolvers<ContextType>;
  MessageEdge?: MessageEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PostMessagePayload?: PostMessagePayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reaction?: ReactionResolvers<ContextType>;
  ReactionConnection?: ReactionConnectionResolvers<ContextType>;
  ReactionEdge?: ReactionEdgeResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  RoomConnection?: RoomConnectionResolvers<ContextType>;
  RoomEdge?: RoomEdgeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
}>;

