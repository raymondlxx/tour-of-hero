import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from '../module/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../service/in-memory-data.service';

import { AppComponent } from '../component/app.component';
import { DashboardComponent } from '../component/dashboard.component';
import { HeroesComponent } from '../component/heroes.component';
import { HeroDetailComponent } from '../component/hero-detail.component';
import { HeroService } from '../service/hero.service';
import { GroupService } from '../service/group.service';

import { HeroSearchComponent } from '../component/hero-search.component';
import { GroupListComponent } from '../component/group/group-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    GroupListComponent
  ],
  providers: [HeroService,GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/