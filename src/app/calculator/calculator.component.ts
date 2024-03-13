import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  resultado: string;
  finalCalculo: boolean;

  constructor() {
    this.resultado = '';
    this.finalCalculo = false;
  }

  onClick($event: any) {
    if(this.finalCalculo) {
      this.resultado = $event.target.innerText;
      this.finalCalculo = false;
    }
    else {
      this.resultado += $event.target.innerText;
    }
  }

  onResultado() {
    this.resultado = eval(this.resultado);
    this.finalCalculo = true;
  }
}
