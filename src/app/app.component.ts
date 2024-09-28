import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileLogInComponent } from './components/mobile-log-in/mobile-log-in.component';
import { QuizAppComponent } from './components/quiz-app/quiz-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';
}
