import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingScreenStore } from './loadingScreen.store';

@Component({
  selector: 'app-loadingScreen',
  imports: [],
  providers: [],
  templateUrl: './loadingScreen.component.html',
  styleUrl: './loadingScreen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({opacity: 0}), animate('1000ms', style({opacity: 1}))]),
      transition(':leave', [animate('1000ms', style({opacity: 0}))]),
      ]),
  ]
})
export class LoadingScreenComponent {
  readonly loadingScreen = inject(LoadingScreenStore)

  toggleLoading() {
    this.loadingScreen.toggleLoading();
  }
}