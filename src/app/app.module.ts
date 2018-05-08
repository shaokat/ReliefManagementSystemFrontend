import { DisasterCreateComponent } from './disaster-create/disaster-create.component';
import { DisasterService } from './services/disaster.service';
import { UpazillaShowComponent } from './upazilla-show/upazilla-show.component';
import { AreaService } from './services/division.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { DivisionShowComponent } from './division-show/division-show.component';
import { HttpModule } from '@angular/http';
import { DistrictShowComponent } from './district-show/district-show.component';
import { DistrictCreateComponent } from './district-create/district-create.component';
import { UnionShowComponent } from './union-show/union-show.component';
import { UnionCreateComponent } from './union-create/union-create.component';
import { UpazillaCreateComponent } from './upazilla-create/upazilla-create.component';
import { DivisionUpdateComponent } from './division-update/division-update.component';
import { DistrictUpadateComponent } from './district-upadate/district-upadate.component';
import { DisasterShowComponent } from './disaster-show/disaster-show.component';
import { DisasterUpdateComponent } from './disaster-update/disaster-update.component';
import { OrganizationCreateComponent } from './organization-create/organization-create.component';
import { OrganizationService } from './services/organization.service';
import { OrganizationShowComponent } from './organization-show/organization-show.component';
import { OrganizationUpdateComponent } from './organization-update/organization-update.component';


@NgModule({
  declarations: [
    AppComponent,
    DivisionCreateComponent,
    DivisionShowComponent,
    DistrictShowComponent,
    DistrictCreateComponent,
    UpazillaShowComponent,
    UpazillaCreateComponent,
    UnionShowComponent,
    UnionCreateComponent,
    UpazillaCreateComponent,
    DivisionUpdateComponent,
    DistrictUpadateComponent,
    DisasterCreateComponent,
    DisasterShowComponent,
    DisasterUpdateComponent,
    OrganizationCreateComponent,
    OrganizationShowComponent,
    OrganizationUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'division/show', component: DivisionShowComponent},
      {path: 'division/add', component: DivisionCreateComponent},
      {path: 'district/show', component: DistrictShowComponent},
      {path: 'district/add', component: DistrictCreateComponent},
      {path: 'upazillas/show', component: UpazillaShowComponent},
      {path: 'upazillas/add', component: UpazillaCreateComponent},
      {path: 'unions/show', component: UnionShowComponent},
      {path: 'unions/add', component: UnionCreateComponent},

      {path: 'unions/show', component: UnionShowComponent},
      {path: 'upazillas/add', component: UpazillaCreateComponent},
      {path: 'divdision/update/:divisionId', component: DivisionUpdateComponent},

      {path: 'disaster/create', component: DisasterCreateComponent},
      {path: 'disaster/show', component: DisasterShowComponent},
      {path: 'disaster/update/:disasterId', component: DisasterUpdateComponent},

      {path: 'organization/create', component: OrganizationCreateComponent},
      {path: 'organization/show', component: OrganizationShowComponent},
      {path: 'organization/update/:orgId', component: OrganizationUpdateComponent},
    ])

  ],
  providers: [AreaService, DisasterService, OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
