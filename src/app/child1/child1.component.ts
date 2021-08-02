import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() childEvent = new EventEmitter();
  
  // array1:any[] = [];

  
  
  data(name,age) { 
    let obj1 = {};
    obj1["name"] = name;
    obj1["age"] = age;
    console.log("obj1:",obj1);
    
    this.childEvent.emit(obj1);
    // name = "";
    // age = "";
    



  
    // this.array1.push(name); 
    // this.array1.push(age); 
    // console.log(this.array1);
    // this.childEvent.emit(this.array1);



  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
