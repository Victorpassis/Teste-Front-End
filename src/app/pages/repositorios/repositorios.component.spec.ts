import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriosComponent } from './repositorios.component';

describe('RepositoriosComponent', () => {
  let component: RepositoriosComponent;
  let fixture: ComponentFixture<RepositoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
