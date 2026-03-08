import { v4 as uuidv4 } from 'uuid';

export class DagToast{
    /** UUID */
    readonly id: string;

    /** titolo del toast */
    public title: string;

    /** messaggio del toast  */
    public message: string;

    /** tipo ['INFO', 'WARNING', 'ERROR'] */
    public type: "INFO" | "WARNING" | "ERROR";

    /** data del toast */
    public time: number;


    /**
     * la vita del toast prima di autochiudersi (in millisecondi)
     * default = 0 ,  non si chiude mai
     */
    public duration: number;


    constructor(message: string, title?: string, options?: DagToastOptions) {
        this.id = uuidv4();
        this.message = message;
        this.duration = options && options.duration ? options.duration : 0;

        /** imposta il tipo in base alla opzioni */
        this.type = options && options.type ? options.type : "INFO";
        this.title = title ? title : (this.type);
        this.time = new Date().getTime();
        return this;
    }


    public setDuration(time: number) {
        this.duration = time;
        return this;
    }


    public setType(type: "INFO" | "WARNING" | "ERROR") {
        this.type = type;
    }

}


export interface DagToastOptions {
    /** tipo ['INFO', 'WARNING', 'ERROR'] */
    type?: "INFO" | "WARNING" | "ERROR";

    /** numerodi millisecondi prima di chiudersi */
    duration?: number

}
