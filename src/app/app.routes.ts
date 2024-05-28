import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'parent',component:ParentComponent},
    {path:"child",component:ChildComponent}
];
