import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/product';


@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
    
  upQuiantity(): void{
    if(this.quantity < this.max ){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } 
    else 
    this.maxReached.emit("Se alcanzo la cantidad maxima de stock");
  }

  downQuiantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }  
  }

  changeQuantity(event) : void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);

  }

}
