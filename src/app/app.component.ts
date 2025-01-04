import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingScreenComponent } from './core/loadingScreen/loadingScreen.components';
import { LoadingScreenStore } from './core/loadingScreen/loadingScreen.store';
import { NavbarComponent } from './core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingScreenComponent, NavbarComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly loadingScreen = inject(LoadingScreenStore);

  toggleLoading() {
    this.loadingScreen.toggleLoading();
  }
}
