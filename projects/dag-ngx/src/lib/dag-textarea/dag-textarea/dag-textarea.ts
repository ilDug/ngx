import { Component, computed, effect, ElementRef, input, model, OnDestroy, OnInit, viewChild } from '@angular/core';
import { DisabledReason, FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { Markdown } from '@tiptap/markdown'
import { HardBreak } from "@tiptap/extension-hard-break";
@Component({
    selector: 'dag-textarea',
    imports: [],
    templateUrl: './dag-textarea.html',
    styleUrl: './dag-textarea.scss',
})
export class DagTextarea implements FormValueControl<string>, OnDestroy, OnInit {

    tiptap = viewChild<ElementRef>('tiptap');
    editor: Editor | undefined;
    private debounceTimeout?: ReturnType<typeof setTimeout>;

    ngOnInit(): void {
        this.editor = new Editor({
            element: this.tiptap().nativeElement,
            extensions: [
                StarterKit,
                Markdown
            ],
            contentType: 'markdown',
            content: this.value() ?? this.placeholder(),
            onUpdate: ({ editor }) => {
                if (this.debounceTimeout) clearTimeout(this.debounceTimeout);

                this.debounceTimeout = setTimeout(() => {
                    this.value.set(editor.getMarkdown());
                }, this.debounceTime());
            }
        });
    }

    ngOnDestroy(): void {
        if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
        if (this.editor) this.editor.destroy();
    }

    value = model<string>('');
    placeholder = input<string>('Enter text...');
    debounceTime = input<number>(1000);

    // cols = input<number>(10);
    // rows = input<number>(5);

    // touched = model<boolean>(false);
    // disabled = input<boolean>(false);
    // disabledReasons = input<readonly DisabledReason[]>([]);
    // readonly = input<boolean>(false);
    // hidden = input<boolean>(false);
    // invalid = input<boolean>(false);
    // valid = input<boolean>(true);
    // required = input<boolean>(false);
    // errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
    // dirty = input<boolean>(false);
    // pending = input<boolean>(false);
    // name = input<string>('');




}
