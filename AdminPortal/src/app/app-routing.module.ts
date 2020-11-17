
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { StoreitemComponent } from './storeitem/storeitem.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
import { GetitemsComponent } from './getitems/getitems.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'getitems', component: GetitemsComponent, canActivate: [AuthGuard] },
  { path: 'storeitem', component: StoreitemComponent, canActivate: [AuthGuard] },
  { path: 'updateitem', component: UpdateitemComponent, canActivate: [AuthGuard] },
  { path: 'deleteitem', component: DeleteitemComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
