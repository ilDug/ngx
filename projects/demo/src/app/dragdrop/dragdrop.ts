import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DagDrag, DagDrop } from 'dag-ngx';

@Component({
    selector: 'demo-dragdrop',
    imports: [DagDrag, DagDrop, CommonModule],
    templateUrl: './dragdrop.html',
    styleUrl: './dragdrop.scss',
})
export class Dragdrop {

    items = [
        { name: "heart", src: "heart.svg", color: "red" },
        { name: "club", src: "club.svg", color: "black" },
        { name: "diamond", src: "diamond.svg", color: "red" },
        { name: "spade", src: "spade.svg", color: "black" },
    ]

    card = signal<{ name: string, src: string, color: string } | null>(null);

    assignCard(card: { name: string, src: string, color: string }) {
        this.card.set(card);
        console.log("Dropped card:", card);
    }

    logDragging(event: boolean) {
        if (event)
            console.log("Dragging...");
    }


}
