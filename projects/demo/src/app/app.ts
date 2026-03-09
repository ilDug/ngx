import { Component, signal } from '@angular/core';
import { Errors } from './errors/errors';
import { CommonModule } from '@angular/common';
import { Dragdrop } from './dragdrop/dragdrop';
import { Loader } from './loader/loader';
import { Textarea } from './textarea/textarea';


@Component({
  selector: 'demo-root',
    imports: [Errors, CommonModule, Dragdrop, Loader, Textarea],
    templateUrl: './app.html',
})
export class App {

    sections = [
        "errors",
        "drag-and-drop",
        "loader",
        "textarea"
    ]

    section = signal(this.sections[0]);


}
