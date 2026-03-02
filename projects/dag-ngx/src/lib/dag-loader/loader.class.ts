import { InputSignal } from '@angular/core';

export interface Loader {
    color: InputSignal<string>;
    fullScreen: InputSignal<boolean>;
}
