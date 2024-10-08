import { Component, Inject, inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: ' app-snackbar',
  template: `<span class="snackbar" matSnackBarLabel>
                {{snackbarContent}}
             </span>
             `,
  styles: [
    `
    :host {
      display: flex;
      justify-content: center;
    }

    .snackbar {
      display: flex;
      justify-content: center;
      color: white;
    }
  `,
  ],
})

export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public snackbarContent: string) {}
  snackBarRef = inject(MatSnackBarRef);
}
