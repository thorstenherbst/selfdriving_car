import { Component, input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'lib-sdcar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sdcar.component.html',
  styleUrl: './sdcar.component.css',
})
export class SdcarComponent {

  @ViewChild('canvas') carCanvas: HTMLCanvasElement | undefined;
  canvasHeight = input<number>(window.innerHeight);
  canvasWidth = input<number>(window.innerWidth / 2);

  constructor(private carService: CarService){
    if(this.carCanvas){
      this.createCar()
    }
  }
  createCar(){
    const canvas = this.carCanvas;
    canvas!.width = this.canvasWidth();
    canvas!.height = this.canvasHeight();
    const ctx = canvas!.getContext("2d");
    if(ctx) {
      this.carService.createCar(ctx);
    }
  }
}
