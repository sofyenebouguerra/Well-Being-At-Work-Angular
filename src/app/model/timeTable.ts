import { Competition } from "./competition";
import { Room } from "./room";
import { Timeslot } from "./timeslot";

export class TimeTable{
    timeslotList : Timeslot[];
    roomList : Room[];
    competitionList : Competition[];
    timeslot : Timeslot
    score : string ;
    solverStatus : string

}