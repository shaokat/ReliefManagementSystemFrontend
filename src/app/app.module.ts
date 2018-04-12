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
import { UpazillaShowComponent } from './upazilla-show/upazilla-show.component';
import { UnionShowComponent } from './union-show/union-show.component';


@NgModule({
  declarations: [
    AppComponent,
    DivisionCreateComponent,
    DivisionShowComponent,
    DistrictShowComponent,
    DistrictCreateComponent,
    UpazillaShowComponent,
    UnionShowComponent
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
      {path: 'unions/show', component: UnionShowComponent}
    ])

  ],
  providers: [AreaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
