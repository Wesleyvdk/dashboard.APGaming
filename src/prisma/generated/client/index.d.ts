
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameManager
 * 
 */
export type GameManager = $Result.DefaultSelection<Prisma.$GameManagerPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model PlayerStats
 * 
 */
export type PlayerStats = $Result.DefaultSelection<Prisma.$PlayerStatsPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model PlayerNote
 * 
 */
export type PlayerNote = $Result.DefaultSelection<Prisma.$PlayerNotePayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  NEWS_WRITER: 'NEWS_WRITER',
  TEAM_MANAGER: 'TEAM_MANAGER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const TaskStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const ActivityType: {
  NEWS_CREATED: 'NEWS_CREATED',
  NEWS_UPDATED: 'NEWS_UPDATED',
  ROSTER_CHANGED: 'ROSTER_CHANGED',
  TASK_CREATED: 'TASK_CREATED',
  TASK_UPDATED: 'TASK_UPDATED',
  USER_ROLE_CHANGED: 'USER_ROLE_CHANGED'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]


export const MatchType: {
  TOURNAMENT: 'TOURNAMENT',
  SCRIM: 'SCRIM',
  OFFICIAL: 'OFFICIAL'
};

export type MatchType = (typeof MatchType)[keyof typeof MatchType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

export type MatchType = $Enums.MatchType

export const MatchType: typeof $Enums.MatchType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameManager`: Exposes CRUD operations for the **GameManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameManagers
    * const gameManagers = await prisma.gameManager.findMany()
    * ```
    */
  get gameManager(): Prisma.GameManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerStats`: Exposes CRUD operations for the **PlayerStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerStats
    * const playerStats = await prisma.playerStats.findMany()
    * ```
    */
  get playerStats(): Prisma.PlayerStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerNote`: Exposes CRUD operations for the **PlayerNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerNotes
    * const playerNotes = await prisma.playerNote.findMany()
    * ```
    */
  get playerNote(): Prisma.PlayerNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Task: 'Task',
    Activity: 'Activity',
    Team: 'Team',
    Game: 'Game',
    GameManager: 'GameManager',
    Player: 'Player',
    PlayerStats: 'PlayerStats',
    Contract: 'Contract',
    PlayerNote: 'PlayerNote',
    Match: 'Match',
    Announcement: 'Announcement',
    News: 'News',
    Tag: 'Tag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "task" | "activity" | "team" | "game" | "gameManager" | "player" | "playerStats" | "contract" | "playerNote" | "match" | "announcement" | "news" | "tag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameManager: {
        payload: Prisma.$GameManagerPayload<ExtArgs>
        fields: Prisma.GameManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>
          }
          findFirst: {
            args: Prisma.GameManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>
          }
          findMany: {
            args: Prisma.GameManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>[]
          }
          create: {
            args: Prisma.GameManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>
          }
          createMany: {
            args: Prisma.GameManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>[]
          }
          delete: {
            args: Prisma.GameManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>
          }
          update: {
            args: Prisma.GameManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>
          }
          deleteMany: {
            args: Prisma.GameManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>[]
          }
          upsert: {
            args: Prisma.GameManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameManagerPayload>
          }
          aggregate: {
            args: Prisma.GameManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameManager>
          }
          groupBy: {
            args: Prisma.GameManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameManagerCountArgs<ExtArgs>
            result: $Utils.Optional<GameManagerCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      PlayerStats: {
        payload: Prisma.$PlayerStatsPayload<ExtArgs>
        fields: Prisma.PlayerStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          findFirst: {
            args: Prisma.PlayerStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          findMany: {
            args: Prisma.PlayerStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          create: {
            args: Prisma.PlayerStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          createMany: {
            args: Prisma.PlayerStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          delete: {
            args: Prisma.PlayerStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          update: {
            args: Prisma.PlayerStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          aggregate: {
            args: Prisma.PlayerStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerStats>
          }
          groupBy: {
            args: Prisma.PlayerStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatsCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      PlayerNote: {
        payload: Prisma.$PlayerNotePayload<ExtArgs>
        fields: Prisma.PlayerNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>
          }
          findFirst: {
            args: Prisma.PlayerNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>
          }
          findMany: {
            args: Prisma.PlayerNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>[]
          }
          create: {
            args: Prisma.PlayerNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>
          }
          createMany: {
            args: Prisma.PlayerNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>[]
          }
          delete: {
            args: Prisma.PlayerNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>
          }
          update: {
            args: Prisma.PlayerNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>
          }
          deleteMany: {
            args: Prisma.PlayerNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>[]
          }
          upsert: {
            args: Prisma.PlayerNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerNotePayload>
          }
          aggregate: {
            args: Prisma.PlayerNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerNote>
          }
          groupBy: {
            args: Prisma.PlayerNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerNoteCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerNoteCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    task?: TaskOmit
    activity?: ActivityOmit
    team?: TeamOmit
    game?: GameOmit
    gameManager?: GameManagerOmit
    player?: PlayerOmit
    playerStats?: PlayerStatsOmit
    contract?: ContractOmit
    playerNote?: PlayerNoteOmit
    match?: MatchOmit
    announcement?: AnnouncementOmit
    news?: NewsOmit
    tag?: TagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    news: number
    tasks: number
    createdTasks: number
    activities: number
    teams: number
    managedGames: number
    playerNotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | UserCountOutputTypeCountNewsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    managedGames?: boolean | UserCountOutputTypeCountManagedGamesArgs
    playerNotes?: boolean | UserCountOutputTypeCountPlayerNotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameManagerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayerNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerNoteWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    managers: number
    players: number
    matches: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managers?: boolean | TeamCountOutputTypeCountManagersArgs
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    matches?: boolean | TeamCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountManagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    teams: number
    managers: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | GameCountOutputTypeCountTeamsArgs
    managers?: boolean | GameCountOutputTypeCountManagersArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountManagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameManagerWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    contracts: number
    notes: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | PlayerCountOutputTypeCountContractsArgs
    notes?: boolean | PlayerCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerNoteWhereInput
  }


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    tags: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | NewsCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    news: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | TagCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    invitationToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    invitationToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    status: number
    invitationToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    status?: true
    invitationToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    status?: true
    invitationToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    status?: true
    invitationToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string | null
    role: $Enums.Role
    status: $Enums.Status
    invitationToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    invitationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | User$newsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    managedGames?: boolean | User$managedGamesArgs<ExtArgs>
    playerNotes?: boolean | User$playerNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    invitationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    invitationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    invitationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "status" | "invitationToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | User$newsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    managedGames?: boolean | User$managedGamesArgs<ExtArgs>
    playerNotes?: boolean | User$playerNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      createdTasks: Prisma.$TaskPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      managedGames: Prisma.$GameManagerPayload<ExtArgs>[]
      playerNotes: Prisma.$PlayerNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string | null
      role: $Enums.Role
      status: $Enums.Status
      invitationToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    managedGames<T extends User$managedGamesArgs<ExtArgs> = {}>(args?: Subset<T, User$managedGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    playerNotes<T extends User$playerNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$playerNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'Status'>
    readonly invitationToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * User.managedGames
   */
  export type User$managedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    where?: GameManagerWhereInput
    orderBy?: GameManagerOrderByWithRelationInput | GameManagerOrderByWithRelationInput[]
    cursor?: GameManagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameManagerScalarFieldEnum | GameManagerScalarFieldEnum[]
  }

  /**
   * User.playerNotes
   */
  export type User$playerNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    where?: PlayerNoteWhereInput
    orderBy?: PlayerNoteOrderByWithRelationInput | PlayerNoteOrderByWithRelationInput[]
    cursor?: PlayerNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerNoteScalarFieldEnum | PlayerNoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    creatorId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.Priority | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    creatorId: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    dueDate: number
    createdAt: number
    updatedAt: number
    userId: number
    creatorId: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    creatorId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    creatorId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    creatorId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: $Enums.TaskStatus
    priority: $Enums.Priority
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    creatorId: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    creatorId?: boolean
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    creatorId?: boolean
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    creatorId?: boolean
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    creatorId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "dueDate" | "createdAt" | "updatedAt" | "userId" | "creatorId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      assignedTo: Prisma.$UserPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: $Enums.TaskStatus
      priority: $Enums.Priority
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
      creatorId: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly creatorId: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    type: $Enums.ActivityType | null
    message: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ActivityType | null
    message: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    type: number
    message: number
    metadata: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    type?: true
    message?: true
    createdAt?: true
    userId?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    type?: true
    message?: true
    createdAt?: true
    userId?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    type?: true
    message?: true
    metadata?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    type: $Enums.ActivityType
    message: string
    metadata: JsonValue | null
    createdAt: Date
    userId: string
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "message" | "metadata" | "createdAt" | "userId", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ActivityType
      message: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */ 
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'ActivityType'>
    readonly message: FieldRef<"Activity", 'String'>
    readonly metadata: FieldRef<"Activity", 'Json'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly userId: FieldRef<"Activity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    gameId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gameId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    gameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    gameId: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    managers?: boolean | Team$managersArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    matches?: boolean | Team$matchesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gameId" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    managers?: boolean | Team$managersArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    matches?: boolean | Team$matchesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      managers: Prisma.$UserPayload<ExtArgs>[]
      players: Prisma.$PlayerPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gameId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    managers<T extends Team$managersArgs<ExtArgs> = {}>(args?: Subset<T, Team$managersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    players<T extends Team$playersArgs<ExtArgs> = {}>(args?: Subset<T, Team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    matches<T extends Team$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly gameId: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.managers
   */
  export type Team$managersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team.players
   */
  export type Team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Team.matches
   */
  export type Team$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teams?: boolean | Game$teamsArgs<ExtArgs>
    managers?: boolean | Game$managersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Game$teamsArgs<ExtArgs>
    managers?: boolean | Game$managersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      teams: Prisma.$TeamPayload<ExtArgs>[]
      managers: Prisma.$GameManagerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Game$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Game$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    managers<T extends Game$managersArgs<ExtArgs> = {}>(args?: Subset<T, Game$managersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly name: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.teams
   */
  export type Game$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Game.managers
   */
  export type Game$managersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    where?: GameManagerWhereInput
    orderBy?: GameManagerOrderByWithRelationInput | GameManagerOrderByWithRelationInput[]
    cursor?: GameManagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameManagerScalarFieldEnum | GameManagerScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameManager
   */

  export type AggregateGameManager = {
    _count: GameManagerCountAggregateOutputType | null
    _min: GameManagerMinAggregateOutputType | null
    _max: GameManagerMaxAggregateOutputType | null
  }

  export type GameManagerMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameManagerMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameManagerCountAggregateOutputType = {
    id: number
    gameId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameManagerMinAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameManagerMaxAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameManagerCountAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameManager to aggregate.
     */
    where?: GameManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameManagers to fetch.
     */
    orderBy?: GameManagerOrderByWithRelationInput | GameManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameManagers
    **/
    _count?: true | GameManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameManagerMaxAggregateInputType
  }

  export type GetGameManagerAggregateType<T extends GameManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateGameManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameManager[P]>
      : GetScalarType<T[P], AggregateGameManager[P]>
  }




  export type GameManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameManagerWhereInput
    orderBy?: GameManagerOrderByWithAggregationInput | GameManagerOrderByWithAggregationInput[]
    by: GameManagerScalarFieldEnum[] | GameManagerScalarFieldEnum
    having?: GameManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameManagerCountAggregateInputType | true
    _min?: GameManagerMinAggregateInputType
    _max?: GameManagerMaxAggregateInputType
  }

  export type GameManagerGroupByOutputType = {
    id: string
    gameId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: GameManagerCountAggregateOutputType | null
    _min: GameManagerMinAggregateOutputType | null
    _max: GameManagerMaxAggregateOutputType | null
  }

  type GetGameManagerGroupByPayload<T extends GameManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameManagerGroupByOutputType[P]>
            : GetScalarType<T[P], GameManagerGroupByOutputType[P]>
        }
      >
    >


  export type GameManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameManager"]>

  export type GameManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameManager"]>

  export type GameManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameManager"]>

  export type GameManagerSelectScalar = {
    id?: boolean
    gameId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["gameManager"]>
  export type GameManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameManager"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameManager"]>
    composites: {}
  }

  type GameManagerGetPayload<S extends boolean | null | undefined | GameManagerDefaultArgs> = $Result.GetResult<Prisma.$GameManagerPayload, S>

  type GameManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameManagerCountAggregateInputType | true
    }

  export interface GameManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameManager'], meta: { name: 'GameManager' } }
    /**
     * Find zero or one GameManager that matches the filter.
     * @param {GameManagerFindUniqueArgs} args - Arguments to find a GameManager
     * @example
     * // Get one GameManager
     * const gameManager = await prisma.gameManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameManagerFindUniqueArgs>(args: SelectSubset<T, GameManagerFindUniqueArgs<ExtArgs>>): Prisma__GameManagerClient<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one GameManager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameManagerFindUniqueOrThrowArgs} args - Arguments to find a GameManager
     * @example
     * // Get one GameManager
     * const gameManager = await prisma.gameManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, GameManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameManagerClient<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first GameManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameManagerFindFirstArgs} args - Arguments to find a GameManager
     * @example
     * // Get one GameManager
     * const gameManager = await prisma.gameManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameManagerFindFirstArgs>(args?: SelectSubset<T, GameManagerFindFirstArgs<ExtArgs>>): Prisma__GameManagerClient<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first GameManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameManagerFindFirstOrThrowArgs} args - Arguments to find a GameManager
     * @example
     * // Get one GameManager
     * const gameManager = await prisma.gameManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, GameManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameManagerClient<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more GameManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameManagers
     * const gameManagers = await prisma.gameManager.findMany()
     * 
     * // Get first 10 GameManagers
     * const gameManagers = await prisma.gameManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameManagerWithIdOnly = await prisma.gameManager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameManagerFindManyArgs>(args?: SelectSubset<T, GameManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a GameManager.
     * @param {GameManagerCreateArgs} args - Arguments to create a GameManager.
     * @example
     * // Create one GameManager
     * const GameManager = await prisma.gameManager.create({
     *   data: {
     *     // ... data to create a GameManager
     *   }
     * })
     * 
     */
    create<T extends GameManagerCreateArgs>(args: SelectSubset<T, GameManagerCreateArgs<ExtArgs>>): Prisma__GameManagerClient<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many GameManagers.
     * @param {GameManagerCreateManyArgs} args - Arguments to create many GameManagers.
     * @example
     * // Create many GameManagers
     * const gameManager = await prisma.gameManager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameManagerCreateManyArgs>(args?: SelectSubset<T, GameManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameManagers and returns the data saved in the database.
     * @param {GameManagerCreateManyAndReturnArgs} args - Arguments to create many GameManagers.
     * @example
     * // Create many GameManagers
     * const gameManager = await prisma.gameManager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameManagers and only return the `id`
     * const gameManagerWithIdOnly = await prisma.gameManager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, GameManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a GameManager.
     * @param {GameManagerDeleteArgs} args - Arguments to delete one GameManager.
     * @example
     * // Delete one GameManager
     * const GameManager = await prisma.gameManager.delete({
     *   where: {
     *     // ... filter to delete one GameManager
     *   }
     * })
     * 
     */
    delete<T extends GameManagerDeleteArgs>(args: SelectSubset<T, GameManagerDeleteArgs<ExtArgs>>): Prisma__GameManagerClient<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one GameManager.
     * @param {GameManagerUpdateArgs} args - Arguments to update one GameManager.
     * @example
     * // Update one GameManager
     * const gameManager = await prisma.gameManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameManagerUpdateArgs>(args: SelectSubset<T, GameManagerUpdateArgs<ExtArgs>>): Prisma__GameManagerClient<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more GameManagers.
     * @param {GameManagerDeleteManyArgs} args - Arguments to filter GameManagers to delete.
     * @example
     * // Delete a few GameManagers
     * const { count } = await prisma.gameManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameManagerDeleteManyArgs>(args?: SelectSubset<T, GameManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameManagers
     * const gameManager = await prisma.gameManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameManagerUpdateManyArgs>(args: SelectSubset<T, GameManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameManagers and returns the data updated in the database.
     * @param {GameManagerUpdateManyAndReturnArgs} args - Arguments to update many GameManagers.
     * @example
     * // Update many GameManagers
     * const gameManager = await prisma.gameManager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameManagers and only return the `id`
     * const gameManagerWithIdOnly = await prisma.gameManager.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, GameManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one GameManager.
     * @param {GameManagerUpsertArgs} args - Arguments to update or create a GameManager.
     * @example
     * // Update or create a GameManager
     * const gameManager = await prisma.gameManager.upsert({
     *   create: {
     *     // ... data to create a GameManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameManager we want to update
     *   }
     * })
     */
    upsert<T extends GameManagerUpsertArgs>(args: SelectSubset<T, GameManagerUpsertArgs<ExtArgs>>): Prisma__GameManagerClient<$Result.GetResult<Prisma.$GameManagerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of GameManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameManagerCountArgs} args - Arguments to filter GameManagers to count.
     * @example
     * // Count the number of GameManagers
     * const count = await prisma.gameManager.count({
     *   where: {
     *     // ... the filter for the GameManagers we want to count
     *   }
     * })
    **/
    count<T extends GameManagerCountArgs>(
      args?: Subset<T, GameManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameManagerAggregateArgs>(args: Subset<T, GameManagerAggregateArgs>): Prisma.PrismaPromise<GetGameManagerAggregateType<T>>

    /**
     * Group by GameManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameManagerGroupByArgs['orderBy'] }
        : { orderBy?: GameManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameManager model
   */
  readonly fields: GameManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameManager model
   */ 
  interface GameManagerFieldRefs {
    readonly id: FieldRef<"GameManager", 'String'>
    readonly gameId: FieldRef<"GameManager", 'String'>
    readonly userId: FieldRef<"GameManager", 'String'>
    readonly createdAt: FieldRef<"GameManager", 'DateTime'>
    readonly updatedAt: FieldRef<"GameManager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameManager findUnique
   */
  export type GameManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * Filter, which GameManager to fetch.
     */
    where: GameManagerWhereUniqueInput
  }

  /**
   * GameManager findUniqueOrThrow
   */
  export type GameManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * Filter, which GameManager to fetch.
     */
    where: GameManagerWhereUniqueInput
  }

  /**
   * GameManager findFirst
   */
  export type GameManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * Filter, which GameManager to fetch.
     */
    where?: GameManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameManagers to fetch.
     */
    orderBy?: GameManagerOrderByWithRelationInput | GameManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameManagers.
     */
    cursor?: GameManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameManagers.
     */
    distinct?: GameManagerScalarFieldEnum | GameManagerScalarFieldEnum[]
  }

  /**
   * GameManager findFirstOrThrow
   */
  export type GameManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * Filter, which GameManager to fetch.
     */
    where?: GameManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameManagers to fetch.
     */
    orderBy?: GameManagerOrderByWithRelationInput | GameManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameManagers.
     */
    cursor?: GameManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameManagers.
     */
    distinct?: GameManagerScalarFieldEnum | GameManagerScalarFieldEnum[]
  }

  /**
   * GameManager findMany
   */
  export type GameManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * Filter, which GameManagers to fetch.
     */
    where?: GameManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameManagers to fetch.
     */
    orderBy?: GameManagerOrderByWithRelationInput | GameManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameManagers.
     */
    cursor?: GameManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameManagers.
     */
    skip?: number
    distinct?: GameManagerScalarFieldEnum | GameManagerScalarFieldEnum[]
  }

  /**
   * GameManager create
   */
  export type GameManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a GameManager.
     */
    data: XOR<GameManagerCreateInput, GameManagerUncheckedCreateInput>
  }

  /**
   * GameManager createMany
   */
  export type GameManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameManagers.
     */
    data: GameManagerCreateManyInput | GameManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameManager createManyAndReturn
   */
  export type GameManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * The data used to create many GameManagers.
     */
    data: GameManagerCreateManyInput | GameManagerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameManager update
   */
  export type GameManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a GameManager.
     */
    data: XOR<GameManagerUpdateInput, GameManagerUncheckedUpdateInput>
    /**
     * Choose, which GameManager to update.
     */
    where: GameManagerWhereUniqueInput
  }

  /**
   * GameManager updateMany
   */
  export type GameManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameManagers.
     */
    data: XOR<GameManagerUpdateManyMutationInput, GameManagerUncheckedUpdateManyInput>
    /**
     * Filter which GameManagers to update
     */
    where?: GameManagerWhereInput
    /**
     * Limit how many GameManagers to update.
     */
    limit?: number
  }

  /**
   * GameManager updateManyAndReturn
   */
  export type GameManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * The data used to update GameManagers.
     */
    data: XOR<GameManagerUpdateManyMutationInput, GameManagerUncheckedUpdateManyInput>
    /**
     * Filter which GameManagers to update
     */
    where?: GameManagerWhereInput
    /**
     * Limit how many GameManagers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameManager upsert
   */
  export type GameManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the GameManager to update in case it exists.
     */
    where: GameManagerWhereUniqueInput
    /**
     * In case the GameManager found by the `where` argument doesn't exist, create a new GameManager with this data.
     */
    create: XOR<GameManagerCreateInput, GameManagerUncheckedCreateInput>
    /**
     * In case the GameManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameManagerUpdateInput, GameManagerUncheckedUpdateInput>
  }

  /**
   * GameManager delete
   */
  export type GameManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
    /**
     * Filter which GameManager to delete.
     */
    where: GameManagerWhereUniqueInput
  }

  /**
   * GameManager deleteMany
   */
  export type GameManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameManagers to delete
     */
    where?: GameManagerWhereInput
    /**
     * Limit how many GameManagers to delete.
     */
    limit?: number
  }

  /**
   * GameManager without action
   */
  export type GameManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameManager
     */
    select?: GameManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameManager
     */
    omit?: GameManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameManagerInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    inGameName: string | null
    username: string | null
    dateOfBirth: Date | null
    country: string | null
    teamId: string | null
    role: string | null
    rank: string | null
    joinDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    inGameName: string | null
    username: string | null
    dateOfBirth: Date | null
    country: string | null
    teamId: string | null
    role: string | null
    rank: string | null
    joinDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    inGameName: number
    username: number
    dateOfBirth: number
    country: number
    teamId: number
    role: number
    rank: number
    joinDate: number
    endDate: number
    socialLinks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    inGameName?: true
    username?: true
    dateOfBirth?: true
    country?: true
    teamId?: true
    role?: true
    rank?: true
    joinDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    inGameName?: true
    username?: true
    dateOfBirth?: true
    country?: true
    teamId?: true
    role?: true
    rank?: true
    joinDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    inGameName?: true
    username?: true
    dateOfBirth?: true
    country?: true
    teamId?: true
    role?: true
    rank?: true
    joinDate?: true
    endDate?: true
    socialLinks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    inGameName: string
    username: string | null
    dateOfBirth: Date | null
    country: string | null
    teamId: string | null
    role: string | null
    rank: string | null
    joinDate: Date
    endDate: Date | null
    socialLinks: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    inGameName?: boolean
    username?: boolean
    dateOfBirth?: boolean
    country?: boolean
    teamId?: boolean
    role?: boolean
    rank?: boolean
    joinDate?: boolean
    endDate?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | Player$teamArgs<ExtArgs>
    stats?: boolean | Player$statsArgs<ExtArgs>
    contracts?: boolean | Player$contractsArgs<ExtArgs>
    notes?: boolean | Player$notesArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    inGameName?: boolean
    username?: boolean
    dateOfBirth?: boolean
    country?: boolean
    teamId?: boolean
    role?: boolean
    rank?: boolean
    joinDate?: boolean
    endDate?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | Player$teamArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    inGameName?: boolean
    username?: boolean
    dateOfBirth?: boolean
    country?: boolean
    teamId?: boolean
    role?: boolean
    rank?: boolean
    joinDate?: boolean
    endDate?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | Player$teamArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    inGameName?: boolean
    username?: boolean
    dateOfBirth?: boolean
    country?: boolean
    teamId?: boolean
    role?: boolean
    rank?: boolean
    joinDate?: boolean
    endDate?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "inGameName" | "username" | "dateOfBirth" | "country" | "teamId" | "role" | "rank" | "joinDate" | "endDate" | "socialLinks" | "createdAt" | "updatedAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | Player$teamArgs<ExtArgs>
    stats?: boolean | Player$statsArgs<ExtArgs>
    contracts?: boolean | Player$contractsArgs<ExtArgs>
    notes?: boolean | Player$notesArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | Player$teamArgs<ExtArgs>
  }
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | Player$teamArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
      stats: Prisma.$PlayerStatsPayload<ExtArgs> | null
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      notes: Prisma.$PlayerNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      inGameName: string
      username: string | null
      dateOfBirth: Date | null
      country: string | null
      teamId: string | null
      role: string | null
      rank: string | null
      joinDate: Date
      endDate: Date | null
      socialLinks: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends Player$teamArgs<ExtArgs> = {}>(args?: Subset<T, Player$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    stats<T extends Player$statsArgs<ExtArgs> = {}>(args?: Subset<T, Player$statsArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    contracts<T extends Player$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Player$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    notes<T extends Player$notesArgs<ExtArgs> = {}>(args?: Subset<T, Player$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */ 
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly firstName: FieldRef<"Player", 'String'>
    readonly lastName: FieldRef<"Player", 'String'>
    readonly inGameName: FieldRef<"Player", 'String'>
    readonly username: FieldRef<"Player", 'String'>
    readonly dateOfBirth: FieldRef<"Player", 'DateTime'>
    readonly country: FieldRef<"Player", 'String'>
    readonly teamId: FieldRef<"Player", 'String'>
    readonly role: FieldRef<"Player", 'String'>
    readonly rank: FieldRef<"Player", 'String'>
    readonly joinDate: FieldRef<"Player", 'DateTime'>
    readonly endDate: FieldRef<"Player", 'DateTime'>
    readonly socialLinks: FieldRef<"Player", 'Json'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.team
   */
  export type Player$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Player.stats
   */
  export type Player$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    where?: PlayerStatsWhereInput
  }

  /**
   * Player.contracts
   */
  export type Player$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Player.notes
   */
  export type Player$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    where?: PlayerNoteWhereInput
    orderBy?: PlayerNoteOrderByWithRelationInput | PlayerNoteOrderByWithRelationInput[]
    cursor?: PlayerNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerNoteScalarFieldEnum | PlayerNoteScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model PlayerStats
   */

  export type AggregatePlayerStats = {
    _count: PlayerStatsCountAggregateOutputType | null
    _min: PlayerStatsMinAggregateOutputType | null
    _max: PlayerStatsMaxAggregateOutputType | null
  }

  export type PlayerStatsMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerStatsMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerStatsCountAggregateOutputType = {
    id: number
    playerId: number
    stats: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerStatsMinAggregateInputType = {
    id?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerStatsMaxAggregateInputType = {
    id?: true
    playerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerStatsCountAggregateInputType = {
    id?: true
    playerId?: true
    stats?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to aggregate.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerStats
    **/
    _count?: true | PlayerStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerStatsMaxAggregateInputType
  }

  export type GetPlayerStatsAggregateType<T extends PlayerStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerStats[P]>
      : GetScalarType<T[P], AggregatePlayerStats[P]>
  }




  export type PlayerStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerStatsWhereInput
    orderBy?: PlayerStatsOrderByWithAggregationInput | PlayerStatsOrderByWithAggregationInput[]
    by: PlayerStatsScalarFieldEnum[] | PlayerStatsScalarFieldEnum
    having?: PlayerStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerStatsCountAggregateInputType | true
    _min?: PlayerStatsMinAggregateInputType
    _max?: PlayerStatsMaxAggregateInputType
  }

  export type PlayerStatsGroupByOutputType = {
    id: string
    playerId: string
    stats: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PlayerStatsCountAggregateOutputType | null
    _min: PlayerStatsMinAggregateOutputType | null
    _max: PlayerStatsMaxAggregateOutputType | null
  }

  type GetPlayerStatsGroupByPayload<T extends PlayerStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerStatsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    stats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    stats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    stats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectScalar = {
    id?: boolean
    playerId?: boolean
    stats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "stats" | "createdAt" | "updatedAt", ExtArgs["result"]["playerStats"]>
  export type PlayerStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayerStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayerStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $PlayerStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerStats"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      stats: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playerStats"]>
    composites: {}
  }

  type PlayerStatsGetPayload<S extends boolean | null | undefined | PlayerStatsDefaultArgs> = $Result.GetResult<Prisma.$PlayerStatsPayload, S>

  type PlayerStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerStatsCountAggregateInputType | true
    }

  export interface PlayerStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerStats'], meta: { name: 'PlayerStats' } }
    /**
     * Find zero or one PlayerStats that matches the filter.
     * @param {PlayerStatsFindUniqueArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerStatsFindUniqueArgs>(args: SelectSubset<T, PlayerStatsFindUniqueArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PlayerStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerStatsFindUniqueOrThrowArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindFirstArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerStatsFindFirstArgs>(args?: SelectSubset<T, PlayerStatsFindFirstArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PlayerStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindFirstOrThrowArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerStats
     * const playerStats = await prisma.playerStats.findMany()
     * 
     * // Get first 10 PlayerStats
     * const playerStats = await prisma.playerStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerStatsFindManyArgs>(args?: SelectSubset<T, PlayerStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PlayerStats.
     * @param {PlayerStatsCreateArgs} args - Arguments to create a PlayerStats.
     * @example
     * // Create one PlayerStats
     * const PlayerStats = await prisma.playerStats.create({
     *   data: {
     *     // ... data to create a PlayerStats
     *   }
     * })
     * 
     */
    create<T extends PlayerStatsCreateArgs>(args: SelectSubset<T, PlayerStatsCreateArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PlayerStats.
     * @param {PlayerStatsCreateManyArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStats = await prisma.playerStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerStatsCreateManyArgs>(args?: SelectSubset<T, PlayerStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerStats and returns the data saved in the database.
     * @param {PlayerStatsCreateManyAndReturnArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStats = await prisma.playerStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerStats and only return the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PlayerStats.
     * @param {PlayerStatsDeleteArgs} args - Arguments to delete one PlayerStats.
     * @example
     * // Delete one PlayerStats
     * const PlayerStats = await prisma.playerStats.delete({
     *   where: {
     *     // ... filter to delete one PlayerStats
     *   }
     * })
     * 
     */
    delete<T extends PlayerStatsDeleteArgs>(args: SelectSubset<T, PlayerStatsDeleteArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PlayerStats.
     * @param {PlayerStatsUpdateArgs} args - Arguments to update one PlayerStats.
     * @example
     * // Update one PlayerStats
     * const playerStats = await prisma.playerStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerStatsUpdateArgs>(args: SelectSubset<T, PlayerStatsUpdateArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PlayerStats.
     * @param {PlayerStatsDeleteManyArgs} args - Arguments to filter PlayerStats to delete.
     * @example
     * // Delete a few PlayerStats
     * const { count } = await prisma.playerStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerStatsDeleteManyArgs>(args?: SelectSubset<T, PlayerStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerStats
     * const playerStats = await prisma.playerStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerStatsUpdateManyArgs>(args: SelectSubset<T, PlayerStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats and returns the data updated in the database.
     * @param {PlayerStatsUpdateManyAndReturnArgs} args - Arguments to update many PlayerStats.
     * @example
     * // Update many PlayerStats
     * const playerStats = await prisma.playerStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerStats and only return the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PlayerStats.
     * @param {PlayerStatsUpsertArgs} args - Arguments to update or create a PlayerStats.
     * @example
     * // Update or create a PlayerStats
     * const playerStats = await prisma.playerStats.upsert({
     *   create: {
     *     // ... data to create a PlayerStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerStats we want to update
     *   }
     * })
     */
    upsert<T extends PlayerStatsUpsertArgs>(args: SelectSubset<T, PlayerStatsUpsertArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsCountArgs} args - Arguments to filter PlayerStats to count.
     * @example
     * // Count the number of PlayerStats
     * const count = await prisma.playerStats.count({
     *   where: {
     *     // ... the filter for the PlayerStats we want to count
     *   }
     * })
    **/
    count<T extends PlayerStatsCountArgs>(
      args?: Subset<T, PlayerStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerStatsAggregateArgs>(args: Subset<T, PlayerStatsAggregateArgs>): Prisma.PrismaPromise<GetPlayerStatsAggregateType<T>>

    /**
     * Group by PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerStatsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerStats model
   */
  readonly fields: PlayerStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerStats model
   */ 
  interface PlayerStatsFieldRefs {
    readonly id: FieldRef<"PlayerStats", 'String'>
    readonly playerId: FieldRef<"PlayerStats", 'String'>
    readonly stats: FieldRef<"PlayerStats", 'Json'>
    readonly createdAt: FieldRef<"PlayerStats", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayerStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerStats findUnique
   */
  export type PlayerStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats findUniqueOrThrow
   */
  export type PlayerStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats findFirst
   */
  export type PlayerStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats findFirstOrThrow
   */
  export type PlayerStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats findMany
   */
  export type PlayerStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats create
   */
  export type PlayerStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerStats.
     */
    data: XOR<PlayerStatsCreateInput, PlayerStatsUncheckedCreateInput>
  }

  /**
   * PlayerStats createMany
   */
  export type PlayerStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatsCreateManyInput | PlayerStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerStats createManyAndReturn
   */
  export type PlayerStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatsCreateManyInput | PlayerStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerStats update
   */
  export type PlayerStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerStats.
     */
    data: XOR<PlayerStatsUpdateInput, PlayerStatsUncheckedUpdateInput>
    /**
     * Choose, which PlayerStats to update.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats updateMany
   */
  export type PlayerStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatsUpdateManyMutationInput, PlayerStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
  }

  /**
   * PlayerStats updateManyAndReturn
   */
  export type PlayerStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatsUpdateManyMutationInput, PlayerStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerStats upsert
   */
  export type PlayerStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerStats to update in case it exists.
     */
    where: PlayerStatsWhereUniqueInput
    /**
     * In case the PlayerStats found by the `where` argument doesn't exist, create a new PlayerStats with this data.
     */
    create: XOR<PlayerStatsCreateInput, PlayerStatsUncheckedCreateInput>
    /**
     * In case the PlayerStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerStatsUpdateInput, PlayerStatsUncheckedUpdateInput>
  }

  /**
   * PlayerStats delete
   */
  export type PlayerStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter which PlayerStats to delete.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats deleteMany
   */
  export type PlayerStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to delete
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to delete.
     */
    limit?: number
  }

  /**
   * PlayerStats without action
   */
  export type PlayerStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    startDate: Date | null
    endDate: Date | null
    terms: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    startDate: Date | null
    endDate: Date | null
    terms: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    playerId: number
    startDate: number
    endDate: number
    terms: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractMinAggregateInputType = {
    id?: true
    playerId?: true
    startDate?: true
    endDate?: true
    terms?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    playerId?: true
    startDate?: true
    endDate?: true
    terms?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    playerId?: true
    startDate?: true
    endDate?: true
    terms?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    playerId: string
    startDate: Date
    endDate: Date
    terms: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    startDate?: boolean
    endDate?: boolean
    terms?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    startDate?: boolean
    endDate?: boolean
    terms?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    startDate?: boolean
    endDate?: boolean
    terms?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    playerId?: boolean
    startDate?: boolean
    endDate?: boolean
    terms?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "startDate" | "endDate" | "terms" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      startDate: Date
      endDate: Date
      terms: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly playerId: FieldRef<"Contract", 'String'>
    readonly startDate: FieldRef<"Contract", 'DateTime'>
    readonly endDate: FieldRef<"Contract", 'DateTime'>
    readonly terms: FieldRef<"Contract", 'String'>
    readonly isActive: FieldRef<"Contract", 'Boolean'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model PlayerNote
   */

  export type AggregatePlayerNote = {
    _count: PlayerNoteCountAggregateOutputType | null
    _min: PlayerNoteMinAggregateOutputType | null
    _max: PlayerNoteMaxAggregateOutputType | null
  }

  export type PlayerNoteMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    authorId: string | null
    content: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerNoteMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    authorId: string | null
    content: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerNoteCountAggregateOutputType = {
    id: number
    playerId: number
    authorId: number
    content: number
    isPrivate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerNoteMinAggregateInputType = {
    id?: true
    playerId?: true
    authorId?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerNoteMaxAggregateInputType = {
    id?: true
    playerId?: true
    authorId?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerNoteCountAggregateInputType = {
    id?: true
    playerId?: true
    authorId?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerNote to aggregate.
     */
    where?: PlayerNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerNotes to fetch.
     */
    orderBy?: PlayerNoteOrderByWithRelationInput | PlayerNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerNotes
    **/
    _count?: true | PlayerNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerNoteMaxAggregateInputType
  }

  export type GetPlayerNoteAggregateType<T extends PlayerNoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerNote[P]>
      : GetScalarType<T[P], AggregatePlayerNote[P]>
  }




  export type PlayerNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerNoteWhereInput
    orderBy?: PlayerNoteOrderByWithAggregationInput | PlayerNoteOrderByWithAggregationInput[]
    by: PlayerNoteScalarFieldEnum[] | PlayerNoteScalarFieldEnum
    having?: PlayerNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerNoteCountAggregateInputType | true
    _min?: PlayerNoteMinAggregateInputType
    _max?: PlayerNoteMaxAggregateInputType
  }

  export type PlayerNoteGroupByOutputType = {
    id: string
    playerId: string
    authorId: string
    content: string
    isPrivate: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlayerNoteCountAggregateOutputType | null
    _min: PlayerNoteMinAggregateOutputType | null
    _max: PlayerNoteMaxAggregateOutputType | null
  }

  type GetPlayerNoteGroupByPayload<T extends PlayerNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerNoteGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerNoteGroupByOutputType[P]>
        }
      >
    >


  export type PlayerNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    authorId?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerNote"]>

  export type PlayerNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    authorId?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerNote"]>

  export type PlayerNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    authorId?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerNote"]>

  export type PlayerNoteSelectScalar = {
    id?: boolean
    playerId?: boolean
    authorId?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "authorId" | "content" | "isPrivate" | "createdAt" | "updatedAt", ExtArgs["result"]["playerNote"]>
  export type PlayerNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayerNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayerNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayerNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerNote"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      authorId: string
      content: string
      isPrivate: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playerNote"]>
    composites: {}
  }

  type PlayerNoteGetPayload<S extends boolean | null | undefined | PlayerNoteDefaultArgs> = $Result.GetResult<Prisma.$PlayerNotePayload, S>

  type PlayerNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerNoteCountAggregateInputType | true
    }

  export interface PlayerNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerNote'], meta: { name: 'PlayerNote' } }
    /**
     * Find zero or one PlayerNote that matches the filter.
     * @param {PlayerNoteFindUniqueArgs} args - Arguments to find a PlayerNote
     * @example
     * // Get one PlayerNote
     * const playerNote = await prisma.playerNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerNoteFindUniqueArgs>(args: SelectSubset<T, PlayerNoteFindUniqueArgs<ExtArgs>>): Prisma__PlayerNoteClient<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PlayerNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerNoteFindUniqueOrThrowArgs} args - Arguments to find a PlayerNote
     * @example
     * // Get one PlayerNote
     * const playerNote = await prisma.playerNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerNoteClient<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PlayerNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerNoteFindFirstArgs} args - Arguments to find a PlayerNote
     * @example
     * // Get one PlayerNote
     * const playerNote = await prisma.playerNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerNoteFindFirstArgs>(args?: SelectSubset<T, PlayerNoteFindFirstArgs<ExtArgs>>): Prisma__PlayerNoteClient<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PlayerNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerNoteFindFirstOrThrowArgs} args - Arguments to find a PlayerNote
     * @example
     * // Get one PlayerNote
     * const playerNote = await prisma.playerNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerNoteClient<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PlayerNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerNotes
     * const playerNotes = await prisma.playerNote.findMany()
     * 
     * // Get first 10 PlayerNotes
     * const playerNotes = await prisma.playerNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerNoteWithIdOnly = await prisma.playerNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerNoteFindManyArgs>(args?: SelectSubset<T, PlayerNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PlayerNote.
     * @param {PlayerNoteCreateArgs} args - Arguments to create a PlayerNote.
     * @example
     * // Create one PlayerNote
     * const PlayerNote = await prisma.playerNote.create({
     *   data: {
     *     // ... data to create a PlayerNote
     *   }
     * })
     * 
     */
    create<T extends PlayerNoteCreateArgs>(args: SelectSubset<T, PlayerNoteCreateArgs<ExtArgs>>): Prisma__PlayerNoteClient<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PlayerNotes.
     * @param {PlayerNoteCreateManyArgs} args - Arguments to create many PlayerNotes.
     * @example
     * // Create many PlayerNotes
     * const playerNote = await prisma.playerNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerNoteCreateManyArgs>(args?: SelectSubset<T, PlayerNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerNotes and returns the data saved in the database.
     * @param {PlayerNoteCreateManyAndReturnArgs} args - Arguments to create many PlayerNotes.
     * @example
     * // Create many PlayerNotes
     * const playerNote = await prisma.playerNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerNotes and only return the `id`
     * const playerNoteWithIdOnly = await prisma.playerNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PlayerNote.
     * @param {PlayerNoteDeleteArgs} args - Arguments to delete one PlayerNote.
     * @example
     * // Delete one PlayerNote
     * const PlayerNote = await prisma.playerNote.delete({
     *   where: {
     *     // ... filter to delete one PlayerNote
     *   }
     * })
     * 
     */
    delete<T extends PlayerNoteDeleteArgs>(args: SelectSubset<T, PlayerNoteDeleteArgs<ExtArgs>>): Prisma__PlayerNoteClient<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PlayerNote.
     * @param {PlayerNoteUpdateArgs} args - Arguments to update one PlayerNote.
     * @example
     * // Update one PlayerNote
     * const playerNote = await prisma.playerNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerNoteUpdateArgs>(args: SelectSubset<T, PlayerNoteUpdateArgs<ExtArgs>>): Prisma__PlayerNoteClient<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PlayerNotes.
     * @param {PlayerNoteDeleteManyArgs} args - Arguments to filter PlayerNotes to delete.
     * @example
     * // Delete a few PlayerNotes
     * const { count } = await prisma.playerNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerNoteDeleteManyArgs>(args?: SelectSubset<T, PlayerNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerNotes
     * const playerNote = await prisma.playerNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerNoteUpdateManyArgs>(args: SelectSubset<T, PlayerNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerNotes and returns the data updated in the database.
     * @param {PlayerNoteUpdateManyAndReturnArgs} args - Arguments to update many PlayerNotes.
     * @example
     * // Update many PlayerNotes
     * const playerNote = await prisma.playerNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerNotes and only return the `id`
     * const playerNoteWithIdOnly = await prisma.playerNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PlayerNote.
     * @param {PlayerNoteUpsertArgs} args - Arguments to update or create a PlayerNote.
     * @example
     * // Update or create a PlayerNote
     * const playerNote = await prisma.playerNote.upsert({
     *   create: {
     *     // ... data to create a PlayerNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerNote we want to update
     *   }
     * })
     */
    upsert<T extends PlayerNoteUpsertArgs>(args: SelectSubset<T, PlayerNoteUpsertArgs<ExtArgs>>): Prisma__PlayerNoteClient<$Result.GetResult<Prisma.$PlayerNotePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PlayerNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerNoteCountArgs} args - Arguments to filter PlayerNotes to count.
     * @example
     * // Count the number of PlayerNotes
     * const count = await prisma.playerNote.count({
     *   where: {
     *     // ... the filter for the PlayerNotes we want to count
     *   }
     * })
    **/
    count<T extends PlayerNoteCountArgs>(
      args?: Subset<T, PlayerNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerNoteAggregateArgs>(args: Subset<T, PlayerNoteAggregateArgs>): Prisma.PrismaPromise<GetPlayerNoteAggregateType<T>>

    /**
     * Group by PlayerNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerNoteGroupByArgs['orderBy'] }
        : { orderBy?: PlayerNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerNote model
   */
  readonly fields: PlayerNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerNote model
   */ 
  interface PlayerNoteFieldRefs {
    readonly id: FieldRef<"PlayerNote", 'String'>
    readonly playerId: FieldRef<"PlayerNote", 'String'>
    readonly authorId: FieldRef<"PlayerNote", 'String'>
    readonly content: FieldRef<"PlayerNote", 'String'>
    readonly isPrivate: FieldRef<"PlayerNote", 'Boolean'>
    readonly createdAt: FieldRef<"PlayerNote", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayerNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerNote findUnique
   */
  export type PlayerNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * Filter, which PlayerNote to fetch.
     */
    where: PlayerNoteWhereUniqueInput
  }

  /**
   * PlayerNote findUniqueOrThrow
   */
  export type PlayerNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * Filter, which PlayerNote to fetch.
     */
    where: PlayerNoteWhereUniqueInput
  }

  /**
   * PlayerNote findFirst
   */
  export type PlayerNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * Filter, which PlayerNote to fetch.
     */
    where?: PlayerNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerNotes to fetch.
     */
    orderBy?: PlayerNoteOrderByWithRelationInput | PlayerNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerNotes.
     */
    cursor?: PlayerNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerNotes.
     */
    distinct?: PlayerNoteScalarFieldEnum | PlayerNoteScalarFieldEnum[]
  }

  /**
   * PlayerNote findFirstOrThrow
   */
  export type PlayerNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * Filter, which PlayerNote to fetch.
     */
    where?: PlayerNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerNotes to fetch.
     */
    orderBy?: PlayerNoteOrderByWithRelationInput | PlayerNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerNotes.
     */
    cursor?: PlayerNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerNotes.
     */
    distinct?: PlayerNoteScalarFieldEnum | PlayerNoteScalarFieldEnum[]
  }

  /**
   * PlayerNote findMany
   */
  export type PlayerNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * Filter, which PlayerNotes to fetch.
     */
    where?: PlayerNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerNotes to fetch.
     */
    orderBy?: PlayerNoteOrderByWithRelationInput | PlayerNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerNotes.
     */
    cursor?: PlayerNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerNotes.
     */
    skip?: number
    distinct?: PlayerNoteScalarFieldEnum | PlayerNoteScalarFieldEnum[]
  }

  /**
   * PlayerNote create
   */
  export type PlayerNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerNote.
     */
    data: XOR<PlayerNoteCreateInput, PlayerNoteUncheckedCreateInput>
  }

  /**
   * PlayerNote createMany
   */
  export type PlayerNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerNotes.
     */
    data: PlayerNoteCreateManyInput | PlayerNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerNote createManyAndReturn
   */
  export type PlayerNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerNotes.
     */
    data: PlayerNoteCreateManyInput | PlayerNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerNote update
   */
  export type PlayerNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerNote.
     */
    data: XOR<PlayerNoteUpdateInput, PlayerNoteUncheckedUpdateInput>
    /**
     * Choose, which PlayerNote to update.
     */
    where: PlayerNoteWhereUniqueInput
  }

  /**
   * PlayerNote updateMany
   */
  export type PlayerNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerNotes.
     */
    data: XOR<PlayerNoteUpdateManyMutationInput, PlayerNoteUncheckedUpdateManyInput>
    /**
     * Filter which PlayerNotes to update
     */
    where?: PlayerNoteWhereInput
    /**
     * Limit how many PlayerNotes to update.
     */
    limit?: number
  }

  /**
   * PlayerNote updateManyAndReturn
   */
  export type PlayerNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * The data used to update PlayerNotes.
     */
    data: XOR<PlayerNoteUpdateManyMutationInput, PlayerNoteUncheckedUpdateManyInput>
    /**
     * Filter which PlayerNotes to update
     */
    where?: PlayerNoteWhereInput
    /**
     * Limit how many PlayerNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerNote upsert
   */
  export type PlayerNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerNote to update in case it exists.
     */
    where: PlayerNoteWhereUniqueInput
    /**
     * In case the PlayerNote found by the `where` argument doesn't exist, create a new PlayerNote with this data.
     */
    create: XOR<PlayerNoteCreateInput, PlayerNoteUncheckedCreateInput>
    /**
     * In case the PlayerNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerNoteUpdateInput, PlayerNoteUncheckedUpdateInput>
  }

  /**
   * PlayerNote delete
   */
  export type PlayerNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
    /**
     * Filter which PlayerNote to delete.
     */
    where: PlayerNoteWhereUniqueInput
  }

  /**
   * PlayerNote deleteMany
   */
  export type PlayerNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerNotes to delete
     */
    where?: PlayerNoteWhereInput
    /**
     * Limit how many PlayerNotes to delete.
     */
    limit?: number
  }

  /**
   * PlayerNote without action
   */
  export type PlayerNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerNote
     */
    select?: PlayerNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerNote
     */
    omit?: PlayerNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerNoteInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    type: $Enums.MatchType | null
    teamId: string | null
    opponent: string | null
    date: Date | null
    result: string | null
    notes: string | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MatchType | null
    teamId: string | null
    opponent: string | null
    date: Date | null
    result: string | null
    notes: string | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    type: number
    teamId: number
    opponent: number
    date: number
    result: number
    notes: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    type?: true
    teamId?: true
    opponent?: true
    date?: true
    result?: true
    notes?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    type?: true
    teamId?: true
    opponent?: true
    date?: true
    result?: true
    notes?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    type?: true
    teamId?: true
    opponent?: true
    date?: true
    result?: true
    notes?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    type: $Enums.MatchType
    teamId: string
    opponent: string
    date: Date
    result: string | null
    notes: string | null
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    teamId?: boolean
    opponent?: boolean
    date?: boolean
    result?: boolean
    notes?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    teamId?: boolean
    opponent?: boolean
    date?: boolean
    result?: boolean
    notes?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    teamId?: boolean
    opponent?: boolean
    date?: boolean
    result?: boolean
    notes?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    type?: boolean
    teamId?: boolean
    opponent?: boolean
    date?: boolean
    result?: boolean
    notes?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "teamId" | "opponent" | "date" | "result" | "notes", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MatchType
      teamId: string
      opponent: string
      date: Date
      result: string | null
      notes: string | null
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */ 
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly type: FieldRef<"Match", 'MatchType'>
    readonly teamId: FieldRef<"Match", 'String'>
    readonly opponent: FieldRef<"Match", 'String'>
    readonly date: FieldRef<"Match", 'DateTime'>
    readonly result: FieldRef<"Match", 'String'>
    readonly notes: FieldRef<"Match", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    priority: $Enums.Priority | null
    createdAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    priority: $Enums.Priority | null
    createdAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    priority: number
    createdAt: number
    expiresAt: number
    isActive: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    priority?: true
    createdAt?: true
    expiresAt?: true
    isActive?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    priority?: true
    createdAt?: true
    expiresAt?: true
    isActive?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    priority?: true
    createdAt?: true
    expiresAt?: true
    isActive?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    priority: $Enums.Priority
    createdAt: Date
    expiresAt: Date | null
    isActive: boolean
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    priority?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    priority?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    priority?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    priority?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "priority" | "createdAt" | "expiresAt" | "isActive", ExtArgs["result"]["announcement"]>

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      priority: $Enums.Priority
      createdAt: Date
      expiresAt: Date | null
      isActive: boolean
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */ 
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly priority: FieldRef<"Announcement", 'Priority'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly expiresAt: FieldRef<"Announcement", 'DateTime'>
    readonly isActive: FieldRef<"Announcement", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    createdAt: number
    updatedAt: number
    publishedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    content: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | News$tagsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "createdAt" | "updatedAt" | "publishedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | News$tagsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      authorId: string
      createdAt: Date
      updatedAt: Date
      publishedAt: Date | null
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    tags<T extends News$tagsArgs<ExtArgs> = {}>(args?: Subset<T, News$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the News model
   */ 
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly authorId: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
    readonly publishedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.tags
   */
  export type News$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    news?: boolean | Tag$newsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Tag$newsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends Tag$newsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.news
   */
  export type Tag$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    status: 'status',
    invitationToken: 'invitationToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    creatorId: 'creatorId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    message: 'message',
    metadata: 'metadata',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gameId: 'gameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameManagerScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameManagerScalarFieldEnum = (typeof GameManagerScalarFieldEnum)[keyof typeof GameManagerScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    inGameName: 'inGameName',
    username: 'username',
    dateOfBirth: 'dateOfBirth',
    country: 'country',
    teamId: 'teamId',
    role: 'role',
    rank: 'rank',
    joinDate: 'joinDate',
    endDate: 'endDate',
    socialLinks: 'socialLinks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const PlayerStatsScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    stats: 'stats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerStatsScalarFieldEnum = (typeof PlayerStatsScalarFieldEnum)[keyof typeof PlayerStatsScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    startDate: 'startDate',
    endDate: 'endDate',
    terms: 'terms',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const PlayerNoteScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    authorId: 'authorId',
    content: 'content',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerNoteScalarFieldEnum = (typeof PlayerNoteScalarFieldEnum)[keyof typeof PlayerNoteScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    type: 'type',
    teamId: 'teamId',
    opponent: 'opponent',
    date: 'date',
    result: 'result',
    notes: 'notes'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    priority: 'priority',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    isActive: 'isActive'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MatchType'
   */
  export type EnumMatchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchType'>
    


  /**
   * Reference to a field of type 'MatchType[]'
   */
  export type ListEnumMatchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    invitationToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    news?: NewsListRelationFilter
    tasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    activities?: ActivityListRelationFilter
    teams?: TeamListRelationFilter
    managedGames?: GameManagerListRelationFilter
    playerNotes?: PlayerNoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    invitationToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    news?: NewsOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    createdTasks?: TaskOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    managedGames?: GameManagerOrderByRelationAggregateInput
    playerNotes?: PlayerNoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    invitationToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    news?: NewsListRelationFilter
    tasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    activities?: ActivityListRelationFilter
    teams?: TeamListRelationFilter
    managedGames?: GameManagerListRelationFilter
    playerNotes?: PlayerNoteListRelationFilter
  }, "id" | "username" | "invitationToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    invitationToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    invitationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    creatorId?: StringFilter<"Task"> | string
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    creatorId?: SortOrder
    assignedTo?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    creatorId?: StringFilter<"Task"> | string
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    creatorId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    userId?: StringWithAggregatesFilter<"Task"> | string
    creatorId?: StringWithAggregatesFilter<"Task"> | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    message?: StringFilter<"Activity"> | string
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    userId?: StringFilter<"Activity"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    message?: StringFilter<"Activity"> | string
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    userId?: StringFilter<"Activity"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    type?: EnumActivityTypeWithAggregatesFilter<"Activity"> | $Enums.ActivityType
    message?: StringWithAggregatesFilter<"Activity"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Activity">
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    userId?: StringWithAggregatesFilter<"Activity"> | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    gameId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    managers?: UserListRelationFilter
    players?: PlayerListRelationFilter
    matches?: MatchListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game?: GameOrderByWithRelationInput
    managers?: UserOrderByRelationAggregateInput
    players?: PlayerOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    gameId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    managers?: UserListRelationFilter
    players?: PlayerListRelationFilter
    matches?: MatchListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    gameId?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    name?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    teams?: TeamListRelationFilter
    managers?: GameManagerListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teams?: TeamOrderByRelationAggregateInput
    managers?: GameManagerOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    teams?: TeamListRelationFilter
    managers?: GameManagerListRelationFilter
  }, "id" | "name">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    name?: StringWithAggregatesFilter<"Game"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type GameManagerWhereInput = {
    AND?: GameManagerWhereInput | GameManagerWhereInput[]
    OR?: GameManagerWhereInput[]
    NOT?: GameManagerWhereInput | GameManagerWhereInput[]
    id?: StringFilter<"GameManager"> | string
    gameId?: StringFilter<"GameManager"> | string
    userId?: StringFilter<"GameManager"> | string
    createdAt?: DateTimeFilter<"GameManager"> | Date | string
    updatedAt?: DateTimeFilter<"GameManager"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GameManagerOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game?: GameOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GameManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId_userId?: GameManagerGameIdUserIdCompoundUniqueInput
    AND?: GameManagerWhereInput | GameManagerWhereInput[]
    OR?: GameManagerWhereInput[]
    NOT?: GameManagerWhereInput | GameManagerWhereInput[]
    gameId?: StringFilter<"GameManager"> | string
    userId?: StringFilter<"GameManager"> | string
    createdAt?: DateTimeFilter<"GameManager"> | Date | string
    updatedAt?: DateTimeFilter<"GameManager"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "gameId_userId">

  export type GameManagerOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameManagerCountOrderByAggregateInput
    _max?: GameManagerMaxOrderByAggregateInput
    _min?: GameManagerMinOrderByAggregateInput
  }

  export type GameManagerScalarWhereWithAggregatesInput = {
    AND?: GameManagerScalarWhereWithAggregatesInput | GameManagerScalarWhereWithAggregatesInput[]
    OR?: GameManagerScalarWhereWithAggregatesInput[]
    NOT?: GameManagerScalarWhereWithAggregatesInput | GameManagerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameManager"> | string
    gameId?: StringWithAggregatesFilter<"GameManager"> | string
    userId?: StringWithAggregatesFilter<"GameManager"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GameManager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameManager"> | Date | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    firstName?: StringFilter<"Player"> | string
    lastName?: StringFilter<"Player"> | string
    inGameName?: StringFilter<"Player"> | string
    username?: StringNullableFilter<"Player"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Player"> | Date | string | null
    country?: StringNullableFilter<"Player"> | string | null
    teamId?: StringNullableFilter<"Player"> | string | null
    role?: StringNullableFilter<"Player"> | string | null
    rank?: StringNullableFilter<"Player"> | string | null
    joinDate?: DateTimeFilter<"Player"> | Date | string
    endDate?: DateTimeNullableFilter<"Player"> | Date | string | null
    socialLinks?: JsonNullableFilter<"Player">
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    stats?: XOR<PlayerStatsNullableScalarRelationFilter, PlayerStatsWhereInput> | null
    contracts?: ContractListRelationFilter
    notes?: PlayerNoteListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    inGameName?: SortOrder
    username?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    joinDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    stats?: PlayerStatsOrderByWithRelationInput
    contracts?: ContractOrderByRelationAggregateInput
    notes?: PlayerNoteOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    firstName?: StringFilter<"Player"> | string
    lastName?: StringFilter<"Player"> | string
    inGameName?: StringFilter<"Player"> | string
    dateOfBirth?: DateTimeNullableFilter<"Player"> | Date | string | null
    country?: StringNullableFilter<"Player"> | string | null
    teamId?: StringNullableFilter<"Player"> | string | null
    role?: StringNullableFilter<"Player"> | string | null
    rank?: StringNullableFilter<"Player"> | string | null
    joinDate?: DateTimeFilter<"Player"> | Date | string
    endDate?: DateTimeNullableFilter<"Player"> | Date | string | null
    socialLinks?: JsonNullableFilter<"Player">
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    stats?: XOR<PlayerStatsNullableScalarRelationFilter, PlayerStatsWhereInput> | null
    contracts?: ContractListRelationFilter
    notes?: PlayerNoteListRelationFilter
  }, "id" | "username">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    inGameName?: SortOrder
    username?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    joinDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    firstName?: StringWithAggregatesFilter<"Player"> | string
    lastName?: StringWithAggregatesFilter<"Player"> | string
    inGameName?: StringWithAggregatesFilter<"Player"> | string
    username?: StringNullableWithAggregatesFilter<"Player"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Player"> | Date | string | null
    country?: StringNullableWithAggregatesFilter<"Player"> | string | null
    teamId?: StringNullableWithAggregatesFilter<"Player"> | string | null
    role?: StringNullableWithAggregatesFilter<"Player"> | string | null
    rank?: StringNullableWithAggregatesFilter<"Player"> | string | null
    joinDate?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Player"> | Date | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"Player">
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type PlayerStatsWhereInput = {
    AND?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    OR?: PlayerStatsWhereInput[]
    NOT?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    id?: StringFilter<"PlayerStats"> | string
    playerId?: StringFilter<"PlayerStats"> | string
    stats?: JsonFilter<"PlayerStats">
    createdAt?: DateTimeFilter<"PlayerStats"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerStats"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type PlayerStatsOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    stats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type PlayerStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId?: string
    AND?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    OR?: PlayerStatsWhereInput[]
    NOT?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    stats?: JsonFilter<"PlayerStats">
    createdAt?: DateTimeFilter<"PlayerStats"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerStats"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "playerId">

  export type PlayerStatsOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    stats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerStatsCountOrderByAggregateInput
    _max?: PlayerStatsMaxOrderByAggregateInput
    _min?: PlayerStatsMinOrderByAggregateInput
  }

  export type PlayerStatsScalarWhereWithAggregatesInput = {
    AND?: PlayerStatsScalarWhereWithAggregatesInput | PlayerStatsScalarWhereWithAggregatesInput[]
    OR?: PlayerStatsScalarWhereWithAggregatesInput[]
    NOT?: PlayerStatsScalarWhereWithAggregatesInput | PlayerStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerStats"> | string
    playerId?: StringWithAggregatesFilter<"PlayerStats"> | string
    stats?: JsonWithAggregatesFilter<"PlayerStats">
    createdAt?: DateTimeWithAggregatesFilter<"PlayerStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayerStats"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    playerId?: StringFilter<"Contract"> | string
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    terms?: StringNullableFilter<"Contract"> | string | null
    isActive?: BoolFilter<"Contract"> | boolean
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    terms?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    playerId?: StringFilter<"Contract"> | string
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    terms?: StringNullableFilter<"Contract"> | string | null
    isActive?: BoolFilter<"Contract"> | boolean
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    terms?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    playerId?: StringWithAggregatesFilter<"Contract"> | string
    startDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    terms?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    isActive?: BoolWithAggregatesFilter<"Contract"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type PlayerNoteWhereInput = {
    AND?: PlayerNoteWhereInput | PlayerNoteWhereInput[]
    OR?: PlayerNoteWhereInput[]
    NOT?: PlayerNoteWhereInput | PlayerNoteWhereInput[]
    id?: StringFilter<"PlayerNote"> | string
    playerId?: StringFilter<"PlayerNote"> | string
    authorId?: StringFilter<"PlayerNote"> | string
    content?: StringFilter<"PlayerNote"> | string
    isPrivate?: BoolFilter<"PlayerNote"> | boolean
    createdAt?: DateTimeFilter<"PlayerNote"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerNote"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayerNoteOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type PlayerNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerNoteWhereInput | PlayerNoteWhereInput[]
    OR?: PlayerNoteWhereInput[]
    NOT?: PlayerNoteWhereInput | PlayerNoteWhereInput[]
    playerId?: StringFilter<"PlayerNote"> | string
    authorId?: StringFilter<"PlayerNote"> | string
    content?: StringFilter<"PlayerNote"> | string
    isPrivate?: BoolFilter<"PlayerNote"> | boolean
    createdAt?: DateTimeFilter<"PlayerNote"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerNote"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlayerNoteOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerNoteCountOrderByAggregateInput
    _max?: PlayerNoteMaxOrderByAggregateInput
    _min?: PlayerNoteMinOrderByAggregateInput
  }

  export type PlayerNoteScalarWhereWithAggregatesInput = {
    AND?: PlayerNoteScalarWhereWithAggregatesInput | PlayerNoteScalarWhereWithAggregatesInput[]
    OR?: PlayerNoteScalarWhereWithAggregatesInput[]
    NOT?: PlayerNoteScalarWhereWithAggregatesInput | PlayerNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerNote"> | string
    playerId?: StringWithAggregatesFilter<"PlayerNote"> | string
    authorId?: StringWithAggregatesFilter<"PlayerNote"> | string
    content?: StringWithAggregatesFilter<"PlayerNote"> | string
    isPrivate?: BoolWithAggregatesFilter<"PlayerNote"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PlayerNote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayerNote"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    type?: EnumMatchTypeFilter<"Match"> | $Enums.MatchType
    teamId?: StringFilter<"Match"> | string
    opponent?: StringFilter<"Match"> | string
    date?: DateTimeFilter<"Match"> | Date | string
    result?: StringNullableFilter<"Match"> | string | null
    notes?: StringNullableFilter<"Match"> | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    opponent?: SortOrder
    date?: SortOrder
    result?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    type?: EnumMatchTypeFilter<"Match"> | $Enums.MatchType
    teamId?: StringFilter<"Match"> | string
    opponent?: StringFilter<"Match"> | string
    date?: DateTimeFilter<"Match"> | Date | string
    result?: StringNullableFilter<"Match"> | string | null
    notes?: StringNullableFilter<"Match"> | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    opponent?: SortOrder
    date?: SortOrder
    result?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    type?: EnumMatchTypeWithAggregatesFilter<"Match"> | $Enums.MatchType
    teamId?: StringWithAggregatesFilter<"Match"> | string
    opponent?: StringWithAggregatesFilter<"Match"> | string
    date?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    result?: StringNullableWithAggregatesFilter<"Match"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Match"> | string | null
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    priority?: EnumPriorityFilter<"Announcement"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    priority?: EnumPriorityFilter<"Announcement"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    priority?: EnumPriorityWithAggregatesFilter<"Announcement"> | $Enums.Priority
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Announcement"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Announcement"> | boolean
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    authorId?: StringWithAggregatesFilter<"News"> | string
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    news?: NewsListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    news?: NewsOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    news?: NewsListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerUncheckedCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUncheckedUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutTasksInput
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    creatorId: string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    creatorId: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateInput = {
    id?: string
    type: $Enums.ActivityType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    type: $Enums.ActivityType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateManyInput = {
    id?: string
    type: $Enums.ActivityType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutTeamsInput
    managers?: UserCreateNestedManyWithoutTeamsInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    matches?: MatchCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: UserUncheckedCreateNestedManyWithoutTeamsInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    matches?: MatchUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutTeamsNestedInput
    managers?: UserUpdateManyWithoutTeamsNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    matches?: MatchUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutGameInput
    managers?: GameManagerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutGameInput
    managers?: GameManagerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutGameNestedInput
    managers?: GameManagerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutGameNestedInput
    managers?: GameManagerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameManagerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutManagersInput
    user: UserCreateNestedOneWithoutManagedGamesInput
  }

  export type GameManagerUncheckedCreateInput = {
    id?: string
    gameId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutManagersNestedInput
    user?: UserUpdateOneRequiredWithoutManagedGamesNestedInput
  }

  export type GameManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameManagerCreateManyInput = {
    id?: string
    gameId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameManagerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameManagerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutPlayersInput
    stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    contracts?: ContractCreateNestedManyWithoutPlayerInput
    notes?: PlayerNoteCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    teamId?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    contracts?: ContractUncheckedCreateNestedManyWithoutPlayerInput
    notes?: PlayerNoteUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutPlayersNestedInput
    stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    contracts?: ContractUpdateManyWithoutPlayerNestedInput
    notes?: PlayerNoteUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutPlayerNestedInput
    notes?: PlayerNoteUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    teamId?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsCreateInput = {
    id?: string
    stats: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutStatsInput
  }

  export type PlayerStatsUncheckedCreateInput = {
    id?: string
    playerId: string
    stats: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutStatsNestedInput
  }

  export type PlayerStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    stats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsCreateManyInput = {
    id?: string
    playerId: string
    stats: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    stats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    playerId: string
    startDate: Date | string
    endDate: Date | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyInput = {
    id?: string
    playerId: string
    startDate: Date | string
    endDate: Date | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerNoteCreateInput = {
    id?: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutNotesInput
    author: UserCreateNestedOneWithoutPlayerNotesInput
  }

  export type PlayerNoteUncheckedCreateInput = {
    id?: string
    playerId: string
    authorId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutNotesNestedInput
    author?: UserUpdateOneRequiredWithoutPlayerNotesNestedInput
  }

  export type PlayerNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerNoteCreateManyInput = {
    id?: string
    playerId: string
    authorId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    type: $Enums.MatchType
    opponent: string
    date: Date | string
    result?: string | null
    notes?: string | null
    team: TeamCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    type: $Enums.MatchType
    teamId: string
    opponent: string
    date: Date | string
    result?: string | null
    notes?: string | null
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    opponent?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    teamId?: StringFieldUpdateOperationsInput | string
    opponent?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchCreateManyInput = {
    id?: string
    type: $Enums.MatchType
    teamId: string
    opponent: string
    date: Date | string
    result?: string | null
    notes?: string | null
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    opponent?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    teamId?: StringFieldUpdateOperationsInput | string
    opponent?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    priority?: $Enums.Priority
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    priority?: $Enums.Priority
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    priority?: $Enums.Priority
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author: UserCreateNestedOneWithoutNewsInput
    tags?: TagCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    tags?: TagUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    tags?: TagUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TagUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    news?: NewsCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    news?: NewsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    news?: NewsUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    news?: NewsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type GameManagerListRelationFilter = {
    every?: GameManagerWhereInput
    some?: GameManagerWhereInput
    none?: GameManagerWhereInput
  }

  export type PlayerNoteListRelationFilter = {
    every?: PlayerNoteWhereInput
    some?: PlayerNoteWhereInput
    none?: PlayerNoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameManagerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    invitationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    invitationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    invitationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    creatorId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    creatorId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameManagerGameIdUserIdCompoundUniqueInput = {
    gameId: string
    userId: string
  }

  export type GameManagerCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameManagerMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type PlayerStatsNullableScalarRelationFilter = {
    is?: PlayerStatsWhereInput | null
    isNot?: PlayerStatsWhereInput | null
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    inGameName?: SortOrder
    username?: SortOrder
    dateOfBirth?: SortOrder
    country?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    rank?: SortOrder
    joinDate?: SortOrder
    endDate?: SortOrder
    socialLinks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    inGameName?: SortOrder
    username?: SortOrder
    dateOfBirth?: SortOrder
    country?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    rank?: SortOrder
    joinDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    inGameName?: SortOrder
    username?: SortOrder
    dateOfBirth?: SortOrder
    country?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    rank?: SortOrder
    joinDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type PlayerStatsCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    stats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerStatsMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    terms?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    terms?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    terms?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PlayerNoteCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerNoteMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMatchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchType | EnumMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTypeFilter<$PrismaModel> | $Enums.MatchType
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    opponent?: SortOrder
    date?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    opponent?: SortOrder
    date?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    opponent?: SortOrder
    date?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type EnumMatchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchType | EnumMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTypeWithAggregatesFilter<$PrismaModel> | $Enums.MatchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchTypeFilter<$PrismaModel>
    _max?: NestedEnumMatchTypeFilter<$PrismaModel>
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type NewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutManagersInput = {
    create?: XOR<TeamCreateWithoutManagersInput, TeamUncheckedCreateWithoutManagersInput> | TeamCreateWithoutManagersInput[] | TeamUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutManagersInput | TeamCreateOrConnectWithoutManagersInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type GameManagerCreateNestedManyWithoutUserInput = {
    create?: XOR<GameManagerCreateWithoutUserInput, GameManagerUncheckedCreateWithoutUserInput> | GameManagerCreateWithoutUserInput[] | GameManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameManagerCreateOrConnectWithoutUserInput | GameManagerCreateOrConnectWithoutUserInput[]
    createMany?: GameManagerCreateManyUserInputEnvelope
    connect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
  }

  export type PlayerNoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PlayerNoteCreateWithoutAuthorInput, PlayerNoteUncheckedCreateWithoutAuthorInput> | PlayerNoteCreateWithoutAuthorInput[] | PlayerNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PlayerNoteCreateOrConnectWithoutAuthorInput | PlayerNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: PlayerNoteCreateManyAuthorInputEnvelope
    connect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutManagersInput = {
    create?: XOR<TeamCreateWithoutManagersInput, TeamUncheckedCreateWithoutManagersInput> | TeamCreateWithoutManagersInput[] | TeamUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutManagersInput | TeamCreateOrConnectWithoutManagersInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type GameManagerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameManagerCreateWithoutUserInput, GameManagerUncheckedCreateWithoutUserInput> | GameManagerCreateWithoutUserInput[] | GameManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameManagerCreateOrConnectWithoutUserInput | GameManagerCreateOrConnectWithoutUserInput[]
    createMany?: GameManagerCreateManyUserInputEnvelope
    connect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
  }

  export type PlayerNoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PlayerNoteCreateWithoutAuthorInput, PlayerNoteUncheckedCreateWithoutAuthorInput> | PlayerNoteCreateWithoutAuthorInput[] | PlayerNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PlayerNoteCreateOrConnectWithoutAuthorInput | PlayerNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: PlayerNoteCreateManyAuthorInputEnvelope
    connect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutManagersNestedInput = {
    create?: XOR<TeamCreateWithoutManagersInput, TeamUncheckedCreateWithoutManagersInput> | TeamCreateWithoutManagersInput[] | TeamUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutManagersInput | TeamCreateOrConnectWithoutManagersInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutManagersInput | TeamUpsertWithWhereUniqueWithoutManagersInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutManagersInput | TeamUpdateWithWhereUniqueWithoutManagersInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutManagersInput | TeamUpdateManyWithWhereWithoutManagersInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type GameManagerUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameManagerCreateWithoutUserInput, GameManagerUncheckedCreateWithoutUserInput> | GameManagerCreateWithoutUserInput[] | GameManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameManagerCreateOrConnectWithoutUserInput | GameManagerCreateOrConnectWithoutUserInput[]
    upsert?: GameManagerUpsertWithWhereUniqueWithoutUserInput | GameManagerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameManagerCreateManyUserInputEnvelope
    set?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    disconnect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    delete?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    connect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    update?: GameManagerUpdateWithWhereUniqueWithoutUserInput | GameManagerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameManagerUpdateManyWithWhereWithoutUserInput | GameManagerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameManagerScalarWhereInput | GameManagerScalarWhereInput[]
  }

  export type PlayerNoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PlayerNoteCreateWithoutAuthorInput, PlayerNoteUncheckedCreateWithoutAuthorInput> | PlayerNoteCreateWithoutAuthorInput[] | PlayerNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PlayerNoteCreateOrConnectWithoutAuthorInput | PlayerNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: PlayerNoteUpsertWithWhereUniqueWithoutAuthorInput | PlayerNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PlayerNoteCreateManyAuthorInputEnvelope
    set?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    disconnect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    delete?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    connect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    update?: PlayerNoteUpdateWithWhereUniqueWithoutAuthorInput | PlayerNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PlayerNoteUpdateManyWithWhereWithoutAuthorInput | PlayerNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PlayerNoteScalarWhereInput | PlayerNoteScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutManagersNestedInput = {
    create?: XOR<TeamCreateWithoutManagersInput, TeamUncheckedCreateWithoutManagersInput> | TeamCreateWithoutManagersInput[] | TeamUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutManagersInput | TeamCreateOrConnectWithoutManagersInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutManagersInput | TeamUpsertWithWhereUniqueWithoutManagersInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutManagersInput | TeamUpdateWithWhereUniqueWithoutManagersInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutManagersInput | TeamUpdateManyWithWhereWithoutManagersInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type GameManagerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameManagerCreateWithoutUserInput, GameManagerUncheckedCreateWithoutUserInput> | GameManagerCreateWithoutUserInput[] | GameManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameManagerCreateOrConnectWithoutUserInput | GameManagerCreateOrConnectWithoutUserInput[]
    upsert?: GameManagerUpsertWithWhereUniqueWithoutUserInput | GameManagerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameManagerCreateManyUserInputEnvelope
    set?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    disconnect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    delete?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    connect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    update?: GameManagerUpdateWithWhereUniqueWithoutUserInput | GameManagerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameManagerUpdateManyWithWhereWithoutUserInput | GameManagerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameManagerScalarWhereInput | GameManagerScalarWhereInput[]
  }

  export type PlayerNoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PlayerNoteCreateWithoutAuthorInput, PlayerNoteUncheckedCreateWithoutAuthorInput> | PlayerNoteCreateWithoutAuthorInput[] | PlayerNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PlayerNoteCreateOrConnectWithoutAuthorInput | PlayerNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: PlayerNoteUpsertWithWhereUniqueWithoutAuthorInput | PlayerNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PlayerNoteCreateManyAuthorInputEnvelope
    set?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    disconnect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    delete?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    connect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    update?: PlayerNoteUpdateWithWhereUniqueWithoutAuthorInput | PlayerNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PlayerNoteUpdateManyWithWhereWithoutAuthorInput | PlayerNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PlayerNoteScalarWhereInput | PlayerNoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type GameCreateNestedOneWithoutTeamsInput = {
    create?: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: GameCreateOrConnectWithoutTeamsInput
    connect?: GameWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlayerCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTeamInput = {
    create?: XOR<MatchCreateWithoutTeamInput, MatchUncheckedCreateWithoutTeamInput> | MatchCreateWithoutTeamInput[] | MatchUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamInput | MatchCreateOrConnectWithoutTeamInput[]
    createMany?: MatchCreateManyTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MatchCreateWithoutTeamInput, MatchUncheckedCreateWithoutTeamInput> | MatchCreateWithoutTeamInput[] | MatchUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamInput | MatchCreateOrConnectWithoutTeamInput[]
    createMany?: MatchCreateManyTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type GameUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: GameCreateOrConnectWithoutTeamsInput
    upsert?: GameUpsertWithoutTeamsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutTeamsInput, GameUpdateWithoutTeamsInput>, GameUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput | UserUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamsInput | UserUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamsInput | UserUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlayerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MatchCreateWithoutTeamInput, MatchUncheckedCreateWithoutTeamInput> | MatchCreateWithoutTeamInput[] | MatchUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamInput | MatchCreateOrConnectWithoutTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamInput | MatchUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MatchCreateManyTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamInput | MatchUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamInput | MatchUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput | UserUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamsInput | UserUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamsInput | UserUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MatchCreateWithoutTeamInput, MatchUncheckedCreateWithoutTeamInput> | MatchCreateWithoutTeamInput[] | MatchUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamInput | MatchCreateOrConnectWithoutTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamInput | MatchUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MatchCreateManyTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamInput | MatchUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamInput | MatchUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TeamCreateNestedManyWithoutGameInput = {
    create?: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput> | TeamCreateWithoutGameInput[] | TeamUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameInput | TeamCreateOrConnectWithoutGameInput[]
    createMany?: TeamCreateManyGameInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type GameManagerCreateNestedManyWithoutGameInput = {
    create?: XOR<GameManagerCreateWithoutGameInput, GameManagerUncheckedCreateWithoutGameInput> | GameManagerCreateWithoutGameInput[] | GameManagerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameManagerCreateOrConnectWithoutGameInput | GameManagerCreateOrConnectWithoutGameInput[]
    createMany?: GameManagerCreateManyGameInputEnvelope
    connect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput> | TeamCreateWithoutGameInput[] | TeamUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameInput | TeamCreateOrConnectWithoutGameInput[]
    createMany?: TeamCreateManyGameInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type GameManagerUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameManagerCreateWithoutGameInput, GameManagerUncheckedCreateWithoutGameInput> | GameManagerCreateWithoutGameInput[] | GameManagerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameManagerCreateOrConnectWithoutGameInput | GameManagerCreateOrConnectWithoutGameInput[]
    createMany?: GameManagerCreateManyGameInputEnvelope
    connect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
  }

  export type TeamUpdateManyWithoutGameNestedInput = {
    create?: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput> | TeamCreateWithoutGameInput[] | TeamUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameInput | TeamCreateOrConnectWithoutGameInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutGameInput | TeamUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TeamCreateManyGameInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutGameInput | TeamUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutGameInput | TeamUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type GameManagerUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameManagerCreateWithoutGameInput, GameManagerUncheckedCreateWithoutGameInput> | GameManagerCreateWithoutGameInput[] | GameManagerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameManagerCreateOrConnectWithoutGameInput | GameManagerCreateOrConnectWithoutGameInput[]
    upsert?: GameManagerUpsertWithWhereUniqueWithoutGameInput | GameManagerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameManagerCreateManyGameInputEnvelope
    set?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    disconnect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    delete?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    connect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    update?: GameManagerUpdateWithWhereUniqueWithoutGameInput | GameManagerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameManagerUpdateManyWithWhereWithoutGameInput | GameManagerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameManagerScalarWhereInput | GameManagerScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput> | TeamCreateWithoutGameInput[] | TeamUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameInput | TeamCreateOrConnectWithoutGameInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutGameInput | TeamUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TeamCreateManyGameInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutGameInput | TeamUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutGameInput | TeamUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type GameManagerUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameManagerCreateWithoutGameInput, GameManagerUncheckedCreateWithoutGameInput> | GameManagerCreateWithoutGameInput[] | GameManagerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameManagerCreateOrConnectWithoutGameInput | GameManagerCreateOrConnectWithoutGameInput[]
    upsert?: GameManagerUpsertWithWhereUniqueWithoutGameInput | GameManagerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameManagerCreateManyGameInputEnvelope
    set?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    disconnect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    delete?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    connect?: GameManagerWhereUniqueInput | GameManagerWhereUniqueInput[]
    update?: GameManagerUpdateWithWhereUniqueWithoutGameInput | GameManagerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameManagerUpdateManyWithWhereWithoutGameInput | GameManagerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameManagerScalarWhereInput | GameManagerScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutManagersInput = {
    create?: XOR<GameCreateWithoutManagersInput, GameUncheckedCreateWithoutManagersInput>
    connectOrCreate?: GameCreateOrConnectWithoutManagersInput
    connect?: GameWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutManagedGamesInput = {
    create?: XOR<UserCreateWithoutManagedGamesInput, UserUncheckedCreateWithoutManagedGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedGamesInput
    connect?: UserWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutManagersNestedInput = {
    create?: XOR<GameCreateWithoutManagersInput, GameUncheckedCreateWithoutManagersInput>
    connectOrCreate?: GameCreateOrConnectWithoutManagersInput
    upsert?: GameUpsertWithoutManagersInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutManagersInput, GameUpdateWithoutManagersInput>, GameUncheckedUpdateWithoutManagersInput>
  }

  export type UserUpdateOneRequiredWithoutManagedGamesNestedInput = {
    create?: XOR<UserCreateWithoutManagedGamesInput, UserUncheckedCreateWithoutManagedGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedGamesInput
    upsert?: UserUpsertWithoutManagedGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedGamesInput, UserUpdateWithoutManagedGamesInput>, UserUncheckedUpdateWithoutManagedGamesInput>
  }

  export type TeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    connect?: TeamWhereUniqueInput
  }

  export type PlayerStatsCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    connect?: PlayerStatsWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutPlayerInput = {
    create?: XOR<ContractCreateWithoutPlayerInput, ContractUncheckedCreateWithoutPlayerInput> | ContractCreateWithoutPlayerInput[] | ContractUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutPlayerInput | ContractCreateOrConnectWithoutPlayerInput[]
    createMany?: ContractCreateManyPlayerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type PlayerNoteCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerNoteCreateWithoutPlayerInput, PlayerNoteUncheckedCreateWithoutPlayerInput> | PlayerNoteCreateWithoutPlayerInput[] | PlayerNoteUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerNoteCreateOrConnectWithoutPlayerInput | PlayerNoteCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerNoteCreateManyPlayerInputEnvelope
    connect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
  }

  export type PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    connect?: PlayerStatsWhereUniqueInput
  }

  export type ContractUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<ContractCreateWithoutPlayerInput, ContractUncheckedCreateWithoutPlayerInput> | ContractCreateWithoutPlayerInput[] | ContractUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutPlayerInput | ContractCreateOrConnectWithoutPlayerInput[]
    createMany?: ContractCreateManyPlayerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type PlayerNoteUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerNoteCreateWithoutPlayerInput, PlayerNoteUncheckedCreateWithoutPlayerInput> | PlayerNoteCreateWithoutPlayerInput[] | PlayerNoteUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerNoteCreateOrConnectWithoutPlayerInput | PlayerNoteCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerNoteCreateManyPlayerInputEnvelope
    connect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
  }

  export type TeamUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    upsert?: TeamUpsertWithoutPlayersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayersInput, TeamUpdateWithoutPlayersInput>, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type PlayerStatsUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerStatsUpsertWithoutPlayerInput
    disconnect?: PlayerStatsWhereInput | boolean
    delete?: PlayerStatsWhereInput | boolean
    connect?: PlayerStatsWhereUniqueInput
    update?: XOR<XOR<PlayerStatsUpdateToOneWithWhereWithoutPlayerInput, PlayerStatsUpdateWithoutPlayerInput>, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type ContractUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<ContractCreateWithoutPlayerInput, ContractUncheckedCreateWithoutPlayerInput> | ContractCreateWithoutPlayerInput[] | ContractUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutPlayerInput | ContractCreateOrConnectWithoutPlayerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutPlayerInput | ContractUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: ContractCreateManyPlayerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutPlayerInput | ContractUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutPlayerInput | ContractUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type PlayerNoteUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerNoteCreateWithoutPlayerInput, PlayerNoteUncheckedCreateWithoutPlayerInput> | PlayerNoteCreateWithoutPlayerInput[] | PlayerNoteUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerNoteCreateOrConnectWithoutPlayerInput | PlayerNoteCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerNoteUpsertWithWhereUniqueWithoutPlayerInput | PlayerNoteUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerNoteCreateManyPlayerInputEnvelope
    set?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    disconnect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    delete?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    connect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    update?: PlayerNoteUpdateWithWhereUniqueWithoutPlayerInput | PlayerNoteUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerNoteUpdateManyWithWhereWithoutPlayerInput | PlayerNoteUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerNoteScalarWhereInput | PlayerNoteScalarWhereInput[]
  }

  export type PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerStatsUpsertWithoutPlayerInput
    disconnect?: PlayerStatsWhereInput | boolean
    delete?: PlayerStatsWhereInput | boolean
    connect?: PlayerStatsWhereUniqueInput
    update?: XOR<XOR<PlayerStatsUpdateToOneWithWhereWithoutPlayerInput, PlayerStatsUpdateWithoutPlayerInput>, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type ContractUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<ContractCreateWithoutPlayerInput, ContractUncheckedCreateWithoutPlayerInput> | ContractCreateWithoutPlayerInput[] | ContractUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutPlayerInput | ContractCreateOrConnectWithoutPlayerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutPlayerInput | ContractUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: ContractCreateManyPlayerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutPlayerInput | ContractUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutPlayerInput | ContractUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type PlayerNoteUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerNoteCreateWithoutPlayerInput, PlayerNoteUncheckedCreateWithoutPlayerInput> | PlayerNoteCreateWithoutPlayerInput[] | PlayerNoteUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerNoteCreateOrConnectWithoutPlayerInput | PlayerNoteCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerNoteUpsertWithWhereUniqueWithoutPlayerInput | PlayerNoteUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerNoteCreateManyPlayerInputEnvelope
    set?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    disconnect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    delete?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    connect?: PlayerNoteWhereUniqueInput | PlayerNoteWhereUniqueInput[]
    update?: PlayerNoteUpdateWithWhereUniqueWithoutPlayerInput | PlayerNoteUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerNoteUpdateManyWithWhereWithoutPlayerInput | PlayerNoteUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerNoteScalarWhereInput | PlayerNoteScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutStatsInput = {
    create?: XOR<PlayerCreateWithoutStatsInput, PlayerUncheckedCreateWithoutStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutStatsInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<PlayerCreateWithoutStatsInput, PlayerUncheckedCreateWithoutStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutStatsInput
    upsert?: PlayerUpsertWithoutStatsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutStatsInput, PlayerUpdateWithoutStatsInput>, PlayerUncheckedUpdateWithoutStatsInput>
  }

  export type PlayerCreateNestedOneWithoutContractsInput = {
    create?: XOR<PlayerCreateWithoutContractsInput, PlayerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutContractsInput
    connect?: PlayerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlayerUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<PlayerCreateWithoutContractsInput, PlayerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutContractsInput
    upsert?: PlayerUpsertWithoutContractsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutContractsInput, PlayerUpdateWithoutContractsInput>, PlayerUncheckedUpdateWithoutContractsInput>
  }

  export type PlayerCreateNestedOneWithoutNotesInput = {
    create?: XOR<PlayerCreateWithoutNotesInput, PlayerUncheckedCreateWithoutNotesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutNotesInput
    connect?: PlayerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPlayerNotesInput = {
    create?: XOR<UserCreateWithoutPlayerNotesInput, UserUncheckedCreateWithoutPlayerNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerNotesInput
    connect?: UserWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<PlayerCreateWithoutNotesInput, PlayerUncheckedCreateWithoutNotesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutNotesInput
    upsert?: PlayerUpsertWithoutNotesInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutNotesInput, PlayerUpdateWithoutNotesInput>, PlayerUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutPlayerNotesNestedInput = {
    create?: XOR<UserCreateWithoutPlayerNotesInput, UserUncheckedCreateWithoutPlayerNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerNotesInput
    upsert?: UserUpsertWithoutPlayerNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerNotesInput, UserUpdateWithoutPlayerNotesInput>, UserUncheckedUpdateWithoutPlayerNotesInput>
  }

  export type TeamCreateNestedOneWithoutMatchesInput = {
    create?: XOR<TeamCreateWithoutMatchesInput, TeamUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesInput
    connect?: TeamWhereUniqueInput
  }

  export type EnumMatchTypeFieldUpdateOperationsInput = {
    set?: $Enums.MatchType
  }

  export type TeamUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<TeamCreateWithoutMatchesInput, TeamUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesInput
    upsert?: TeamUpsertWithoutMatchesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchesInput, TeamUpdateWithoutMatchesInput>, TeamUncheckedUpdateWithoutMatchesInput>
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutNewsInput = {
    create?: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput> | TagCreateWithoutNewsInput[] | TagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutNewsInput | TagCreateOrConnectWithoutNewsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput> | TagCreateWithoutNewsInput[] | TagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutNewsInput | TagCreateOrConnectWithoutNewsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type TagUpdateManyWithoutNewsNestedInput = {
    create?: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput> | TagCreateWithoutNewsInput[] | TagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutNewsInput | TagCreateOrConnectWithoutNewsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutNewsInput | TagUpsertWithWhereUniqueWithoutNewsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutNewsInput | TagUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutNewsInput | TagUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput> | TagCreateWithoutNewsInput[] | TagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutNewsInput | TagCreateOrConnectWithoutNewsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutNewsInput | TagUpsertWithWhereUniqueWithoutNewsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutNewsInput | TagUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutNewsInput | TagUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type NewsCreateNestedManyWithoutTagsInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput> | NewsCreateWithoutTagsInput[] | NewsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput | NewsCreateOrConnectWithoutTagsInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput> | NewsCreateWithoutTagsInput[] | NewsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput | NewsCreateOrConnectWithoutTagsInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput> | NewsCreateWithoutTagsInput[] | NewsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput | NewsCreateOrConnectWithoutTagsInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTagsInput | NewsUpsertWithWhereUniqueWithoutTagsInput[]
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTagsInput | NewsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTagsInput | NewsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput> | NewsCreateWithoutTagsInput[] | NewsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput | NewsCreateOrConnectWithoutTagsInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTagsInput | NewsUpsertWithWhereUniqueWithoutTagsInput[]
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTagsInput | NewsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTagsInput | NewsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMatchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchType | EnumMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTypeFilter<$PrismaModel> | $Enums.MatchType
  }

  export type NestedEnumMatchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchType | EnumMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTypeWithAggregatesFilter<$PrismaModel> | $Enums.MatchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchTypeFilter<$PrismaModel>
    _max?: NestedEnumMatchTypeFilter<$PrismaModel>
  }

  export type NewsCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    tags?: TagCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    tags?: TagUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsCreateManyAuthorInputEnvelope = {
    data: NewsCreateManyAuthorInput | NewsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TaskCreateOrConnectWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskCreateManyCreatedByInputEnvelope = {
    data: TaskCreateManyCreatedByInput | TaskCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutUserInput = {
    id?: string
    type: $Enums.ActivityType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.ActivityType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateManyUserInputEnvelope = {
    data: ActivityCreateManyUserInput | ActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutManagersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutTeamsInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    matches?: MatchCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutManagersInput = {
    id?: string
    name: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    matches?: MatchUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutManagersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutManagersInput, TeamUncheckedCreateWithoutManagersInput>
  }

  export type GameManagerCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutManagersInput
  }

  export type GameManagerUncheckedCreateWithoutUserInput = {
    id?: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameManagerCreateOrConnectWithoutUserInput = {
    where: GameManagerWhereUniqueInput
    create: XOR<GameManagerCreateWithoutUserInput, GameManagerUncheckedCreateWithoutUserInput>
  }

  export type GameManagerCreateManyUserInputEnvelope = {
    data: GameManagerCreateManyUserInput | GameManagerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlayerNoteCreateWithoutAuthorInput = {
    id?: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutNotesInput
  }

  export type PlayerNoteUncheckedCreateWithoutAuthorInput = {
    id?: string
    playerId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerNoteCreateOrConnectWithoutAuthorInput = {
    where: PlayerNoteWhereUniqueInput
    create: XOR<PlayerNoteCreateWithoutAuthorInput, PlayerNoteUncheckedCreateWithoutAuthorInput>
  }

  export type PlayerNoteCreateManyAuthorInputEnvelope = {
    data: PlayerNoteCreateManyAuthorInput | PlayerNoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    creatorId?: StringFilter<"Task"> | string
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    message?: StringFilter<"Activity"> | string
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    userId?: StringFilter<"Activity"> | string
  }

  export type TeamUpsertWithWhereUniqueWithoutManagersInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutManagersInput, TeamUncheckedUpdateWithoutManagersInput>
    create: XOR<TeamCreateWithoutManagersInput, TeamUncheckedCreateWithoutManagersInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutManagersInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutManagersInput, TeamUncheckedUpdateWithoutManagersInput>
  }

  export type TeamUpdateManyWithWhereWithoutManagersInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutManagersInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    gameId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type GameManagerUpsertWithWhereUniqueWithoutUserInput = {
    where: GameManagerWhereUniqueInput
    update: XOR<GameManagerUpdateWithoutUserInput, GameManagerUncheckedUpdateWithoutUserInput>
    create: XOR<GameManagerCreateWithoutUserInput, GameManagerUncheckedCreateWithoutUserInput>
  }

  export type GameManagerUpdateWithWhereUniqueWithoutUserInput = {
    where: GameManagerWhereUniqueInput
    data: XOR<GameManagerUpdateWithoutUserInput, GameManagerUncheckedUpdateWithoutUserInput>
  }

  export type GameManagerUpdateManyWithWhereWithoutUserInput = {
    where: GameManagerScalarWhereInput
    data: XOR<GameManagerUpdateManyMutationInput, GameManagerUncheckedUpdateManyWithoutUserInput>
  }

  export type GameManagerScalarWhereInput = {
    AND?: GameManagerScalarWhereInput | GameManagerScalarWhereInput[]
    OR?: GameManagerScalarWhereInput[]
    NOT?: GameManagerScalarWhereInput | GameManagerScalarWhereInput[]
    id?: StringFilter<"GameManager"> | string
    gameId?: StringFilter<"GameManager"> | string
    userId?: StringFilter<"GameManager"> | string
    createdAt?: DateTimeFilter<"GameManager"> | Date | string
    updatedAt?: DateTimeFilter<"GameManager"> | Date | string
  }

  export type PlayerNoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PlayerNoteWhereUniqueInput
    update: XOR<PlayerNoteUpdateWithoutAuthorInput, PlayerNoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<PlayerNoteCreateWithoutAuthorInput, PlayerNoteUncheckedCreateWithoutAuthorInput>
  }

  export type PlayerNoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PlayerNoteWhereUniqueInput
    data: XOR<PlayerNoteUpdateWithoutAuthorInput, PlayerNoteUncheckedUpdateWithoutAuthorInput>
  }

  export type PlayerNoteUpdateManyWithWhereWithoutAuthorInput = {
    where: PlayerNoteScalarWhereInput
    data: XOR<PlayerNoteUpdateManyMutationInput, PlayerNoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PlayerNoteScalarWhereInput = {
    AND?: PlayerNoteScalarWhereInput | PlayerNoteScalarWhereInput[]
    OR?: PlayerNoteScalarWhereInput[]
    NOT?: PlayerNoteScalarWhereInput | PlayerNoteScalarWhereInput[]
    id?: StringFilter<"PlayerNote"> | string
    playerId?: StringFilter<"PlayerNote"> | string
    authorId?: StringFilter<"PlayerNote"> | string
    content?: StringFilter<"PlayerNote"> | string
    isPrivate?: BoolFilter<"PlayerNote"> | boolean
    createdAt?: DateTimeFilter<"PlayerNote"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerNote"> | Date | string
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerUncheckedCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerUncheckedCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUncheckedUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUncheckedUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutActivitiesInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    teams?: TeamCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    teams?: TeamUncheckedCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerUncheckedCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    teams?: TeamUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    teams?: TeamUncheckedUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUncheckedUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type GameCreateWithoutTeamsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: GameManagerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: GameManagerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTeamsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput>
  }

  export type UserCreateWithoutTeamsInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    managedGames?: GameManagerCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    managedGames?: GameManagerUncheckedCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type PlayerCreateWithoutTeamInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    contracts?: ContractCreateNestedManyWithoutPlayerInput
    notes?: PlayerNoteCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutTeamInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    contracts?: ContractUncheckedCreateNestedManyWithoutPlayerInput
    notes?: PlayerNoteUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerCreateManyTeamInputEnvelope = {
    data: PlayerCreateManyTeamInput | PlayerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutTeamInput = {
    id?: string
    type: $Enums.MatchType
    opponent: string
    date: Date | string
    result?: string | null
    notes?: string | null
  }

  export type MatchUncheckedCreateWithoutTeamInput = {
    id?: string
    type: $Enums.MatchType
    opponent: string
    date: Date | string
    result?: string | null
    notes?: string | null
  }

  export type MatchCreateOrConnectWithoutTeamInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTeamInput, MatchUncheckedCreateWithoutTeamInput>
  }

  export type MatchCreateManyTeamInputEnvelope = {
    data: MatchCreateManyTeamInput | MatchCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutTeamsInput = {
    update: XOR<GameUpdateWithoutTeamsInput, GameUncheckedUpdateWithoutTeamsInput>
    create: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutTeamsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutTeamsInput, GameUncheckedUpdateWithoutTeamsInput>
  }

  export type GameUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: GameManagerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: GameManagerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutTeamsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    invitationToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: StringFilter<"Player"> | string
    firstName?: StringFilter<"Player"> | string
    lastName?: StringFilter<"Player"> | string
    inGameName?: StringFilter<"Player"> | string
    username?: StringNullableFilter<"Player"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Player"> | Date | string | null
    country?: StringNullableFilter<"Player"> | string | null
    teamId?: StringNullableFilter<"Player"> | string | null
    role?: StringNullableFilter<"Player"> | string | null
    rank?: StringNullableFilter<"Player"> | string | null
    joinDate?: DateTimeFilter<"Player"> | Date | string
    endDate?: DateTimeNullableFilter<"Player"> | Date | string | null
    socialLinks?: JsonNullableFilter<"Player">
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutTeamInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTeamInput, MatchUncheckedUpdateWithoutTeamInput>
    create: XOR<MatchCreateWithoutTeamInput, MatchUncheckedCreateWithoutTeamInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTeamInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTeamInput, MatchUncheckedUpdateWithoutTeamInput>
  }

  export type MatchUpdateManyWithWhereWithoutTeamInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTeamInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    type?: EnumMatchTypeFilter<"Match"> | $Enums.MatchType
    teamId?: StringFilter<"Match"> | string
    opponent?: StringFilter<"Match"> | string
    date?: DateTimeFilter<"Match"> | Date | string
    result?: StringNullableFilter<"Match"> | string | null
    notes?: StringNullableFilter<"Match"> | string | null
  }

  export type TeamCreateWithoutGameInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: UserCreateNestedManyWithoutTeamsInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    matches?: MatchCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutGameInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: UserUncheckedCreateNestedManyWithoutTeamsInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    matches?: MatchUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutGameInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput>
  }

  export type TeamCreateManyGameInputEnvelope = {
    data: TeamCreateManyGameInput | TeamCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameManagerCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutManagedGamesInput
  }

  export type GameManagerUncheckedCreateWithoutGameInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameManagerCreateOrConnectWithoutGameInput = {
    where: GameManagerWhereUniqueInput
    create: XOR<GameManagerCreateWithoutGameInput, GameManagerUncheckedCreateWithoutGameInput>
  }

  export type GameManagerCreateManyGameInputEnvelope = {
    data: GameManagerCreateManyGameInput | GameManagerCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithWhereUniqueWithoutGameInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutGameInput, TeamUncheckedUpdateWithoutGameInput>
    create: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutGameInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutGameInput, TeamUncheckedUpdateWithoutGameInput>
  }

  export type TeamUpdateManyWithWhereWithoutGameInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutGameInput>
  }

  export type GameManagerUpsertWithWhereUniqueWithoutGameInput = {
    where: GameManagerWhereUniqueInput
    update: XOR<GameManagerUpdateWithoutGameInput, GameManagerUncheckedUpdateWithoutGameInput>
    create: XOR<GameManagerCreateWithoutGameInput, GameManagerUncheckedCreateWithoutGameInput>
  }

  export type GameManagerUpdateWithWhereUniqueWithoutGameInput = {
    where: GameManagerWhereUniqueInput
    data: XOR<GameManagerUpdateWithoutGameInput, GameManagerUncheckedUpdateWithoutGameInput>
  }

  export type GameManagerUpdateManyWithWhereWithoutGameInput = {
    where: GameManagerScalarWhereInput
    data: XOR<GameManagerUpdateManyMutationInput, GameManagerUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutManagersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutManagersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutManagersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutManagersInput, GameUncheckedCreateWithoutManagersInput>
  }

  export type UserCreateWithoutManagedGamesInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutManagersInput
    playerNotes?: PlayerNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutManagedGamesInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutManagersInput
    playerNotes?: PlayerNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutManagedGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedGamesInput, UserUncheckedCreateWithoutManagedGamesInput>
  }

  export type GameUpsertWithoutManagersInput = {
    update: XOR<GameUpdateWithoutManagersInput, GameUncheckedUpdateWithoutManagersInput>
    create: XOR<GameCreateWithoutManagersInput, GameUncheckedCreateWithoutManagersInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutManagersInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutManagersInput, GameUncheckedUpdateWithoutManagersInput>
  }

  export type GameUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserUpsertWithoutManagedGamesInput = {
    update: XOR<UserUpdateWithoutManagedGamesInput, UserUncheckedUpdateWithoutManagedGamesInput>
    create: XOR<UserCreateWithoutManagedGamesInput, UserUncheckedCreateWithoutManagedGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedGamesInput, UserUncheckedUpdateWithoutManagedGamesInput>
  }

  export type UserUpdateWithoutManagedGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutManagersNestedInput
    playerNotes?: PlayerNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutManagersNestedInput
    playerNotes?: PlayerNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TeamCreateWithoutPlayersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutTeamsInput
    managers?: UserCreateNestedManyWithoutTeamsInput
    matches?: MatchCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: UserUncheckedCreateNestedManyWithoutTeamsInput
    matches?: MatchUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPlayersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
  }

  export type PlayerStatsCreateWithoutPlayerInput = {
    id?: string
    stats: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerStatsUncheckedCreateWithoutPlayerInput = {
    id?: string
    stats: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerStatsCreateOrConnectWithoutPlayerInput = {
    where: PlayerStatsWhereUniqueInput
    create: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
  }

  export type ContractCreateWithoutPlayerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUncheckedCreateWithoutPlayerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutPlayerInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutPlayerInput, ContractUncheckedCreateWithoutPlayerInput>
  }

  export type ContractCreateManyPlayerInputEnvelope = {
    data: ContractCreateManyPlayerInput | ContractCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerNoteCreateWithoutPlayerInput = {
    id?: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPlayerNotesInput
  }

  export type PlayerNoteUncheckedCreateWithoutPlayerInput = {
    id?: string
    authorId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerNoteCreateOrConnectWithoutPlayerInput = {
    where: PlayerNoteWhereUniqueInput
    create: XOR<PlayerNoteCreateWithoutPlayerInput, PlayerNoteUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerNoteCreateManyPlayerInputEnvelope = {
    data: PlayerNoteCreateManyPlayerInput | PlayerNoteCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutPlayersInput = {
    update: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutTeamsNestedInput
    managers?: UserUpdateManyWithoutTeamsNestedInput
    matches?: MatchUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PlayerStatsUpsertWithoutPlayerInput = {
    update: XOR<PlayerStatsUpdateWithoutPlayerInput, PlayerStatsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    where?: PlayerStatsWhereInput
  }

  export type PlayerStatsUpdateToOneWithWhereWithoutPlayerInput = {
    where?: PlayerStatsWhereInput
    data: XOR<PlayerStatsUpdateWithoutPlayerInput, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerStatsUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutPlayerInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutPlayerInput, ContractUncheckedUpdateWithoutPlayerInput>
    create: XOR<ContractCreateWithoutPlayerInput, ContractUncheckedCreateWithoutPlayerInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutPlayerInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutPlayerInput, ContractUncheckedUpdateWithoutPlayerInput>
  }

  export type ContractUpdateManyWithWhereWithoutPlayerInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutPlayerInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: StringFilter<"Contract"> | string
    playerId?: StringFilter<"Contract"> | string
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    terms?: StringNullableFilter<"Contract"> | string | null
    isActive?: BoolFilter<"Contract"> | boolean
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type PlayerNoteUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerNoteWhereUniqueInput
    update: XOR<PlayerNoteUpdateWithoutPlayerInput, PlayerNoteUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerNoteCreateWithoutPlayerInput, PlayerNoteUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerNoteUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerNoteWhereUniqueInput
    data: XOR<PlayerNoteUpdateWithoutPlayerInput, PlayerNoteUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerNoteUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerNoteScalarWhereInput
    data: XOR<PlayerNoteUpdateManyMutationInput, PlayerNoteUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerCreateWithoutStatsInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutPlayersInput
    contracts?: ContractCreateNestedManyWithoutPlayerInput
    notes?: PlayerNoteCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutStatsInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    teamId?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractUncheckedCreateNestedManyWithoutPlayerInput
    notes?: PlayerNoteUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutStatsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutStatsInput, PlayerUncheckedCreateWithoutStatsInput>
  }

  export type PlayerUpsertWithoutStatsInput = {
    update: XOR<PlayerUpdateWithoutStatsInput, PlayerUncheckedUpdateWithoutStatsInput>
    create: XOR<PlayerCreateWithoutStatsInput, PlayerUncheckedCreateWithoutStatsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutStatsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutStatsInput, PlayerUncheckedUpdateWithoutStatsInput>
  }

  export type PlayerUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutPlayersNestedInput
    contracts?: ContractUpdateManyWithoutPlayerNestedInput
    notes?: PlayerNoteUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUncheckedUpdateManyWithoutPlayerNestedInput
    notes?: PlayerNoteUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateWithoutContractsInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutPlayersInput
    stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    notes?: PlayerNoteCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutContractsInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    teamId?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    notes?: PlayerNoteUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutContractsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutContractsInput, PlayerUncheckedCreateWithoutContractsInput>
  }

  export type PlayerUpsertWithoutContractsInput = {
    update: XOR<PlayerUpdateWithoutContractsInput, PlayerUncheckedUpdateWithoutContractsInput>
    create: XOR<PlayerCreateWithoutContractsInput, PlayerUncheckedCreateWithoutContractsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutContractsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutContractsInput, PlayerUncheckedUpdateWithoutContractsInput>
  }

  export type PlayerUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutPlayersNestedInput
    stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    notes?: PlayerNoteUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    notes?: PlayerNoteUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateWithoutNotesInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutPlayersInput
    stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    contracts?: ContractCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutNotesInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    teamId?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    contracts?: ContractUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutNotesInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutNotesInput, PlayerUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutPlayerNotesInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlayerNotesInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlayerNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerNotesInput, UserUncheckedCreateWithoutPlayerNotesInput>
  }

  export type PlayerUpsertWithoutNotesInput = {
    update: XOR<PlayerUpdateWithoutNotesInput, PlayerUncheckedUpdateWithoutNotesInput>
    create: XOR<PlayerCreateWithoutNotesInput, PlayerUncheckedCreateWithoutNotesInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutNotesInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutNotesInput, PlayerUncheckedUpdateWithoutNotesInput>
  }

  export type PlayerUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutPlayersNestedInput
    stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    contracts?: ContractUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutPlayerNotesInput = {
    update: XOR<UserUpdateWithoutPlayerNotesInput, UserUncheckedUpdateWithoutPlayerNotesInput>
    create: XOR<UserCreateWithoutPlayerNotesInput, UserUncheckedCreateWithoutPlayerNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerNotesInput, UserUncheckedUpdateWithoutPlayerNotesInput>
  }

  export type UserUpdateWithoutPlayerNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamCreateWithoutMatchesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutTeamsInput
    managers?: UserCreateNestedManyWithoutTeamsInput
    players?: PlayerCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMatchesInput = {
    id?: string
    name: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: UserUncheckedCreateNestedManyWithoutTeamsInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMatchesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchesInput, TeamUncheckedCreateWithoutMatchesInput>
  }

  export type TeamUpsertWithoutMatchesInput = {
    update: XOR<TeamUpdateWithoutMatchesInput, TeamUncheckedUpdateWithoutMatchesInput>
    create: XOR<TeamCreateWithoutMatchesInput, TeamUncheckedCreateWithoutMatchesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchesInput, TeamUncheckedUpdateWithoutMatchesInput>
  }

  export type TeamUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutTeamsNestedInput
    managers?: UserUpdateManyWithoutTeamsNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutNewsInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id?: string
    username: string
    password?: string | null
    role?: $Enums.Role
    status?: $Enums.Status
    invitationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutManagersInput
    managedGames?: GameManagerUncheckedCreateNestedManyWithoutUserInput
    playerNotes?: PlayerNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type TagCreateWithoutNewsInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutNewsInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutNewsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput>
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutManagersNestedInput
    managedGames?: GameManagerUncheckedUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutNewsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutNewsInput, TagUncheckedUpdateWithoutNewsInput>
    create: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutNewsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutNewsInput, TagUncheckedUpdateWithoutNewsInput>
  }

  export type TagUpdateManyWithWhereWithoutNewsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutNewsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
  }

  export type NewsCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author: UserCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type NewsCreateOrConnectWithoutTagsInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput>
  }

  export type NewsUpsertWithWhereUniqueWithoutTagsInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutTagsInput, NewsUncheckedUpdateWithoutTagsInput>
    create: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutTagsInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutTagsInput, NewsUncheckedUpdateWithoutTagsInput>
  }

  export type NewsUpdateManyWithWhereWithoutTagsInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutTagsInput>
  }

  export type NewsCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type TaskCreateManyAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
  }

  export type TaskCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ActivityCreateManyUserInput = {
    id?: string
    type: $Enums.ActivityType
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GameManagerCreateManyUserInput = {
    id?: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerNoteCreateManyAuthorInput = {
    id?: string
    playerId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TagUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TagUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutTeamsNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    matches?: MatchUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameManagerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutManagersNestedInput
  }

  export type GameManagerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameManagerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerNoteUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutNotesNestedInput
  }

  export type PlayerNoteUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerNoteUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateManyTeamInput = {
    id?: string
    firstName: string
    lastName: string
    inGameName: string
    username?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    role?: string | null
    rank?: string | null
    joinDate?: Date | string
    endDate?: Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyTeamInput = {
    id?: string
    type: $Enums.MatchType
    opponent: string
    date: Date | string
    result?: string | null
    notes?: string | null
  }

  export type UserUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    managedGames?: GameManagerUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    managedGames?: GameManagerUncheckedUpdateManyWithoutUserNestedInput
    playerNotes?: PlayerNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    contracts?: ContractUpdateManyWithoutPlayerNestedInput
    notes?: PlayerNoteUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutPlayerNestedInput
    notes?: PlayerNoteUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    inGameName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    opponent?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    opponent?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    opponent?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamCreateManyGameInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameManagerCreateManyGameInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUpdateManyWithoutTeamsNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    matches?: MatchUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameManagerUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutManagedGamesNestedInput
  }

  export type GameManagerUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameManagerUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyPlayerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerNoteCreateManyPlayerInput = {
    id?: string
    authorId: string
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerNoteUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPlayerNotesNestedInput
  }

  export type PlayerNoteUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerNoteUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NewsUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}