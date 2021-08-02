import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  
  constructor() { }
  @Input() parentData;
  msg = "Hey parent! This is a message from child-component.";
  @Output() childEvent = new EventEmitter();

  sendEvent() {
    this.childEvent.emit(this.msg);
  }



  ngOnInit(): void {
  }

}
