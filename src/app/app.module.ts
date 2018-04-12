import { AreaService } from './services/division.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms'; 
import{RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { DivisionShowComponent } from './division-show/division-show.component';
import { HttpModule } from '@angular/http';
import { DistrictShowComponent } from './district-show/district-show.component';


@NgModule({
  declarations: [
    AppComponent,
    DivisionCreateComponent,
    DivisionShowComponent,
    DistrictShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'showDivisions',component:DivisionShowComponent},
      {path:'addDivision',component:DivisionCreateComponent},
      {path:'addDistrict',component:DistrictShowComponent}
    ])

  ],
  providers: [AreaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
