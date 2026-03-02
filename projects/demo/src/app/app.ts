import { Component, signal } from '@angular/core';
import { Errors } from './errors/errors';
import { CommonModule } from '@angular/common';
import { Dragdrop } from './dragdrop/dragdrop';
import { Loader } from './loader/loader';


@Component({
  selector: 'demo-root',
    imports: [Errors, CommonModule, Dragdrop, Loader],
    templateUrl: './app.html',
})
export class App {

    sections = [
        "errors",
        "drag-and-drop",
        "loader"
    ]

    section = signal(this.sections[0]);


}
