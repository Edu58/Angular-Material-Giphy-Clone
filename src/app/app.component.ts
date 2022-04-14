import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from './Components/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Material-Giphy-Clone';

  constructor(private dialog: MatDialog) {}

  openDialog () {
    this.dialog.open(AboutComponent)
  }

  reload () {
    location.reload()
  }
}
