import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdcarComponent } from '@frontend/sdcar';

describe('SdcarComponent', () => {
  let component: SdcarComponent;
  let fixture: ComponentFixture<SdcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdcarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
