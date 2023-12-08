import { Component } from '@angular/core';

@Component({
  selector: 'app-okra',
  templateUrl: './okra.component.html',
  styleUrls: ['./okra.component.scss']
})
export class OkraComponent {

  selectedQuantity: string = 'Select Quantity'; // Initialize with the default value

  displayAlert(message: string) {
    alert(`Selected Quantity: ${this.selectedQuantity}\n${message}`);
  }

}
