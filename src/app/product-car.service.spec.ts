import { TestBed, inject } from '@angular/core/testing';

import { ProductCarService } from './product-car.service';

describe('ProductCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCarService]
    });
  });

  it('should ...', inject([ProductCarService], (service: ProductCarService) => {
    expect(service).toBeTruthy();
  }));
});
