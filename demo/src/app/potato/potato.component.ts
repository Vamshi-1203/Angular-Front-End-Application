import { Component } from '@angular/core';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.scss']
})
export class PotatoComponent {

  selectedQuantity: string = 'Select Quantity'; // Initialize with the default value

  displayAlert(message: string) {
    alert(`Selected Quantity: ${this.selectedQuantity}\n${message}`);
  }

}
