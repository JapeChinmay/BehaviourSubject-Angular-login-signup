import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartproductlistComponent } from './cartproductlist.component';

describe('CartproductlistComponent', () => {
  let component: CartproductlistComponent;
  let fixture: ComponentFixture<CartproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartproductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
