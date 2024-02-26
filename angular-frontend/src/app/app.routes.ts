import { Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { AboutpageComponent } from './Pages/aboutpage/aboutpage.component';
import { ContactComponent } from './Pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component:HomepageComponent , title: 'Home Page'},
    {path: 'about-us', component:AboutpageComponent, title: 'About Us'},
    {path: 'contact-me', component:ContactComponent , title: 'Contact Me'}
];
