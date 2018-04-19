import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import 'jest';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toMatchSnapshot('./__snapshots__/app.component.spec.ts.snap');
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toMatchSnapshot('./__snapshots__/app.component.spec.ts.snap');
  }));
  it('should render title in a h1 tag (Jest Test)', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled).toMatchSnapshot('./__snapshots__/app.component.spec.ts.snap');
  }));
});
