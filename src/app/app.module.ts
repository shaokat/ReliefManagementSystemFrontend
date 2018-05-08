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
import { UpazillaCreateComponent } from './upazilla-create/upazilla-create.component';
import { DivisionUpdateComponent } from './division-update/division-update.component';
import { DistrictUpadateComponent } from './district-upadate/district-upadate.component';
<<<<<<< HEAD
import { UnionCreateComponent } from './union-create/union-create.component';
import { UpazillaUpdateComponent } from './upazilla-update/upazilla-update.component';
import { UnionUpdateComponent } from './union-update/union-update.component';
import { HomeComponent } from './home/home.component';
=======
import { DisasterShowComponent } from './disaster-show/disaster-show.component';
import { DisasterUpdateComponent } from './disaster-update/disaster-update.component';
>>>>>>> 0c2f910ae60359b0d0252917e10da666261d91e5


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
<<<<<<< HEAD
    UnionCreateComponent,
    UpazillaUpdateComponent,
    UnionUpdateComponent,
    HomeComponent,
    DisasterCreateComponent
=======
    DisasterCreateComponent,
    DisasterShowComponent,
    DisasterUpdateComponent
>>>>>>> 0c2f910ae60359b0d0252917e10da666261d91e5
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
      {path: 'upazilla/add', component: UpazillaCreateComponent},
      {path: 'upazilla/update/:upazillaId', component: UpazillaUpdateComponent},
      {path: 'unions/show', component: UnionShowComponent},
<<<<<<< HEAD
      {path: 'union/add', component: UnionCreateComponent},
      {path: 'union/update/:unionId', component: UnionUpdateComponent},
      {path: 'disaster/create', component: DisasterCreateComponent}
=======
      {path: 'upazillas/add', component: UpazillaCreateComponent},
      {path: 'divdision/update/:divisionId', component: DivisionUpdateComponent},
      {path: 'disaster/create', component: DisasterCreateComponent},
      {path: 'disaster/show', component: DisasterShowComponent},
      {path: 'disaster/update/:disasterId', component: DisasterUpdateComponent}
>>>>>>> 0c2f910ae60359b0d0252917e10da666261d91e5
    ])
  ],
  providers: [AreaService, DisasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
