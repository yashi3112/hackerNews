import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { TopNewsComponent } from './pages/top-news/top-news.component';
import { NewStoriesComponent } from './pages/new-stories/new-stories.component';
import { AskStoriesComponent } from './pages/ask-stories/ask-stories.component';
import { JobStoriesComponent } from './pages/job-stories/job-stories.component';
import { ShowStoriesComponent } from './pages/show-stories/show-stories.component';
import { CommentsComponent } from './pages/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    TopNewsComponent,
    NewStoriesComponent,
    AskStoriesComponent,
    JobStoriesComponent,
    ShowStoriesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
