export abstract class Loader {
   public color: string = '#e4b2b2';
   public overlayPosition: 'absolute' | 'fixed' = "absolute"
   public width: number;
   public height: number;
   public fullScreen: boolean = true;
}
// <div * dagLoader="loading; color:'#e4b2b2'; fullScreen: false; type:'pulsing';" >
