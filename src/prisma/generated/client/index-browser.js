
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  password: 'password',
  roles: 'roles',
  status: 'status',
  invitationToken: 'invitationToken',
  profilePicture: 'profilePicture',
  bio: 'bio',
  location: 'location',
  phoneNumber: 'phoneNumber',
  socialLinks: 'socialLinks',
  darkMode: 'darkMode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationPreferencesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  emailNotifications: 'emailNotifications',
  newsUpdates: 'newsUpdates',
  teamUpdates: 'teamUpdates',
  matchReminders: 'matchReminders',
  discordNotifications: 'discordNotifications',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  userAgent: 'userAgent',
  ipAddress: 'ipAddress',
  lastActive: 'lastActive',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.TaskScalarFieldEnum = {
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

exports.Prisma.ActivityScalarFieldEnum = {
  id: 'id',
  type: 'type',
  message: 'message',
  metadata: 'metadata',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  name: 'name',
  gameId: 'gameId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GameScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GameManagerScalarFieldEnum = {
  id: 'id',
  gameId: 'gameId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PlayerScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  inGameName: 'inGameName',
  username: 'username',
  dateOfBirth: 'dateOfBirth',
  country: 'country',
  role: 'role',
  rank: 'rank',
  joinDate: 'joinDate',
  endDate: 'endDate',
  socialLinks: 'socialLinks',
  trackerLinks: 'trackerLinks',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.PlayerStatsScalarFieldEnum = {
  id: 'id',
  playerId: 'playerId',
  stats: 'stats',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ContractScalarFieldEnum = {
  id: 'id',
  playerId: 'playerId',
  startDate: 'startDate',
  endDate: 'endDate',
  terms: 'terms',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PlayerNoteScalarFieldEnum = {
  id: 'id',
  playerId: 'playerId',
  authorId: 'authorId',
  content: 'content',
  isPrivate: 'isPrivate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MatchScalarFieldEnum = {
  id: 'id',
  type: 'type',
  teamId: 'teamId',
  opponent: 'opponent',
  date: 'date',
  result: 'result',
  notes: 'notes'
};

exports.Prisma.AnnouncementScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  priority: 'priority',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  isActive: 'isActive'
};

exports.Prisma.NewsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  authorId: 'authorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  publishedAt: 'publishedAt',
  featuredImageId: 'featuredImageId'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  startDate: 'startDate',
  endDate: 'endDate',
  allDay: 'allDay',
  type: 'type',
  teamId: 'teamId',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DraftScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  authorId: 'authorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  featuredImageId: 'featuredImageId',
  status: 'status',
  reviewNotes: 'reviewNotes',
  reviewerId: 'reviewerId'
};

exports.Prisma.MediaItemScalarFieldEnum = {
  id: 'id',
  filename: 'filename',
  originalFilename: 'originalFilename',
  path: 'path',
  url: 'url',
  type: 'type',
  size: 'size',
  mimeType: 'mimeType',
  width: 'width',
  height: 'height',
  duration: 'duration',
  alt: 'alt',
  caption: 'caption',
  uploadedById: 'uploadedById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tags: 'tags',
  folder: 'folder'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Status = exports.$Enums.Status = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED'
};

exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  PLAYER: 'PLAYER',
  NEWS_WRITER: 'NEWS_WRITER',
  TEAM_MANAGER: 'TEAM_MANAGER',
  ADMIN: 'ADMIN'
};

exports.TaskStatus = exports.$Enums.TaskStatus = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

exports.Priority = exports.$Enums.Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

exports.ActivityType = exports.$Enums.ActivityType = {
  NEWS_CREATED: 'NEWS_CREATED',
  NEWS_UPDATED: 'NEWS_UPDATED',
  ROSTER_CHANGED: 'ROSTER_CHANGED',
  TASK_CREATED: 'TASK_CREATED',
  TASK_UPDATED: 'TASK_UPDATED',
  USER_ROLE_CHANGED: 'USER_ROLE_CHANGED',
  DRAFT_CREATED: 'DRAFT_CREATED',
  DRAFT_UPDATED: 'DRAFT_UPDATED',
  DRAFT_PUBLISHED: 'DRAFT_PUBLISHED',
  MEDIA_UPLOADED: 'MEDIA_UPLOADED',
  PLAYER_ADDED: 'PLAYER_ADDED',
  PLAYER_UPDATED: 'PLAYER_UPDATED'
};

exports.MatchType = exports.$Enums.MatchType = {
  TOURNAMENT: 'TOURNAMENT',
  SCRIM: 'SCRIM',
  OFFICIAL: 'OFFICIAL'
};

exports.EventType = exports.$Enums.EventType = {
  MATCH: 'MATCH',
  PRACTICE: 'PRACTICE',
  TOURNAMENT: 'TOURNAMENT',
  MEETING: 'MEETING',
  OTHER: 'OTHER'
};

exports.DraftStatus = exports.$Enums.DraftStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  READY_FOR_REVIEW: 'READY_FOR_REVIEW',
  NEEDS_REVISION: 'NEEDS_REVISION',
  APPROVED: 'APPROVED'
};

exports.MediaType = exports.$Enums.MediaType = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  DOCUMENT: 'DOCUMENT',
  OTHER: 'OTHER'
};

exports.Prisma.ModelName = {
  User: 'User',
  NotificationPreferences: 'NotificationPreferences',
  Session: 'Session',
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
  Tag: 'Tag',
  Event: 'Event',
  Draft: 'Draft',
  MediaItem: 'MediaItem'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
