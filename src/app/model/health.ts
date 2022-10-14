export class health {
    status : string ; 
    components : Components ;
}


export class Components {
    db : Db ;
    diskSpace : DisqueSpace ;
    loggerService : LoggerService ; 
    mail : Mail ;
    ping : Ping ;

}

export class LoggerService {
    status :string;
}
export class Mail {
    status : string ;
}
export class Ping {
    status : string ; 
}

export class Db {
    status : string ; 
    details : Details ;
}

export class Details {
    database : string ;
    validationQuery : string ; 
}

export class DisqueSpace {
    status : string ; 
    details : DetailsDisque ;
}

export class DetailsDisque {
    total : string  ;
    free : string ; 
    threshold : string ; 
}