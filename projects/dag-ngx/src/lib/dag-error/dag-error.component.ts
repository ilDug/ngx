import { CommonModule } from '@angular/common';
import { Component, signal, input, computed } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
    selector: 'dag-error',
    imports: [CommonModule],
    template: `
      @if (field().invalid() && field().touched()) {
        @for (error of errors(); track error) {
          <div class="error">
            <span>{{ error.message }}</span>
          </div>
        }
      }
`,
    styles: [`
    .error {
      padding: 0.5em 0;
      color: #f16767;
      font-size: 0.8rem;
      display: block;
  }
`],
})
export class DagError {
    fieldTree = input.required<FieldTree<any, any>>({ alias: 'field' });
    field = computed(() => this.fieldTree()());
    errors = computed(() => this.field().errors());
}
