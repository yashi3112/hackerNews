import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopNewsComponent } from './pages/top-news/top-news.component';
import { NewStoriesComponent } from './pages/new-stories/new-stories.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { JobStoriesComponent } from './pages/job-stories/job-stories.component';
import { ShowStoriesComponent } from './pages/show-stories/show-stories.component';
import { AskStoriesComponent } from './pages/ask-stories/ask-stories.component';


const routes: Routes = [
  {
    path: '',
    component: TopNewsComponent
  },
  {
    path: 'new',
    component: NewStoriesComponent
  },
  {
    path: 'comment',
    component: CommentsComponent
  },
  {
    path: 'job',
    component: JobStoriesComponent
  },
  {
    path: 'show',
    component: ShowStoriesComponent
  },
  {
    path: 'ask',
    component: AskStoriesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
