import { Component, input } from '@angular/core';
import { Loader } from '../loader.class';

@Component({
    selector: 'bouncing-loader',
    imports: [],
    templateUrl: './bouncing-loader.component.html',
    styleUrl: './bouncing-loader.component.scss',
    host: {
        '[class.full-screen]': 'fullScreen()'
    }
})
export class BouncingLoaderComponent implements Loader {
    color = input<string>('#e4b2b2');
    fullScreen = input<boolean>(true);
}
