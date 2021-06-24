import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempGalleryComponent } from './temp-gallery.component';

describe('TempGalleryComponent', () => {
  let component: TempGalleryComponent;
  let fixture: ComponentFixture<TempGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
