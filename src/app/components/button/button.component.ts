import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  // this, along with the Input in the import statement above, allow you to accept text and color as inputs; you need to use the ! to declare text and color as required variables
  @Output() btnClick = new EventEmitter()
  //this creates a new EventEmmiter (note that you need output and EventEmitter in the import statement)

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit()
  }
  //so this method will emit a custom event "btnClick" which you can set to whatever you want to happen; so when you add (btnClick)="function" to a component's html, you can define whatever function you want to be run.  

}
