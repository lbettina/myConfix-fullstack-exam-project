import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwaresComponent } from './components/hardwares/hardwares.component';
import { BuilderComponent } from './components/builder/builder.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyconfigsComponent } from './components/myconfigs/myconfigs.component';
import { AuthGuard } from './services/guard/auth.guard';
import { ConfigDetailsComponent } from './components/myconfigs/config-details/config-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'hardwares', component: HardwaresComponent },
  {
    path: ':userId/builder',
    component: BuilderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'configs/:userId/myconfigs',
    component: MyconfigsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'configs/:userId/myconfigs/:configId',
    component: ConfigDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
