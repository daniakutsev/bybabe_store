import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {IProduct} from "../services/product.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: IProduct[]
  pSub: Subscription
  rSub: Subscription

  constructor(private productsService: ProductService) {
  }

  ngOnInit(): void {
    
    this.pSub = this.productsService.getAllProducts()
      .subscribe(response => {
        this.products = response
      })
  }

  remove(id: string) {
    this.rSub = this.productsService.remove(id)
      .subscribe(() => {
        this.products = this.products.filter(p => p.id !== id)
      })
  }

  ngOnDestroy(): void {
    if (this.pSub) this.pSub.unsubscribe()
  }

}
