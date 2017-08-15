import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { routes } from './app.router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { QuizComponent } from './pages/quiz/quiz.component';
import { StorageService } from './services/storage.service';
import { QuizService } from './services/quiz.service';
import { EndComponent } from './pages/end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuizComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [AuthGuard, AuthService, StorageService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
