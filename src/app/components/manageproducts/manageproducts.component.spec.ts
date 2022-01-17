import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

import { ManageproductsComponent } from './manageproducts.component';

describe('ManageproductsComponent', () => {
  let component: ManageproductsComponent;
  let router: Router;
  let productService: ProductService;
  let http: HttpClient;
  let product: Product[] = [{ id: 1, name: 'apple', price: 20.00 }, { id: 2, name: 'apple', price: 25.00 }];
  beforeEach(() => {
    productService = new ProductService(http);
    component = new ManageproductsComponent(productService, router);
  });

  it('ngOnInit should set the products array with the response', () => {
    spyOn(productService, 'getProducts').and.callFake(() => {
      return from([[{ id: 1, name: 'apple', price: 20.00 }, { id: 2, name: 'apple', price: 25.00 }]]);
    });
    component.ngOnInit();
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('ngOnInit should set the products array with the expected response', () => {
    spyOn(productService, 'getProducts').and.callFake(() => {
      return from([[{ id: 1, name: 'apple', price: 20.00 }, { id: 2, name: 'apple', price: 25.00 }]]);
    });
    component.ngOnInit();
    expect(component.products).toEqual(product);
  });
});
