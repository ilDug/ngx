import { Component, input } from '@angular/core';
import { Loader } from '../loader.class';

@Component({
    selector: 'spinner-loader',
    imports: [],
    templateUrl: './spinner-loader.component.html',
    styleUrl: './spinner-loader.component.scss',
    host: {
        '[class.full-screen]': 'fullScreen()',
        '[style.--loader-color]': 'color()'
    }
})
export class SpinnerLoaderComponent implements Loader {
    color = input<string>('#e4b2b2');
    fullScreen = input<boolean>(true);
}
