import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingScreenComponent } from './loadingScreen/loadingScreen.components';
import { LoadingScreenStore } from './loadingScreen/loadingScreen.store';
import { NavbarComponent } from './navbar/navbar.component';

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
