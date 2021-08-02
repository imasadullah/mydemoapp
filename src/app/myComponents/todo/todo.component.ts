import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  para:string = 'Hello this is a paragraph!';
  isDisabled = true;
  changePara() {
    this.para = "Now its changed, through event binding!";
  }
  gerText() {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
