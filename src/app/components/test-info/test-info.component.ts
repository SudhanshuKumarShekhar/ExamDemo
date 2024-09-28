import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-test-info',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './test-info.component.html',
  styleUrl: './test-info.component.css'
})
export class TestInfoComponent {

}
