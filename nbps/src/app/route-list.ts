import {Routes} from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutSchoolComponent } from './about-school/about-school.component';
import { SchoolHistoryComponent } from './school-history/school-history.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AlumniSpeaksComponent } from './alumni-speaks/alumni-speaks.component';

export const routes: Routes = [
    { path: 'home', component: LandingComponent },
    { path: 'about', component: AboutSchoolComponent },
    { path: 'history', component: SchoolHistoryComponent },
    { path: 'syllabus', component: SyllabusComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'alumni-speak', component: AlumniSpeaksComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent}
  ];