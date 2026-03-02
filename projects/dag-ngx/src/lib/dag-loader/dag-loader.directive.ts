import { Directive, input, TemplateRef, ViewContainerRef, inject, effect, Type, computed } from '@angular/core';
import { Loader } from "./loader.class";
import { BouncingLoaderComponent } from './bouncing-loader/bouncing-loader.component';
import { PulsingLoaderComponent } from './pulsing-loader/pulsing-loader.component';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
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

    cmponentType = computed(() => {
        switch (this.type()) {
            case 'spinner':
                return SpinnerLoaderComponent;
            case 'bouncing':
                return BouncingLoaderComponent;
            case 'pulsing':
                return PulsingLoaderComponent;
            default:
                return PulsingLoaderComponent;
        }
    });


    #loaderEffect = effect(() => {

        /** assegna la posizione RELATIVE al container */
        const { parentElement }: HTMLElement = this.tempRef.elementRef.nativeElement;
        if (parentElement)
            parentElement.style.position = 'relative';


        if (this.loading()) {
            // this.vcr.clear();

            const compRef = this.vcr.createComponent(this.cmponentType());
            compRef.setInput('color', this.color());
            compRef.setInput('fullScreen', this.fullScreen());

        } else {
            this.vcr.clear();

            // RIPRISTINA IL CONTENUTO INIZIALE
            this.vcr.createEmbeddedView(this.tempRef);
        }


    });

    /**
     * seleziona la classe del compent da istanziare
     * scegliendo tra i vari tipi di Loader
     */
    private resolveLoaderComponent(kind: 'spinner' | 'bouncing' | 'pulsing'): Type<Loader> {
        switch (kind) {
            case 'spinner':
                return SpinnerLoaderComponent;
            case 'bouncing':
                return BouncingLoaderComponent;
            case 'pulsing':
                return PulsingLoaderComponent;
            default:
                return PulsingLoaderComponent;
        }
    }

}
