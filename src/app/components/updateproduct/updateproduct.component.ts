import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css'],
})
export class UpdateproductComponent implements OnInit {
  id: string = '';
  product!: Product;
  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.productService.getProductById(this.id).subscribe((response) => {
        this.product = response;
        this.productForm.get('name')?.setValue(this.product.name);
        this.productForm.get('price')?.setValue(this.product.price);
      });
    });
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  get name(): FormControl {
    return this.productForm.get('name') as FormControl;
  }

  get price(): FormControl {
    return this.productForm.get('price') as FormControl;
  }

  get productFormControl() {
    return this.productForm.controls;
  }

  updateProduct(product: Product) {
    product.id = +this.id;
    this.productService.updateProduct(product).subscribe((response) => {
      alert('Product details has been updated');
      this.router.navigate(['/manage']);
    });
  }
}
