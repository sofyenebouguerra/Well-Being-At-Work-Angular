import { Collaboration } from "./collaboration";

enum Happy{HAPPY_HOUR,HAPPY_DAYS,BLACK_FRIDAY,PROMOTION,NON=1}
export class Offer {
     idOffer:number;
	 title:string;
	 descrption:string;
	 starDateOf:Date;
	 endDateOf:Date;
	 nplaces:number;
	 promotion:number;
	 percentage:Number
	 location:string;
	 prix:number;
	 rate :string;
     picture:string;
     Happy:Happy;
	 collaboration :Collaboration;
	 dateAct:Date;
}


