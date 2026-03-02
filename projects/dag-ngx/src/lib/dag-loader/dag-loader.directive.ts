import { Directive, input, TemplateRef, ViewContainerRef, inject, effect } from '@angular/core';

@Directive({
    selector: '[dagLoader]',
})
export class DagLoader {
    private tempRef = inject(TemplateRef);
    private vcr = inject(ViewContainerRef);

    loading = input<boolean>(false, { alias: 'dagLoader' });
    type = input<'spinner' | 'bouncing' | 'pulsing'>('pulsing', { alias: 'dagLoaderType' });
    color = input<string>('#333', { alias: 'dagLoaderColor' });
    fullScreen = input<boolean>(true, { alias: 'dagLoaderFullScreen' });


    #loaderEffect = effect(() => {

        /** assegna la posizione RELATIVE al container */
        const { parentElement }: HTMLElement = this.tempRef.elementRef.nativeElement;
        if (parentElement)
            parentElement.style.position = 'relative';


        if (this.loading()) {

        } else {
            this.vcr.clear();

            // RIPRISTINA IL CONTENUTO INIZIALE
            this.vcr.createEmbeddedView(this.tempRef);
        }


        console.log(`loading: ${this.loading()}, type: ${this.type()}, color: ${this.color()}, fullScreen: ${this.fullScreen()}`);
    });

}
