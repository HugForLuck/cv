import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { InterestsComponent } from './interests/interests.component';
import { KnowHowComponent } from './know-how/know-how.component';
import { SoftskillsComponent } from './softskills/softskills.component';
import { TimelineComponent } from './timeline/timeline.component';

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
