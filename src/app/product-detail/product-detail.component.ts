import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  producto?: Product;
  loading: boolean = true;

  // producto: string = '';
  productsList: Product[] = productsList;
  color: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe((params) => {
        //* para guardar n la variable producto el id del producto que viene de app-routing
        // this.producto = params['productId'];

        this.producto = this.productsList.find(
          (p) => p.id == params['productId']
        );
        this.loading = false;
        this.color = (this.producto?.price as number) > 5 ? 'red' : '';
        // this.color = params['category'];
      });
    }, 1000);
  }
}
