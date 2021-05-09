import { TestBed } from '@angular/core/testing';

import { CartCommunicatorService } from './cart-communicator.service';

describe('CartCommunicatorService', () => {
  let service: CartCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
