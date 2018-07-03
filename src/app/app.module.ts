import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListTagsComponent } from './list-tags/list-tags.component';
import { ShowReportComponent } from './show-report/show-report.component';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListTagsComponent,
    ShowReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
