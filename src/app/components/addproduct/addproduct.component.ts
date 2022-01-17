import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  p!: Product;
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe(response => {
      console.log(response);
      this.p = response;
      alert("Product has been added");
      this.router.navigate(['/manage']);
    });
  }
}
