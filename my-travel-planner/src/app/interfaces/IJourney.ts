import { IPeople } from "./IPeople";

export interface IJourney {
  name: string;
  mainImage: string;
  mainPlace: string;
  troop?: Array<IPeople>;
  startDate: Date;
  endDate: Date;
}
