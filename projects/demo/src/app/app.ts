import { Component, signal } from '@angular/core';
import { Errors } from './errors/errors';
import { CommonModule } from '@angular/common';
import { Dragdrop } from './dragdrop/dragdrop';


@Component({
  selector: 'demo-root',
    imports: [Errors, CommonModule, Dragdrop],
    templateUrl: './app.html',
})
export class App {

    sections = [
        "errors",
        "drag-and-drop"
    ]

    section = signal(this.sections[0]);


}
