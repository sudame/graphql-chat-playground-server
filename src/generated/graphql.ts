import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type Message = Node & {
  __typename?: 'Message';
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

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Query = {
  __typename?: 'Query';
  message?: Maybe<Message>;
  reaction?: Maybe<Reaction>;
  room?: Maybe<Room>;
  rooms: RoomConnection;
  uesr?: Maybe<User>;
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
  orderBy?: InputMaybe<RoomOrderBy>;
};


export type QueryUesrArgs = {
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
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Node: ( Message ) | ( Reaction ) | ( Room ) | ( User );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Message: ResolverTypeWrapper<Message>;
  MessageConnection: ResolverTypeWrapper<MessageConnection>;
  MessageEdge: ResolverTypeWrapper<MessageEdge>;
  MessageOrderBy: MessageOrderBy;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  Reaction: ResolverTypeWrapper<Reaction>;
  ReactionConnection: ResolverTypeWrapper<ReactionConnection>;
  ReactionEdge: ResolverTypeWrapper<ReactionEdge>;
  ReactionOrderBy: ReactionOrderBy;
  Room: ResolverTypeWrapper<Room>;
  RoomConnection: ResolverTypeWrapper<RoomConnection>;
  RoomEdge: ResolverTypeWrapper<RoomEdge>;
  RoomOrderBy: RoomOrderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Cursor: Scalars['Cursor']['output'];
  Date: Scalars['Date']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Message: Message;
  MessageConnection: MessageConnection;
  MessageEdge: MessageEdge;
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  PageInfo: PageInfo;
  Query: {};
  Reaction: Reaction;
  ReactionConnection: ReactionConnection;
  ReactionEdge: ReactionEdge;
  Room: Room;
  RoomConnection: RoomConnection;
  RoomEdge: RoomEdge;
  String: Scalars['String']['output'];
  User: User;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactions?: Resolver<ResolversTypes['ReactionConnection'], ParentType, ContextType, Partial<MessageReactionsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageConnection'] = ResolversParentTypes['MessageConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MessageEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEdge'] = ResolversParentTypes['MessageEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Message' | 'Reaction' | 'Room' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryMessageArgs, 'id'>>;
  reaction?: Resolver<Maybe<ResolversTypes['Reaction']>, ParentType, ContextType, RequireFields<QueryReactionArgs, 'id'>>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<QueryRoomArgs, 'id'>>;
  rooms?: Resolver<ResolversTypes['RoomConnection'], ParentType, ContextType, Partial<QueryRoomsArgs>>;
  uesr?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUesrArgs, 'id'>>;
};

export type ReactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reaction'] = ResolversParentTypes['Reaction']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  emoji?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReactionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReactionConnection'] = ResolversParentTypes['ReactionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ReactionEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReactionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReactionEdge'] = ResolversParentTypes['ReactionEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Reaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  belongingUsers?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, Partial<RoomBelongingUsersArgs>>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isMuted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastMessagePostedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  messages?: Resolver<ResolversTypes['MessageConnection'], ParentType, ContextType, Partial<RoomMessagesArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomConnection'] = ResolversParentTypes['RoomConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RoomEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomEdge'] = ResolversParentTypes['RoomEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['Cursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cursor?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  Message?: MessageResolvers<ContextType>;
  MessageConnection?: MessageConnectionResolvers<ContextType>;
  MessageEdge?: MessageEdgeResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
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
};

