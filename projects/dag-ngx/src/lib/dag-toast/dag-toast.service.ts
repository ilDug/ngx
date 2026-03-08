import { ComponentRef, createComponent, EnvironmentInjector, inject, Injectable, signal } from '@angular/core';
import { DagToastContainer } from './dag-toast-container/dag-toast-container';
import { DagToast, DagToastOptions } from './dag-toast';

@Injectable({
    providedIn: 'root',
})
export class DagToastService {
    private readonly injector = inject(EnvironmentInjector);

    // array dei toast attivi
    toasts = signal<DagToast[]>([]);


    constructor() {

        // Create a host element for the popup
        const host = document.createElement('toast-host');

        //create the component  and attach it to the host element
        const componentRef: ComponentRef<DagToastContainer> = createComponent(DagToastContainer, {
            environmentInjector: this.injector,
            hostElement: host,
        });


        // Append the host element to the body
        document.body.appendChild(host);
    }



    /**
     * genera un nuovo toast direttamente
     */
    public create(message: string, options?: DagToastOptions): void {
        const t = new DagToast(message, null, options)
        this.toasts.update(toasts => [...toasts, t])
    }


    public info(message: string, duration?: number) {
        this.create(message, { duration: duration, type: "INFO" })
    }

    public error(message: string, duration?: number) {
        this.create(message, { duration: duration, type: "ERROR" })
    }

    public warning(message: string, duration?: number) {
        this.create(message, { duration: duration, type: "WARNING" })
    }



}
