import { Component, signal } from '@angular/core';
import { DagLoader } from 'dag-ngx';

@Component({
  selector: 'demo-loader',
  imports: [DagLoader],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {

    loading = signal<boolean>(false);

}
