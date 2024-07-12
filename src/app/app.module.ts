/**
** @name: app.module.ts
** @description: This is root module file.
**/

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { StoryListComponent } from '././stories/story-list.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HackerNewsService } from './services/hacker-news-service.service';


@NgModule({
  providers: [HackerNewsService],
  declarations: [
    AppComponent,StoryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-rotate' }),
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
