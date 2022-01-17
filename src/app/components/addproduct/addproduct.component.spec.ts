import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { from } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

import { AddproductComponent } from './addproduct.component';

describe('AddproductComponent', () => {
  let component: AddproductComponent;
  let productService: ProductService;
  let http: HttpClient;
  let router: Router;
  let product: Product = { id: 1, name: 'apple', price: 20.0 };

  // beforeEach(async () => {
  //   TestBed.configureTestingModule({
  //     declarations: [AddproductComponent],
  //     imports: [RouterTestingModule.withRoutes([])],
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   productService = new ProductService(http);
  //   component = new AddproductComponent(productService, router);
  // });

  // it('should add product', () => {
  //   spyOn(productService, 'addProduct').and.callFake(() => {
  //     return from([{ id: 1, name: 'apple', price: 20.0 }]);
  //   });
  //   component.addProduct(product);
  //   expect(router).tona==;
  // });
});
