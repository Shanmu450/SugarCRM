import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CommonModule} from '@angular/common';
// import { AccordionDemoRoutingModule } from 'primeng/component/accordiondemo-routing.module';
import {AccordionModule} from "ng2-accordion";
// import { AccordionModule } from 'primeng/components/accordion/accordion';
import { ButtonModule } from 'primeng/components/button/button';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { ToastModule } from 'primeng/components/toast/toast';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    CommonModule,
    // AccordionDemoRoutingModule,
    AccordionModule,
    ButtonModule,
    TabViewModule,
    ToastModule,
    CodeHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
