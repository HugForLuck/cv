import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { KnowHowComponent } from './pages/know-how/know-how.component';
import { SoftskillsComponent } from './pages/softskills/softskills.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

export const routes: Routes = [
  {
    path: 'timeline',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'know-how',
    component: KnowHowComponent,
  },
  {
    path: 'softskills',
    component: SoftskillsComponent,
  },
  {
    path: 'interests',
    component: InterestsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    component: TimelineComponent,
  },
];
