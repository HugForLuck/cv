import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingScreenStore } from './loadingScreen.store';
import { loadingFadeInOutAnimation } from './loadinScreen.animations';

@Component({
  selector: 'app-loadingScreen',
  imports: [],
  providers: [],
  templateUrl: './loadingScreen.component.html',
  styleUrl: './loadingScreen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [loadingFadeInOutAnimation],
})
export class LoadingScreenComponent {
  readonly loadingScreen = inject(LoadingScreenStore);

  toggleLoading() {
    this.loadingScreen.toggleLoading();
  }
}
