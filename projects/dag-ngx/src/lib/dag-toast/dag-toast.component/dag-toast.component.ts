import { Component, input, output } from '@angular/core';
import { DagToast } from '../dag-toast';

@Component({
    selector: 'dag-toast',
    imports: [],
    templateUrl: './dag-toast.component.html',
    styleUrl: './dag-toast.component.scss',
})
export class DagToastComponent {
    data = input.required<DagToast>()
    close = output<string>();
}
