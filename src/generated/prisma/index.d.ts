
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Sheet
 * 
 */
export type Sheet = $Result.DefaultSelection<Prisma.$SheetPayload>
/**
 * Model Filter
 * 
 */
export type Filter = $Result.DefaultSelection<Prisma.$FilterPayload>
/**
 * Model FightingGame
 * 
 */
export type FightingGame = $Result.DefaultSelection<Prisma.$FightingGamePayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model CharacterOnSheet
 * 
 */
export type CharacterOnSheet = $Result.DefaultSelection<Prisma.$CharacterOnSheetPayload>
/**
 * Model OpponentOnSheet
 * 
 */
export type OpponentOnSheet = $Result.DefaultSelection<Prisma.$OpponentOnSheetPayload>
/**
 * Model FightingGameOnUser
 * 
 */
export type FightingGameOnUser = $Result.DefaultSelection<Prisma.$FightingGameOnUserPayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheet`: Exposes CRUD operations for the **Sheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheet.findMany()
    * ```
    */
  get sheet(): Prisma.SheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filter`: Exposes CRUD operations for the **Filter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filters
    * const filters = await prisma.filter.findMany()
    * ```
    */
  get filter(): Prisma.FilterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fightingGame`: Exposes CRUD operations for the **FightingGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FightingGames
    * const fightingGames = await prisma.fightingGame.findMany()
    * ```
    */
  get fightingGame(): Prisma.FightingGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characterOnSheet`: Exposes CRUD operations for the **CharacterOnSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterOnSheets
    * const characterOnSheets = await prisma.characterOnSheet.findMany()
    * ```
    */
  get characterOnSheet(): Prisma.CharacterOnSheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opponentOnSheet`: Exposes CRUD operations for the **OpponentOnSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpponentOnSheets
    * const opponentOnSheets = await prisma.opponentOnSheet.findMany()
    * ```
    */
  get opponentOnSheet(): Prisma.OpponentOnSheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fightingGameOnUser`: Exposes CRUD operations for the **FightingGameOnUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FightingGameOnUsers
    * const fightingGameOnUsers = await prisma.fightingGameOnUser.findMany()
    * ```
    */
  get fightingGameOnUser(): Prisma.FightingGameOnUserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Sheet: 'Sheet',
    Filter: 'Filter',
    FightingGame: 'FightingGame',
    Character: 'Character',
    CharacterOnSheet: 'CharacterOnSheet',
    OpponentOnSheet: 'OpponentOnSheet',
    FightingGameOnUser: 'FightingGameOnUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "sheet" | "filter" | "fightingGame" | "character" | "characterOnSheet" | "opponentOnSheet" | "fightingGameOnUser"
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Sheet: {
        payload: Prisma.$SheetPayload<ExtArgs>
        fields: Prisma.SheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findFirst: {
            args: Prisma.SheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findMany: {
            args: Prisma.SheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          create: {
            args: Prisma.SheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          createMany: {
            args: Prisma.SheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          delete: {
            args: Prisma.SheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          update: {
            args: Prisma.SheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          deleteMany: {
            args: Prisma.SheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          upsert: {
            args: Prisma.SheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          aggregate: {
            args: Prisma.SheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheet>
          }
          groupBy: {
            args: Prisma.SheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetCountArgs<ExtArgs>
            result: $Utils.Optional<SheetCountAggregateOutputType> | number
          }
        }
      }
      Filter: {
        payload: Prisma.$FilterPayload<ExtArgs>
        fields: Prisma.FilterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          findFirst: {
            args: Prisma.FilterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          findMany: {
            args: Prisma.FilterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>[]
          }
          create: {
            args: Prisma.FilterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          createMany: {
            args: Prisma.FilterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>[]
          }
          delete: {
            args: Prisma.FilterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          update: {
            args: Prisma.FilterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          deleteMany: {
            args: Prisma.FilterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>[]
          }
          upsert: {
            args: Prisma.FilterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          aggregate: {
            args: Prisma.FilterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilter>
          }
          groupBy: {
            args: Prisma.FilterGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilterGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilterCountArgs<ExtArgs>
            result: $Utils.Optional<FilterCountAggregateOutputType> | number
          }
        }
      }
      FightingGame: {
        payload: Prisma.$FightingGamePayload<ExtArgs>
        fields: Prisma.FightingGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FightingGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FightingGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>
          }
          findFirst: {
            args: Prisma.FightingGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FightingGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>
          }
          findMany: {
            args: Prisma.FightingGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>[]
          }
          create: {
            args: Prisma.FightingGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>
          }
          createMany: {
            args: Prisma.FightingGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FightingGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>[]
          }
          delete: {
            args: Prisma.FightingGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>
          }
          update: {
            args: Prisma.FightingGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>
          }
          deleteMany: {
            args: Prisma.FightingGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FightingGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FightingGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>[]
          }
          upsert: {
            args: Prisma.FightingGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGamePayload>
          }
          aggregate: {
            args: Prisma.FightingGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFightingGame>
          }
          groupBy: {
            args: Prisma.FightingGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<FightingGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.FightingGameCountArgs<ExtArgs>
            result: $Utils.Optional<FightingGameCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      CharacterOnSheet: {
        payload: Prisma.$CharacterOnSheetPayload<ExtArgs>
        fields: Prisma.CharacterOnSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterOnSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterOnSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>
          }
          findFirst: {
            args: Prisma.CharacterOnSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterOnSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>
          }
          findMany: {
            args: Prisma.CharacterOnSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>[]
          }
          create: {
            args: Prisma.CharacterOnSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>
          }
          createMany: {
            args: Prisma.CharacterOnSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterOnSheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>[]
          }
          delete: {
            args: Prisma.CharacterOnSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>
          }
          update: {
            args: Prisma.CharacterOnSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>
          }
          deleteMany: {
            args: Prisma.CharacterOnSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterOnSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterOnSheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>[]
          }
          upsert: {
            args: Prisma.CharacterOnSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterOnSheetPayload>
          }
          aggregate: {
            args: Prisma.CharacterOnSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterOnSheet>
          }
          groupBy: {
            args: Prisma.CharacterOnSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterOnSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterOnSheetCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterOnSheetCountAggregateOutputType> | number
          }
        }
      }
      OpponentOnSheet: {
        payload: Prisma.$OpponentOnSheetPayload<ExtArgs>
        fields: Prisma.OpponentOnSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpponentOnSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpponentOnSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>
          }
          findFirst: {
            args: Prisma.OpponentOnSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpponentOnSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>
          }
          findMany: {
            args: Prisma.OpponentOnSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>[]
          }
          create: {
            args: Prisma.OpponentOnSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>
          }
          createMany: {
            args: Prisma.OpponentOnSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpponentOnSheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>[]
          }
          delete: {
            args: Prisma.OpponentOnSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>
          }
          update: {
            args: Prisma.OpponentOnSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>
          }
          deleteMany: {
            args: Prisma.OpponentOnSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpponentOnSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpponentOnSheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>[]
          }
          upsert: {
            args: Prisma.OpponentOnSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpponentOnSheetPayload>
          }
          aggregate: {
            args: Prisma.OpponentOnSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpponentOnSheet>
          }
          groupBy: {
            args: Prisma.OpponentOnSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpponentOnSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpponentOnSheetCountArgs<ExtArgs>
            result: $Utils.Optional<OpponentOnSheetCountAggregateOutputType> | number
          }
        }
      }
      FightingGameOnUser: {
        payload: Prisma.$FightingGameOnUserPayload<ExtArgs>
        fields: Prisma.FightingGameOnUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FightingGameOnUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FightingGameOnUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>
          }
          findFirst: {
            args: Prisma.FightingGameOnUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FightingGameOnUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>
          }
          findMany: {
            args: Prisma.FightingGameOnUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>[]
          }
          create: {
            args: Prisma.FightingGameOnUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>
          }
          createMany: {
            args: Prisma.FightingGameOnUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FightingGameOnUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>[]
          }
          delete: {
            args: Prisma.FightingGameOnUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>
          }
          update: {
            args: Prisma.FightingGameOnUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>
          }
          deleteMany: {
            args: Prisma.FightingGameOnUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FightingGameOnUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FightingGameOnUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>[]
          }
          upsert: {
            args: Prisma.FightingGameOnUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingGameOnUserPayload>
          }
          aggregate: {
            args: Prisma.FightingGameOnUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFightingGameOnUser>
          }
          groupBy: {
            args: Prisma.FightingGameOnUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<FightingGameOnUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.FightingGameOnUserCountArgs<ExtArgs>
            result: $Utils.Optional<FightingGameOnUserCountAggregateOutputType> | number
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
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    sheet?: SheetOmit
    filter?: FilterOmit
    fightingGame?: FightingGameOmit
    character?: CharacterOmit
    characterOnSheet?: CharacterOnSheetOmit
    opponentOnSheet?: OpponentOnSheetOmit
    fightingGameOnUser?: FightingGameOnUserOmit
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
    sessions: number
    accounts: number
    Sheet: number
    Filter: number
    FightingGameOnUser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    Sheet?: boolean | UserCountOutputTypeCountSheetArgs
    Filter?: boolean | UserCountOutputTypeCountFilterArgs
    FightingGameOnUser?: boolean | UserCountOutputTypeCountFightingGameOnUserArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFightingGameOnUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightingGameOnUserWhereInput
  }


  /**
   * Count Type SheetCountOutputType
   */

  export type SheetCountOutputType = {
    filter: number
    CharacterOnSheet: number
    OpponentOnSheet: number
  }

  export type SheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filter?: boolean | SheetCountOutputTypeCountFilterArgs
    CharacterOnSheet?: boolean | SheetCountOutputTypeCountCharacterOnSheetArgs
    OpponentOnSheet?: boolean | SheetCountOutputTypeCountOpponentOnSheetArgs
  }

  // Custom InputTypes
  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetCountOutputType
     */
    select?: SheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountFilterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountCharacterOnSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterOnSheetWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountOpponentOnSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpponentOnSheetWhereInput
  }


  /**
   * Count Type FightingGameCountOutputType
   */

  export type FightingGameCountOutputType = {
    characters: number
    Sheet: number
    FightingGameOnUser: number
  }

  export type FightingGameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | FightingGameCountOutputTypeCountCharactersArgs
    Sheet?: boolean | FightingGameCountOutputTypeCountSheetArgs
    FightingGameOnUser?: boolean | FightingGameCountOutputTypeCountFightingGameOnUserArgs
  }

  // Custom InputTypes
  /**
   * FightingGameCountOutputType without action
   */
  export type FightingGameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameCountOutputType
     */
    select?: FightingGameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FightingGameCountOutputType without action
   */
  export type FightingGameCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * FightingGameCountOutputType without action
   */
  export type FightingGameCountOutputTypeCountSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
  }

  /**
   * FightingGameCountOutputType without action
   */
  export type FightingGameCountOutputTypeCountFightingGameOnUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightingGameOnUserWhereInput
  }


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    CharacterOnSheet: number
    OpponentOnSheet: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CharacterOnSheet?: boolean | CharacterCountOutputTypeCountCharacterOnSheetArgs
    OpponentOnSheet?: boolean | CharacterCountOutputTypeCountOpponentOnSheetArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountCharacterOnSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterOnSheetWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountOpponentOnSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpponentOnSheetWhereInput
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
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
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
    name: string
    email: string
    emailVerified: boolean
    image: string | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    Sheet?: boolean | User$SheetArgs<ExtArgs>
    Filter?: boolean | User$FilterArgs<ExtArgs>
    FightingGameOnUser?: boolean | User$FightingGameOnUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    Sheet?: boolean | User$SheetArgs<ExtArgs>
    Filter?: boolean | User$FilterArgs<ExtArgs>
    FightingGameOnUser?: boolean | User$FightingGameOnUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      Sheet: Prisma.$SheetPayload<ExtArgs>[]
      Filter: Prisma.$FilterPayload<ExtArgs>[]
      FightingGameOnUser: Prisma.$FightingGameOnUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
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

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sheet<T extends User$SheetArgs<ExtArgs> = {}>(args?: Subset<T, User$SheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Filter<T extends User$FilterArgs<ExtArgs> = {}>(args?: Subset<T, User$FilterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FightingGameOnUser<T extends User$FightingGameOnUserArgs<ExtArgs> = {}>(args?: Subset<T, User$FightingGameOnUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.Sheet
   */
  export type User$SheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    cursor?: SheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * User.Filter
   */
  export type User$FilterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    where?: FilterWhereInput
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    cursor?: FilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * User.FightingGameOnUser
   */
  export type User$FightingGameOnUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    where?: FightingGameOnUserWhereInput
    orderBy?: FightingGameOnUserOrderByWithRelationInput | FightingGameOnUserOrderByWithRelationInput[]
    cursor?: FightingGameOnUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FightingGameOnUserScalarFieldEnum | FightingGameOnUserScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Sheet
   */

  export type AggregateSheet = {
    _count: SheetCountAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  export type SheetMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    fightingGameId: string | null
  }

  export type SheetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    fightingGameId: string | null
  }

  export type SheetCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    userId: number
    fightingGameId: number
    _all: number
  }


  export type SheetMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    fightingGameId?: true
  }

  export type SheetMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    fightingGameId?: true
  }

  export type SheetCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    fightingGameId?: true
    _all?: true
  }

  export type SheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheet to aggregate.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sheets
    **/
    _count?: true | SheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetMaxAggregateInputType
  }

  export type GetSheetAggregateType<T extends SheetAggregateArgs> = {
        [P in keyof T & keyof AggregateSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheet[P]>
      : GetScalarType<T[P], AggregateSheet[P]>
  }




  export type SheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithAggregationInput | SheetOrderByWithAggregationInput[]
    by: SheetScalarFieldEnum[] | SheetScalarFieldEnum
    having?: SheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetCountAggregateInputType | true
    _min?: SheetMinAggregateInputType
    _max?: SheetMaxAggregateInputType
  }

  export type SheetGroupByOutputType = {
    id: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    userId: string
    fightingGameId: string
    _count: SheetCountAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  type GetSheetGroupByPayload<T extends SheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetGroupByOutputType[P]>
            : GetScalarType<T[P], SheetGroupByOutputType[P]>
        }
      >
    >


  export type SheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    fightingGameId?: boolean
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    filter?: boolean | Sheet$filterArgs<ExtArgs>
    CharacterOnSheet?: boolean | Sheet$CharacterOnSheetArgs<ExtArgs>
    OpponentOnSheet?: boolean | Sheet$OpponentOnSheetArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    fightingGameId?: boolean
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    fightingGameId?: boolean
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    fightingGameId?: boolean
  }

  export type SheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "updatedAt" | "userId" | "fightingGameId", ExtArgs["result"]["sheet"]>
  export type SheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    filter?: boolean | Sheet$filterArgs<ExtArgs>
    CharacterOnSheet?: boolean | Sheet$CharacterOnSheetArgs<ExtArgs>
    OpponentOnSheet?: boolean | Sheet$OpponentOnSheetArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sheet"
    objects: {
      fightingGame: Prisma.$FightingGamePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      filter: Prisma.$FilterPayload<ExtArgs>[]
      CharacterOnSheet: Prisma.$CharacterOnSheetPayload<ExtArgs>[]
      OpponentOnSheet: Prisma.$OpponentOnSheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
      userId: string
      fightingGameId: string
    }, ExtArgs["result"]["sheet"]>
    composites: {}
  }

  type SheetGetPayload<S extends boolean | null | undefined | SheetDefaultArgs> = $Result.GetResult<Prisma.$SheetPayload, S>

  type SheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetCountAggregateInputType | true
    }

  export interface SheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sheet'], meta: { name: 'Sheet' } }
    /**
     * Find zero or one Sheet that matches the filter.
     * @param {SheetFindUniqueArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SheetFindUniqueArgs>(args: SelectSubset<T, SheetFindUniqueArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SheetFindUniqueOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SheetFindUniqueOrThrowArgs>(args: SelectSubset<T, SheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SheetFindFirstArgs>(args?: SelectSubset<T, SheetFindFirstArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SheetFindFirstOrThrowArgs>(args?: SelectSubset<T, SheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheet.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetWithIdOnly = await prisma.sheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SheetFindManyArgs>(args?: SelectSubset<T, SheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheet.
     * @param {SheetCreateArgs} args - Arguments to create a Sheet.
     * @example
     * // Create one Sheet
     * const Sheet = await prisma.sheet.create({
     *   data: {
     *     // ... data to create a Sheet
     *   }
     * })
     * 
     */
    create<T extends SheetCreateArgs>(args: SelectSubset<T, SheetCreateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheets.
     * @param {SheetCreateManyArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SheetCreateManyArgs>(args?: SelectSubset<T, SheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheets and returns the data saved in the database.
     * @param {SheetCreateManyAndReturnArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SheetCreateManyAndReturnArgs>(args?: SelectSubset<T, SheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheet.
     * @param {SheetDeleteArgs} args - Arguments to delete one Sheet.
     * @example
     * // Delete one Sheet
     * const Sheet = await prisma.sheet.delete({
     *   where: {
     *     // ... filter to delete one Sheet
     *   }
     * })
     * 
     */
    delete<T extends SheetDeleteArgs>(args: SelectSubset<T, SheetDeleteArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheet.
     * @param {SheetUpdateArgs} args - Arguments to update one Sheet.
     * @example
     * // Update one Sheet
     * const sheet = await prisma.sheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SheetUpdateArgs>(args: SelectSubset<T, SheetUpdateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheets.
     * @param {SheetDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SheetDeleteManyArgs>(args?: SelectSubset<T, SheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SheetUpdateManyArgs>(args: SelectSubset<T, SheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets and returns the data updated in the database.
     * @param {SheetUpdateManyAndReturnArgs} args - Arguments to update many Sheets.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.updateManyAndReturn({
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
    updateManyAndReturn<T extends SheetUpdateManyAndReturnArgs>(args: SelectSubset<T, SheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheet.
     * @param {SheetUpsertArgs} args - Arguments to update or create a Sheet.
     * @example
     * // Update or create a Sheet
     * const sheet = await prisma.sheet.upsert({
     *   create: {
     *     // ... data to create a Sheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheet we want to update
     *   }
     * })
     */
    upsert<T extends SheetUpsertArgs>(args: SelectSubset<T, SheetUpsertArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheet.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends SheetCountArgs>(
      args?: Subset<T, SheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SheetAggregateArgs>(args: Subset<T, SheetAggregateArgs>): Prisma.PrismaPromise<GetSheetAggregateType<T>>

    /**
     * Group by Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetGroupByArgs} args - Group by arguments.
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
      T extends SheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetGroupByArgs['orderBy'] }
        : { orderBy?: SheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sheet model
   */
  readonly fields: SheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fightingGame<T extends FightingGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FightingGameDefaultArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filter<T extends Sheet$filterArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$filterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CharacterOnSheet<T extends Sheet$CharacterOnSheetArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$CharacterOnSheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OpponentOnSheet<T extends Sheet$OpponentOnSheetArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$OpponentOnSheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sheet model
   */
  interface SheetFieldRefs {
    readonly id: FieldRef<"Sheet", 'String'>
    readonly title: FieldRef<"Sheet", 'String'>
    readonly content: FieldRef<"Sheet", 'String'>
    readonly createdAt: FieldRef<"Sheet", 'DateTime'>
    readonly updatedAt: FieldRef<"Sheet", 'DateTime'>
    readonly userId: FieldRef<"Sheet", 'String'>
    readonly fightingGameId: FieldRef<"Sheet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sheet findUnique
   */
  export type SheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findUniqueOrThrow
   */
  export type SheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findFirst
   */
  export type SheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findFirstOrThrow
   */
  export type SheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findMany
   */
  export type SheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheets to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet create
   */
  export type SheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to create a Sheet.
     */
    data: XOR<SheetCreateInput, SheetUncheckedCreateInput>
  }

  /**
   * Sheet createMany
   */
  export type SheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sheet createManyAndReturn
   */
  export type SheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sheet update
   */
  export type SheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to update a Sheet.
     */
    data: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
    /**
     * Choose, which Sheet to update.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet updateMany
   */
  export type SheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
  }

  /**
   * Sheet updateManyAndReturn
   */
  export type SheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sheet upsert
   */
  export type SheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The filter to search for the Sheet to update in case it exists.
     */
    where: SheetWhereUniqueInput
    /**
     * In case the Sheet found by the `where` argument doesn't exist, create a new Sheet with this data.
     */
    create: XOR<SheetCreateInput, SheetUncheckedCreateInput>
    /**
     * In case the Sheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
  }

  /**
   * Sheet delete
   */
  export type SheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter which Sheet to delete.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet deleteMany
   */
  export type SheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheets to delete
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to delete.
     */
    limit?: number
  }

  /**
   * Sheet.filter
   */
  export type Sheet$filterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    where?: FilterWhereInput
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    cursor?: FilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * Sheet.CharacterOnSheet
   */
  export type Sheet$CharacterOnSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    where?: CharacterOnSheetWhereInput
    orderBy?: CharacterOnSheetOrderByWithRelationInput | CharacterOnSheetOrderByWithRelationInput[]
    cursor?: CharacterOnSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterOnSheetScalarFieldEnum | CharacterOnSheetScalarFieldEnum[]
  }

  /**
   * Sheet.OpponentOnSheet
   */
  export type Sheet$OpponentOnSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    where?: OpponentOnSheetWhereInput
    orderBy?: OpponentOnSheetOrderByWithRelationInput | OpponentOnSheetOrderByWithRelationInput[]
    cursor?: OpponentOnSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpponentOnSheetScalarFieldEnum | OpponentOnSheetScalarFieldEnum[]
  }

  /**
   * Sheet without action
   */
  export type SheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
  }


  /**
   * Model Filter
   */

  export type AggregateFilter = {
    _count: FilterCountAggregateOutputType | null
    _min: FilterMinAggregateOutputType | null
    _max: FilterMaxAggregateOutputType | null
  }

  export type FilterMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    sheetId: string | null
  }

  export type FilterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    sheetId: string | null
  }

  export type FilterCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    sheetId: number
    _all: number
  }


  export type FilterMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    sheetId?: true
  }

  export type FilterMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    sheetId?: true
  }

  export type FilterCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    sheetId?: true
    _all?: true
  }

  export type FilterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filter to aggregate.
     */
    where?: FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filters to fetch.
     */
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filters
    **/
    _count?: true | FilterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilterMaxAggregateInputType
  }

  export type GetFilterAggregateType<T extends FilterAggregateArgs> = {
        [P in keyof T & keyof AggregateFilter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilter[P]>
      : GetScalarType<T[P], AggregateFilter[P]>
  }




  export type FilterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterWhereInput
    orderBy?: FilterOrderByWithAggregationInput | FilterOrderByWithAggregationInput[]
    by: FilterScalarFieldEnum[] | FilterScalarFieldEnum
    having?: FilterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilterCountAggregateInputType | true
    _min?: FilterMinAggregateInputType
    _max?: FilterMaxAggregateInputType
  }

  export type FilterGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string
    sheetId: string | null
    _count: FilterCountAggregateOutputType | null
    _min: FilterMinAggregateOutputType | null
    _max: FilterMaxAggregateOutputType | null
  }

  type GetFilterGroupByPayload<T extends FilterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilterGroupByOutputType[P]>
            : GetScalarType<T[P], FilterGroupByOutputType[P]>
        }
      >
    >


  export type FilterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sheetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Sheet?: boolean | Filter$SheetArgs<ExtArgs>
  }, ExtArgs["result"]["filter"]>

  export type FilterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sheetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Sheet?: boolean | Filter$SheetArgs<ExtArgs>
  }, ExtArgs["result"]["filter"]>

  export type FilterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sheetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Sheet?: boolean | Filter$SheetArgs<ExtArgs>
  }, ExtArgs["result"]["filter"]>

  export type FilterSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sheetId?: boolean
  }

  export type FilterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "userId" | "sheetId", ExtArgs["result"]["filter"]>
  export type FilterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Sheet?: boolean | Filter$SheetArgs<ExtArgs>
  }
  export type FilterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Sheet?: boolean | Filter$SheetArgs<ExtArgs>
  }
  export type FilterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Sheet?: boolean | Filter$SheetArgs<ExtArgs>
  }

  export type $FilterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Filter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Sheet: Prisma.$SheetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      userId: string
      sheetId: string | null
    }, ExtArgs["result"]["filter"]>
    composites: {}
  }

  type FilterGetPayload<S extends boolean | null | undefined | FilterDefaultArgs> = $Result.GetResult<Prisma.$FilterPayload, S>

  type FilterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilterCountAggregateInputType | true
    }

  export interface FilterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Filter'], meta: { name: 'Filter' } }
    /**
     * Find zero or one Filter that matches the filter.
     * @param {FilterFindUniqueArgs} args - Arguments to find a Filter
     * @example
     * // Get one Filter
     * const filter = await prisma.filter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterFindUniqueArgs>(args: SelectSubset<T, FilterFindUniqueArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Filter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterFindUniqueOrThrowArgs} args - Arguments to find a Filter
     * @example
     * // Get one Filter
     * const filter = await prisma.filter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterFindUniqueOrThrowArgs>(args: SelectSubset<T, FilterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterFindFirstArgs} args - Arguments to find a Filter
     * @example
     * // Get one Filter
     * const filter = await prisma.filter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterFindFirstArgs>(args?: SelectSubset<T, FilterFindFirstArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterFindFirstOrThrowArgs} args - Arguments to find a Filter
     * @example
     * // Get one Filter
     * const filter = await prisma.filter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterFindFirstOrThrowArgs>(args?: SelectSubset<T, FilterFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filters
     * const filters = await prisma.filter.findMany()
     * 
     * // Get first 10 Filters
     * const filters = await prisma.filter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filterWithIdOnly = await prisma.filter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilterFindManyArgs>(args?: SelectSubset<T, FilterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Filter.
     * @param {FilterCreateArgs} args - Arguments to create a Filter.
     * @example
     * // Create one Filter
     * const Filter = await prisma.filter.create({
     *   data: {
     *     // ... data to create a Filter
     *   }
     * })
     * 
     */
    create<T extends FilterCreateArgs>(args: SelectSubset<T, FilterCreateArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filters.
     * @param {FilterCreateManyArgs} args - Arguments to create many Filters.
     * @example
     * // Create many Filters
     * const filter = await prisma.filter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilterCreateManyArgs>(args?: SelectSubset<T, FilterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filters and returns the data saved in the database.
     * @param {FilterCreateManyAndReturnArgs} args - Arguments to create many Filters.
     * @example
     * // Create many Filters
     * const filter = await prisma.filter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filters and only return the `id`
     * const filterWithIdOnly = await prisma.filter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilterCreateManyAndReturnArgs>(args?: SelectSubset<T, FilterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Filter.
     * @param {FilterDeleteArgs} args - Arguments to delete one Filter.
     * @example
     * // Delete one Filter
     * const Filter = await prisma.filter.delete({
     *   where: {
     *     // ... filter to delete one Filter
     *   }
     * })
     * 
     */
    delete<T extends FilterDeleteArgs>(args: SelectSubset<T, FilterDeleteArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Filter.
     * @param {FilterUpdateArgs} args - Arguments to update one Filter.
     * @example
     * // Update one Filter
     * const filter = await prisma.filter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilterUpdateArgs>(args: SelectSubset<T, FilterUpdateArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filters.
     * @param {FilterDeleteManyArgs} args - Arguments to filter Filters to delete.
     * @example
     * // Delete a few Filters
     * const { count } = await prisma.filter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilterDeleteManyArgs>(args?: SelectSubset<T, FilterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filters
     * const filter = await prisma.filter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilterUpdateManyArgs>(args: SelectSubset<T, FilterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filters and returns the data updated in the database.
     * @param {FilterUpdateManyAndReturnArgs} args - Arguments to update many Filters.
     * @example
     * // Update many Filters
     * const filter = await prisma.filter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filters and only return the `id`
     * const filterWithIdOnly = await prisma.filter.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilterUpdateManyAndReturnArgs>(args: SelectSubset<T, FilterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Filter.
     * @param {FilterUpsertArgs} args - Arguments to update or create a Filter.
     * @example
     * // Update or create a Filter
     * const filter = await prisma.filter.upsert({
     *   create: {
     *     // ... data to create a Filter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filter we want to update
     *   }
     * })
     */
    upsert<T extends FilterUpsertArgs>(args: SelectSubset<T, FilterUpsertArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCountArgs} args - Arguments to filter Filters to count.
     * @example
     * // Count the number of Filters
     * const count = await prisma.filter.count({
     *   where: {
     *     // ... the filter for the Filters we want to count
     *   }
     * })
    **/
    count<T extends FilterCountArgs>(
      args?: Subset<T, FilterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilterAggregateArgs>(args: Subset<T, FilterAggregateArgs>): Prisma.PrismaPromise<GetFilterAggregateType<T>>

    /**
     * Group by Filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterGroupByArgs} args - Group by arguments.
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
      T extends FilterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilterGroupByArgs['orderBy'] }
        : { orderBy?: FilterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Filter model
   */
  readonly fields: FilterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Filter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sheet<T extends Filter$SheetArgs<ExtArgs> = {}>(args?: Subset<T, Filter$SheetArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Filter model
   */
  interface FilterFieldRefs {
    readonly id: FieldRef<"Filter", 'String'>
    readonly name: FieldRef<"Filter", 'String'>
    readonly createdAt: FieldRef<"Filter", 'DateTime'>
    readonly updatedAt: FieldRef<"Filter", 'DateTime'>
    readonly userId: FieldRef<"Filter", 'String'>
    readonly sheetId: FieldRef<"Filter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Filter findUnique
   */
  export type FilterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filter to fetch.
     */
    where: FilterWhereUniqueInput
  }

  /**
   * Filter findUniqueOrThrow
   */
  export type FilterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filter to fetch.
     */
    where: FilterWhereUniqueInput
  }

  /**
   * Filter findFirst
   */
  export type FilterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filter to fetch.
     */
    where?: FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filters to fetch.
     */
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filters.
     */
    cursor?: FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filters.
     */
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * Filter findFirstOrThrow
   */
  export type FilterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filter to fetch.
     */
    where?: FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filters to fetch.
     */
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filters.
     */
    cursor?: FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filters.
     */
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * Filter findMany
   */
  export type FilterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filters to fetch.
     */
    where?: FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filters to fetch.
     */
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filters.
     */
    cursor?: FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filters.
     */
    skip?: number
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * Filter create
   */
  export type FilterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * The data needed to create a Filter.
     */
    data: XOR<FilterCreateInput, FilterUncheckedCreateInput>
  }

  /**
   * Filter createMany
   */
  export type FilterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filters.
     */
    data: FilterCreateManyInput | FilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filter createManyAndReturn
   */
  export type FilterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * The data used to create many Filters.
     */
    data: FilterCreateManyInput | FilterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Filter update
   */
  export type FilterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * The data needed to update a Filter.
     */
    data: XOR<FilterUpdateInput, FilterUncheckedUpdateInput>
    /**
     * Choose, which Filter to update.
     */
    where: FilterWhereUniqueInput
  }

  /**
   * Filter updateMany
   */
  export type FilterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filters.
     */
    data: XOR<FilterUpdateManyMutationInput, FilterUncheckedUpdateManyInput>
    /**
     * Filter which Filters to update
     */
    where?: FilterWhereInput
    /**
     * Limit how many Filters to update.
     */
    limit?: number
  }

  /**
   * Filter updateManyAndReturn
   */
  export type FilterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * The data used to update Filters.
     */
    data: XOR<FilterUpdateManyMutationInput, FilterUncheckedUpdateManyInput>
    /**
     * Filter which Filters to update
     */
    where?: FilterWhereInput
    /**
     * Limit how many Filters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Filter upsert
   */
  export type FilterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * The filter to search for the Filter to update in case it exists.
     */
    where: FilterWhereUniqueInput
    /**
     * In case the Filter found by the `where` argument doesn't exist, create a new Filter with this data.
     */
    create: XOR<FilterCreateInput, FilterUncheckedCreateInput>
    /**
     * In case the Filter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilterUpdateInput, FilterUncheckedUpdateInput>
  }

  /**
   * Filter delete
   */
  export type FilterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter which Filter to delete.
     */
    where: FilterWhereUniqueInput
  }

  /**
   * Filter deleteMany
   */
  export type FilterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filters to delete
     */
    where?: FilterWhereInput
    /**
     * Limit how many Filters to delete.
     */
    limit?: number
  }

  /**
   * Filter.Sheet
   */
  export type Filter$SheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    where?: SheetWhereInput
  }

  /**
   * Filter without action
   */
  export type FilterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
  }


  /**
   * Model FightingGame
   */

  export type AggregateFightingGame = {
    _count: FightingGameCountAggregateOutputType | null
    _min: FightingGameMinAggregateOutputType | null
    _max: FightingGameMaxAggregateOutputType | null
  }

  export type FightingGameMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FightingGameMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FightingGameCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FightingGameMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FightingGameMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FightingGameCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FightingGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FightingGame to aggregate.
     */
    where?: FightingGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingGames to fetch.
     */
    orderBy?: FightingGameOrderByWithRelationInput | FightingGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FightingGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FightingGames
    **/
    _count?: true | FightingGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FightingGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FightingGameMaxAggregateInputType
  }

  export type GetFightingGameAggregateType<T extends FightingGameAggregateArgs> = {
        [P in keyof T & keyof AggregateFightingGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFightingGame[P]>
      : GetScalarType<T[P], AggregateFightingGame[P]>
  }




  export type FightingGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightingGameWhereInput
    orderBy?: FightingGameOrderByWithAggregationInput | FightingGameOrderByWithAggregationInput[]
    by: FightingGameScalarFieldEnum[] | FightingGameScalarFieldEnum
    having?: FightingGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FightingGameCountAggregateInputType | true
    _min?: FightingGameMinAggregateInputType
    _max?: FightingGameMaxAggregateInputType
  }

  export type FightingGameGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: FightingGameCountAggregateOutputType | null
    _min: FightingGameMinAggregateOutputType | null
    _max: FightingGameMaxAggregateOutputType | null
  }

  type GetFightingGameGroupByPayload<T extends FightingGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FightingGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FightingGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FightingGameGroupByOutputType[P]>
            : GetScalarType<T[P], FightingGameGroupByOutputType[P]>
        }
      >
    >


  export type FightingGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    characters?: boolean | FightingGame$charactersArgs<ExtArgs>
    Sheet?: boolean | FightingGame$SheetArgs<ExtArgs>
    FightingGameOnUser?: boolean | FightingGame$FightingGameOnUserArgs<ExtArgs>
    _count?: boolean | FightingGameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fightingGame"]>

  export type FightingGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fightingGame"]>

  export type FightingGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fightingGame"]>

  export type FightingGameSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FightingGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["fightingGame"]>
  export type FightingGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | FightingGame$charactersArgs<ExtArgs>
    Sheet?: boolean | FightingGame$SheetArgs<ExtArgs>
    FightingGameOnUser?: boolean | FightingGame$FightingGameOnUserArgs<ExtArgs>
    _count?: boolean | FightingGameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FightingGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FightingGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FightingGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FightingGame"
    objects: {
      characters: Prisma.$CharacterPayload<ExtArgs>[]
      Sheet: Prisma.$SheetPayload<ExtArgs>[]
      FightingGameOnUser: Prisma.$FightingGameOnUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fightingGame"]>
    composites: {}
  }

  type FightingGameGetPayload<S extends boolean | null | undefined | FightingGameDefaultArgs> = $Result.GetResult<Prisma.$FightingGamePayload, S>

  type FightingGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FightingGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FightingGameCountAggregateInputType | true
    }

  export interface FightingGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FightingGame'], meta: { name: 'FightingGame' } }
    /**
     * Find zero or one FightingGame that matches the filter.
     * @param {FightingGameFindUniqueArgs} args - Arguments to find a FightingGame
     * @example
     * // Get one FightingGame
     * const fightingGame = await prisma.fightingGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FightingGameFindUniqueArgs>(args: SelectSubset<T, FightingGameFindUniqueArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FightingGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FightingGameFindUniqueOrThrowArgs} args - Arguments to find a FightingGame
     * @example
     * // Get one FightingGame
     * const fightingGame = await prisma.fightingGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FightingGameFindUniqueOrThrowArgs>(args: SelectSubset<T, FightingGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FightingGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameFindFirstArgs} args - Arguments to find a FightingGame
     * @example
     * // Get one FightingGame
     * const fightingGame = await prisma.fightingGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FightingGameFindFirstArgs>(args?: SelectSubset<T, FightingGameFindFirstArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FightingGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameFindFirstOrThrowArgs} args - Arguments to find a FightingGame
     * @example
     * // Get one FightingGame
     * const fightingGame = await prisma.fightingGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FightingGameFindFirstOrThrowArgs>(args?: SelectSubset<T, FightingGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FightingGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FightingGames
     * const fightingGames = await prisma.fightingGame.findMany()
     * 
     * // Get first 10 FightingGames
     * const fightingGames = await prisma.fightingGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fightingGameWithIdOnly = await prisma.fightingGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FightingGameFindManyArgs>(args?: SelectSubset<T, FightingGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FightingGame.
     * @param {FightingGameCreateArgs} args - Arguments to create a FightingGame.
     * @example
     * // Create one FightingGame
     * const FightingGame = await prisma.fightingGame.create({
     *   data: {
     *     // ... data to create a FightingGame
     *   }
     * })
     * 
     */
    create<T extends FightingGameCreateArgs>(args: SelectSubset<T, FightingGameCreateArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FightingGames.
     * @param {FightingGameCreateManyArgs} args - Arguments to create many FightingGames.
     * @example
     * // Create many FightingGames
     * const fightingGame = await prisma.fightingGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FightingGameCreateManyArgs>(args?: SelectSubset<T, FightingGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FightingGames and returns the data saved in the database.
     * @param {FightingGameCreateManyAndReturnArgs} args - Arguments to create many FightingGames.
     * @example
     * // Create many FightingGames
     * const fightingGame = await prisma.fightingGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FightingGames and only return the `id`
     * const fightingGameWithIdOnly = await prisma.fightingGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FightingGameCreateManyAndReturnArgs>(args?: SelectSubset<T, FightingGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FightingGame.
     * @param {FightingGameDeleteArgs} args - Arguments to delete one FightingGame.
     * @example
     * // Delete one FightingGame
     * const FightingGame = await prisma.fightingGame.delete({
     *   where: {
     *     // ... filter to delete one FightingGame
     *   }
     * })
     * 
     */
    delete<T extends FightingGameDeleteArgs>(args: SelectSubset<T, FightingGameDeleteArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FightingGame.
     * @param {FightingGameUpdateArgs} args - Arguments to update one FightingGame.
     * @example
     * // Update one FightingGame
     * const fightingGame = await prisma.fightingGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FightingGameUpdateArgs>(args: SelectSubset<T, FightingGameUpdateArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FightingGames.
     * @param {FightingGameDeleteManyArgs} args - Arguments to filter FightingGames to delete.
     * @example
     * // Delete a few FightingGames
     * const { count } = await prisma.fightingGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FightingGameDeleteManyArgs>(args?: SelectSubset<T, FightingGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FightingGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FightingGames
     * const fightingGame = await prisma.fightingGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FightingGameUpdateManyArgs>(args: SelectSubset<T, FightingGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FightingGames and returns the data updated in the database.
     * @param {FightingGameUpdateManyAndReturnArgs} args - Arguments to update many FightingGames.
     * @example
     * // Update many FightingGames
     * const fightingGame = await prisma.fightingGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FightingGames and only return the `id`
     * const fightingGameWithIdOnly = await prisma.fightingGame.updateManyAndReturn({
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
    updateManyAndReturn<T extends FightingGameUpdateManyAndReturnArgs>(args: SelectSubset<T, FightingGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FightingGame.
     * @param {FightingGameUpsertArgs} args - Arguments to update or create a FightingGame.
     * @example
     * // Update or create a FightingGame
     * const fightingGame = await prisma.fightingGame.upsert({
     *   create: {
     *     // ... data to create a FightingGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FightingGame we want to update
     *   }
     * })
     */
    upsert<T extends FightingGameUpsertArgs>(args: SelectSubset<T, FightingGameUpsertArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FightingGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameCountArgs} args - Arguments to filter FightingGames to count.
     * @example
     * // Count the number of FightingGames
     * const count = await prisma.fightingGame.count({
     *   where: {
     *     // ... the filter for the FightingGames we want to count
     *   }
     * })
    **/
    count<T extends FightingGameCountArgs>(
      args?: Subset<T, FightingGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FightingGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FightingGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FightingGameAggregateArgs>(args: Subset<T, FightingGameAggregateArgs>): Prisma.PrismaPromise<GetFightingGameAggregateType<T>>

    /**
     * Group by FightingGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameGroupByArgs} args - Group by arguments.
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
      T extends FightingGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FightingGameGroupByArgs['orderBy'] }
        : { orderBy?: FightingGameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FightingGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFightingGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FightingGame model
   */
  readonly fields: FightingGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FightingGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FightingGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends FightingGame$charactersArgs<ExtArgs> = {}>(args?: Subset<T, FightingGame$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sheet<T extends FightingGame$SheetArgs<ExtArgs> = {}>(args?: Subset<T, FightingGame$SheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FightingGameOnUser<T extends FightingGame$FightingGameOnUserArgs<ExtArgs> = {}>(args?: Subset<T, FightingGame$FightingGameOnUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FightingGame model
   */
  interface FightingGameFieldRefs {
    readonly id: FieldRef<"FightingGame", 'String'>
    readonly name: FieldRef<"FightingGame", 'String'>
    readonly createdAt: FieldRef<"FightingGame", 'DateTime'>
    readonly updatedAt: FieldRef<"FightingGame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FightingGame findUnique
   */
  export type FightingGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * Filter, which FightingGame to fetch.
     */
    where: FightingGameWhereUniqueInput
  }

  /**
   * FightingGame findUniqueOrThrow
   */
  export type FightingGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * Filter, which FightingGame to fetch.
     */
    where: FightingGameWhereUniqueInput
  }

  /**
   * FightingGame findFirst
   */
  export type FightingGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * Filter, which FightingGame to fetch.
     */
    where?: FightingGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingGames to fetch.
     */
    orderBy?: FightingGameOrderByWithRelationInput | FightingGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FightingGames.
     */
    cursor?: FightingGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FightingGames.
     */
    distinct?: FightingGameScalarFieldEnum | FightingGameScalarFieldEnum[]
  }

  /**
   * FightingGame findFirstOrThrow
   */
  export type FightingGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * Filter, which FightingGame to fetch.
     */
    where?: FightingGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingGames to fetch.
     */
    orderBy?: FightingGameOrderByWithRelationInput | FightingGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FightingGames.
     */
    cursor?: FightingGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FightingGames.
     */
    distinct?: FightingGameScalarFieldEnum | FightingGameScalarFieldEnum[]
  }

  /**
   * FightingGame findMany
   */
  export type FightingGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * Filter, which FightingGames to fetch.
     */
    where?: FightingGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingGames to fetch.
     */
    orderBy?: FightingGameOrderByWithRelationInput | FightingGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FightingGames.
     */
    cursor?: FightingGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingGames.
     */
    skip?: number
    distinct?: FightingGameScalarFieldEnum | FightingGameScalarFieldEnum[]
  }

  /**
   * FightingGame create
   */
  export type FightingGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * The data needed to create a FightingGame.
     */
    data: XOR<FightingGameCreateInput, FightingGameUncheckedCreateInput>
  }

  /**
   * FightingGame createMany
   */
  export type FightingGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FightingGames.
     */
    data: FightingGameCreateManyInput | FightingGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FightingGame createManyAndReturn
   */
  export type FightingGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * The data used to create many FightingGames.
     */
    data: FightingGameCreateManyInput | FightingGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FightingGame update
   */
  export type FightingGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * The data needed to update a FightingGame.
     */
    data: XOR<FightingGameUpdateInput, FightingGameUncheckedUpdateInput>
    /**
     * Choose, which FightingGame to update.
     */
    where: FightingGameWhereUniqueInput
  }

  /**
   * FightingGame updateMany
   */
  export type FightingGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FightingGames.
     */
    data: XOR<FightingGameUpdateManyMutationInput, FightingGameUncheckedUpdateManyInput>
    /**
     * Filter which FightingGames to update
     */
    where?: FightingGameWhereInput
    /**
     * Limit how many FightingGames to update.
     */
    limit?: number
  }

  /**
   * FightingGame updateManyAndReturn
   */
  export type FightingGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * The data used to update FightingGames.
     */
    data: XOR<FightingGameUpdateManyMutationInput, FightingGameUncheckedUpdateManyInput>
    /**
     * Filter which FightingGames to update
     */
    where?: FightingGameWhereInput
    /**
     * Limit how many FightingGames to update.
     */
    limit?: number
  }

  /**
   * FightingGame upsert
   */
  export type FightingGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * The filter to search for the FightingGame to update in case it exists.
     */
    where: FightingGameWhereUniqueInput
    /**
     * In case the FightingGame found by the `where` argument doesn't exist, create a new FightingGame with this data.
     */
    create: XOR<FightingGameCreateInput, FightingGameUncheckedCreateInput>
    /**
     * In case the FightingGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FightingGameUpdateInput, FightingGameUncheckedUpdateInput>
  }

  /**
   * FightingGame delete
   */
  export type FightingGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
    /**
     * Filter which FightingGame to delete.
     */
    where: FightingGameWhereUniqueInput
  }

  /**
   * FightingGame deleteMany
   */
  export type FightingGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FightingGames to delete
     */
    where?: FightingGameWhereInput
    /**
     * Limit how many FightingGames to delete.
     */
    limit?: number
  }

  /**
   * FightingGame.characters
   */
  export type FightingGame$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * FightingGame.Sheet
   */
  export type FightingGame$SheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    cursor?: SheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * FightingGame.FightingGameOnUser
   */
  export type FightingGame$FightingGameOnUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    where?: FightingGameOnUserWhereInput
    orderBy?: FightingGameOnUserOrderByWithRelationInput | FightingGameOnUserOrderByWithRelationInput[]
    cursor?: FightingGameOnUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FightingGameOnUserScalarFieldEnum | FightingGameOnUserScalarFieldEnum[]
  }

  /**
   * FightingGame without action
   */
  export type FightingGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGame
     */
    select?: FightingGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGame
     */
    omit?: FightingGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fightingGameId: string | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fightingGameId: string | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    fightingGameId: number
    _all: number
  }


  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    fightingGameId?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    fightingGameId?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    fightingGameId?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    fightingGameId: string
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fightingGameId?: boolean
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
    CharacterOnSheet?: boolean | Character$CharacterOnSheetArgs<ExtArgs>
    OpponentOnSheet?: boolean | Character$OpponentOnSheetArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fightingGameId?: boolean
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fightingGameId?: boolean
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fightingGameId?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "fightingGameId", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
    CharacterOnSheet?: boolean | Character$CharacterOnSheetArgs<ExtArgs>
    OpponentOnSheet?: boolean | Character$OpponentOnSheetArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      fightingGame: Prisma.$FightingGamePayload<ExtArgs>
      CharacterOnSheet: Prisma.$CharacterOnSheetPayload<ExtArgs>[]
      OpponentOnSheet: Prisma.$OpponentOnSheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      fightingGameId: string
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
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
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fightingGame<T extends FightingGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FightingGameDefaultArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CharacterOnSheet<T extends Character$CharacterOnSheetArgs<ExtArgs> = {}>(args?: Subset<T, Character$CharacterOnSheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OpponentOnSheet<T extends Character$OpponentOnSheetArgs<ExtArgs> = {}>(args?: Subset<T, Character$OpponentOnSheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly name: FieldRef<"Character", 'String'>
    readonly createdAt: FieldRef<"Character", 'DateTime'>
    readonly updatedAt: FieldRef<"Character", 'DateTime'>
    readonly fightingGameId: FieldRef<"Character", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.CharacterOnSheet
   */
  export type Character$CharacterOnSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    where?: CharacterOnSheetWhereInput
    orderBy?: CharacterOnSheetOrderByWithRelationInput | CharacterOnSheetOrderByWithRelationInput[]
    cursor?: CharacterOnSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterOnSheetScalarFieldEnum | CharacterOnSheetScalarFieldEnum[]
  }

  /**
   * Character.OpponentOnSheet
   */
  export type Character$OpponentOnSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    where?: OpponentOnSheetWhereInput
    orderBy?: OpponentOnSheetOrderByWithRelationInput | OpponentOnSheetOrderByWithRelationInput[]
    cursor?: OpponentOnSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpponentOnSheetScalarFieldEnum | OpponentOnSheetScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model CharacterOnSheet
   */

  export type AggregateCharacterOnSheet = {
    _count: CharacterOnSheetCountAggregateOutputType | null
    _min: CharacterOnSheetMinAggregateOutputType | null
    _max: CharacterOnSheetMaxAggregateOutputType | null
  }

  export type CharacterOnSheetMinAggregateOutputType = {
    id: string | null
    characterId: string | null
    sheetId: string | null
  }

  export type CharacterOnSheetMaxAggregateOutputType = {
    id: string | null
    characterId: string | null
    sheetId: string | null
  }

  export type CharacterOnSheetCountAggregateOutputType = {
    id: number
    characterId: number
    sheetId: number
    _all: number
  }


  export type CharacterOnSheetMinAggregateInputType = {
    id?: true
    characterId?: true
    sheetId?: true
  }

  export type CharacterOnSheetMaxAggregateInputType = {
    id?: true
    characterId?: true
    sheetId?: true
  }

  export type CharacterOnSheetCountAggregateInputType = {
    id?: true
    characterId?: true
    sheetId?: true
    _all?: true
  }

  export type CharacterOnSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterOnSheet to aggregate.
     */
    where?: CharacterOnSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterOnSheets to fetch.
     */
    orderBy?: CharacterOnSheetOrderByWithRelationInput | CharacterOnSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterOnSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterOnSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterOnSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterOnSheets
    **/
    _count?: true | CharacterOnSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterOnSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterOnSheetMaxAggregateInputType
  }

  export type GetCharacterOnSheetAggregateType<T extends CharacterOnSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterOnSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterOnSheet[P]>
      : GetScalarType<T[P], AggregateCharacterOnSheet[P]>
  }




  export type CharacterOnSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterOnSheetWhereInput
    orderBy?: CharacterOnSheetOrderByWithAggregationInput | CharacterOnSheetOrderByWithAggregationInput[]
    by: CharacterOnSheetScalarFieldEnum[] | CharacterOnSheetScalarFieldEnum
    having?: CharacterOnSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterOnSheetCountAggregateInputType | true
    _min?: CharacterOnSheetMinAggregateInputType
    _max?: CharacterOnSheetMaxAggregateInputType
  }

  export type CharacterOnSheetGroupByOutputType = {
    id: string
    characterId: string
    sheetId: string
    _count: CharacterOnSheetCountAggregateOutputType | null
    _min: CharacterOnSheetMinAggregateOutputType | null
    _max: CharacterOnSheetMaxAggregateOutputType | null
  }

  type GetCharacterOnSheetGroupByPayload<T extends CharacterOnSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterOnSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterOnSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterOnSheetGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterOnSheetGroupByOutputType[P]>
        }
      >
    >


  export type CharacterOnSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    sheetId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterOnSheet"]>

  export type CharacterOnSheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    sheetId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterOnSheet"]>

  export type CharacterOnSheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    sheetId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterOnSheet"]>

  export type CharacterOnSheetSelectScalar = {
    id?: boolean
    characterId?: boolean
    sheetId?: boolean
  }

  export type CharacterOnSheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "sheetId", ExtArgs["result"]["characterOnSheet"]>
  export type CharacterOnSheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type CharacterOnSheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type CharacterOnSheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $CharacterOnSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterOnSheet"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      sheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      characterId: string
      sheetId: string
    }, ExtArgs["result"]["characterOnSheet"]>
    composites: {}
  }

  type CharacterOnSheetGetPayload<S extends boolean | null | undefined | CharacterOnSheetDefaultArgs> = $Result.GetResult<Prisma.$CharacterOnSheetPayload, S>

  type CharacterOnSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterOnSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterOnSheetCountAggregateInputType | true
    }

  export interface CharacterOnSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterOnSheet'], meta: { name: 'CharacterOnSheet' } }
    /**
     * Find zero or one CharacterOnSheet that matches the filter.
     * @param {CharacterOnSheetFindUniqueArgs} args - Arguments to find a CharacterOnSheet
     * @example
     * // Get one CharacterOnSheet
     * const characterOnSheet = await prisma.characterOnSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterOnSheetFindUniqueArgs>(args: SelectSubset<T, CharacterOnSheetFindUniqueArgs<ExtArgs>>): Prisma__CharacterOnSheetClient<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharacterOnSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterOnSheetFindUniqueOrThrowArgs} args - Arguments to find a CharacterOnSheet
     * @example
     * // Get one CharacterOnSheet
     * const characterOnSheet = await prisma.characterOnSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterOnSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterOnSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterOnSheetClient<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterOnSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterOnSheetFindFirstArgs} args - Arguments to find a CharacterOnSheet
     * @example
     * // Get one CharacterOnSheet
     * const characterOnSheet = await prisma.characterOnSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterOnSheetFindFirstArgs>(args?: SelectSubset<T, CharacterOnSheetFindFirstArgs<ExtArgs>>): Prisma__CharacterOnSheetClient<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterOnSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterOnSheetFindFirstOrThrowArgs} args - Arguments to find a CharacterOnSheet
     * @example
     * // Get one CharacterOnSheet
     * const characterOnSheet = await prisma.characterOnSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterOnSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterOnSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterOnSheetClient<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharacterOnSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterOnSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterOnSheets
     * const characterOnSheets = await prisma.characterOnSheet.findMany()
     * 
     * // Get first 10 CharacterOnSheets
     * const characterOnSheets = await prisma.characterOnSheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterOnSheetWithIdOnly = await prisma.characterOnSheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterOnSheetFindManyArgs>(args?: SelectSubset<T, CharacterOnSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharacterOnSheet.
     * @param {CharacterOnSheetCreateArgs} args - Arguments to create a CharacterOnSheet.
     * @example
     * // Create one CharacterOnSheet
     * const CharacterOnSheet = await prisma.characterOnSheet.create({
     *   data: {
     *     // ... data to create a CharacterOnSheet
     *   }
     * })
     * 
     */
    create<T extends CharacterOnSheetCreateArgs>(args: SelectSubset<T, CharacterOnSheetCreateArgs<ExtArgs>>): Prisma__CharacterOnSheetClient<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharacterOnSheets.
     * @param {CharacterOnSheetCreateManyArgs} args - Arguments to create many CharacterOnSheets.
     * @example
     * // Create many CharacterOnSheets
     * const characterOnSheet = await prisma.characterOnSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterOnSheetCreateManyArgs>(args?: SelectSubset<T, CharacterOnSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterOnSheets and returns the data saved in the database.
     * @param {CharacterOnSheetCreateManyAndReturnArgs} args - Arguments to create many CharacterOnSheets.
     * @example
     * // Create many CharacterOnSheets
     * const characterOnSheet = await prisma.characterOnSheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterOnSheets and only return the `id`
     * const characterOnSheetWithIdOnly = await prisma.characterOnSheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterOnSheetCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterOnSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharacterOnSheet.
     * @param {CharacterOnSheetDeleteArgs} args - Arguments to delete one CharacterOnSheet.
     * @example
     * // Delete one CharacterOnSheet
     * const CharacterOnSheet = await prisma.characterOnSheet.delete({
     *   where: {
     *     // ... filter to delete one CharacterOnSheet
     *   }
     * })
     * 
     */
    delete<T extends CharacterOnSheetDeleteArgs>(args: SelectSubset<T, CharacterOnSheetDeleteArgs<ExtArgs>>): Prisma__CharacterOnSheetClient<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharacterOnSheet.
     * @param {CharacterOnSheetUpdateArgs} args - Arguments to update one CharacterOnSheet.
     * @example
     * // Update one CharacterOnSheet
     * const characterOnSheet = await prisma.characterOnSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterOnSheetUpdateArgs>(args: SelectSubset<T, CharacterOnSheetUpdateArgs<ExtArgs>>): Prisma__CharacterOnSheetClient<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharacterOnSheets.
     * @param {CharacterOnSheetDeleteManyArgs} args - Arguments to filter CharacterOnSheets to delete.
     * @example
     * // Delete a few CharacterOnSheets
     * const { count } = await prisma.characterOnSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterOnSheetDeleteManyArgs>(args?: SelectSubset<T, CharacterOnSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterOnSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterOnSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterOnSheets
     * const characterOnSheet = await prisma.characterOnSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterOnSheetUpdateManyArgs>(args: SelectSubset<T, CharacterOnSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterOnSheets and returns the data updated in the database.
     * @param {CharacterOnSheetUpdateManyAndReturnArgs} args - Arguments to update many CharacterOnSheets.
     * @example
     * // Update many CharacterOnSheets
     * const characterOnSheet = await prisma.characterOnSheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharacterOnSheets and only return the `id`
     * const characterOnSheetWithIdOnly = await prisma.characterOnSheet.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterOnSheetUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterOnSheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharacterOnSheet.
     * @param {CharacterOnSheetUpsertArgs} args - Arguments to update or create a CharacterOnSheet.
     * @example
     * // Update or create a CharacterOnSheet
     * const characterOnSheet = await prisma.characterOnSheet.upsert({
     *   create: {
     *     // ... data to create a CharacterOnSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterOnSheet we want to update
     *   }
     * })
     */
    upsert<T extends CharacterOnSheetUpsertArgs>(args: SelectSubset<T, CharacterOnSheetUpsertArgs<ExtArgs>>): Prisma__CharacterOnSheetClient<$Result.GetResult<Prisma.$CharacterOnSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharacterOnSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterOnSheetCountArgs} args - Arguments to filter CharacterOnSheets to count.
     * @example
     * // Count the number of CharacterOnSheets
     * const count = await prisma.characterOnSheet.count({
     *   where: {
     *     // ... the filter for the CharacterOnSheets we want to count
     *   }
     * })
    **/
    count<T extends CharacterOnSheetCountArgs>(
      args?: Subset<T, CharacterOnSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterOnSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterOnSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterOnSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterOnSheetAggregateArgs>(args: Subset<T, CharacterOnSheetAggregateArgs>): Prisma.PrismaPromise<GetCharacterOnSheetAggregateType<T>>

    /**
     * Group by CharacterOnSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterOnSheetGroupByArgs} args - Group by arguments.
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
      T extends CharacterOnSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterOnSheetGroupByArgs['orderBy'] }
        : { orderBy?: CharacterOnSheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterOnSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterOnSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterOnSheet model
   */
  readonly fields: CharacterOnSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterOnSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterOnSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CharacterOnSheet model
   */
  interface CharacterOnSheetFieldRefs {
    readonly id: FieldRef<"CharacterOnSheet", 'String'>
    readonly characterId: FieldRef<"CharacterOnSheet", 'String'>
    readonly sheetId: FieldRef<"CharacterOnSheet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CharacterOnSheet findUnique
   */
  export type CharacterOnSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which CharacterOnSheet to fetch.
     */
    where: CharacterOnSheetWhereUniqueInput
  }

  /**
   * CharacterOnSheet findUniqueOrThrow
   */
  export type CharacterOnSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which CharacterOnSheet to fetch.
     */
    where: CharacterOnSheetWhereUniqueInput
  }

  /**
   * CharacterOnSheet findFirst
   */
  export type CharacterOnSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which CharacterOnSheet to fetch.
     */
    where?: CharacterOnSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterOnSheets to fetch.
     */
    orderBy?: CharacterOnSheetOrderByWithRelationInput | CharacterOnSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterOnSheets.
     */
    cursor?: CharacterOnSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterOnSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterOnSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterOnSheets.
     */
    distinct?: CharacterOnSheetScalarFieldEnum | CharacterOnSheetScalarFieldEnum[]
  }

  /**
   * CharacterOnSheet findFirstOrThrow
   */
  export type CharacterOnSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which CharacterOnSheet to fetch.
     */
    where?: CharacterOnSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterOnSheets to fetch.
     */
    orderBy?: CharacterOnSheetOrderByWithRelationInput | CharacterOnSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterOnSheets.
     */
    cursor?: CharacterOnSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterOnSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterOnSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterOnSheets.
     */
    distinct?: CharacterOnSheetScalarFieldEnum | CharacterOnSheetScalarFieldEnum[]
  }

  /**
   * CharacterOnSheet findMany
   */
  export type CharacterOnSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which CharacterOnSheets to fetch.
     */
    where?: CharacterOnSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterOnSheets to fetch.
     */
    orderBy?: CharacterOnSheetOrderByWithRelationInput | CharacterOnSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterOnSheets.
     */
    cursor?: CharacterOnSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterOnSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterOnSheets.
     */
    skip?: number
    distinct?: CharacterOnSheetScalarFieldEnum | CharacterOnSheetScalarFieldEnum[]
  }

  /**
   * CharacterOnSheet create
   */
  export type CharacterOnSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterOnSheet.
     */
    data: XOR<CharacterOnSheetCreateInput, CharacterOnSheetUncheckedCreateInput>
  }

  /**
   * CharacterOnSheet createMany
   */
  export type CharacterOnSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterOnSheets.
     */
    data: CharacterOnSheetCreateManyInput | CharacterOnSheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterOnSheet createManyAndReturn
   */
  export type CharacterOnSheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * The data used to create many CharacterOnSheets.
     */
    data: CharacterOnSheetCreateManyInput | CharacterOnSheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterOnSheet update
   */
  export type CharacterOnSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterOnSheet.
     */
    data: XOR<CharacterOnSheetUpdateInput, CharacterOnSheetUncheckedUpdateInput>
    /**
     * Choose, which CharacterOnSheet to update.
     */
    where: CharacterOnSheetWhereUniqueInput
  }

  /**
   * CharacterOnSheet updateMany
   */
  export type CharacterOnSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterOnSheets.
     */
    data: XOR<CharacterOnSheetUpdateManyMutationInput, CharacterOnSheetUncheckedUpdateManyInput>
    /**
     * Filter which CharacterOnSheets to update
     */
    where?: CharacterOnSheetWhereInput
    /**
     * Limit how many CharacterOnSheets to update.
     */
    limit?: number
  }

  /**
   * CharacterOnSheet updateManyAndReturn
   */
  export type CharacterOnSheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * The data used to update CharacterOnSheets.
     */
    data: XOR<CharacterOnSheetUpdateManyMutationInput, CharacterOnSheetUncheckedUpdateManyInput>
    /**
     * Filter which CharacterOnSheets to update
     */
    where?: CharacterOnSheetWhereInput
    /**
     * Limit how many CharacterOnSheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterOnSheet upsert
   */
  export type CharacterOnSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterOnSheet to update in case it exists.
     */
    where: CharacterOnSheetWhereUniqueInput
    /**
     * In case the CharacterOnSheet found by the `where` argument doesn't exist, create a new CharacterOnSheet with this data.
     */
    create: XOR<CharacterOnSheetCreateInput, CharacterOnSheetUncheckedCreateInput>
    /**
     * In case the CharacterOnSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterOnSheetUpdateInput, CharacterOnSheetUncheckedUpdateInput>
  }

  /**
   * CharacterOnSheet delete
   */
  export type CharacterOnSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
    /**
     * Filter which CharacterOnSheet to delete.
     */
    where: CharacterOnSheetWhereUniqueInput
  }

  /**
   * CharacterOnSheet deleteMany
   */
  export type CharacterOnSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterOnSheets to delete
     */
    where?: CharacterOnSheetWhereInput
    /**
     * Limit how many CharacterOnSheets to delete.
     */
    limit?: number
  }

  /**
   * CharacterOnSheet without action
   */
  export type CharacterOnSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterOnSheet
     */
    select?: CharacterOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterOnSheet
     */
    omit?: CharacterOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterOnSheetInclude<ExtArgs> | null
  }


  /**
   * Model OpponentOnSheet
   */

  export type AggregateOpponentOnSheet = {
    _count: OpponentOnSheetCountAggregateOutputType | null
    _min: OpponentOnSheetMinAggregateOutputType | null
    _max: OpponentOnSheetMaxAggregateOutputType | null
  }

  export type OpponentOnSheetMinAggregateOutputType = {
    id: string | null
    opponentId: string | null
    sheetId: string | null
  }

  export type OpponentOnSheetMaxAggregateOutputType = {
    id: string | null
    opponentId: string | null
    sheetId: string | null
  }

  export type OpponentOnSheetCountAggregateOutputType = {
    id: number
    opponentId: number
    sheetId: number
    _all: number
  }


  export type OpponentOnSheetMinAggregateInputType = {
    id?: true
    opponentId?: true
    sheetId?: true
  }

  export type OpponentOnSheetMaxAggregateInputType = {
    id?: true
    opponentId?: true
    sheetId?: true
  }

  export type OpponentOnSheetCountAggregateInputType = {
    id?: true
    opponentId?: true
    sheetId?: true
    _all?: true
  }

  export type OpponentOnSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpponentOnSheet to aggregate.
     */
    where?: OpponentOnSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpponentOnSheets to fetch.
     */
    orderBy?: OpponentOnSheetOrderByWithRelationInput | OpponentOnSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpponentOnSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpponentOnSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpponentOnSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpponentOnSheets
    **/
    _count?: true | OpponentOnSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpponentOnSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpponentOnSheetMaxAggregateInputType
  }

  export type GetOpponentOnSheetAggregateType<T extends OpponentOnSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateOpponentOnSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpponentOnSheet[P]>
      : GetScalarType<T[P], AggregateOpponentOnSheet[P]>
  }




  export type OpponentOnSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpponentOnSheetWhereInput
    orderBy?: OpponentOnSheetOrderByWithAggregationInput | OpponentOnSheetOrderByWithAggregationInput[]
    by: OpponentOnSheetScalarFieldEnum[] | OpponentOnSheetScalarFieldEnum
    having?: OpponentOnSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpponentOnSheetCountAggregateInputType | true
    _min?: OpponentOnSheetMinAggregateInputType
    _max?: OpponentOnSheetMaxAggregateInputType
  }

  export type OpponentOnSheetGroupByOutputType = {
    id: string
    opponentId: string
    sheetId: string
    _count: OpponentOnSheetCountAggregateOutputType | null
    _min: OpponentOnSheetMinAggregateOutputType | null
    _max: OpponentOnSheetMaxAggregateOutputType | null
  }

  type GetOpponentOnSheetGroupByPayload<T extends OpponentOnSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpponentOnSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpponentOnSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpponentOnSheetGroupByOutputType[P]>
            : GetScalarType<T[P], OpponentOnSheetGroupByOutputType[P]>
        }
      >
    >


  export type OpponentOnSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opponentId?: boolean
    sheetId?: boolean
    opponent?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opponentOnSheet"]>

  export type OpponentOnSheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opponentId?: boolean
    sheetId?: boolean
    opponent?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opponentOnSheet"]>

  export type OpponentOnSheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opponentId?: boolean
    sheetId?: boolean
    opponent?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opponentOnSheet"]>

  export type OpponentOnSheetSelectScalar = {
    id?: boolean
    opponentId?: boolean
    sheetId?: boolean
  }

  export type OpponentOnSheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "opponentId" | "sheetId", ExtArgs["result"]["opponentOnSheet"]>
  export type OpponentOnSheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opponent?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type OpponentOnSheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opponent?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type OpponentOnSheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opponent?: boolean | CharacterDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $OpponentOnSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpponentOnSheet"
    objects: {
      opponent: Prisma.$CharacterPayload<ExtArgs>
      sheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      opponentId: string
      sheetId: string
    }, ExtArgs["result"]["opponentOnSheet"]>
    composites: {}
  }

  type OpponentOnSheetGetPayload<S extends boolean | null | undefined | OpponentOnSheetDefaultArgs> = $Result.GetResult<Prisma.$OpponentOnSheetPayload, S>

  type OpponentOnSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpponentOnSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpponentOnSheetCountAggregateInputType | true
    }

  export interface OpponentOnSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpponentOnSheet'], meta: { name: 'OpponentOnSheet' } }
    /**
     * Find zero or one OpponentOnSheet that matches the filter.
     * @param {OpponentOnSheetFindUniqueArgs} args - Arguments to find a OpponentOnSheet
     * @example
     * // Get one OpponentOnSheet
     * const opponentOnSheet = await prisma.opponentOnSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpponentOnSheetFindUniqueArgs>(args: SelectSubset<T, OpponentOnSheetFindUniqueArgs<ExtArgs>>): Prisma__OpponentOnSheetClient<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpponentOnSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpponentOnSheetFindUniqueOrThrowArgs} args - Arguments to find a OpponentOnSheet
     * @example
     * // Get one OpponentOnSheet
     * const opponentOnSheet = await prisma.opponentOnSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpponentOnSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, OpponentOnSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpponentOnSheetClient<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpponentOnSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentOnSheetFindFirstArgs} args - Arguments to find a OpponentOnSheet
     * @example
     * // Get one OpponentOnSheet
     * const opponentOnSheet = await prisma.opponentOnSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpponentOnSheetFindFirstArgs>(args?: SelectSubset<T, OpponentOnSheetFindFirstArgs<ExtArgs>>): Prisma__OpponentOnSheetClient<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpponentOnSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentOnSheetFindFirstOrThrowArgs} args - Arguments to find a OpponentOnSheet
     * @example
     * // Get one OpponentOnSheet
     * const opponentOnSheet = await prisma.opponentOnSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpponentOnSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, OpponentOnSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpponentOnSheetClient<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpponentOnSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentOnSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpponentOnSheets
     * const opponentOnSheets = await prisma.opponentOnSheet.findMany()
     * 
     * // Get first 10 OpponentOnSheets
     * const opponentOnSheets = await prisma.opponentOnSheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opponentOnSheetWithIdOnly = await prisma.opponentOnSheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpponentOnSheetFindManyArgs>(args?: SelectSubset<T, OpponentOnSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpponentOnSheet.
     * @param {OpponentOnSheetCreateArgs} args - Arguments to create a OpponentOnSheet.
     * @example
     * // Create one OpponentOnSheet
     * const OpponentOnSheet = await prisma.opponentOnSheet.create({
     *   data: {
     *     // ... data to create a OpponentOnSheet
     *   }
     * })
     * 
     */
    create<T extends OpponentOnSheetCreateArgs>(args: SelectSubset<T, OpponentOnSheetCreateArgs<ExtArgs>>): Prisma__OpponentOnSheetClient<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpponentOnSheets.
     * @param {OpponentOnSheetCreateManyArgs} args - Arguments to create many OpponentOnSheets.
     * @example
     * // Create many OpponentOnSheets
     * const opponentOnSheet = await prisma.opponentOnSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpponentOnSheetCreateManyArgs>(args?: SelectSubset<T, OpponentOnSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpponentOnSheets and returns the data saved in the database.
     * @param {OpponentOnSheetCreateManyAndReturnArgs} args - Arguments to create many OpponentOnSheets.
     * @example
     * // Create many OpponentOnSheets
     * const opponentOnSheet = await prisma.opponentOnSheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpponentOnSheets and only return the `id`
     * const opponentOnSheetWithIdOnly = await prisma.opponentOnSheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpponentOnSheetCreateManyAndReturnArgs>(args?: SelectSubset<T, OpponentOnSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpponentOnSheet.
     * @param {OpponentOnSheetDeleteArgs} args - Arguments to delete one OpponentOnSheet.
     * @example
     * // Delete one OpponentOnSheet
     * const OpponentOnSheet = await prisma.opponentOnSheet.delete({
     *   where: {
     *     // ... filter to delete one OpponentOnSheet
     *   }
     * })
     * 
     */
    delete<T extends OpponentOnSheetDeleteArgs>(args: SelectSubset<T, OpponentOnSheetDeleteArgs<ExtArgs>>): Prisma__OpponentOnSheetClient<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpponentOnSheet.
     * @param {OpponentOnSheetUpdateArgs} args - Arguments to update one OpponentOnSheet.
     * @example
     * // Update one OpponentOnSheet
     * const opponentOnSheet = await prisma.opponentOnSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpponentOnSheetUpdateArgs>(args: SelectSubset<T, OpponentOnSheetUpdateArgs<ExtArgs>>): Prisma__OpponentOnSheetClient<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpponentOnSheets.
     * @param {OpponentOnSheetDeleteManyArgs} args - Arguments to filter OpponentOnSheets to delete.
     * @example
     * // Delete a few OpponentOnSheets
     * const { count } = await prisma.opponentOnSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpponentOnSheetDeleteManyArgs>(args?: SelectSubset<T, OpponentOnSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpponentOnSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentOnSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpponentOnSheets
     * const opponentOnSheet = await prisma.opponentOnSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpponentOnSheetUpdateManyArgs>(args: SelectSubset<T, OpponentOnSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpponentOnSheets and returns the data updated in the database.
     * @param {OpponentOnSheetUpdateManyAndReturnArgs} args - Arguments to update many OpponentOnSheets.
     * @example
     * // Update many OpponentOnSheets
     * const opponentOnSheet = await prisma.opponentOnSheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpponentOnSheets and only return the `id`
     * const opponentOnSheetWithIdOnly = await prisma.opponentOnSheet.updateManyAndReturn({
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
    updateManyAndReturn<T extends OpponentOnSheetUpdateManyAndReturnArgs>(args: SelectSubset<T, OpponentOnSheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpponentOnSheet.
     * @param {OpponentOnSheetUpsertArgs} args - Arguments to update or create a OpponentOnSheet.
     * @example
     * // Update or create a OpponentOnSheet
     * const opponentOnSheet = await prisma.opponentOnSheet.upsert({
     *   create: {
     *     // ... data to create a OpponentOnSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpponentOnSheet we want to update
     *   }
     * })
     */
    upsert<T extends OpponentOnSheetUpsertArgs>(args: SelectSubset<T, OpponentOnSheetUpsertArgs<ExtArgs>>): Prisma__OpponentOnSheetClient<$Result.GetResult<Prisma.$OpponentOnSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpponentOnSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentOnSheetCountArgs} args - Arguments to filter OpponentOnSheets to count.
     * @example
     * // Count the number of OpponentOnSheets
     * const count = await prisma.opponentOnSheet.count({
     *   where: {
     *     // ... the filter for the OpponentOnSheets we want to count
     *   }
     * })
    **/
    count<T extends OpponentOnSheetCountArgs>(
      args?: Subset<T, OpponentOnSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpponentOnSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpponentOnSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentOnSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpponentOnSheetAggregateArgs>(args: Subset<T, OpponentOnSheetAggregateArgs>): Prisma.PrismaPromise<GetOpponentOnSheetAggregateType<T>>

    /**
     * Group by OpponentOnSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpponentOnSheetGroupByArgs} args - Group by arguments.
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
      T extends OpponentOnSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpponentOnSheetGroupByArgs['orderBy'] }
        : { orderBy?: OpponentOnSheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpponentOnSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpponentOnSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpponentOnSheet model
   */
  readonly fields: OpponentOnSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpponentOnSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpponentOnSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opponent<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OpponentOnSheet model
   */
  interface OpponentOnSheetFieldRefs {
    readonly id: FieldRef<"OpponentOnSheet", 'String'>
    readonly opponentId: FieldRef<"OpponentOnSheet", 'String'>
    readonly sheetId: FieldRef<"OpponentOnSheet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OpponentOnSheet findUnique
   */
  export type OpponentOnSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which OpponentOnSheet to fetch.
     */
    where: OpponentOnSheetWhereUniqueInput
  }

  /**
   * OpponentOnSheet findUniqueOrThrow
   */
  export type OpponentOnSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which OpponentOnSheet to fetch.
     */
    where: OpponentOnSheetWhereUniqueInput
  }

  /**
   * OpponentOnSheet findFirst
   */
  export type OpponentOnSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which OpponentOnSheet to fetch.
     */
    where?: OpponentOnSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpponentOnSheets to fetch.
     */
    orderBy?: OpponentOnSheetOrderByWithRelationInput | OpponentOnSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpponentOnSheets.
     */
    cursor?: OpponentOnSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpponentOnSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpponentOnSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpponentOnSheets.
     */
    distinct?: OpponentOnSheetScalarFieldEnum | OpponentOnSheetScalarFieldEnum[]
  }

  /**
   * OpponentOnSheet findFirstOrThrow
   */
  export type OpponentOnSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which OpponentOnSheet to fetch.
     */
    where?: OpponentOnSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpponentOnSheets to fetch.
     */
    orderBy?: OpponentOnSheetOrderByWithRelationInput | OpponentOnSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpponentOnSheets.
     */
    cursor?: OpponentOnSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpponentOnSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpponentOnSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpponentOnSheets.
     */
    distinct?: OpponentOnSheetScalarFieldEnum | OpponentOnSheetScalarFieldEnum[]
  }

  /**
   * OpponentOnSheet findMany
   */
  export type OpponentOnSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * Filter, which OpponentOnSheets to fetch.
     */
    where?: OpponentOnSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpponentOnSheets to fetch.
     */
    orderBy?: OpponentOnSheetOrderByWithRelationInput | OpponentOnSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpponentOnSheets.
     */
    cursor?: OpponentOnSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpponentOnSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpponentOnSheets.
     */
    skip?: number
    distinct?: OpponentOnSheetScalarFieldEnum | OpponentOnSheetScalarFieldEnum[]
  }

  /**
   * OpponentOnSheet create
   */
  export type OpponentOnSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * The data needed to create a OpponentOnSheet.
     */
    data: XOR<OpponentOnSheetCreateInput, OpponentOnSheetUncheckedCreateInput>
  }

  /**
   * OpponentOnSheet createMany
   */
  export type OpponentOnSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpponentOnSheets.
     */
    data: OpponentOnSheetCreateManyInput | OpponentOnSheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpponentOnSheet createManyAndReturn
   */
  export type OpponentOnSheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * The data used to create many OpponentOnSheets.
     */
    data: OpponentOnSheetCreateManyInput | OpponentOnSheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpponentOnSheet update
   */
  export type OpponentOnSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * The data needed to update a OpponentOnSheet.
     */
    data: XOR<OpponentOnSheetUpdateInput, OpponentOnSheetUncheckedUpdateInput>
    /**
     * Choose, which OpponentOnSheet to update.
     */
    where: OpponentOnSheetWhereUniqueInput
  }

  /**
   * OpponentOnSheet updateMany
   */
  export type OpponentOnSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpponentOnSheets.
     */
    data: XOR<OpponentOnSheetUpdateManyMutationInput, OpponentOnSheetUncheckedUpdateManyInput>
    /**
     * Filter which OpponentOnSheets to update
     */
    where?: OpponentOnSheetWhereInput
    /**
     * Limit how many OpponentOnSheets to update.
     */
    limit?: number
  }

  /**
   * OpponentOnSheet updateManyAndReturn
   */
  export type OpponentOnSheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * The data used to update OpponentOnSheets.
     */
    data: XOR<OpponentOnSheetUpdateManyMutationInput, OpponentOnSheetUncheckedUpdateManyInput>
    /**
     * Filter which OpponentOnSheets to update
     */
    where?: OpponentOnSheetWhereInput
    /**
     * Limit how many OpponentOnSheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpponentOnSheet upsert
   */
  export type OpponentOnSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * The filter to search for the OpponentOnSheet to update in case it exists.
     */
    where: OpponentOnSheetWhereUniqueInput
    /**
     * In case the OpponentOnSheet found by the `where` argument doesn't exist, create a new OpponentOnSheet with this data.
     */
    create: XOR<OpponentOnSheetCreateInput, OpponentOnSheetUncheckedCreateInput>
    /**
     * In case the OpponentOnSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpponentOnSheetUpdateInput, OpponentOnSheetUncheckedUpdateInput>
  }

  /**
   * OpponentOnSheet delete
   */
  export type OpponentOnSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
    /**
     * Filter which OpponentOnSheet to delete.
     */
    where: OpponentOnSheetWhereUniqueInput
  }

  /**
   * OpponentOnSheet deleteMany
   */
  export type OpponentOnSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpponentOnSheets to delete
     */
    where?: OpponentOnSheetWhereInput
    /**
     * Limit how many OpponentOnSheets to delete.
     */
    limit?: number
  }

  /**
   * OpponentOnSheet without action
   */
  export type OpponentOnSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpponentOnSheet
     */
    select?: OpponentOnSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpponentOnSheet
     */
    omit?: OpponentOnSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpponentOnSheetInclude<ExtArgs> | null
  }


  /**
   * Model FightingGameOnUser
   */

  export type AggregateFightingGameOnUser = {
    _count: FightingGameOnUserCountAggregateOutputType | null
    _min: FightingGameOnUserMinAggregateOutputType | null
    _max: FightingGameOnUserMaxAggregateOutputType | null
  }

  export type FightingGameOnUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fightingGameId: string | null
  }

  export type FightingGameOnUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fightingGameId: string | null
  }

  export type FightingGameOnUserCountAggregateOutputType = {
    id: number
    userId: number
    fightingGameId: number
    _all: number
  }


  export type FightingGameOnUserMinAggregateInputType = {
    id?: true
    userId?: true
    fightingGameId?: true
  }

  export type FightingGameOnUserMaxAggregateInputType = {
    id?: true
    userId?: true
    fightingGameId?: true
  }

  export type FightingGameOnUserCountAggregateInputType = {
    id?: true
    userId?: true
    fightingGameId?: true
    _all?: true
  }

  export type FightingGameOnUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FightingGameOnUser to aggregate.
     */
    where?: FightingGameOnUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingGameOnUsers to fetch.
     */
    orderBy?: FightingGameOnUserOrderByWithRelationInput | FightingGameOnUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FightingGameOnUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingGameOnUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingGameOnUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FightingGameOnUsers
    **/
    _count?: true | FightingGameOnUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FightingGameOnUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FightingGameOnUserMaxAggregateInputType
  }

  export type GetFightingGameOnUserAggregateType<T extends FightingGameOnUserAggregateArgs> = {
        [P in keyof T & keyof AggregateFightingGameOnUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFightingGameOnUser[P]>
      : GetScalarType<T[P], AggregateFightingGameOnUser[P]>
  }




  export type FightingGameOnUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightingGameOnUserWhereInput
    orderBy?: FightingGameOnUserOrderByWithAggregationInput | FightingGameOnUserOrderByWithAggregationInput[]
    by: FightingGameOnUserScalarFieldEnum[] | FightingGameOnUserScalarFieldEnum
    having?: FightingGameOnUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FightingGameOnUserCountAggregateInputType | true
    _min?: FightingGameOnUserMinAggregateInputType
    _max?: FightingGameOnUserMaxAggregateInputType
  }

  export type FightingGameOnUserGroupByOutputType = {
    id: string
    userId: string
    fightingGameId: string
    _count: FightingGameOnUserCountAggregateOutputType | null
    _min: FightingGameOnUserMinAggregateOutputType | null
    _max: FightingGameOnUserMaxAggregateOutputType | null
  }

  type GetFightingGameOnUserGroupByPayload<T extends FightingGameOnUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FightingGameOnUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FightingGameOnUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FightingGameOnUserGroupByOutputType[P]>
            : GetScalarType<T[P], FightingGameOnUserGroupByOutputType[P]>
        }
      >
    >


  export type FightingGameOnUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fightingGameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fightingGameOnUser"]>

  export type FightingGameOnUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fightingGameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fightingGameOnUser"]>

  export type FightingGameOnUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fightingGameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fightingGameOnUser"]>

  export type FightingGameOnUserSelectScalar = {
    id?: boolean
    userId?: boolean
    fightingGameId?: boolean
  }

  export type FightingGameOnUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fightingGameId", ExtArgs["result"]["fightingGameOnUser"]>
  export type FightingGameOnUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }
  export type FightingGameOnUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }
  export type FightingGameOnUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fightingGame?: boolean | FightingGameDefaultArgs<ExtArgs>
  }

  export type $FightingGameOnUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FightingGameOnUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fightingGame: Prisma.$FightingGamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fightingGameId: string
    }, ExtArgs["result"]["fightingGameOnUser"]>
    composites: {}
  }

  type FightingGameOnUserGetPayload<S extends boolean | null | undefined | FightingGameOnUserDefaultArgs> = $Result.GetResult<Prisma.$FightingGameOnUserPayload, S>

  type FightingGameOnUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FightingGameOnUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FightingGameOnUserCountAggregateInputType | true
    }

  export interface FightingGameOnUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FightingGameOnUser'], meta: { name: 'FightingGameOnUser' } }
    /**
     * Find zero or one FightingGameOnUser that matches the filter.
     * @param {FightingGameOnUserFindUniqueArgs} args - Arguments to find a FightingGameOnUser
     * @example
     * // Get one FightingGameOnUser
     * const fightingGameOnUser = await prisma.fightingGameOnUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FightingGameOnUserFindUniqueArgs>(args: SelectSubset<T, FightingGameOnUserFindUniqueArgs<ExtArgs>>): Prisma__FightingGameOnUserClient<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FightingGameOnUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FightingGameOnUserFindUniqueOrThrowArgs} args - Arguments to find a FightingGameOnUser
     * @example
     * // Get one FightingGameOnUser
     * const fightingGameOnUser = await prisma.fightingGameOnUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FightingGameOnUserFindUniqueOrThrowArgs>(args: SelectSubset<T, FightingGameOnUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FightingGameOnUserClient<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FightingGameOnUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameOnUserFindFirstArgs} args - Arguments to find a FightingGameOnUser
     * @example
     * // Get one FightingGameOnUser
     * const fightingGameOnUser = await prisma.fightingGameOnUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FightingGameOnUserFindFirstArgs>(args?: SelectSubset<T, FightingGameOnUserFindFirstArgs<ExtArgs>>): Prisma__FightingGameOnUserClient<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FightingGameOnUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameOnUserFindFirstOrThrowArgs} args - Arguments to find a FightingGameOnUser
     * @example
     * // Get one FightingGameOnUser
     * const fightingGameOnUser = await prisma.fightingGameOnUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FightingGameOnUserFindFirstOrThrowArgs>(args?: SelectSubset<T, FightingGameOnUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__FightingGameOnUserClient<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FightingGameOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameOnUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FightingGameOnUsers
     * const fightingGameOnUsers = await prisma.fightingGameOnUser.findMany()
     * 
     * // Get first 10 FightingGameOnUsers
     * const fightingGameOnUsers = await prisma.fightingGameOnUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fightingGameOnUserWithIdOnly = await prisma.fightingGameOnUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FightingGameOnUserFindManyArgs>(args?: SelectSubset<T, FightingGameOnUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FightingGameOnUser.
     * @param {FightingGameOnUserCreateArgs} args - Arguments to create a FightingGameOnUser.
     * @example
     * // Create one FightingGameOnUser
     * const FightingGameOnUser = await prisma.fightingGameOnUser.create({
     *   data: {
     *     // ... data to create a FightingGameOnUser
     *   }
     * })
     * 
     */
    create<T extends FightingGameOnUserCreateArgs>(args: SelectSubset<T, FightingGameOnUserCreateArgs<ExtArgs>>): Prisma__FightingGameOnUserClient<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FightingGameOnUsers.
     * @param {FightingGameOnUserCreateManyArgs} args - Arguments to create many FightingGameOnUsers.
     * @example
     * // Create many FightingGameOnUsers
     * const fightingGameOnUser = await prisma.fightingGameOnUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FightingGameOnUserCreateManyArgs>(args?: SelectSubset<T, FightingGameOnUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FightingGameOnUsers and returns the data saved in the database.
     * @param {FightingGameOnUserCreateManyAndReturnArgs} args - Arguments to create many FightingGameOnUsers.
     * @example
     * // Create many FightingGameOnUsers
     * const fightingGameOnUser = await prisma.fightingGameOnUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FightingGameOnUsers and only return the `id`
     * const fightingGameOnUserWithIdOnly = await prisma.fightingGameOnUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FightingGameOnUserCreateManyAndReturnArgs>(args?: SelectSubset<T, FightingGameOnUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FightingGameOnUser.
     * @param {FightingGameOnUserDeleteArgs} args - Arguments to delete one FightingGameOnUser.
     * @example
     * // Delete one FightingGameOnUser
     * const FightingGameOnUser = await prisma.fightingGameOnUser.delete({
     *   where: {
     *     // ... filter to delete one FightingGameOnUser
     *   }
     * })
     * 
     */
    delete<T extends FightingGameOnUserDeleteArgs>(args: SelectSubset<T, FightingGameOnUserDeleteArgs<ExtArgs>>): Prisma__FightingGameOnUserClient<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FightingGameOnUser.
     * @param {FightingGameOnUserUpdateArgs} args - Arguments to update one FightingGameOnUser.
     * @example
     * // Update one FightingGameOnUser
     * const fightingGameOnUser = await prisma.fightingGameOnUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FightingGameOnUserUpdateArgs>(args: SelectSubset<T, FightingGameOnUserUpdateArgs<ExtArgs>>): Prisma__FightingGameOnUserClient<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FightingGameOnUsers.
     * @param {FightingGameOnUserDeleteManyArgs} args - Arguments to filter FightingGameOnUsers to delete.
     * @example
     * // Delete a few FightingGameOnUsers
     * const { count } = await prisma.fightingGameOnUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FightingGameOnUserDeleteManyArgs>(args?: SelectSubset<T, FightingGameOnUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FightingGameOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameOnUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FightingGameOnUsers
     * const fightingGameOnUser = await prisma.fightingGameOnUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FightingGameOnUserUpdateManyArgs>(args: SelectSubset<T, FightingGameOnUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FightingGameOnUsers and returns the data updated in the database.
     * @param {FightingGameOnUserUpdateManyAndReturnArgs} args - Arguments to update many FightingGameOnUsers.
     * @example
     * // Update many FightingGameOnUsers
     * const fightingGameOnUser = await prisma.fightingGameOnUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FightingGameOnUsers and only return the `id`
     * const fightingGameOnUserWithIdOnly = await prisma.fightingGameOnUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends FightingGameOnUserUpdateManyAndReturnArgs>(args: SelectSubset<T, FightingGameOnUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FightingGameOnUser.
     * @param {FightingGameOnUserUpsertArgs} args - Arguments to update or create a FightingGameOnUser.
     * @example
     * // Update or create a FightingGameOnUser
     * const fightingGameOnUser = await prisma.fightingGameOnUser.upsert({
     *   create: {
     *     // ... data to create a FightingGameOnUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FightingGameOnUser we want to update
     *   }
     * })
     */
    upsert<T extends FightingGameOnUserUpsertArgs>(args: SelectSubset<T, FightingGameOnUserUpsertArgs<ExtArgs>>): Prisma__FightingGameOnUserClient<$Result.GetResult<Prisma.$FightingGameOnUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FightingGameOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameOnUserCountArgs} args - Arguments to filter FightingGameOnUsers to count.
     * @example
     * // Count the number of FightingGameOnUsers
     * const count = await prisma.fightingGameOnUser.count({
     *   where: {
     *     // ... the filter for the FightingGameOnUsers we want to count
     *   }
     * })
    **/
    count<T extends FightingGameOnUserCountArgs>(
      args?: Subset<T, FightingGameOnUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FightingGameOnUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FightingGameOnUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameOnUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FightingGameOnUserAggregateArgs>(args: Subset<T, FightingGameOnUserAggregateArgs>): Prisma.PrismaPromise<GetFightingGameOnUserAggregateType<T>>

    /**
     * Group by FightingGameOnUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingGameOnUserGroupByArgs} args - Group by arguments.
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
      T extends FightingGameOnUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FightingGameOnUserGroupByArgs['orderBy'] }
        : { orderBy?: FightingGameOnUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FightingGameOnUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFightingGameOnUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FightingGameOnUser model
   */
  readonly fields: FightingGameOnUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FightingGameOnUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FightingGameOnUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fightingGame<T extends FightingGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FightingGameDefaultArgs<ExtArgs>>): Prisma__FightingGameClient<$Result.GetResult<Prisma.$FightingGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FightingGameOnUser model
   */
  interface FightingGameOnUserFieldRefs {
    readonly id: FieldRef<"FightingGameOnUser", 'String'>
    readonly userId: FieldRef<"FightingGameOnUser", 'String'>
    readonly fightingGameId: FieldRef<"FightingGameOnUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FightingGameOnUser findUnique
   */
  export type FightingGameOnUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * Filter, which FightingGameOnUser to fetch.
     */
    where: FightingGameOnUserWhereUniqueInput
  }

  /**
   * FightingGameOnUser findUniqueOrThrow
   */
  export type FightingGameOnUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * Filter, which FightingGameOnUser to fetch.
     */
    where: FightingGameOnUserWhereUniqueInput
  }

  /**
   * FightingGameOnUser findFirst
   */
  export type FightingGameOnUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * Filter, which FightingGameOnUser to fetch.
     */
    where?: FightingGameOnUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingGameOnUsers to fetch.
     */
    orderBy?: FightingGameOnUserOrderByWithRelationInput | FightingGameOnUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FightingGameOnUsers.
     */
    cursor?: FightingGameOnUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingGameOnUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingGameOnUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FightingGameOnUsers.
     */
    distinct?: FightingGameOnUserScalarFieldEnum | FightingGameOnUserScalarFieldEnum[]
  }

  /**
   * FightingGameOnUser findFirstOrThrow
   */
  export type FightingGameOnUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * Filter, which FightingGameOnUser to fetch.
     */
    where?: FightingGameOnUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingGameOnUsers to fetch.
     */
    orderBy?: FightingGameOnUserOrderByWithRelationInput | FightingGameOnUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FightingGameOnUsers.
     */
    cursor?: FightingGameOnUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingGameOnUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingGameOnUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FightingGameOnUsers.
     */
    distinct?: FightingGameOnUserScalarFieldEnum | FightingGameOnUserScalarFieldEnum[]
  }

  /**
   * FightingGameOnUser findMany
   */
  export type FightingGameOnUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * Filter, which FightingGameOnUsers to fetch.
     */
    where?: FightingGameOnUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingGameOnUsers to fetch.
     */
    orderBy?: FightingGameOnUserOrderByWithRelationInput | FightingGameOnUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FightingGameOnUsers.
     */
    cursor?: FightingGameOnUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingGameOnUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingGameOnUsers.
     */
    skip?: number
    distinct?: FightingGameOnUserScalarFieldEnum | FightingGameOnUserScalarFieldEnum[]
  }

  /**
   * FightingGameOnUser create
   */
  export type FightingGameOnUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * The data needed to create a FightingGameOnUser.
     */
    data: XOR<FightingGameOnUserCreateInput, FightingGameOnUserUncheckedCreateInput>
  }

  /**
   * FightingGameOnUser createMany
   */
  export type FightingGameOnUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FightingGameOnUsers.
     */
    data: FightingGameOnUserCreateManyInput | FightingGameOnUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FightingGameOnUser createManyAndReturn
   */
  export type FightingGameOnUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * The data used to create many FightingGameOnUsers.
     */
    data: FightingGameOnUserCreateManyInput | FightingGameOnUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FightingGameOnUser update
   */
  export type FightingGameOnUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * The data needed to update a FightingGameOnUser.
     */
    data: XOR<FightingGameOnUserUpdateInput, FightingGameOnUserUncheckedUpdateInput>
    /**
     * Choose, which FightingGameOnUser to update.
     */
    where: FightingGameOnUserWhereUniqueInput
  }

  /**
   * FightingGameOnUser updateMany
   */
  export type FightingGameOnUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FightingGameOnUsers.
     */
    data: XOR<FightingGameOnUserUpdateManyMutationInput, FightingGameOnUserUncheckedUpdateManyInput>
    /**
     * Filter which FightingGameOnUsers to update
     */
    where?: FightingGameOnUserWhereInput
    /**
     * Limit how many FightingGameOnUsers to update.
     */
    limit?: number
  }

  /**
   * FightingGameOnUser updateManyAndReturn
   */
  export type FightingGameOnUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * The data used to update FightingGameOnUsers.
     */
    data: XOR<FightingGameOnUserUpdateManyMutationInput, FightingGameOnUserUncheckedUpdateManyInput>
    /**
     * Filter which FightingGameOnUsers to update
     */
    where?: FightingGameOnUserWhereInput
    /**
     * Limit how many FightingGameOnUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FightingGameOnUser upsert
   */
  export type FightingGameOnUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * The filter to search for the FightingGameOnUser to update in case it exists.
     */
    where: FightingGameOnUserWhereUniqueInput
    /**
     * In case the FightingGameOnUser found by the `where` argument doesn't exist, create a new FightingGameOnUser with this data.
     */
    create: XOR<FightingGameOnUserCreateInput, FightingGameOnUserUncheckedCreateInput>
    /**
     * In case the FightingGameOnUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FightingGameOnUserUpdateInput, FightingGameOnUserUncheckedUpdateInput>
  }

  /**
   * FightingGameOnUser delete
   */
  export type FightingGameOnUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
    /**
     * Filter which FightingGameOnUser to delete.
     */
    where: FightingGameOnUserWhereUniqueInput
  }

  /**
   * FightingGameOnUser deleteMany
   */
  export type FightingGameOnUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FightingGameOnUsers to delete
     */
    where?: FightingGameOnUserWhereInput
    /**
     * Limit how many FightingGameOnUsers to delete.
     */
    limit?: number
  }

  /**
   * FightingGameOnUser without action
   */
  export type FightingGameOnUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingGameOnUser
     */
    select?: FightingGameOnUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingGameOnUser
     */
    omit?: FightingGameOnUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingGameOnUserInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SheetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    fightingGameId: 'fightingGameId'
  };

  export type SheetScalarFieldEnum = (typeof SheetScalarFieldEnum)[keyof typeof SheetScalarFieldEnum]


  export const FilterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    sheetId: 'sheetId'
  };

  export type FilterScalarFieldEnum = (typeof FilterScalarFieldEnum)[keyof typeof FilterScalarFieldEnum]


  export const FightingGameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FightingGameScalarFieldEnum = (typeof FightingGameScalarFieldEnum)[keyof typeof FightingGameScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fightingGameId: 'fightingGameId'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const CharacterOnSheetScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    sheetId: 'sheetId'
  };

  export type CharacterOnSheetScalarFieldEnum = (typeof CharacterOnSheetScalarFieldEnum)[keyof typeof CharacterOnSheetScalarFieldEnum]


  export const OpponentOnSheetScalarFieldEnum: {
    id: 'id',
    opponentId: 'opponentId',
    sheetId: 'sheetId'
  };

  export type OpponentOnSheetScalarFieldEnum = (typeof OpponentOnSheetScalarFieldEnum)[keyof typeof OpponentOnSheetScalarFieldEnum]


  export const FightingGameOnUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fightingGameId: 'fightingGameId'
  };

  export type FightingGameOnUserScalarFieldEnum = (typeof FightingGameOnUserScalarFieldEnum)[keyof typeof FightingGameOnUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    Sheet?: SheetListRelationFilter
    Filter?: FilterListRelationFilter
    FightingGameOnUser?: FightingGameOnUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    Sheet?: SheetOrderByRelationAggregateInput
    Filter?: FilterOrderByRelationAggregateInput
    FightingGameOnUser?: FightingGameOnUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    Sheet?: SheetListRelationFilter
    Filter?: FilterListRelationFilter
    FightingGameOnUser?: FightingGameOnUserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type SheetWhereInput = {
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    id?: StringFilter<"Sheet"> | string
    title?: StringFilter<"Sheet"> | string
    content?: StringFilter<"Sheet"> | string
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    userId?: StringFilter<"Sheet"> | string
    fightingGameId?: StringFilter<"Sheet"> | string
    fightingGame?: XOR<FightingGameScalarRelationFilter, FightingGameWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    filter?: FilterListRelationFilter
    CharacterOnSheet?: CharacterOnSheetListRelationFilter
    OpponentOnSheet?: OpponentOnSheetListRelationFilter
  }

  export type SheetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
    fightingGame?: FightingGameOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    filter?: FilterOrderByRelationAggregateInput
    CharacterOnSheet?: CharacterOnSheetOrderByRelationAggregateInput
    OpponentOnSheet?: OpponentOnSheetOrderByRelationAggregateInput
  }

  export type SheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    title?: StringFilter<"Sheet"> | string
    content?: StringFilter<"Sheet"> | string
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    userId?: StringFilter<"Sheet"> | string
    fightingGameId?: StringFilter<"Sheet"> | string
    fightingGame?: XOR<FightingGameScalarRelationFilter, FightingGameWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    filter?: FilterListRelationFilter
    CharacterOnSheet?: CharacterOnSheetListRelationFilter
    OpponentOnSheet?: OpponentOnSheetListRelationFilter
  }, "id">

  export type SheetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
    _count?: SheetCountOrderByAggregateInput
    _max?: SheetMaxOrderByAggregateInput
    _min?: SheetMinOrderByAggregateInput
  }

  export type SheetScalarWhereWithAggregatesInput = {
    AND?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    OR?: SheetScalarWhereWithAggregatesInput[]
    NOT?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sheet"> | string
    title?: StringWithAggregatesFilter<"Sheet"> | string
    content?: StringWithAggregatesFilter<"Sheet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sheet"> | Date | string
    userId?: StringWithAggregatesFilter<"Sheet"> | string
    fightingGameId?: StringWithAggregatesFilter<"Sheet"> | string
  }

  export type FilterWhereInput = {
    AND?: FilterWhereInput | FilterWhereInput[]
    OR?: FilterWhereInput[]
    NOT?: FilterWhereInput | FilterWhereInput[]
    id?: StringFilter<"Filter"> | string
    name?: StringFilter<"Filter"> | string
    createdAt?: DateTimeFilter<"Filter"> | Date | string
    updatedAt?: DateTimeFilter<"Filter"> | Date | string
    userId?: StringFilter<"Filter"> | string
    sheetId?: StringNullableFilter<"Filter"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Sheet?: XOR<SheetNullableScalarRelationFilter, SheetWhereInput> | null
  }

  export type FilterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    Sheet?: SheetOrderByWithRelationInput
  }

  export type FilterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FilterWhereInput | FilterWhereInput[]
    OR?: FilterWhereInput[]
    NOT?: FilterWhereInput | FilterWhereInput[]
    name?: StringFilter<"Filter"> | string
    createdAt?: DateTimeFilter<"Filter"> | Date | string
    updatedAt?: DateTimeFilter<"Filter"> | Date | string
    userId?: StringFilter<"Filter"> | string
    sheetId?: StringNullableFilter<"Filter"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Sheet?: XOR<SheetNullableScalarRelationFilter, SheetWhereInput> | null
  }, "id">

  export type FilterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrderInput | SortOrder
    _count?: FilterCountOrderByAggregateInput
    _max?: FilterMaxOrderByAggregateInput
    _min?: FilterMinOrderByAggregateInput
  }

  export type FilterScalarWhereWithAggregatesInput = {
    AND?: FilterScalarWhereWithAggregatesInput | FilterScalarWhereWithAggregatesInput[]
    OR?: FilterScalarWhereWithAggregatesInput[]
    NOT?: FilterScalarWhereWithAggregatesInput | FilterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Filter"> | string
    name?: StringWithAggregatesFilter<"Filter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Filter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Filter"> | Date | string
    userId?: StringWithAggregatesFilter<"Filter"> | string
    sheetId?: StringNullableWithAggregatesFilter<"Filter"> | string | null
  }

  export type FightingGameWhereInput = {
    AND?: FightingGameWhereInput | FightingGameWhereInput[]
    OR?: FightingGameWhereInput[]
    NOT?: FightingGameWhereInput | FightingGameWhereInput[]
    id?: StringFilter<"FightingGame"> | string
    name?: StringFilter<"FightingGame"> | string
    createdAt?: DateTimeFilter<"FightingGame"> | Date | string
    updatedAt?: DateTimeFilter<"FightingGame"> | Date | string
    characters?: CharacterListRelationFilter
    Sheet?: SheetListRelationFilter
    FightingGameOnUser?: FightingGameOnUserListRelationFilter
  }

  export type FightingGameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    characters?: CharacterOrderByRelationAggregateInput
    Sheet?: SheetOrderByRelationAggregateInput
    FightingGameOnUser?: FightingGameOnUserOrderByRelationAggregateInput
  }

  export type FightingGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FightingGameWhereInput | FightingGameWhereInput[]
    OR?: FightingGameWhereInput[]
    NOT?: FightingGameWhereInput | FightingGameWhereInput[]
    name?: StringFilter<"FightingGame"> | string
    createdAt?: DateTimeFilter<"FightingGame"> | Date | string
    updatedAt?: DateTimeFilter<"FightingGame"> | Date | string
    characters?: CharacterListRelationFilter
    Sheet?: SheetListRelationFilter
    FightingGameOnUser?: FightingGameOnUserListRelationFilter
  }, "id">

  export type FightingGameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FightingGameCountOrderByAggregateInput
    _max?: FightingGameMaxOrderByAggregateInput
    _min?: FightingGameMinOrderByAggregateInput
  }

  export type FightingGameScalarWhereWithAggregatesInput = {
    AND?: FightingGameScalarWhereWithAggregatesInput | FightingGameScalarWhereWithAggregatesInput[]
    OR?: FightingGameScalarWhereWithAggregatesInput[]
    NOT?: FightingGameScalarWhereWithAggregatesInput | FightingGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FightingGame"> | string
    name?: StringWithAggregatesFilter<"FightingGame"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FightingGame"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FightingGame"> | Date | string
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    fightingGameId?: StringFilter<"Character"> | string
    fightingGame?: XOR<FightingGameScalarRelationFilter, FightingGameWhereInput>
    CharacterOnSheet?: CharacterOnSheetListRelationFilter
    OpponentOnSheet?: OpponentOnSheetListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fightingGameId?: SortOrder
    fightingGame?: FightingGameOrderByWithRelationInput
    CharacterOnSheet?: CharacterOnSheetOrderByRelationAggregateInput
    OpponentOnSheet?: OpponentOnSheetOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    name?: StringFilter<"Character"> | string
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    fightingGameId?: StringFilter<"Character"> | string
    fightingGame?: XOR<FightingGameScalarRelationFilter, FightingGameWhereInput>
    CharacterOnSheet?: CharacterOnSheetListRelationFilter
    OpponentOnSheet?: OpponentOnSheetListRelationFilter
  }, "id">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fightingGameId?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Character"> | string
    name?: StringWithAggregatesFilter<"Character"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    fightingGameId?: StringWithAggregatesFilter<"Character"> | string
  }

  export type CharacterOnSheetWhereInput = {
    AND?: CharacterOnSheetWhereInput | CharacterOnSheetWhereInput[]
    OR?: CharacterOnSheetWhereInput[]
    NOT?: CharacterOnSheetWhereInput | CharacterOnSheetWhereInput[]
    id?: StringFilter<"CharacterOnSheet"> | string
    characterId?: StringFilter<"CharacterOnSheet"> | string
    sheetId?: StringFilter<"CharacterOnSheet"> | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type CharacterOnSheetOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    sheetId?: SortOrder
    character?: CharacterOrderByWithRelationInput
    sheet?: SheetOrderByWithRelationInput
  }

  export type CharacterOnSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sheetId_characterId?: CharacterOnSheetSheetIdCharacterIdCompoundUniqueInput
    AND?: CharacterOnSheetWhereInput | CharacterOnSheetWhereInput[]
    OR?: CharacterOnSheetWhereInput[]
    NOT?: CharacterOnSheetWhereInput | CharacterOnSheetWhereInput[]
    characterId?: StringFilter<"CharacterOnSheet"> | string
    sheetId?: StringFilter<"CharacterOnSheet"> | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id" | "sheetId_characterId">

  export type CharacterOnSheetOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    sheetId?: SortOrder
    _count?: CharacterOnSheetCountOrderByAggregateInput
    _max?: CharacterOnSheetMaxOrderByAggregateInput
    _min?: CharacterOnSheetMinOrderByAggregateInput
  }

  export type CharacterOnSheetScalarWhereWithAggregatesInput = {
    AND?: CharacterOnSheetScalarWhereWithAggregatesInput | CharacterOnSheetScalarWhereWithAggregatesInput[]
    OR?: CharacterOnSheetScalarWhereWithAggregatesInput[]
    NOT?: CharacterOnSheetScalarWhereWithAggregatesInput | CharacterOnSheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CharacterOnSheet"> | string
    characterId?: StringWithAggregatesFilter<"CharacterOnSheet"> | string
    sheetId?: StringWithAggregatesFilter<"CharacterOnSheet"> | string
  }

  export type OpponentOnSheetWhereInput = {
    AND?: OpponentOnSheetWhereInput | OpponentOnSheetWhereInput[]
    OR?: OpponentOnSheetWhereInput[]
    NOT?: OpponentOnSheetWhereInput | OpponentOnSheetWhereInput[]
    id?: StringFilter<"OpponentOnSheet"> | string
    opponentId?: StringFilter<"OpponentOnSheet"> | string
    sheetId?: StringFilter<"OpponentOnSheet"> | string
    opponent?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type OpponentOnSheetOrderByWithRelationInput = {
    id?: SortOrder
    opponentId?: SortOrder
    sheetId?: SortOrder
    opponent?: CharacterOrderByWithRelationInput
    sheet?: SheetOrderByWithRelationInput
  }

  export type OpponentOnSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sheetId_opponentId?: OpponentOnSheetSheetIdOpponentIdCompoundUniqueInput
    AND?: OpponentOnSheetWhereInput | OpponentOnSheetWhereInput[]
    OR?: OpponentOnSheetWhereInput[]
    NOT?: OpponentOnSheetWhereInput | OpponentOnSheetWhereInput[]
    opponentId?: StringFilter<"OpponentOnSheet"> | string
    sheetId?: StringFilter<"OpponentOnSheet"> | string
    opponent?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id" | "sheetId_opponentId">

  export type OpponentOnSheetOrderByWithAggregationInput = {
    id?: SortOrder
    opponentId?: SortOrder
    sheetId?: SortOrder
    _count?: OpponentOnSheetCountOrderByAggregateInput
    _max?: OpponentOnSheetMaxOrderByAggregateInput
    _min?: OpponentOnSheetMinOrderByAggregateInput
  }

  export type OpponentOnSheetScalarWhereWithAggregatesInput = {
    AND?: OpponentOnSheetScalarWhereWithAggregatesInput | OpponentOnSheetScalarWhereWithAggregatesInput[]
    OR?: OpponentOnSheetScalarWhereWithAggregatesInput[]
    NOT?: OpponentOnSheetScalarWhereWithAggregatesInput | OpponentOnSheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OpponentOnSheet"> | string
    opponentId?: StringWithAggregatesFilter<"OpponentOnSheet"> | string
    sheetId?: StringWithAggregatesFilter<"OpponentOnSheet"> | string
  }

  export type FightingGameOnUserWhereInput = {
    AND?: FightingGameOnUserWhereInput | FightingGameOnUserWhereInput[]
    OR?: FightingGameOnUserWhereInput[]
    NOT?: FightingGameOnUserWhereInput | FightingGameOnUserWhereInput[]
    id?: StringFilter<"FightingGameOnUser"> | string
    userId?: StringFilter<"FightingGameOnUser"> | string
    fightingGameId?: StringFilter<"FightingGameOnUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fightingGame?: XOR<FightingGameScalarRelationFilter, FightingGameWhereInput>
  }

  export type FightingGameOnUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
    user?: UserOrderByWithRelationInput
    fightingGame?: FightingGameOrderByWithRelationInput
  }

  export type FightingGameOnUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FightingGameOnUserWhereInput | FightingGameOnUserWhereInput[]
    OR?: FightingGameOnUserWhereInput[]
    NOT?: FightingGameOnUserWhereInput | FightingGameOnUserWhereInput[]
    userId?: StringFilter<"FightingGameOnUser"> | string
    fightingGameId?: StringFilter<"FightingGameOnUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fightingGame?: XOR<FightingGameScalarRelationFilter, FightingGameWhereInput>
  }, "id">

  export type FightingGameOnUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
    _count?: FightingGameOnUserCountOrderByAggregateInput
    _max?: FightingGameOnUserMaxOrderByAggregateInput
    _min?: FightingGameOnUserMinOrderByAggregateInput
  }

  export type FightingGameOnUserScalarWhereWithAggregatesInput = {
    AND?: FightingGameOnUserScalarWhereWithAggregatesInput | FightingGameOnUserScalarWhereWithAggregatesInput[]
    OR?: FightingGameOnUserScalarWhereWithAggregatesInput[]
    NOT?: FightingGameOnUserScalarWhereWithAggregatesInput | FightingGameOnUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FightingGameOnUser"> | string
    userId?: StringWithAggregatesFilter<"FightingGameOnUser"> | string
    fightingGameId?: StringWithAggregatesFilter<"FightingGameOnUser"> | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    Sheet?: SheetCreateNestedManyWithoutUserInput
    Filter?: FilterCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    Filter?: FilterUncheckedCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Sheet?: SheetUpdateManyWithoutUserNestedInput
    Filter?: FilterUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    Filter?: FilterUncheckedUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SheetCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGame: FightingGameCreateNestedOneWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetInput
    filter?: FilterCreateNestedManyWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    fightingGameId: string
    filter?: FilterUncheckedCreateNestedManyWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetUncheckedCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetNestedInput
    filter?: FilterUpdateManyWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
    filter?: FilterUncheckedUpdateManyWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUncheckedUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetCreateManyInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    fightingGameId: string
  }

  export type SheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilterInput
    Sheet?: SheetCreateNestedOneWithoutFilterInput
  }

  export type FilterUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sheetId?: string | null
  }

  export type FilterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilterNestedInput
    Sheet?: SheetUpdateOneWithoutFilterNestedInput
  }

  export type FilterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilterCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sheetId?: string | null
  }

  export type FilterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FightingGameCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterCreateNestedManyWithoutFightingGameInput
    Sheet?: SheetCreateNestedManyWithoutFightingGameInput
    FightingGameOnUser?: FightingGameOnUserCreateNestedManyWithoutFightingGameInput
  }

  export type FightingGameUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutFightingGameInput
    Sheet?: SheetUncheckedCreateNestedManyWithoutFightingGameInput
    FightingGameOnUser?: FightingGameOnUserUncheckedCreateNestedManyWithoutFightingGameInput
  }

  export type FightingGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUpdateManyWithoutFightingGameNestedInput
    Sheet?: SheetUpdateManyWithoutFightingGameNestedInput
    FightingGameOnUser?: FightingGameOnUserUpdateManyWithoutFightingGameNestedInput
  }

  export type FightingGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutFightingGameNestedInput
    Sheet?: SheetUncheckedUpdateManyWithoutFightingGameNestedInput
    FightingGameOnUser?: FightingGameOnUserUncheckedUpdateManyWithoutFightingGameNestedInput
  }

  export type FightingGameCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FightingGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FightingGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGame: FightingGameCreateNestedOneWithoutCharactersInput
    CharacterOnSheet?: CharacterOnSheetCreateNestedManyWithoutCharacterInput
    OpponentOnSheet?: OpponentOnSheetCreateNestedManyWithoutOpponentInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGameId: string
    CharacterOnSheet?: CharacterOnSheetUncheckedCreateNestedManyWithoutCharacterInput
    OpponentOnSheet?: OpponentOnSheetUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutCharactersNestedInput
    CharacterOnSheet?: CharacterOnSheetUpdateManyWithoutCharacterNestedInput
    OpponentOnSheet?: OpponentOnSheetUpdateManyWithoutOpponentNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
    CharacterOnSheet?: CharacterOnSheetUncheckedUpdateManyWithoutCharacterNestedInput
    OpponentOnSheet?: OpponentOnSheetUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGameId: string
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterOnSheetCreateInput = {
    id?: string
    character: CharacterCreateNestedOneWithoutCharacterOnSheetInput
    sheet: SheetCreateNestedOneWithoutCharacterOnSheetInput
  }

  export type CharacterOnSheetUncheckedCreateInput = {
    id?: string
    characterId: string
    sheetId: string
  }

  export type CharacterOnSheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    character?: CharacterUpdateOneRequiredWithoutCharacterOnSheetNestedInput
    sheet?: SheetUpdateOneRequiredWithoutCharacterOnSheetNestedInput
  }

  export type CharacterOnSheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterOnSheetCreateManyInput = {
    id?: string
    characterId: string
    sheetId: string
  }

  export type CharacterOnSheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterOnSheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
  }

  export type OpponentOnSheetCreateInput = {
    id?: string
    opponent: CharacterCreateNestedOneWithoutOpponentOnSheetInput
    sheet: SheetCreateNestedOneWithoutOpponentOnSheetInput
  }

  export type OpponentOnSheetUncheckedCreateInput = {
    id?: string
    opponentId: string
    sheetId: string
  }

  export type OpponentOnSheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponent?: CharacterUpdateOneRequiredWithoutOpponentOnSheetNestedInput
    sheet?: SheetUpdateOneRequiredWithoutOpponentOnSheetNestedInput
  }

  export type OpponentOnSheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
  }

  export type OpponentOnSheetCreateManyInput = {
    id?: string
    opponentId: string
    sheetId: string
  }

  export type OpponentOnSheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OpponentOnSheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
  }

  export type FightingGameOnUserCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutFightingGameOnUserInput
    fightingGame: FightingGameCreateNestedOneWithoutFightingGameOnUserInput
  }

  export type FightingGameOnUserUncheckedCreateInput = {
    id?: string
    userId: string
    fightingGameId: string
  }

  export type FightingGameOnUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFightingGameOnUserNestedInput
    fightingGame?: FightingGameUpdateOneRequiredWithoutFightingGameOnUserNestedInput
  }

  export type FightingGameOnUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
  }

  export type FightingGameOnUserCreateManyInput = {
    id?: string
    userId: string
    fightingGameId: string
  }

  export type FightingGameOnUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FightingGameOnUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SheetListRelationFilter = {
    every?: SheetWhereInput
    some?: SheetWhereInput
    none?: SheetWhereInput
  }

  export type FilterListRelationFilter = {
    every?: FilterWhereInput
    some?: FilterWhereInput
    none?: FilterWhereInput
  }

  export type FightingGameOnUserListRelationFilter = {
    every?: FightingGameOnUserWhereInput
    some?: FightingGameOnUserWhereInput
    none?: FightingGameOnUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FightingGameOnUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
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

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FightingGameScalarRelationFilter = {
    is?: FightingGameWhereInput
    isNot?: FightingGameWhereInput
  }

  export type CharacterOnSheetListRelationFilter = {
    every?: CharacterOnSheetWhereInput
    some?: CharacterOnSheetWhereInput
    none?: CharacterOnSheetWhereInput
  }

  export type OpponentOnSheetListRelationFilter = {
    every?: OpponentOnSheetWhereInput
    some?: OpponentOnSheetWhereInput
    none?: OpponentOnSheetWhereInput
  }

  export type CharacterOnSheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpponentOnSheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SheetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
  }

  export type SheetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
  }

  export type SheetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
  }

  export type SheetNullableScalarRelationFilter = {
    is?: SheetWhereInput | null
    isNot?: SheetWhereInput | null
  }

  export type FilterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
  }

  export type FilterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
  }

  export type FilterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
  }

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FightingGameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FightingGameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FightingGameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fightingGameId?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fightingGameId?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fightingGameId?: SortOrder
  }

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type SheetScalarRelationFilter = {
    is?: SheetWhereInput
    isNot?: SheetWhereInput
  }

  export type CharacterOnSheetSheetIdCharacterIdCompoundUniqueInput = {
    sheetId: string
    characterId: string
  }

  export type CharacterOnSheetCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    sheetId?: SortOrder
  }

  export type CharacterOnSheetMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    sheetId?: SortOrder
  }

  export type CharacterOnSheetMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    sheetId?: SortOrder
  }

  export type OpponentOnSheetSheetIdOpponentIdCompoundUniqueInput = {
    sheetId: string
    opponentId: string
  }

  export type OpponentOnSheetCountOrderByAggregateInput = {
    id?: SortOrder
    opponentId?: SortOrder
    sheetId?: SortOrder
  }

  export type OpponentOnSheetMaxOrderByAggregateInput = {
    id?: SortOrder
    opponentId?: SortOrder
    sheetId?: SortOrder
  }

  export type OpponentOnSheetMinOrderByAggregateInput = {
    id?: SortOrder
    opponentId?: SortOrder
    sheetId?: SortOrder
  }

  export type FightingGameOnUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
  }

  export type FightingGameOnUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
  }

  export type FightingGameOnUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fightingGameId?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SheetCreateNestedManyWithoutUserInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type FilterCreateNestedManyWithoutUserInput = {
    create?: XOR<FilterCreateWithoutUserInput, FilterUncheckedCreateWithoutUserInput> | FilterCreateWithoutUserInput[] | FilterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutUserInput | FilterCreateOrConnectWithoutUserInput[]
    createMany?: FilterCreateManyUserInputEnvelope
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
  }

  export type FightingGameOnUserCreateNestedManyWithoutUserInput = {
    create?: XOR<FightingGameOnUserCreateWithoutUserInput, FightingGameOnUserUncheckedCreateWithoutUserInput> | FightingGameOnUserCreateWithoutUserInput[] | FightingGameOnUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FightingGameOnUserCreateOrConnectWithoutUserInput | FightingGameOnUserCreateOrConnectWithoutUserInput[]
    createMany?: FightingGameOnUserCreateManyUserInputEnvelope
    connect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SheetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type FilterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FilterCreateWithoutUserInput, FilterUncheckedCreateWithoutUserInput> | FilterCreateWithoutUserInput[] | FilterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutUserInput | FilterCreateOrConnectWithoutUserInput[]
    createMany?: FilterCreateManyUserInputEnvelope
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
  }

  export type FightingGameOnUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FightingGameOnUserCreateWithoutUserInput, FightingGameOnUserUncheckedCreateWithoutUserInput> | FightingGameOnUserCreateWithoutUserInput[] | FightingGameOnUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FightingGameOnUserCreateOrConnectWithoutUserInput | FightingGameOnUserCreateOrConnectWithoutUserInput[]
    createMany?: FightingGameOnUserCreateManyUserInputEnvelope
    connect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SheetUpdateManyWithoutUserNestedInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutUserInput | SheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutUserInput | SheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutUserInput | SheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type FilterUpdateManyWithoutUserNestedInput = {
    create?: XOR<FilterCreateWithoutUserInput, FilterUncheckedCreateWithoutUserInput> | FilterCreateWithoutUserInput[] | FilterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutUserInput | FilterCreateOrConnectWithoutUserInput[]
    upsert?: FilterUpsertWithWhereUniqueWithoutUserInput | FilterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FilterCreateManyUserInputEnvelope
    set?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    disconnect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    delete?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    update?: FilterUpdateWithWhereUniqueWithoutUserInput | FilterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FilterUpdateManyWithWhereWithoutUserInput | FilterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FilterScalarWhereInput | FilterScalarWhereInput[]
  }

  export type FightingGameOnUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<FightingGameOnUserCreateWithoutUserInput, FightingGameOnUserUncheckedCreateWithoutUserInput> | FightingGameOnUserCreateWithoutUserInput[] | FightingGameOnUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FightingGameOnUserCreateOrConnectWithoutUserInput | FightingGameOnUserCreateOrConnectWithoutUserInput[]
    upsert?: FightingGameOnUserUpsertWithWhereUniqueWithoutUserInput | FightingGameOnUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FightingGameOnUserCreateManyUserInputEnvelope
    set?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    disconnect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    delete?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    connect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    update?: FightingGameOnUserUpdateWithWhereUniqueWithoutUserInput | FightingGameOnUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FightingGameOnUserUpdateManyWithWhereWithoutUserInput | FightingGameOnUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FightingGameOnUserScalarWhereInput | FightingGameOnUserScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SheetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutUserInput | SheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutUserInput | SheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutUserInput | SheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type FilterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FilterCreateWithoutUserInput, FilterUncheckedCreateWithoutUserInput> | FilterCreateWithoutUserInput[] | FilterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutUserInput | FilterCreateOrConnectWithoutUserInput[]
    upsert?: FilterUpsertWithWhereUniqueWithoutUserInput | FilterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FilterCreateManyUserInputEnvelope
    set?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    disconnect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    delete?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    update?: FilterUpdateWithWhereUniqueWithoutUserInput | FilterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FilterUpdateManyWithWhereWithoutUserInput | FilterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FilterScalarWhereInput | FilterScalarWhereInput[]
  }

  export type FightingGameOnUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FightingGameOnUserCreateWithoutUserInput, FightingGameOnUserUncheckedCreateWithoutUserInput> | FightingGameOnUserCreateWithoutUserInput[] | FightingGameOnUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FightingGameOnUserCreateOrConnectWithoutUserInput | FightingGameOnUserCreateOrConnectWithoutUserInput[]
    upsert?: FightingGameOnUserUpsertWithWhereUniqueWithoutUserInput | FightingGameOnUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FightingGameOnUserCreateManyUserInputEnvelope
    set?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    disconnect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    delete?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    connect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    update?: FightingGameOnUserUpdateWithWhereUniqueWithoutUserInput | FightingGameOnUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FightingGameOnUserUpdateManyWithWhereWithoutUserInput | FightingGameOnUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FightingGameOnUserScalarWhereInput | FightingGameOnUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type FightingGameCreateNestedOneWithoutSheetInput = {
    create?: XOR<FightingGameCreateWithoutSheetInput, FightingGameUncheckedCreateWithoutSheetInput>
    connectOrCreate?: FightingGameCreateOrConnectWithoutSheetInput
    connect?: FightingGameWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSheetInput = {
    create?: XOR<UserCreateWithoutSheetInput, UserUncheckedCreateWithoutSheetInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetInput
    connect?: UserWhereUniqueInput
  }

  export type FilterCreateNestedManyWithoutSheetInput = {
    create?: XOR<FilterCreateWithoutSheetInput, FilterUncheckedCreateWithoutSheetInput> | FilterCreateWithoutSheetInput[] | FilterUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutSheetInput | FilterCreateOrConnectWithoutSheetInput[]
    createMany?: FilterCreateManySheetInputEnvelope
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
  }

  export type CharacterOnSheetCreateNestedManyWithoutSheetInput = {
    create?: XOR<CharacterOnSheetCreateWithoutSheetInput, CharacterOnSheetUncheckedCreateWithoutSheetInput> | CharacterOnSheetCreateWithoutSheetInput[] | CharacterOnSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: CharacterOnSheetCreateOrConnectWithoutSheetInput | CharacterOnSheetCreateOrConnectWithoutSheetInput[]
    createMany?: CharacterOnSheetCreateManySheetInputEnvelope
    connect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
  }

  export type OpponentOnSheetCreateNestedManyWithoutSheetInput = {
    create?: XOR<OpponentOnSheetCreateWithoutSheetInput, OpponentOnSheetUncheckedCreateWithoutSheetInput> | OpponentOnSheetCreateWithoutSheetInput[] | OpponentOnSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: OpponentOnSheetCreateOrConnectWithoutSheetInput | OpponentOnSheetCreateOrConnectWithoutSheetInput[]
    createMany?: OpponentOnSheetCreateManySheetInputEnvelope
    connect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
  }

  export type FilterUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<FilterCreateWithoutSheetInput, FilterUncheckedCreateWithoutSheetInput> | FilterCreateWithoutSheetInput[] | FilterUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutSheetInput | FilterCreateOrConnectWithoutSheetInput[]
    createMany?: FilterCreateManySheetInputEnvelope
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
  }

  export type CharacterOnSheetUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<CharacterOnSheetCreateWithoutSheetInput, CharacterOnSheetUncheckedCreateWithoutSheetInput> | CharacterOnSheetCreateWithoutSheetInput[] | CharacterOnSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: CharacterOnSheetCreateOrConnectWithoutSheetInput | CharacterOnSheetCreateOrConnectWithoutSheetInput[]
    createMany?: CharacterOnSheetCreateManySheetInputEnvelope
    connect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
  }

  export type OpponentOnSheetUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<OpponentOnSheetCreateWithoutSheetInput, OpponentOnSheetUncheckedCreateWithoutSheetInput> | OpponentOnSheetCreateWithoutSheetInput[] | OpponentOnSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: OpponentOnSheetCreateOrConnectWithoutSheetInput | OpponentOnSheetCreateOrConnectWithoutSheetInput[]
    createMany?: OpponentOnSheetCreateManySheetInputEnvelope
    connect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
  }

  export type FightingGameUpdateOneRequiredWithoutSheetNestedInput = {
    create?: XOR<FightingGameCreateWithoutSheetInput, FightingGameUncheckedCreateWithoutSheetInput>
    connectOrCreate?: FightingGameCreateOrConnectWithoutSheetInput
    upsert?: FightingGameUpsertWithoutSheetInput
    connect?: FightingGameWhereUniqueInput
    update?: XOR<XOR<FightingGameUpdateToOneWithWhereWithoutSheetInput, FightingGameUpdateWithoutSheetInput>, FightingGameUncheckedUpdateWithoutSheetInput>
  }

  export type UserUpdateOneRequiredWithoutSheetNestedInput = {
    create?: XOR<UserCreateWithoutSheetInput, UserUncheckedCreateWithoutSheetInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetInput
    upsert?: UserUpsertWithoutSheetInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSheetInput, UserUpdateWithoutSheetInput>, UserUncheckedUpdateWithoutSheetInput>
  }

  export type FilterUpdateManyWithoutSheetNestedInput = {
    create?: XOR<FilterCreateWithoutSheetInput, FilterUncheckedCreateWithoutSheetInput> | FilterCreateWithoutSheetInput[] | FilterUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutSheetInput | FilterCreateOrConnectWithoutSheetInput[]
    upsert?: FilterUpsertWithWhereUniqueWithoutSheetInput | FilterUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: FilterCreateManySheetInputEnvelope
    set?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    disconnect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    delete?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    update?: FilterUpdateWithWhereUniqueWithoutSheetInput | FilterUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: FilterUpdateManyWithWhereWithoutSheetInput | FilterUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: FilterScalarWhereInput | FilterScalarWhereInput[]
  }

  export type CharacterOnSheetUpdateManyWithoutSheetNestedInput = {
    create?: XOR<CharacterOnSheetCreateWithoutSheetInput, CharacterOnSheetUncheckedCreateWithoutSheetInput> | CharacterOnSheetCreateWithoutSheetInput[] | CharacterOnSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: CharacterOnSheetCreateOrConnectWithoutSheetInput | CharacterOnSheetCreateOrConnectWithoutSheetInput[]
    upsert?: CharacterOnSheetUpsertWithWhereUniqueWithoutSheetInput | CharacterOnSheetUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: CharacterOnSheetCreateManySheetInputEnvelope
    set?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    disconnect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    delete?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    connect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    update?: CharacterOnSheetUpdateWithWhereUniqueWithoutSheetInput | CharacterOnSheetUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: CharacterOnSheetUpdateManyWithWhereWithoutSheetInput | CharacterOnSheetUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: CharacterOnSheetScalarWhereInput | CharacterOnSheetScalarWhereInput[]
  }

  export type OpponentOnSheetUpdateManyWithoutSheetNestedInput = {
    create?: XOR<OpponentOnSheetCreateWithoutSheetInput, OpponentOnSheetUncheckedCreateWithoutSheetInput> | OpponentOnSheetCreateWithoutSheetInput[] | OpponentOnSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: OpponentOnSheetCreateOrConnectWithoutSheetInput | OpponentOnSheetCreateOrConnectWithoutSheetInput[]
    upsert?: OpponentOnSheetUpsertWithWhereUniqueWithoutSheetInput | OpponentOnSheetUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: OpponentOnSheetCreateManySheetInputEnvelope
    set?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    disconnect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    delete?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    connect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    update?: OpponentOnSheetUpdateWithWhereUniqueWithoutSheetInput | OpponentOnSheetUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: OpponentOnSheetUpdateManyWithWhereWithoutSheetInput | OpponentOnSheetUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: OpponentOnSheetScalarWhereInput | OpponentOnSheetScalarWhereInput[]
  }

  export type FilterUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<FilterCreateWithoutSheetInput, FilterUncheckedCreateWithoutSheetInput> | FilterCreateWithoutSheetInput[] | FilterUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutSheetInput | FilterCreateOrConnectWithoutSheetInput[]
    upsert?: FilterUpsertWithWhereUniqueWithoutSheetInput | FilterUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: FilterCreateManySheetInputEnvelope
    set?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    disconnect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    delete?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    update?: FilterUpdateWithWhereUniqueWithoutSheetInput | FilterUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: FilterUpdateManyWithWhereWithoutSheetInput | FilterUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: FilterScalarWhereInput | FilterScalarWhereInput[]
  }

  export type CharacterOnSheetUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<CharacterOnSheetCreateWithoutSheetInput, CharacterOnSheetUncheckedCreateWithoutSheetInput> | CharacterOnSheetCreateWithoutSheetInput[] | CharacterOnSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: CharacterOnSheetCreateOrConnectWithoutSheetInput | CharacterOnSheetCreateOrConnectWithoutSheetInput[]
    upsert?: CharacterOnSheetUpsertWithWhereUniqueWithoutSheetInput | CharacterOnSheetUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: CharacterOnSheetCreateManySheetInputEnvelope
    set?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    disconnect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    delete?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    connect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    update?: CharacterOnSheetUpdateWithWhereUniqueWithoutSheetInput | CharacterOnSheetUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: CharacterOnSheetUpdateManyWithWhereWithoutSheetInput | CharacterOnSheetUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: CharacterOnSheetScalarWhereInput | CharacterOnSheetScalarWhereInput[]
  }

  export type OpponentOnSheetUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<OpponentOnSheetCreateWithoutSheetInput, OpponentOnSheetUncheckedCreateWithoutSheetInput> | OpponentOnSheetCreateWithoutSheetInput[] | OpponentOnSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: OpponentOnSheetCreateOrConnectWithoutSheetInput | OpponentOnSheetCreateOrConnectWithoutSheetInput[]
    upsert?: OpponentOnSheetUpsertWithWhereUniqueWithoutSheetInput | OpponentOnSheetUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: OpponentOnSheetCreateManySheetInputEnvelope
    set?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    disconnect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    delete?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    connect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    update?: OpponentOnSheetUpdateWithWhereUniqueWithoutSheetInput | OpponentOnSheetUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: OpponentOnSheetUpdateManyWithWhereWithoutSheetInput | OpponentOnSheetUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: OpponentOnSheetScalarWhereInput | OpponentOnSheetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFilterInput = {
    create?: XOR<UserCreateWithoutFilterInput, UserUncheckedCreateWithoutFilterInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilterInput
    connect?: UserWhereUniqueInput
  }

  export type SheetCreateNestedOneWithoutFilterInput = {
    create?: XOR<SheetCreateWithoutFilterInput, SheetUncheckedCreateWithoutFilterInput>
    connectOrCreate?: SheetCreateOrConnectWithoutFilterInput
    connect?: SheetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFilterNestedInput = {
    create?: XOR<UserCreateWithoutFilterInput, UserUncheckedCreateWithoutFilterInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilterInput
    upsert?: UserUpsertWithoutFilterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilterInput, UserUpdateWithoutFilterInput>, UserUncheckedUpdateWithoutFilterInput>
  }

  export type SheetUpdateOneWithoutFilterNestedInput = {
    create?: XOR<SheetCreateWithoutFilterInput, SheetUncheckedCreateWithoutFilterInput>
    connectOrCreate?: SheetCreateOrConnectWithoutFilterInput
    upsert?: SheetUpsertWithoutFilterInput
    disconnect?: SheetWhereInput | boolean
    delete?: SheetWhereInput | boolean
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutFilterInput, SheetUpdateWithoutFilterInput>, SheetUncheckedUpdateWithoutFilterInput>
  }

  export type CharacterCreateNestedManyWithoutFightingGameInput = {
    create?: XOR<CharacterCreateWithoutFightingGameInput, CharacterUncheckedCreateWithoutFightingGameInput> | CharacterCreateWithoutFightingGameInput[] | CharacterUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutFightingGameInput | CharacterCreateOrConnectWithoutFightingGameInput[]
    createMany?: CharacterCreateManyFightingGameInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type SheetCreateNestedManyWithoutFightingGameInput = {
    create?: XOR<SheetCreateWithoutFightingGameInput, SheetUncheckedCreateWithoutFightingGameInput> | SheetCreateWithoutFightingGameInput[] | SheetUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutFightingGameInput | SheetCreateOrConnectWithoutFightingGameInput[]
    createMany?: SheetCreateManyFightingGameInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type FightingGameOnUserCreateNestedManyWithoutFightingGameInput = {
    create?: XOR<FightingGameOnUserCreateWithoutFightingGameInput, FightingGameOnUserUncheckedCreateWithoutFightingGameInput> | FightingGameOnUserCreateWithoutFightingGameInput[] | FightingGameOnUserUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: FightingGameOnUserCreateOrConnectWithoutFightingGameInput | FightingGameOnUserCreateOrConnectWithoutFightingGameInput[]
    createMany?: FightingGameOnUserCreateManyFightingGameInputEnvelope
    connect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutFightingGameInput = {
    create?: XOR<CharacterCreateWithoutFightingGameInput, CharacterUncheckedCreateWithoutFightingGameInput> | CharacterCreateWithoutFightingGameInput[] | CharacterUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutFightingGameInput | CharacterCreateOrConnectWithoutFightingGameInput[]
    createMany?: CharacterCreateManyFightingGameInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type SheetUncheckedCreateNestedManyWithoutFightingGameInput = {
    create?: XOR<SheetCreateWithoutFightingGameInput, SheetUncheckedCreateWithoutFightingGameInput> | SheetCreateWithoutFightingGameInput[] | SheetUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutFightingGameInput | SheetCreateOrConnectWithoutFightingGameInput[]
    createMany?: SheetCreateManyFightingGameInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type FightingGameOnUserUncheckedCreateNestedManyWithoutFightingGameInput = {
    create?: XOR<FightingGameOnUserCreateWithoutFightingGameInput, FightingGameOnUserUncheckedCreateWithoutFightingGameInput> | FightingGameOnUserCreateWithoutFightingGameInput[] | FightingGameOnUserUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: FightingGameOnUserCreateOrConnectWithoutFightingGameInput | FightingGameOnUserCreateOrConnectWithoutFightingGameInput[]
    createMany?: FightingGameOnUserCreateManyFightingGameInputEnvelope
    connect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
  }

  export type CharacterUpdateManyWithoutFightingGameNestedInput = {
    create?: XOR<CharacterCreateWithoutFightingGameInput, CharacterUncheckedCreateWithoutFightingGameInput> | CharacterCreateWithoutFightingGameInput[] | CharacterUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutFightingGameInput | CharacterCreateOrConnectWithoutFightingGameInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutFightingGameInput | CharacterUpsertWithWhereUniqueWithoutFightingGameInput[]
    createMany?: CharacterCreateManyFightingGameInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutFightingGameInput | CharacterUpdateWithWhereUniqueWithoutFightingGameInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutFightingGameInput | CharacterUpdateManyWithWhereWithoutFightingGameInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type SheetUpdateManyWithoutFightingGameNestedInput = {
    create?: XOR<SheetCreateWithoutFightingGameInput, SheetUncheckedCreateWithoutFightingGameInput> | SheetCreateWithoutFightingGameInput[] | SheetUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutFightingGameInput | SheetCreateOrConnectWithoutFightingGameInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutFightingGameInput | SheetUpsertWithWhereUniqueWithoutFightingGameInput[]
    createMany?: SheetCreateManyFightingGameInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutFightingGameInput | SheetUpdateWithWhereUniqueWithoutFightingGameInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutFightingGameInput | SheetUpdateManyWithWhereWithoutFightingGameInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type FightingGameOnUserUpdateManyWithoutFightingGameNestedInput = {
    create?: XOR<FightingGameOnUserCreateWithoutFightingGameInput, FightingGameOnUserUncheckedCreateWithoutFightingGameInput> | FightingGameOnUserCreateWithoutFightingGameInput[] | FightingGameOnUserUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: FightingGameOnUserCreateOrConnectWithoutFightingGameInput | FightingGameOnUserCreateOrConnectWithoutFightingGameInput[]
    upsert?: FightingGameOnUserUpsertWithWhereUniqueWithoutFightingGameInput | FightingGameOnUserUpsertWithWhereUniqueWithoutFightingGameInput[]
    createMany?: FightingGameOnUserCreateManyFightingGameInputEnvelope
    set?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    disconnect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    delete?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    connect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    update?: FightingGameOnUserUpdateWithWhereUniqueWithoutFightingGameInput | FightingGameOnUserUpdateWithWhereUniqueWithoutFightingGameInput[]
    updateMany?: FightingGameOnUserUpdateManyWithWhereWithoutFightingGameInput | FightingGameOnUserUpdateManyWithWhereWithoutFightingGameInput[]
    deleteMany?: FightingGameOnUserScalarWhereInput | FightingGameOnUserScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutFightingGameNestedInput = {
    create?: XOR<CharacterCreateWithoutFightingGameInput, CharacterUncheckedCreateWithoutFightingGameInput> | CharacterCreateWithoutFightingGameInput[] | CharacterUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutFightingGameInput | CharacterCreateOrConnectWithoutFightingGameInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutFightingGameInput | CharacterUpsertWithWhereUniqueWithoutFightingGameInput[]
    createMany?: CharacterCreateManyFightingGameInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutFightingGameInput | CharacterUpdateWithWhereUniqueWithoutFightingGameInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutFightingGameInput | CharacterUpdateManyWithWhereWithoutFightingGameInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type SheetUncheckedUpdateManyWithoutFightingGameNestedInput = {
    create?: XOR<SheetCreateWithoutFightingGameInput, SheetUncheckedCreateWithoutFightingGameInput> | SheetCreateWithoutFightingGameInput[] | SheetUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutFightingGameInput | SheetCreateOrConnectWithoutFightingGameInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutFightingGameInput | SheetUpsertWithWhereUniqueWithoutFightingGameInput[]
    createMany?: SheetCreateManyFightingGameInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutFightingGameInput | SheetUpdateWithWhereUniqueWithoutFightingGameInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutFightingGameInput | SheetUpdateManyWithWhereWithoutFightingGameInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type FightingGameOnUserUncheckedUpdateManyWithoutFightingGameNestedInput = {
    create?: XOR<FightingGameOnUserCreateWithoutFightingGameInput, FightingGameOnUserUncheckedCreateWithoutFightingGameInput> | FightingGameOnUserCreateWithoutFightingGameInput[] | FightingGameOnUserUncheckedCreateWithoutFightingGameInput[]
    connectOrCreate?: FightingGameOnUserCreateOrConnectWithoutFightingGameInput | FightingGameOnUserCreateOrConnectWithoutFightingGameInput[]
    upsert?: FightingGameOnUserUpsertWithWhereUniqueWithoutFightingGameInput | FightingGameOnUserUpsertWithWhereUniqueWithoutFightingGameInput[]
    createMany?: FightingGameOnUserCreateManyFightingGameInputEnvelope
    set?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    disconnect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    delete?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    connect?: FightingGameOnUserWhereUniqueInput | FightingGameOnUserWhereUniqueInput[]
    update?: FightingGameOnUserUpdateWithWhereUniqueWithoutFightingGameInput | FightingGameOnUserUpdateWithWhereUniqueWithoutFightingGameInput[]
    updateMany?: FightingGameOnUserUpdateManyWithWhereWithoutFightingGameInput | FightingGameOnUserUpdateManyWithWhereWithoutFightingGameInput[]
    deleteMany?: FightingGameOnUserScalarWhereInput | FightingGameOnUserScalarWhereInput[]
  }

  export type FightingGameCreateNestedOneWithoutCharactersInput = {
    create?: XOR<FightingGameCreateWithoutCharactersInput, FightingGameUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: FightingGameCreateOrConnectWithoutCharactersInput
    connect?: FightingGameWhereUniqueInput
  }

  export type CharacterOnSheetCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterOnSheetCreateWithoutCharacterInput, CharacterOnSheetUncheckedCreateWithoutCharacterInput> | CharacterOnSheetCreateWithoutCharacterInput[] | CharacterOnSheetUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterOnSheetCreateOrConnectWithoutCharacterInput | CharacterOnSheetCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterOnSheetCreateManyCharacterInputEnvelope
    connect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
  }

  export type OpponentOnSheetCreateNestedManyWithoutOpponentInput = {
    create?: XOR<OpponentOnSheetCreateWithoutOpponentInput, OpponentOnSheetUncheckedCreateWithoutOpponentInput> | OpponentOnSheetCreateWithoutOpponentInput[] | OpponentOnSheetUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: OpponentOnSheetCreateOrConnectWithoutOpponentInput | OpponentOnSheetCreateOrConnectWithoutOpponentInput[]
    createMany?: OpponentOnSheetCreateManyOpponentInputEnvelope
    connect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
  }

  export type CharacterOnSheetUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterOnSheetCreateWithoutCharacterInput, CharacterOnSheetUncheckedCreateWithoutCharacterInput> | CharacterOnSheetCreateWithoutCharacterInput[] | CharacterOnSheetUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterOnSheetCreateOrConnectWithoutCharacterInput | CharacterOnSheetCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterOnSheetCreateManyCharacterInputEnvelope
    connect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
  }

  export type OpponentOnSheetUncheckedCreateNestedManyWithoutOpponentInput = {
    create?: XOR<OpponentOnSheetCreateWithoutOpponentInput, OpponentOnSheetUncheckedCreateWithoutOpponentInput> | OpponentOnSheetCreateWithoutOpponentInput[] | OpponentOnSheetUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: OpponentOnSheetCreateOrConnectWithoutOpponentInput | OpponentOnSheetCreateOrConnectWithoutOpponentInput[]
    createMany?: OpponentOnSheetCreateManyOpponentInputEnvelope
    connect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
  }

  export type FightingGameUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<FightingGameCreateWithoutCharactersInput, FightingGameUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: FightingGameCreateOrConnectWithoutCharactersInput
    upsert?: FightingGameUpsertWithoutCharactersInput
    connect?: FightingGameWhereUniqueInput
    update?: XOR<XOR<FightingGameUpdateToOneWithWhereWithoutCharactersInput, FightingGameUpdateWithoutCharactersInput>, FightingGameUncheckedUpdateWithoutCharactersInput>
  }

  export type CharacterOnSheetUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterOnSheetCreateWithoutCharacterInput, CharacterOnSheetUncheckedCreateWithoutCharacterInput> | CharacterOnSheetCreateWithoutCharacterInput[] | CharacterOnSheetUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterOnSheetCreateOrConnectWithoutCharacterInput | CharacterOnSheetCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterOnSheetUpsertWithWhereUniqueWithoutCharacterInput | CharacterOnSheetUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterOnSheetCreateManyCharacterInputEnvelope
    set?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    disconnect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    delete?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    connect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    update?: CharacterOnSheetUpdateWithWhereUniqueWithoutCharacterInput | CharacterOnSheetUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterOnSheetUpdateManyWithWhereWithoutCharacterInput | CharacterOnSheetUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterOnSheetScalarWhereInput | CharacterOnSheetScalarWhereInput[]
  }

  export type OpponentOnSheetUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<OpponentOnSheetCreateWithoutOpponentInput, OpponentOnSheetUncheckedCreateWithoutOpponentInput> | OpponentOnSheetCreateWithoutOpponentInput[] | OpponentOnSheetUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: OpponentOnSheetCreateOrConnectWithoutOpponentInput | OpponentOnSheetCreateOrConnectWithoutOpponentInput[]
    upsert?: OpponentOnSheetUpsertWithWhereUniqueWithoutOpponentInput | OpponentOnSheetUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: OpponentOnSheetCreateManyOpponentInputEnvelope
    set?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    disconnect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    delete?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    connect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    update?: OpponentOnSheetUpdateWithWhereUniqueWithoutOpponentInput | OpponentOnSheetUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: OpponentOnSheetUpdateManyWithWhereWithoutOpponentInput | OpponentOnSheetUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: OpponentOnSheetScalarWhereInput | OpponentOnSheetScalarWhereInput[]
  }

  export type CharacterOnSheetUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterOnSheetCreateWithoutCharacterInput, CharacterOnSheetUncheckedCreateWithoutCharacterInput> | CharacterOnSheetCreateWithoutCharacterInput[] | CharacterOnSheetUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterOnSheetCreateOrConnectWithoutCharacterInput | CharacterOnSheetCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterOnSheetUpsertWithWhereUniqueWithoutCharacterInput | CharacterOnSheetUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterOnSheetCreateManyCharacterInputEnvelope
    set?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    disconnect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    delete?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    connect?: CharacterOnSheetWhereUniqueInput | CharacterOnSheetWhereUniqueInput[]
    update?: CharacterOnSheetUpdateWithWhereUniqueWithoutCharacterInput | CharacterOnSheetUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterOnSheetUpdateManyWithWhereWithoutCharacterInput | CharacterOnSheetUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterOnSheetScalarWhereInput | CharacterOnSheetScalarWhereInput[]
  }

  export type OpponentOnSheetUncheckedUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<OpponentOnSheetCreateWithoutOpponentInput, OpponentOnSheetUncheckedCreateWithoutOpponentInput> | OpponentOnSheetCreateWithoutOpponentInput[] | OpponentOnSheetUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: OpponentOnSheetCreateOrConnectWithoutOpponentInput | OpponentOnSheetCreateOrConnectWithoutOpponentInput[]
    upsert?: OpponentOnSheetUpsertWithWhereUniqueWithoutOpponentInput | OpponentOnSheetUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: OpponentOnSheetCreateManyOpponentInputEnvelope
    set?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    disconnect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    delete?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    connect?: OpponentOnSheetWhereUniqueInput | OpponentOnSheetWhereUniqueInput[]
    update?: OpponentOnSheetUpdateWithWhereUniqueWithoutOpponentInput | OpponentOnSheetUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: OpponentOnSheetUpdateManyWithWhereWithoutOpponentInput | OpponentOnSheetUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: OpponentOnSheetScalarWhereInput | OpponentOnSheetScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutCharacterOnSheetInput = {
    create?: XOR<CharacterCreateWithoutCharacterOnSheetInput, CharacterUncheckedCreateWithoutCharacterOnSheetInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutCharacterOnSheetInput
    connect?: CharacterWhereUniqueInput
  }

  export type SheetCreateNestedOneWithoutCharacterOnSheetInput = {
    create?: XOR<SheetCreateWithoutCharacterOnSheetInput, SheetUncheckedCreateWithoutCharacterOnSheetInput>
    connectOrCreate?: SheetCreateOrConnectWithoutCharacterOnSheetInput
    connect?: SheetWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutCharacterOnSheetNestedInput = {
    create?: XOR<CharacterCreateWithoutCharacterOnSheetInput, CharacterUncheckedCreateWithoutCharacterOnSheetInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutCharacterOnSheetInput
    upsert?: CharacterUpsertWithoutCharacterOnSheetInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutCharacterOnSheetInput, CharacterUpdateWithoutCharacterOnSheetInput>, CharacterUncheckedUpdateWithoutCharacterOnSheetInput>
  }

  export type SheetUpdateOneRequiredWithoutCharacterOnSheetNestedInput = {
    create?: XOR<SheetCreateWithoutCharacterOnSheetInput, SheetUncheckedCreateWithoutCharacterOnSheetInput>
    connectOrCreate?: SheetCreateOrConnectWithoutCharacterOnSheetInput
    upsert?: SheetUpsertWithoutCharacterOnSheetInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutCharacterOnSheetInput, SheetUpdateWithoutCharacterOnSheetInput>, SheetUncheckedUpdateWithoutCharacterOnSheetInput>
  }

  export type CharacterCreateNestedOneWithoutOpponentOnSheetInput = {
    create?: XOR<CharacterCreateWithoutOpponentOnSheetInput, CharacterUncheckedCreateWithoutOpponentOnSheetInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutOpponentOnSheetInput
    connect?: CharacterWhereUniqueInput
  }

  export type SheetCreateNestedOneWithoutOpponentOnSheetInput = {
    create?: XOR<SheetCreateWithoutOpponentOnSheetInput, SheetUncheckedCreateWithoutOpponentOnSheetInput>
    connectOrCreate?: SheetCreateOrConnectWithoutOpponentOnSheetInput
    connect?: SheetWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutOpponentOnSheetNestedInput = {
    create?: XOR<CharacterCreateWithoutOpponentOnSheetInput, CharacterUncheckedCreateWithoutOpponentOnSheetInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutOpponentOnSheetInput
    upsert?: CharacterUpsertWithoutOpponentOnSheetInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutOpponentOnSheetInput, CharacterUpdateWithoutOpponentOnSheetInput>, CharacterUncheckedUpdateWithoutOpponentOnSheetInput>
  }

  export type SheetUpdateOneRequiredWithoutOpponentOnSheetNestedInput = {
    create?: XOR<SheetCreateWithoutOpponentOnSheetInput, SheetUncheckedCreateWithoutOpponentOnSheetInput>
    connectOrCreate?: SheetCreateOrConnectWithoutOpponentOnSheetInput
    upsert?: SheetUpsertWithoutOpponentOnSheetInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutOpponentOnSheetInput, SheetUpdateWithoutOpponentOnSheetInput>, SheetUncheckedUpdateWithoutOpponentOnSheetInput>
  }

  export type UserCreateNestedOneWithoutFightingGameOnUserInput = {
    create?: XOR<UserCreateWithoutFightingGameOnUserInput, UserUncheckedCreateWithoutFightingGameOnUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutFightingGameOnUserInput
    connect?: UserWhereUniqueInput
  }

  export type FightingGameCreateNestedOneWithoutFightingGameOnUserInput = {
    create?: XOR<FightingGameCreateWithoutFightingGameOnUserInput, FightingGameUncheckedCreateWithoutFightingGameOnUserInput>
    connectOrCreate?: FightingGameCreateOrConnectWithoutFightingGameOnUserInput
    connect?: FightingGameWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFightingGameOnUserNestedInput = {
    create?: XOR<UserCreateWithoutFightingGameOnUserInput, UserUncheckedCreateWithoutFightingGameOnUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutFightingGameOnUserInput
    upsert?: UserUpsertWithoutFightingGameOnUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFightingGameOnUserInput, UserUpdateWithoutFightingGameOnUserInput>, UserUncheckedUpdateWithoutFightingGameOnUserInput>
  }

  export type FightingGameUpdateOneRequiredWithoutFightingGameOnUserNestedInput = {
    create?: XOR<FightingGameCreateWithoutFightingGameOnUserInput, FightingGameUncheckedCreateWithoutFightingGameOnUserInput>
    connectOrCreate?: FightingGameCreateOrConnectWithoutFightingGameOnUserInput
    upsert?: FightingGameUpsertWithoutFightingGameOnUserInput
    connect?: FightingGameWhereUniqueInput
    update?: XOR<XOR<FightingGameUpdateToOneWithWhereWithoutFightingGameOnUserInput, FightingGameUpdateWithoutFightingGameOnUserInput>, FightingGameUncheckedUpdateWithoutFightingGameOnUserInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SheetCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGame: FightingGameCreateNestedOneWithoutSheetInput
    filter?: FilterCreateNestedManyWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGameId: string
    filter?: FilterUncheckedCreateNestedManyWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetUncheckedCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutUserInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput>
  }

  export type SheetCreateManyUserInputEnvelope = {
    data: SheetCreateManyUserInput | SheetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FilterCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Sheet?: SheetCreateNestedOneWithoutFilterInput
  }

  export type FilterUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sheetId?: string | null
  }

  export type FilterCreateOrConnectWithoutUserInput = {
    where: FilterWhereUniqueInput
    create: XOR<FilterCreateWithoutUserInput, FilterUncheckedCreateWithoutUserInput>
  }

  export type FilterCreateManyUserInputEnvelope = {
    data: FilterCreateManyUserInput | FilterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FightingGameOnUserCreateWithoutUserInput = {
    id?: string
    fightingGame: FightingGameCreateNestedOneWithoutFightingGameOnUserInput
  }

  export type FightingGameOnUserUncheckedCreateWithoutUserInput = {
    id?: string
    fightingGameId: string
  }

  export type FightingGameOnUserCreateOrConnectWithoutUserInput = {
    where: FightingGameOnUserWhereUniqueInput
    create: XOR<FightingGameOnUserCreateWithoutUserInput, FightingGameOnUserUncheckedCreateWithoutUserInput>
  }

  export type FightingGameOnUserCreateManyUserInputEnvelope = {
    data: FightingGameOnUserCreateManyUserInput | FightingGameOnUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SheetUpsertWithWhereUniqueWithoutUserInput = {
    where: SheetWhereUniqueInput
    update: XOR<SheetUpdateWithoutUserInput, SheetUncheckedUpdateWithoutUserInput>
    create: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput>
  }

  export type SheetUpdateWithWhereUniqueWithoutUserInput = {
    where: SheetWhereUniqueInput
    data: XOR<SheetUpdateWithoutUserInput, SheetUncheckedUpdateWithoutUserInput>
  }

  export type SheetUpdateManyWithWhereWithoutUserInput = {
    where: SheetScalarWhereInput
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyWithoutUserInput>
  }

  export type SheetScalarWhereInput = {
    AND?: SheetScalarWhereInput | SheetScalarWhereInput[]
    OR?: SheetScalarWhereInput[]
    NOT?: SheetScalarWhereInput | SheetScalarWhereInput[]
    id?: StringFilter<"Sheet"> | string
    title?: StringFilter<"Sheet"> | string
    content?: StringFilter<"Sheet"> | string
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    userId?: StringFilter<"Sheet"> | string
    fightingGameId?: StringFilter<"Sheet"> | string
  }

  export type FilterUpsertWithWhereUniqueWithoutUserInput = {
    where: FilterWhereUniqueInput
    update: XOR<FilterUpdateWithoutUserInput, FilterUncheckedUpdateWithoutUserInput>
    create: XOR<FilterCreateWithoutUserInput, FilterUncheckedCreateWithoutUserInput>
  }

  export type FilterUpdateWithWhereUniqueWithoutUserInput = {
    where: FilterWhereUniqueInput
    data: XOR<FilterUpdateWithoutUserInput, FilterUncheckedUpdateWithoutUserInput>
  }

  export type FilterUpdateManyWithWhereWithoutUserInput = {
    where: FilterScalarWhereInput
    data: XOR<FilterUpdateManyMutationInput, FilterUncheckedUpdateManyWithoutUserInput>
  }

  export type FilterScalarWhereInput = {
    AND?: FilterScalarWhereInput | FilterScalarWhereInput[]
    OR?: FilterScalarWhereInput[]
    NOT?: FilterScalarWhereInput | FilterScalarWhereInput[]
    id?: StringFilter<"Filter"> | string
    name?: StringFilter<"Filter"> | string
    createdAt?: DateTimeFilter<"Filter"> | Date | string
    updatedAt?: DateTimeFilter<"Filter"> | Date | string
    userId?: StringFilter<"Filter"> | string
    sheetId?: StringNullableFilter<"Filter"> | string | null
  }

  export type FightingGameOnUserUpsertWithWhereUniqueWithoutUserInput = {
    where: FightingGameOnUserWhereUniqueInput
    update: XOR<FightingGameOnUserUpdateWithoutUserInput, FightingGameOnUserUncheckedUpdateWithoutUserInput>
    create: XOR<FightingGameOnUserCreateWithoutUserInput, FightingGameOnUserUncheckedCreateWithoutUserInput>
  }

  export type FightingGameOnUserUpdateWithWhereUniqueWithoutUserInput = {
    where: FightingGameOnUserWhereUniqueInput
    data: XOR<FightingGameOnUserUpdateWithoutUserInput, FightingGameOnUserUncheckedUpdateWithoutUserInput>
  }

  export type FightingGameOnUserUpdateManyWithWhereWithoutUserInput = {
    where: FightingGameOnUserScalarWhereInput
    data: XOR<FightingGameOnUserUpdateManyMutationInput, FightingGameOnUserUncheckedUpdateManyWithoutUserInput>
  }

  export type FightingGameOnUserScalarWhereInput = {
    AND?: FightingGameOnUserScalarWhereInput | FightingGameOnUserScalarWhereInput[]
    OR?: FightingGameOnUserScalarWhereInput[]
    NOT?: FightingGameOnUserScalarWhereInput | FightingGameOnUserScalarWhereInput[]
    id?: StringFilter<"FightingGameOnUser"> | string
    userId?: StringFilter<"FightingGameOnUser"> | string
    fightingGameId?: StringFilter<"FightingGameOnUser"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Sheet?: SheetCreateNestedManyWithoutUserInput
    Filter?: FilterCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    Filter?: FilterUncheckedCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Sheet?: SheetUpdateManyWithoutUserNestedInput
    Filter?: FilterUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    Filter?: FilterUncheckedUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    Sheet?: SheetCreateNestedManyWithoutUserInput
    Filter?: FilterCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    Filter?: FilterUncheckedCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Sheet?: SheetUpdateManyWithoutUserNestedInput
    Filter?: FilterUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    Filter?: FilterUncheckedUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FightingGameCreateWithoutSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterCreateNestedManyWithoutFightingGameInput
    FightingGameOnUser?: FightingGameOnUserCreateNestedManyWithoutFightingGameInput
  }

  export type FightingGameUncheckedCreateWithoutSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutFightingGameInput
    FightingGameOnUser?: FightingGameOnUserUncheckedCreateNestedManyWithoutFightingGameInput
  }

  export type FightingGameCreateOrConnectWithoutSheetInput = {
    where: FightingGameWhereUniqueInput
    create: XOR<FightingGameCreateWithoutSheetInput, FightingGameUncheckedCreateWithoutSheetInput>
  }

  export type UserCreateWithoutSheetInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    Filter?: FilterCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSheetInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Filter?: FilterUncheckedCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSheetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSheetInput, UserUncheckedCreateWithoutSheetInput>
  }

  export type FilterCreateWithoutSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilterInput
  }

  export type FilterUncheckedCreateWithoutSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type FilterCreateOrConnectWithoutSheetInput = {
    where: FilterWhereUniqueInput
    create: XOR<FilterCreateWithoutSheetInput, FilterUncheckedCreateWithoutSheetInput>
  }

  export type FilterCreateManySheetInputEnvelope = {
    data: FilterCreateManySheetInput | FilterCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type CharacterOnSheetCreateWithoutSheetInput = {
    id?: string
    character: CharacterCreateNestedOneWithoutCharacterOnSheetInput
  }

  export type CharacterOnSheetUncheckedCreateWithoutSheetInput = {
    id?: string
    characterId: string
  }

  export type CharacterOnSheetCreateOrConnectWithoutSheetInput = {
    where: CharacterOnSheetWhereUniqueInput
    create: XOR<CharacterOnSheetCreateWithoutSheetInput, CharacterOnSheetUncheckedCreateWithoutSheetInput>
  }

  export type CharacterOnSheetCreateManySheetInputEnvelope = {
    data: CharacterOnSheetCreateManySheetInput | CharacterOnSheetCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type OpponentOnSheetCreateWithoutSheetInput = {
    id?: string
    opponent: CharacterCreateNestedOneWithoutOpponentOnSheetInput
  }

  export type OpponentOnSheetUncheckedCreateWithoutSheetInput = {
    id?: string
    opponentId: string
  }

  export type OpponentOnSheetCreateOrConnectWithoutSheetInput = {
    where: OpponentOnSheetWhereUniqueInput
    create: XOR<OpponentOnSheetCreateWithoutSheetInput, OpponentOnSheetUncheckedCreateWithoutSheetInput>
  }

  export type OpponentOnSheetCreateManySheetInputEnvelope = {
    data: OpponentOnSheetCreateManySheetInput | OpponentOnSheetCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type FightingGameUpsertWithoutSheetInput = {
    update: XOR<FightingGameUpdateWithoutSheetInput, FightingGameUncheckedUpdateWithoutSheetInput>
    create: XOR<FightingGameCreateWithoutSheetInput, FightingGameUncheckedCreateWithoutSheetInput>
    where?: FightingGameWhereInput
  }

  export type FightingGameUpdateToOneWithWhereWithoutSheetInput = {
    where?: FightingGameWhereInput
    data: XOR<FightingGameUpdateWithoutSheetInput, FightingGameUncheckedUpdateWithoutSheetInput>
  }

  export type FightingGameUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUpdateManyWithoutFightingGameNestedInput
    FightingGameOnUser?: FightingGameOnUserUpdateManyWithoutFightingGameNestedInput
  }

  export type FightingGameUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutFightingGameNestedInput
    FightingGameOnUser?: FightingGameOnUserUncheckedUpdateManyWithoutFightingGameNestedInput
  }

  export type UserUpsertWithoutSheetInput = {
    update: XOR<UserUpdateWithoutSheetInput, UserUncheckedUpdateWithoutSheetInput>
    create: XOR<UserCreateWithoutSheetInput, UserUncheckedCreateWithoutSheetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSheetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSheetInput, UserUncheckedUpdateWithoutSheetInput>
  }

  export type UserUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Filter?: FilterUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Filter?: FilterUncheckedUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FilterUpsertWithWhereUniqueWithoutSheetInput = {
    where: FilterWhereUniqueInput
    update: XOR<FilterUpdateWithoutSheetInput, FilterUncheckedUpdateWithoutSheetInput>
    create: XOR<FilterCreateWithoutSheetInput, FilterUncheckedCreateWithoutSheetInput>
  }

  export type FilterUpdateWithWhereUniqueWithoutSheetInput = {
    where: FilterWhereUniqueInput
    data: XOR<FilterUpdateWithoutSheetInput, FilterUncheckedUpdateWithoutSheetInput>
  }

  export type FilterUpdateManyWithWhereWithoutSheetInput = {
    where: FilterScalarWhereInput
    data: XOR<FilterUpdateManyMutationInput, FilterUncheckedUpdateManyWithoutSheetInput>
  }

  export type CharacterOnSheetUpsertWithWhereUniqueWithoutSheetInput = {
    where: CharacterOnSheetWhereUniqueInput
    update: XOR<CharacterOnSheetUpdateWithoutSheetInput, CharacterOnSheetUncheckedUpdateWithoutSheetInput>
    create: XOR<CharacterOnSheetCreateWithoutSheetInput, CharacterOnSheetUncheckedCreateWithoutSheetInput>
  }

  export type CharacterOnSheetUpdateWithWhereUniqueWithoutSheetInput = {
    where: CharacterOnSheetWhereUniqueInput
    data: XOR<CharacterOnSheetUpdateWithoutSheetInput, CharacterOnSheetUncheckedUpdateWithoutSheetInput>
  }

  export type CharacterOnSheetUpdateManyWithWhereWithoutSheetInput = {
    where: CharacterOnSheetScalarWhereInput
    data: XOR<CharacterOnSheetUpdateManyMutationInput, CharacterOnSheetUncheckedUpdateManyWithoutSheetInput>
  }

  export type CharacterOnSheetScalarWhereInput = {
    AND?: CharacterOnSheetScalarWhereInput | CharacterOnSheetScalarWhereInput[]
    OR?: CharacterOnSheetScalarWhereInput[]
    NOT?: CharacterOnSheetScalarWhereInput | CharacterOnSheetScalarWhereInput[]
    id?: StringFilter<"CharacterOnSheet"> | string
    characterId?: StringFilter<"CharacterOnSheet"> | string
    sheetId?: StringFilter<"CharacterOnSheet"> | string
  }

  export type OpponentOnSheetUpsertWithWhereUniqueWithoutSheetInput = {
    where: OpponentOnSheetWhereUniqueInput
    update: XOR<OpponentOnSheetUpdateWithoutSheetInput, OpponentOnSheetUncheckedUpdateWithoutSheetInput>
    create: XOR<OpponentOnSheetCreateWithoutSheetInput, OpponentOnSheetUncheckedCreateWithoutSheetInput>
  }

  export type OpponentOnSheetUpdateWithWhereUniqueWithoutSheetInput = {
    where: OpponentOnSheetWhereUniqueInput
    data: XOR<OpponentOnSheetUpdateWithoutSheetInput, OpponentOnSheetUncheckedUpdateWithoutSheetInput>
  }

  export type OpponentOnSheetUpdateManyWithWhereWithoutSheetInput = {
    where: OpponentOnSheetScalarWhereInput
    data: XOR<OpponentOnSheetUpdateManyMutationInput, OpponentOnSheetUncheckedUpdateManyWithoutSheetInput>
  }

  export type OpponentOnSheetScalarWhereInput = {
    AND?: OpponentOnSheetScalarWhereInput | OpponentOnSheetScalarWhereInput[]
    OR?: OpponentOnSheetScalarWhereInput[]
    NOT?: OpponentOnSheetScalarWhereInput | OpponentOnSheetScalarWhereInput[]
    id?: StringFilter<"OpponentOnSheet"> | string
    opponentId?: StringFilter<"OpponentOnSheet"> | string
    sheetId?: StringFilter<"OpponentOnSheet"> | string
  }

  export type UserCreateWithoutFilterInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    Sheet?: SheetCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilterInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    FightingGameOnUser?: FightingGameOnUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilterInput, UserUncheckedCreateWithoutFilterInput>
  }

  export type SheetCreateWithoutFilterInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGame: FightingGameCreateNestedOneWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutFilterInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    fightingGameId: string
    CharacterOnSheet?: CharacterOnSheetUncheckedCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutFilterInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutFilterInput, SheetUncheckedCreateWithoutFilterInput>
  }

  export type UserUpsertWithoutFilterInput = {
    update: XOR<UserUpdateWithoutFilterInput, UserUncheckedUpdateWithoutFilterInput>
    create: XOR<UserCreateWithoutFilterInput, UserUncheckedCreateWithoutFilterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilterInput, UserUncheckedUpdateWithoutFilterInput>
  }

  export type UserUpdateWithoutFilterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Sheet?: SheetUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    FightingGameOnUser?: FightingGameOnUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SheetUpsertWithoutFilterInput = {
    update: XOR<SheetUpdateWithoutFilterInput, SheetUncheckedUpdateWithoutFilterInput>
    create: XOR<SheetCreateWithoutFilterInput, SheetUncheckedCreateWithoutFilterInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutFilterInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutFilterInput, SheetUncheckedUpdateWithoutFilterInput>
  }

  export type SheetUpdateWithoutFilterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutFilterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
    CharacterOnSheet?: CharacterOnSheetUncheckedUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type CharacterCreateWithoutFightingGameInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    CharacterOnSheet?: CharacterOnSheetCreateNestedManyWithoutCharacterInput
    OpponentOnSheet?: OpponentOnSheetCreateNestedManyWithoutOpponentInput
  }

  export type CharacterUncheckedCreateWithoutFightingGameInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    CharacterOnSheet?: CharacterOnSheetUncheckedCreateNestedManyWithoutCharacterInput
    OpponentOnSheet?: OpponentOnSheetUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type CharacterCreateOrConnectWithoutFightingGameInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutFightingGameInput, CharacterUncheckedCreateWithoutFightingGameInput>
  }

  export type CharacterCreateManyFightingGameInputEnvelope = {
    data: CharacterCreateManyFightingGameInput | CharacterCreateManyFightingGameInput[]
    skipDuplicates?: boolean
  }

  export type SheetCreateWithoutFightingGameInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSheetInput
    filter?: FilterCreateNestedManyWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutFightingGameInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    filter?: FilterUncheckedCreateNestedManyWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetUncheckedCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutFightingGameInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutFightingGameInput, SheetUncheckedCreateWithoutFightingGameInput>
  }

  export type SheetCreateManyFightingGameInputEnvelope = {
    data: SheetCreateManyFightingGameInput | SheetCreateManyFightingGameInput[]
    skipDuplicates?: boolean
  }

  export type FightingGameOnUserCreateWithoutFightingGameInput = {
    id?: string
    user: UserCreateNestedOneWithoutFightingGameOnUserInput
  }

  export type FightingGameOnUserUncheckedCreateWithoutFightingGameInput = {
    id?: string
    userId: string
  }

  export type FightingGameOnUserCreateOrConnectWithoutFightingGameInput = {
    where: FightingGameOnUserWhereUniqueInput
    create: XOR<FightingGameOnUserCreateWithoutFightingGameInput, FightingGameOnUserUncheckedCreateWithoutFightingGameInput>
  }

  export type FightingGameOnUserCreateManyFightingGameInputEnvelope = {
    data: FightingGameOnUserCreateManyFightingGameInput | FightingGameOnUserCreateManyFightingGameInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithWhereUniqueWithoutFightingGameInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutFightingGameInput, CharacterUncheckedUpdateWithoutFightingGameInput>
    create: XOR<CharacterCreateWithoutFightingGameInput, CharacterUncheckedCreateWithoutFightingGameInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutFightingGameInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutFightingGameInput, CharacterUncheckedUpdateWithoutFightingGameInput>
  }

  export type CharacterUpdateManyWithWhereWithoutFightingGameInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutFightingGameInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    fightingGameId?: StringFilter<"Character"> | string
  }

  export type SheetUpsertWithWhereUniqueWithoutFightingGameInput = {
    where: SheetWhereUniqueInput
    update: XOR<SheetUpdateWithoutFightingGameInput, SheetUncheckedUpdateWithoutFightingGameInput>
    create: XOR<SheetCreateWithoutFightingGameInput, SheetUncheckedCreateWithoutFightingGameInput>
  }

  export type SheetUpdateWithWhereUniqueWithoutFightingGameInput = {
    where: SheetWhereUniqueInput
    data: XOR<SheetUpdateWithoutFightingGameInput, SheetUncheckedUpdateWithoutFightingGameInput>
  }

  export type SheetUpdateManyWithWhereWithoutFightingGameInput = {
    where: SheetScalarWhereInput
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyWithoutFightingGameInput>
  }

  export type FightingGameOnUserUpsertWithWhereUniqueWithoutFightingGameInput = {
    where: FightingGameOnUserWhereUniqueInput
    update: XOR<FightingGameOnUserUpdateWithoutFightingGameInput, FightingGameOnUserUncheckedUpdateWithoutFightingGameInput>
    create: XOR<FightingGameOnUserCreateWithoutFightingGameInput, FightingGameOnUserUncheckedCreateWithoutFightingGameInput>
  }

  export type FightingGameOnUserUpdateWithWhereUniqueWithoutFightingGameInput = {
    where: FightingGameOnUserWhereUniqueInput
    data: XOR<FightingGameOnUserUpdateWithoutFightingGameInput, FightingGameOnUserUncheckedUpdateWithoutFightingGameInput>
  }

  export type FightingGameOnUserUpdateManyWithWhereWithoutFightingGameInput = {
    where: FightingGameOnUserScalarWhereInput
    data: XOR<FightingGameOnUserUpdateManyMutationInput, FightingGameOnUserUncheckedUpdateManyWithoutFightingGameInput>
  }

  export type FightingGameCreateWithoutCharactersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Sheet?: SheetCreateNestedManyWithoutFightingGameInput
    FightingGameOnUser?: FightingGameOnUserCreateNestedManyWithoutFightingGameInput
  }

  export type FightingGameUncheckedCreateWithoutCharactersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Sheet?: SheetUncheckedCreateNestedManyWithoutFightingGameInput
    FightingGameOnUser?: FightingGameOnUserUncheckedCreateNestedManyWithoutFightingGameInput
  }

  export type FightingGameCreateOrConnectWithoutCharactersInput = {
    where: FightingGameWhereUniqueInput
    create: XOR<FightingGameCreateWithoutCharactersInput, FightingGameUncheckedCreateWithoutCharactersInput>
  }

  export type CharacterOnSheetCreateWithoutCharacterInput = {
    id?: string
    sheet: SheetCreateNestedOneWithoutCharacterOnSheetInput
  }

  export type CharacterOnSheetUncheckedCreateWithoutCharacterInput = {
    id?: string
    sheetId: string
  }

  export type CharacterOnSheetCreateOrConnectWithoutCharacterInput = {
    where: CharacterOnSheetWhereUniqueInput
    create: XOR<CharacterOnSheetCreateWithoutCharacterInput, CharacterOnSheetUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterOnSheetCreateManyCharacterInputEnvelope = {
    data: CharacterOnSheetCreateManyCharacterInput | CharacterOnSheetCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type OpponentOnSheetCreateWithoutOpponentInput = {
    id?: string
    sheet: SheetCreateNestedOneWithoutOpponentOnSheetInput
  }

  export type OpponentOnSheetUncheckedCreateWithoutOpponentInput = {
    id?: string
    sheetId: string
  }

  export type OpponentOnSheetCreateOrConnectWithoutOpponentInput = {
    where: OpponentOnSheetWhereUniqueInput
    create: XOR<OpponentOnSheetCreateWithoutOpponentInput, OpponentOnSheetUncheckedCreateWithoutOpponentInput>
  }

  export type OpponentOnSheetCreateManyOpponentInputEnvelope = {
    data: OpponentOnSheetCreateManyOpponentInput | OpponentOnSheetCreateManyOpponentInput[]
    skipDuplicates?: boolean
  }

  export type FightingGameUpsertWithoutCharactersInput = {
    update: XOR<FightingGameUpdateWithoutCharactersInput, FightingGameUncheckedUpdateWithoutCharactersInput>
    create: XOR<FightingGameCreateWithoutCharactersInput, FightingGameUncheckedCreateWithoutCharactersInput>
    where?: FightingGameWhereInput
  }

  export type FightingGameUpdateToOneWithWhereWithoutCharactersInput = {
    where?: FightingGameWhereInput
    data: XOR<FightingGameUpdateWithoutCharactersInput, FightingGameUncheckedUpdateWithoutCharactersInput>
  }

  export type FightingGameUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sheet?: SheetUpdateManyWithoutFightingGameNestedInput
    FightingGameOnUser?: FightingGameOnUserUpdateManyWithoutFightingGameNestedInput
  }

  export type FightingGameUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sheet?: SheetUncheckedUpdateManyWithoutFightingGameNestedInput
    FightingGameOnUser?: FightingGameOnUserUncheckedUpdateManyWithoutFightingGameNestedInput
  }

  export type CharacterOnSheetUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharacterOnSheetWhereUniqueInput
    update: XOR<CharacterOnSheetUpdateWithoutCharacterInput, CharacterOnSheetUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterOnSheetCreateWithoutCharacterInput, CharacterOnSheetUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterOnSheetUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharacterOnSheetWhereUniqueInput
    data: XOR<CharacterOnSheetUpdateWithoutCharacterInput, CharacterOnSheetUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterOnSheetUpdateManyWithWhereWithoutCharacterInput = {
    where: CharacterOnSheetScalarWhereInput
    data: XOR<CharacterOnSheetUpdateManyMutationInput, CharacterOnSheetUncheckedUpdateManyWithoutCharacterInput>
  }

  export type OpponentOnSheetUpsertWithWhereUniqueWithoutOpponentInput = {
    where: OpponentOnSheetWhereUniqueInput
    update: XOR<OpponentOnSheetUpdateWithoutOpponentInput, OpponentOnSheetUncheckedUpdateWithoutOpponentInput>
    create: XOR<OpponentOnSheetCreateWithoutOpponentInput, OpponentOnSheetUncheckedCreateWithoutOpponentInput>
  }

  export type OpponentOnSheetUpdateWithWhereUniqueWithoutOpponentInput = {
    where: OpponentOnSheetWhereUniqueInput
    data: XOR<OpponentOnSheetUpdateWithoutOpponentInput, OpponentOnSheetUncheckedUpdateWithoutOpponentInput>
  }

  export type OpponentOnSheetUpdateManyWithWhereWithoutOpponentInput = {
    where: OpponentOnSheetScalarWhereInput
    data: XOR<OpponentOnSheetUpdateManyMutationInput, OpponentOnSheetUncheckedUpdateManyWithoutOpponentInput>
  }

  export type CharacterCreateWithoutCharacterOnSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGame: FightingGameCreateNestedOneWithoutCharactersInput
    OpponentOnSheet?: OpponentOnSheetCreateNestedManyWithoutOpponentInput
  }

  export type CharacterUncheckedCreateWithoutCharacterOnSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGameId: string
    OpponentOnSheet?: OpponentOnSheetUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type CharacterCreateOrConnectWithoutCharacterOnSheetInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutCharacterOnSheetInput, CharacterUncheckedCreateWithoutCharacterOnSheetInput>
  }

  export type SheetCreateWithoutCharacterOnSheetInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGame: FightingGameCreateNestedOneWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetInput
    filter?: FilterCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutCharacterOnSheetInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    fightingGameId: string
    filter?: FilterUncheckedCreateNestedManyWithoutSheetInput
    OpponentOnSheet?: OpponentOnSheetUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutCharacterOnSheetInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutCharacterOnSheetInput, SheetUncheckedCreateWithoutCharacterOnSheetInput>
  }

  export type CharacterUpsertWithoutCharacterOnSheetInput = {
    update: XOR<CharacterUpdateWithoutCharacterOnSheetInput, CharacterUncheckedUpdateWithoutCharacterOnSheetInput>
    create: XOR<CharacterCreateWithoutCharacterOnSheetInput, CharacterUncheckedCreateWithoutCharacterOnSheetInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutCharacterOnSheetInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutCharacterOnSheetInput, CharacterUncheckedUpdateWithoutCharacterOnSheetInput>
  }

  export type CharacterUpdateWithoutCharacterOnSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutCharactersNestedInput
    OpponentOnSheet?: OpponentOnSheetUpdateManyWithoutOpponentNestedInput
  }

  export type CharacterUncheckedUpdateWithoutCharacterOnSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
    OpponentOnSheet?: OpponentOnSheetUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type SheetUpsertWithoutCharacterOnSheetInput = {
    update: XOR<SheetUpdateWithoutCharacterOnSheetInput, SheetUncheckedUpdateWithoutCharacterOnSheetInput>
    create: XOR<SheetCreateWithoutCharacterOnSheetInput, SheetUncheckedCreateWithoutCharacterOnSheetInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutCharacterOnSheetInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutCharacterOnSheetInput, SheetUncheckedUpdateWithoutCharacterOnSheetInput>
  }

  export type SheetUpdateWithoutCharacterOnSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetNestedInput
    filter?: FilterUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutCharacterOnSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
    filter?: FilterUncheckedUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type CharacterCreateWithoutOpponentOnSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGame: FightingGameCreateNestedOneWithoutCharactersInput
    CharacterOnSheet?: CharacterOnSheetCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutOpponentOnSheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGameId: string
    CharacterOnSheet?: CharacterOnSheetUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutOpponentOnSheetInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutOpponentOnSheetInput, CharacterUncheckedCreateWithoutOpponentOnSheetInput>
  }

  export type SheetCreateWithoutOpponentOnSheetInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGame: FightingGameCreateNestedOneWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetInput
    filter?: FilterCreateNestedManyWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutOpponentOnSheetInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    fightingGameId: string
    filter?: FilterUncheckedCreateNestedManyWithoutSheetInput
    CharacterOnSheet?: CharacterOnSheetUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutOpponentOnSheetInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutOpponentOnSheetInput, SheetUncheckedCreateWithoutOpponentOnSheetInput>
  }

  export type CharacterUpsertWithoutOpponentOnSheetInput = {
    update: XOR<CharacterUpdateWithoutOpponentOnSheetInput, CharacterUncheckedUpdateWithoutOpponentOnSheetInput>
    create: XOR<CharacterCreateWithoutOpponentOnSheetInput, CharacterUncheckedCreateWithoutOpponentOnSheetInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutOpponentOnSheetInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutOpponentOnSheetInput, CharacterUncheckedUpdateWithoutOpponentOnSheetInput>
  }

  export type CharacterUpdateWithoutOpponentOnSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutCharactersNestedInput
    CharacterOnSheet?: CharacterOnSheetUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutOpponentOnSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
    CharacterOnSheet?: CharacterOnSheetUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type SheetUpsertWithoutOpponentOnSheetInput = {
    update: XOR<SheetUpdateWithoutOpponentOnSheetInput, SheetUncheckedUpdateWithoutOpponentOnSheetInput>
    create: XOR<SheetCreateWithoutOpponentOnSheetInput, SheetUncheckedCreateWithoutOpponentOnSheetInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutOpponentOnSheetInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutOpponentOnSheetInput, SheetUncheckedUpdateWithoutOpponentOnSheetInput>
  }

  export type SheetUpdateWithoutOpponentOnSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetNestedInput
    filter?: FilterUpdateManyWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutOpponentOnSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
    filter?: FilterUncheckedUpdateManyWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type UserCreateWithoutFightingGameOnUserInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    Sheet?: SheetCreateNestedManyWithoutUserInput
    Filter?: FilterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFightingGameOnUserInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    Filter?: FilterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFightingGameOnUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFightingGameOnUserInput, UserUncheckedCreateWithoutFightingGameOnUserInput>
  }

  export type FightingGameCreateWithoutFightingGameOnUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterCreateNestedManyWithoutFightingGameInput
    Sheet?: SheetCreateNestedManyWithoutFightingGameInput
  }

  export type FightingGameUncheckedCreateWithoutFightingGameOnUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutFightingGameInput
    Sheet?: SheetUncheckedCreateNestedManyWithoutFightingGameInput
  }

  export type FightingGameCreateOrConnectWithoutFightingGameOnUserInput = {
    where: FightingGameWhereUniqueInput
    create: XOR<FightingGameCreateWithoutFightingGameOnUserInput, FightingGameUncheckedCreateWithoutFightingGameOnUserInput>
  }

  export type UserUpsertWithoutFightingGameOnUserInput = {
    update: XOR<UserUpdateWithoutFightingGameOnUserInput, UserUncheckedUpdateWithoutFightingGameOnUserInput>
    create: XOR<UserCreateWithoutFightingGameOnUserInput, UserUncheckedCreateWithoutFightingGameOnUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFightingGameOnUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFightingGameOnUserInput, UserUncheckedUpdateWithoutFightingGameOnUserInput>
  }

  export type UserUpdateWithoutFightingGameOnUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Sheet?: SheetUpdateManyWithoutUserNestedInput
    Filter?: FilterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFightingGameOnUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    Filter?: FilterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FightingGameUpsertWithoutFightingGameOnUserInput = {
    update: XOR<FightingGameUpdateWithoutFightingGameOnUserInput, FightingGameUncheckedUpdateWithoutFightingGameOnUserInput>
    create: XOR<FightingGameCreateWithoutFightingGameOnUserInput, FightingGameUncheckedCreateWithoutFightingGameOnUserInput>
    where?: FightingGameWhereInput
  }

  export type FightingGameUpdateToOneWithWhereWithoutFightingGameOnUserInput = {
    where?: FightingGameWhereInput
    data: XOR<FightingGameUpdateWithoutFightingGameOnUserInput, FightingGameUncheckedUpdateWithoutFightingGameOnUserInput>
  }

  export type FightingGameUpdateWithoutFightingGameOnUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUpdateManyWithoutFightingGameNestedInput
    Sheet?: SheetUpdateManyWithoutFightingGameNestedInput
  }

  export type FightingGameUncheckedUpdateWithoutFightingGameOnUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutFightingGameNestedInput
    Sheet?: SheetUncheckedUpdateManyWithoutFightingGameNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SheetCreateManyUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fightingGameId: string
  }

  export type FilterCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sheetId?: string | null
  }

  export type FightingGameOnUserCreateManyUserInput = {
    id?: string
    fightingGameId: string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutSheetNestedInput
    filter?: FilterUpdateManyWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
    filter?: FilterUncheckedUpdateManyWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUncheckedUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sheet?: SheetUpdateOneWithoutFilterNestedInput
  }

  export type FilterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FightingGameOnUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fightingGame?: FightingGameUpdateOneRequiredWithoutFightingGameOnUserNestedInput
  }

  export type FightingGameOnUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
  }

  export type FightingGameOnUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fightingGameId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCreateManySheetInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CharacterOnSheetCreateManySheetInput = {
    id?: string
    characterId: string
  }

  export type OpponentOnSheetCreateManySheetInput = {
    id?: string
    opponentId: string
  }

  export type FilterUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilterNestedInput
  }

  export type FilterUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterOnSheetUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    character?: CharacterUpdateOneRequiredWithoutCharacterOnSheetNestedInput
  }

  export type CharacterOnSheetUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterOnSheetUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type OpponentOnSheetUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponent?: CharacterUpdateOneRequiredWithoutOpponentOnSheetNestedInput
  }

  export type OpponentOnSheetUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
  }

  export type OpponentOnSheetUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterCreateManyFightingGameInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetCreateManyFightingGameInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type FightingGameOnUserCreateManyFightingGameInput = {
    id?: string
    userId: string
  }

  export type CharacterUpdateWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CharacterOnSheet?: CharacterOnSheetUpdateManyWithoutCharacterNestedInput
    OpponentOnSheet?: OpponentOnSheetUpdateManyWithoutOpponentNestedInput
  }

  export type CharacterUncheckedUpdateWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CharacterOnSheet?: CharacterOnSheetUncheckedUpdateManyWithoutCharacterNestedInput
    OpponentOnSheet?: OpponentOnSheetUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUpdateWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSheetNestedInput
    filter?: FilterUpdateManyWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    filter?: FilterUncheckedUpdateManyWithoutSheetNestedInput
    CharacterOnSheet?: CharacterOnSheetUncheckedUpdateManyWithoutSheetNestedInput
    OpponentOnSheet?: OpponentOnSheetUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateManyWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FightingGameOnUserUpdateWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFightingGameOnUserNestedInput
  }

  export type FightingGameOnUserUncheckedUpdateWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FightingGameOnUserUncheckedUpdateManyWithoutFightingGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterOnSheetCreateManyCharacterInput = {
    id?: string
    sheetId: string
  }

  export type OpponentOnSheetCreateManyOpponentInput = {
    id?: string
    sheetId: string
  }

  export type CharacterOnSheetUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet?: SheetUpdateOneRequiredWithoutCharacterOnSheetNestedInput
  }

  export type CharacterOnSheetUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterOnSheetUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
  }

  export type OpponentOnSheetUpdateWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet?: SheetUpdateOneRequiredWithoutOpponentOnSheetNestedInput
  }

  export type OpponentOnSheetUncheckedUpdateWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
  }

  export type OpponentOnSheetUncheckedUpdateManyWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
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