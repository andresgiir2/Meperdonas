import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  successPadding = '10px 20px';
  successFontSize = '1em';
  dangerPadding = '10px 20px';
  dangerFontSize = '1em';

  private minDangerSize = 5; // Tamaño mínimo para el botón de peligro
  private maxSuccessSize = 30; // Tamaño máximo para el botón de éxito

  private dangerClickCount = 0; // Contador de clics en el botón de peligro

  handleClick(event: Event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    // Incrementa el tamaño del botón de éxito
    if (parseFloat(this.successFontSize) < this.maxSuccessSize) {
      this.successPadding = `${parseFloat(this.successPadding.split(' ')[0]) + 5}px ${parseFloat(this.successPadding.split(' ')[1]) + 10}px`;
      this.successFontSize = `${parseFloat(this.successFontSize) + 0.2}em`;
    }

    // Reduce el tamaño del botón de peligro
    this.dangerClickCount++;
    if (this.dangerClickCount <= 20) { // Limita el número de clics
      let newSize = Math.max(this.minDangerSize, parseFloat(this.dangerFontSize) - 0.1);
      this.dangerPadding = `${newSize}px ${newSize * 2}px`;
      this.dangerFontSize = `${newSize}px`;
    }
  }
}
