import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryListComponent } from './stories/story-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'stories', component: StoryListComponent },
  { path: '**', redirectTo: 'stories' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
