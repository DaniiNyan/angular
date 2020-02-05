import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myString = 'This is a string to be tested';
  public shortString = 'I am short';
  public longString = 'I am a very very long string, you cant even see where my end is. This is how much big I am.';
}
