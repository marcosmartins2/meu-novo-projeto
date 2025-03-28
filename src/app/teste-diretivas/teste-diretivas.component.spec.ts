import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDiretivasComponent } from './teste-diretivas.component';

describe('TesteDiretivasComponent', () => {
  let component: TesteDiretivasComponent;
  let fixture: ComponentFixture<TesteDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteDiretivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
