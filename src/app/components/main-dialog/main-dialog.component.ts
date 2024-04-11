import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-dialog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-dialog.component.html',
  styleUrl: './main-dialog.component.scss'
})
export class MainDialogComponent {
}
