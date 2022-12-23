import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OnlineYogaComponent } from './online-yoga/online-yoga.component';
import { YogaTeachingComponentComponent } from './yoga-teaching-component/yoga-teaching-component.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path: 'yoga-teaching-component', component:YogaTeachingComponentComponent},
  {path: 'online-yoga', component:OnlineYogaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
