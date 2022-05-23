//base structure of a component declaration

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//where to insert component, the html tag where you embed components
  templateUrl: './app.component.html',//the html file you're using for this component
  styleUrls: ['./app.component.css']//the styling for the componenet
})
export class AppComponent {
  // title: string = 'Task Tracker';//input any properties and methods for the component, you are defining type because this is TypeScript!
}
