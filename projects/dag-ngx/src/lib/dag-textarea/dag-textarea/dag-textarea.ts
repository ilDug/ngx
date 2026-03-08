import { Component, input, model } from '@angular/core';
import { DisabledReason, FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';

@Component({
    selector: 'dag-textarea',
    imports: [],
    templateUrl: './dag-textarea.html',
    styleUrl: './dag-textarea.scss',
})
export class DagTextarea implements FormValueControl<string> {
    value = model<string>('');
    placeholder = input<string>('Enter text...');

    cols = input<number>(10);
    rows = input<number>(5);

    touched = model<boolean>(false);
    disabled = input<boolean>(false);
    disabledReasons = input<readonly DisabledReason[]>([]);
    readonly = input<boolean>(false);
    hidden = input<boolean>(false);
    invalid = input<boolean>(false);
    valid = input<boolean>(true);
    required = input<boolean>(false);
    errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
    dirty = input<boolean>(false);
    pending = input<boolean>(false);
    name = input<string>('');




}
