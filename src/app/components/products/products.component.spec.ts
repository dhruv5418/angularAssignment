import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { from, Observable, ObservableNotification, of } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let productService: ProductService;
  let cartService: CartService;
  let http: HttpClient;
  let router: Router;
  let route: ActivatedRoute;

  let product: Product[] = [
    { id: 1, name: 'apple', price: 20.0 },
    { id: 2, name: 'apple', price: 25.0 },
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    productService = new ProductService(http);
    cartService = new CartService(http);
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
    component = new ProductsComponent(
      productService,
      cartService,
      router,
      route
    );
  });

  it('ngOnInit should set the products array with the response', () => {
    spyOn(productService, 'getProducts').and.callFake(() => {
      return from([
        [
          { id: 1, name: 'apple', price: 20.0 },
          { id: 2, name: 'apple', price: 25.0 },
        ],
      ]);
    });
    component.ngOnInit();
    //expect(component.cartId).toEqual('720');
    expect(component.products.length).toBeGreaterThan(0);
  });

  // it('ngOnInit should get the params id', () => {
  //   const spyRoute = spyOn(route.snapshot.paramMap, 'get');
  //   spyRoute.and.returnValue('720');
    
  //   spyOn(productService, 'getProducts').and.callFake(() => {
  //     return from([
  //       [
  //         { id: 1, name: 'apple', price: 20.0 },
  //         { id: 2, name: 'apple', price: 25.0 },
  //       ],
  //     ]);
  //   });
  //   component.ngOnInit();
  //   expect(component.cartId).toEqual('720');
  // });
});
