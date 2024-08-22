import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  public isProductVisible: boolean = false;
  public currentPrice:number = 10;

  constructor(){
    console.log('Constructor');
  }


  ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked');

}
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');

  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');

  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');

  }
  ngDoCheck(): void {
    console.log('ngDoCheck');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('ngOnChanges');

  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }


  public increasePrice = ():void => {
    this.currentPrice++;
  }


}
