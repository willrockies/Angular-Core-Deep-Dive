import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;
  data = {
    title: 'Angular Core Deep Dive',
  };

  onLogoClicked() {
    alert('HelloWorld');
  }
  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
