import { Directive, output, signal } from '@angular/core';

@Directive({
    selector: '[dagDrop]',
    host: {
        '(drop)': 'onDrop($event)', // Listen for the drop event
        '(dragover)': 'onDragOver($event)', // Listen for the drag over event
        '(dragleave)': 'onDragLeave($event)', // Listen for the drag leave event
        '[class.drag-over]': 'isDragOver()',// Add a class when an item is dragged over the element
        '[droppable]': 'true', // Make the element a drop target
    }
})
export class DagDrop<T> {

    // This property emits the data when an item is dropped on the element.
    dagDrop = output<T>();

    // Track whether an item is being dragged over the element
    isDragOver = signal<boolean>(false);

    public onDrop(event: DragEvent) {
        event.preventDefault(); // Prevent default behavior to allow dropping
        this.isDragOver.set(false); // Set the drag over state to false

        if (event.dataTransfer) {
            const customMimeType = event.dataTransfer.types.find(type => type.startsWith('application/x-dag-drag-'));
            const mimeType = customMimeType || (event.dataTransfer.types.includes('text/plain') ? 'text/plain' : null);
            if (!mimeType) {
                return;
            }

            const data = event.dataTransfer.getData(mimeType);
            const deserializedData = this.deserializeDragValue(data);
            this.dagDrop.emit(deserializedData); // Emit the dropped data
        }
    }

    public onDragOver(event: DragEvent) {
        event.preventDefault(); // Prevent default behavior to allow dropping
        this.isDragOver.set(true); // Set the drag over state to true
    }

    public onDragLeave(event: DragEvent) {
        event.preventDefault(); // Prevent default behavior
        this.isDragOver.set(false); // Set the drag over state to false
    }

    private deserializeDragValue(data: string): T {
        try {
            return JSON.parse(data) as T;
        } catch {
            return data as unknown as T;
        }
    }
}
