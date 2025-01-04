import { animate, style, transition, trigger } from '@angular/animations';

export const loadingFadeInOutAnimation = trigger('fadeInOut', [
  transition(':leave', [animate('1000ms', style({ opacity: 0 }))]),
]);
