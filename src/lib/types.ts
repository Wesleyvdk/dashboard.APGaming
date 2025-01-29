export type User = {
  id: string;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
};

export enum Role {
  USER = "USER",
  NEWS_WRITER = "NEWS_WRITER",
  TEAM_MANAGER = "TEAM_MANAGER",
  ADMIN = "ADMIN",
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
  userId: string;
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
}

export type Team = {
  id: string;
  name: string;
  game: string;
  players: Player[];
  matches: Match[];
};

export type Player = {
  id: string;
  name: string;
  role?: string | null;
  teamId: string;
  joinDate: Date;
  endDate?: Date | null;
};

export type Match = {
  id: string;
  type: MatchType;
  teamId: string;
  team: Team;
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
  author: { email: string };
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date | null;
};
