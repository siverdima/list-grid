import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListGridComponent } from './products-list-grid.component';

describe('ProductsListGridComponent', () => {
  let component: ProductsListGridComponent;
  let fixture: ComponentFixture<ProductsListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
