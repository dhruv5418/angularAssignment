import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/carts';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart/cart.service';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartId: string = '';
  cart!: Cart;
  cartNew!: Cart;
  products!: Product[];
  order!: Order;
  noProduct: Boolean = true;
  constructor(
    private cartService: CartService,
    private router: Router,
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cartId = params['id'];
    });
    this.getCart();
  }

  getCart() {
    this.cartService.getCart(this.cartId).subscribe((response) => {
      this.cart = response;
      this.products = this.cart.products;
      console.log(this.cart);
      if (this.cart.products.length > 0) {
        this.noProduct = false;
      } else {
        this.noProduct = true;
      }
    });
  }

  newCart() {
    this.cartService.createCart().subscribe((response) => {
      this.cartNew = response;
      this.router.navigate(['/products/' + this.cartNew?.id]);
    });
  }

  clearCart() {
    this.cartService.clearCart(this.cartId).subscribe((response) => {
      alert('Cart has been cleared.');
      this.getCart();
    });
  }

  removeProduct(id: number) {
    this.cartService.removeProduct(this.cartId, id).subscribe((response) => {
      alert('Product has been removed from the cart.');
      this.ngOnInit();
    });
  }

  // Need change get name from html form and pass to orderservice
  checkout(order: Order) {
    this.orderService
      .placeOrder(order.customerName, this.cartId)
      .subscribe((response) => {
        alert('Your order has been placed!!! Continue shopping.');
        this.newCart();
      });
    console.log(order.customerName);
  }
}
