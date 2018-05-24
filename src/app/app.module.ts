import { DisasterCreateComponent } from './disaster-create/disaster-create.component';
import { DisasterService } from './services/disaster.service';
import { UpazillaShowComponent } from './upazilla-show/upazilla-show.component';
import { AreaService } from './services/division.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { DivisionShowComponent } from './division-show/division-show.component';
import { HttpModule } from '@angular/http';
import { DistrictShowComponent } from './district-show/district-show.component';
import { DistrictCreateComponent } from './district-create/district-create.component';
import { UnionShowComponent } from './union-show/union-show.component';
import { UpazillaCreateComponent } from './upazilla-create/upazilla-create.component';
import { DivisionUpdateComponent } from './division-update/division-update.component';
import { DistrictUpadateComponent } from './district-upadate/district-upadate.component';
import { UnionCreateComponent } from './union-create/union-create.component';
import { UpazillaUpdateComponent } from './upazilla-update/upazilla-update.component';
import { UnionUpdateComponent } from './union-update/union-update.component';
import { HomeComponent } from './home/home.component';
import { DisasterUpdateComponent } from './disaster-update/disaster-update.component';
import { OrganizationCreateComponent } from './organization-create/organization-create.component';
import { OrganizationService } from './services/organization.service';
import { OrganizationShowComponent } from './organization-show/organization-show.component';
import { OrganizationUpdateComponent } from './organization-update/organization-update.component';
import { DisasterShowComponent } from './disaster-show/disaster-show.component';
import { ReliefRecordCreateComponent } from './relief-record-create/relief-record-create.component';
import { NavarComponentComponent } from './navar-component/navar-component.component';
import { ReliefService } from './services/relief.serivice';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { UsernameValidators } from './signup/signup.validators';
import { AuthGuard } from './service/auth-guard.service';
import { LoginAuthGuard } from './service/login-auth-guard.service';
import { AdminAuthGuard } from './service/admin-auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';


@NgModule({
  declarations: [
    AppComponent,
    DivisionCreateComponent,
    DivisionShowComponent,
    DistrictShowComponent,
    DistrictCreateComponent,
    UpazillaShowComponent,
    UnionShowComponent,
    UpazillaCreateComponent,
    DivisionUpdateComponent,
    DistrictUpadateComponent,
    UnionCreateComponent,
    UpazillaUpdateComponent,
    UnionUpdateComponent,
    HomeComponent,
    DisasterCreateComponent,
    DisasterShowComponent,
    DisasterUpdateComponent,
    OrganizationCreateComponent,
    OrganizationShowComponent,
    OrganizationUpdateComponent,
    ReliefRecordCreateComponent,
    NavarComponentComponent,
    SignupComponent,
    LoginComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                 
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'division/show', component: DivisionShowComponent},
      {path: 'division/add',
       component: DivisionCreateComponent,
       canActivate: [AuthGuard]
      },
      {path: 'division/update/:divisionId', component: DivisionUpdateComponent,
      canActivate: [AdminAuthGuard]
        },
      {path: 'district/show', component: DistrictShowComponent},
      {path: 'district/add', component: DistrictCreateComponent},
      {path: 'upazilla/show', component: UpazillaShowComponent},
      {path: 'union/add', component: UnionCreateComponent},

      {path: 'union/show', component: UnionShowComponent},
      {path: 'upazilla/add', component: UpazillaCreateComponent},
      {path: 'divdision/update/:divisionId', component: DivisionUpdateComponent},

      {path: 'disaster/add', component: DisasterCreateComponent},
      {path: 'disaster/show', component: DisasterShowComponent},
      {path: 'disaster/update/:disasterId', component: DisasterUpdateComponent},

      {path: 'organization/create', component: OrganizationCreateComponent},
      {path: 'organization/show', component: OrganizationShowComponent},
      {path: 'organization/update/:orgId', component: OrganizationUpdateComponent},
      {path: 'relief/add', component: ReliefRecordCreateComponent},
      {path: 'login', component: LoginComponent,canActivate: [LoginAuthGuard]},
      {path:'signup',component:SignupComponent},
      {path: 'no-access',component: NoAccessComponent}
    ])
  ],
  providers: [AreaService, DisasterService, OrganizationService,ReliefService,
    AuthService, UsernameValidators,AuthGuard,LoginAuthGuard,AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
