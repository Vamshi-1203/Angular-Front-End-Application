import { Component } from '@angular/core';

@Component({
  selector: 'app-onion',
  templateUrl: './onion.component.html',
  styleUrls: ['./onion.component.scss']
})
export class OnionComponent {

  selectedQuantity: string = 'Select Quantity'; // Initialize with the default value

  displayAlert(message: string) {
    alert(`Selected Quantity: ${this.selectedQuantity}\n${message}`);
  }

}
