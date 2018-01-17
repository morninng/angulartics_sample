import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestTestComponent } from './test-test/test-test.component';


import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { SendLogService } from './send-log.service';

@NgModule({
  declarations: [
    AppComponent,
    TestTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [SendLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
