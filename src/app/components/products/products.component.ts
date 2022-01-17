import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/carts';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  cartId: string = '';
  cart!: Cart;
  productCart: number[] = [];
 // b: boolean | undefined ;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cartId = params['id'];

      if (this.cartId == undefined) {
        console.log('test ' + this.cartId);
      } else {
        console.log('test ' + this.cartId);
      }
    });

    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  goToCart() {
    this.router.navigate(['/cart/' + this.cartId]);
  }

  addToCart(productId: number) {
 

    this.cartService
    .addToCart(this.cartId, productId)
    .subscribe((response) => {
      console.log(response);
      this.productCart.push(productId);
      console.log(this.productCart);
      
      this.goToCart();
    });
    
  }
}
