import { Component, signal } from '@angular/core';
import { Errors } from './errors/errors';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'demo-root',
    imports: [Errors, CommonModule],
    templateUrl: './app.html',
})
export class App {

    sections = [
        "errors",
        "drag-and-drop"
    ]

    section = signal(this.sections[0]);


}
