import { Component, inject } from '@angular/core';
import { DagToastService } from '../dag-toast.service';
import { DagToastComponent } from "../dag-toast.component/dag-toast.component";

@Component({
    selector: 'dag-toast-container',
    imports: [DagToastComponent],
    templateUrl: './dag-toast-container.html',
    styleUrl: './dag-toast-container.scss',
})
export class DagToastContainer {
    toasts = inject(DagToastService).toasts;

    closeToast(id: string) {
        this.toasts.update(toasts => toasts.filter(t => t.id !== id))
    }
}
