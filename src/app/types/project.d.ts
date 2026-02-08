export interface Project {
  _id: string;
  title: string;
  projectPlan: ProjectPlan;
  status: ProjectStatus;
  img: string;
  lastVisit: string;
  position: Position;
  users: User[];
  clientData: ClientData;
  city: string;
  lastUpdated: string;
  partnerClients: PartnerClient[];
  companyId: string;
  address: string;
  projectClientAdmin: string[];
  projectPlanData: ProjectPlanData;
  createdAt: string;
  incidents: Incident[];
  country?: number | string;
}

export interface ClientData {
  title: string;
  _id: string;
}

export interface Incident {
  _id: string;
  status: IncidentStatus;
  item: Item;
  description: string;
  owner: string;
  tag: Tag;
  coordinates: Coordinates;
  limitDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export type Item = "incidents" | "RFI" | "task";

export type IncidentStatus = "active" | "close";

export type Tag = "abroad" | "inside";

export interface PartnerClient {
  _id: string;
  maxUsers: number;
  maxAdmins: number;
  maxStorage: number;
}

export interface Position {
  _id: string;
  lat: number;
  lng: number;
}

export interface ProjectPlan {
  _id: string;
}

export interface ProjectPlanData {
  plan: Plan;
}

export type Plan = "big" | "small";

export type ProjectStatus =
  | "suspended"
  | "active"
  | "inactive"
  | "pending_payment";

export interface User {
  name: string;
  lastName: string;
}
