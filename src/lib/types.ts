export type User = {
  id: string;
  username: string;
  email?: string;
  password?: string;
  roles: Role[];
  status: Status;
  invitationToken?: string;
  createdAt: Date;
  updatedAt: Date;
  news: News[];
  tasks: Task[];
  createdTasks: Task[];
  activities: Activity[];
  teams: Team[];
  managedGames: GameManager[];
  playerNotes: PlayerNote[];
  player?: Player;
};

export enum Role {
  USER = "USER",
  PLAYER = "PLAYER",
  NEWS_WRITER = "NEWS_WRITER",
  TEAM_MANAGER = "TEAM_MANAGER",
  ADMIN = "ADMIN",
}

export enum Status {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
}

export type Task = {
  id: string;
  title: string;
  description?: string | null;
  status: TaskStatus;
  priority: Priority;
  dueDate?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  assignedTo: User;
  userId: string;
  createdBy: User;
  creatorId: string;
};

export enum TaskStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  URGENT = "URGENT",
}

export type Activity = {
  id: string;
  type: ActivityType;
  message: string;
  metadata?: Record<string, any> | null;
  createdAt: Date;
  userId: string;
};

export enum ActivityType {
  NEWS_CREATED = "NEWS_CREATED",
  NEWS_UPDATED = "NEWS_UPDATED",
  ROSTER_CHANGED = "ROSTER_CHANGED",
  TASK_CREATED = "TASK_CREATED",
  TASK_UPDATED = "TASK_UPDATED",
  USER_ROLE_CHANGED = "USER_ROLE_CHANGED",
  DRAFT_CREATED = "DRAFT_CREATED",
  DRAFT_UPDATED = "DRAFT_UPDATED",
  DRAFT_PUBLISHED = "DRAFT_PUBLISHED",
  MEDIA_UPLOADED = "MEDIA_UPLOADED",
  PLAYER_ADDED = "PLAYER_ADDED",
  PLAYER_UPDATED = "PLAYER_UPDATED",
}

export type Team = {
  id: string;
  name: string;
  game: Game;
  gameId: string;
  managers: User[];
  players: Player[];
  matches: Match[];
  createdAt: Date;
  updatedAt: Date;
};

export type Player = {
  id: string;
  username?: string;
  firstName: string;
  lastName: string;
  inGameName: string;
  dateOfBirth?: Date;
  country?: string;
  discordTag: string;
  studentNumber: string;
  proofOfEnrollment: string;
  teams?: Team[];
  teamIds?: string[];
  role?: string;
  rank?: string;
  joinDate: Date;
  endDate?: Date;
  socialLinks?: Record<string, string>;
  trackerLinks?: Record<string, string>;
  stats?: PlayerStats;
  contracts?: Contract[];
  notes?: PlayerNote[];
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  userId?: string;
};

export type Match = {
  id: string;
  type: MatchType;
  teamId: string;
  opponent: string;
  date: Date;
  result?: string | null;
  notes?: string | null;
};

export enum MatchType {
  TOURNAMENT = "TOURNAMENT",
  SCRIM = "SCRIM",
  OFFICIAL = "OFFICIAL",
}

export type Announcement = {
  id: string;
  title: string;
  content: string;
  priority: Priority;
  createdAt: Date;
  expiresAt?: Date | null;
  isActive: boolean;
};

export type News = {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author: { username: string };
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date | null;
  tags: Tag[];
};

export type Tag = {
  id: string;
  name: string;
};

export type Game = {
  id: string;
  name: string;
  teams: Team[];
  managers: GameManager[];
  createdAt: Date;
  updatedAt: Date;
};

export type GameManager = {
  id: string;
  game: Game;
  gameId: string;
  user: User;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PlayerStats = {
  id: string;
  player: Player;
  playerId: string;
  stats: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
};

export type Contract = {
  id: string;
  player: Player;
  playerId: string;
  startDate: Date;
  endDate: Date;
  terms?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type PlayerNote = {
  id: string;
  player: Player;
  playerId: string;
  author: User;
  authorId: string;
  content: string;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Event = {
  id: string;
  title: string;
  description?: string | null;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
  type: EventType;
  teamId?: string | null;
  team?: Team;
  createdBy: User;
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
};

export enum EventType {
  MATCH = "MATCH",
  PRACTICE = "PRACTICE",
  TOURNAMENT = "TOURNAMENT",
  MEETING = "MEETING",
  OTHER = "OTHER",
}

export type Draft = {
  id: string;
  title: string;
  content?: string;
  authorId: string;
  author: {
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
  status: DraftStatus;
  reviewNotes?: string | null;
  tags: { id: string; name: string }[];
  featuredImage?: {
    id: string;
    url: string;
    alt?: string;
  };
};

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  DOCUMENT = "DOCUMENT",
  OTHER = "OTHER",
}

export enum DraftStatus {
  IN_PROGRESS = "IN_PROGRESS",
  READY_FOR_REVIEW = "READY_FOR_REVIEW",
  NEEDS_REVISION = "NEEDS_REVISION",
  APPROVED = "APPROVED",
}
