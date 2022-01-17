import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/carts';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapse: boolean = true;
  userType: boolean = false;
  role: string = 'Seller';
  constructor(private router:Router,private cartService:CartService) {}

  ngOnInit(): void {
    this.cartService.createCart().subscribe(response => {
      this.cart = response;
      this.router.navigate(['/products/'+this.cart?.id]);
    });
  }
  cart: Cart | undefined;

  openCart() {
    this.router.navigate(['/cart/'+this.cart?.id]);
  }
  openProducts() {
    this.router.navigate(['/products/'+this.cart?.id]);
  }
  changeRole() {
    this.userType = !this.userType;
    if (this.role == 'User') {
      this.role = 'Seller';

      this.router.navigate(['/products/'+this.cart?.id]);
    } else {
      this.role = 'User';
      this.router.navigate(['/manage']);
    }
  }
}
