import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DagTextarea } from "dag-ngx";

@Component({
  selector: 'demo-textarea',
    imports: [DagTextarea, CommonModule],
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
})
export class Textarea {
    content = signal<string | undefined>('# Titolo\nmichiamo marco.');


}
