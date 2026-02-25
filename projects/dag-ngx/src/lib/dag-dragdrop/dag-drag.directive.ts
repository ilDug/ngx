import { Directive, input, output } from '@angular/core';

@Directive({
    selector: '[dagDrag]',
    host: {
        '[attr.draggable]': 'true', // Make the element draggable
        '(drag)': 'onDrag($event)', // Listen for the drag event
        '(dragstart)': 'onDragStart($event)', // Listen for the drag start event
        '(dragend)': 'onDragEnd($event)', // Listen for the drag end event
    }
})
export class DagDrag<T> {

    /**
     *  This property can be used to track the dragging state of the element.
     *  It emits when dragging starts.
     */
    isDragging = output<boolean>({ alias: 'onDrag' });

    /** data transfered during the drag operation */
    dagDrag = input<T>()

    /** placeholder element to show where the dragged element is moving */
    placeholder = input<HTMLElement | null>(null);



    // Handle drag event
    onDrag(event: DragEvent) {
        event.stopPropagation(); // Stop propagation to prevent unwanted side effects
    }

    // Handle drag start event
    onDragStart(event: DragEvent) {
        event.stopPropagation(); // Stop propagation to prevent unwanted side effects
        this.isDragging.emit(true); // Emit dragging state

        if (this.placeholder()) {
            // Position the placeholder at the current mouse position
            this.placeholder().style.position = 'absolute';
            this.placeholder().style.left = `${event.clientX}px`;
            this.placeholder().style.top = `${event.clientY}px`;
            document.body.appendChild(this.placeholder()); // Add the placeholder to the body
        }

        // Set the data to be transferred during the drag operation
        if (event.dataTransfer) {
            const dragValue = this.dagDrag();
            const serializedDragValue = this.serializeDragValue(dragValue);
            const mimeType = this.inferMimeType(dragValue);

            event.dataTransfer.clearData(); // Clear any existing data
            event.dataTransfer.setData(mimeType, serializedDragValue);
            event.dataTransfer.setData('text/plain', serializedDragValue);
            event.dataTransfer.dropEffect = 'move'; // Set the drop effect to move
            event.dataTransfer.effectAllowed = 'move'; // Set the allowed effect to move
            event.dataTransfer.setDragImage(this.placeholder() || new Image(), 0, 0); // Set the drag image to the placeholder or a transparent image
        }
    }

    // Handle drag end event
    onDragEnd(event: DragEvent) {
        event.preventDefault(); // Prevent default behavior to allow dragging
        event.stopPropagation(); // Stop propagation to prevent unwanted side effects
        this.isDragging.emit(false); // Emit dragging state

        const placeholder = this.placeholder();
        if (placeholder?.parentNode) {
            placeholder.parentNode.removeChild(placeholder); // Remove the placeholder from the DOM
        }
    }

    /** Serialize the drag value to a JSON string */
    private serializeDragValue(value: T | undefined): string {
        try {
            return JSON.stringify(value ?? null);
        } catch {
            return JSON.stringify(String(value));
        }
    }

    /** Infer the MIME type for the drag value */
    private inferMimeType(value: T | undefined): string {
        const typeName = this.resolveTypeName(value)
            .replace(/[^a-z0-9-]+/gi, '-')
            .replace(/^-+|-+$/g, '')
            .toLowerCase() || 'object';

        return `application/x-dag-drag-${typeName}+json`;
    }

    private resolveTypeName(value: T | undefined): string {
        if (value === null) {
            return 'null';
        }

        if (value === undefined) {
            return 'undefined';
        }

        const primitiveType = typeof value;
        if (primitiveType !== 'object') {
            return primitiveType;
        }

        return (value as object).constructor?.name || 'object';
    }


}
