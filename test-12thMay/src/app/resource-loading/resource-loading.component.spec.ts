import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLoadingComponent } from './resource-loading.component';

describe('ResourceLoadingComponent', () => {
  let component: ResourceLoadingComponent;
  let fixture: ComponentFixture<ResourceLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
