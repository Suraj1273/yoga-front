import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaTeachingComponentComponent } from './yoga-teaching-component.component';

describe('YogaTeachingComponentComponent', () => {
  let component: YogaTeachingComponentComponent;
  let fixture: ComponentFixture<YogaTeachingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaTeachingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaTeachingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
