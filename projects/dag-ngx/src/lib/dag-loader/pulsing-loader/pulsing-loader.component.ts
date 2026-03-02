import { Component, input } from '@angular/core';
import { Loader } from '../loader.class';

@Component({
  selector: 'pulsing-loader',
  imports: [],
  templateUrl: './pulsing-loader.component.html',
  styleUrl: './pulsing-loader.component.scss',
  host: {
    '[class.full-screen]': 'fullScreen()'
  }
})
export class PulsingLoaderComponent implements Loader {
  color = input<string>('#e4b2b2');
  fullScreen = input<boolean>(true);
}
