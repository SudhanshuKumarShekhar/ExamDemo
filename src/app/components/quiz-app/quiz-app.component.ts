import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TestInfoComponent } from '../test-info/test-info.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-quiz-app',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule,MatCardModule, MatChipsModule, MatProgressBarModule, TestInfoComponent],
  templateUrl: './quiz-app.component.html',
  styleUrl: './quiz-app.component.css'
})
export class QuizAppComponent implements OnInit{
  shoWarning: boolean = false;
  isQuizStarted: boolean = false;
  readonly dialog = inject(MatDialog);
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  ngOnInit(): void {

  }
  openDialog() {
    const dialogRef = this.dialog.open(TestInfoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // shoWrningPopup(){
  //   this.shoWarning = true;

  // }
  // startQuiz(){
  //   this.shoWarning = false;
  //   this.isQuizStarted = true;

  // }

}
