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
<<<<<<< HEAD
import { UpazillaCreateComponent } from './upazilla-create/upazilla-create.component';
import { DivisionUpdateComponent } from './division-update/division-update.component';
import { DistrictUpadateComponent } from './district-upadate/district-upadate.component';
import { UnionCreateComponent } from './union-create/union-create.component';
import { UpazillaUpdateComponent } from './upazilla-update/upazilla-update.component';
import { UnionUpdateComponent } from './union-update/union-update.component';
import { HomeComponent } from './home/home.component';
=======
import { UnionCreateComponent } from './union-create/union-create.component';
import { UpazillaCreateComponent } from './upazilla-create/upazilla-create.component';
import { DivisionUpdateComponent } from './division-update/division-update.component';
import { DistrictUpadateComponent } from './district-upadate/district-upadate.component';
>>>>>>> 266540c3375c3637536514965cfc55b39ac66ead


@NgModule({
  declarations: [
    AppComponent,
    DivisionCreateComponent,
    DivisionShowComponent,
    DistrictShowComponent,
    DistrictCreateComponent,
    UpazillaShowComponent,
<<<<<<< HEAD
    UnionShowComponent,
    UpazillaCreateComponent,
    DivisionUpdateComponent,
    DistrictUpadateComponent,
    UnionCreateComponent,
    UpazillaUpdateComponent,
    UnionUpdateComponent,
    HomeComponent
=======
    UpazillaCreateComponent,
    UnionShowComponent,
    UnionCreateComponent,
    UpazillaCreateComponent,
    DivisionUpdateComponent,
    DistrictUpadateComponent,
    DisasterCreateComponent
>>>>>>> 266540c3375c3637536514965cfc55b39ac66ead
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'division/show', component: DivisionShowComponent},
      {path: 'division/add', component: DivisionCreateComponent},
      {path: 'division/update/:divisionId', component: DivisionUpdateComponent},
      {path: 'district/show', component: DistrictShowComponent},
      {path: 'district/add', component: DistrictCreateComponent},
      {path: 'district/update/:districtId', component: DistrictUpadateComponent},
      {path: 'upazillas/show', component: UpazillaShowComponent},
<<<<<<< HEAD
      {path: 'upazilla/add', component: UpazillaCreateComponent},
      {path: 'upazilla/update/:upazillaId', component: UpazillaUpdateComponent},
      {path: 'unions/show', component: UnionShowComponent},
      {path: 'union/add', component: UnionCreateComponent},
      {path: 'union/update/:unionId', component: UnionUpdateComponent}
=======
      {path: 'upazillas/add', component: UpazillaCreateComponent},
      {path: 'unions/show', component: UnionShowComponent},
      {path: 'unions/add', component: UnionCreateComponent},

      {path: 'unions/show', component: UnionShowComponent},
      {path: 'upazillas/add', component: UpazillaCreateComponent},
      {path: 'divdision/update/:divisionId', component: DivisionUpdateComponent},
      {path: 'disaster/create', component: DisasterCreateComponent}
>>>>>>> 266540c3375c3637536514965cfc55b39ac66ead
    ])
  ],
  providers: [AreaService, DisasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
