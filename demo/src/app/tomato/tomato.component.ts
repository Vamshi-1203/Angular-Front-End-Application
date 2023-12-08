import { Component } from '@angular/core';

@Component({
  selector: 'app-tomato',
  templateUrl: './tomato.component.html',
  styleUrls: ['./tomato.component.scss']
})
export class TomatoComponent {

  selectedQuantity: string = 'Select Quantity'; // Initialize with the default value

  displayAlert(message: string) {
    alert(`Selected Quantity: ${this.selectedQuantity}\n${message}`);
  }

}
