import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiverPage } from './receiver.page';

describe('ReceiverPage', () => {
  let component: ReceiverPage;
  let fixture: ComponentFixture<ReceiverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
