import { Component } from '@angular/core';

@Component({
  selector: 'app-lemon',
  templateUrl: './lemon.component.html',
  styleUrls: ['./lemon.component.scss']
})
export class LemonComponent {

  selectedQuantity: string = 'Select Quantity'; // Initialize with the default value

  displayAlert(message: string) {
    alert(`Selected Quantity: ${this.selectedQuantity}\n${message}`);
  }

}
