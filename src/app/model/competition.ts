import { Room } from "./room";
import { Timeslot } from "./timeslot";

export class Competition {
    id : number ;
    subject : string ;
    referee : string ;
    team : string ;
    timeslot : Timeslot ;
    room : Room
}