import { style } from '@angular/animations';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
 {
  pArray: any[] = [];
  text:string = "asad";
  title = 'my-first-task';
  paraText = false;
  number = 1210;
  value = 10;



  ngOnChanges() {
    console.log("parent's ngOnChanges called!");

  }
  ngOnInit() {
    console.log("parent' ngOnInit called!");
  }
  ngDoCheck() {
    console.log("parent's ngDoCheck called!");

  }
  ngAfterContentInit() {
    console.log("parent's ngAfterContentInit called!");

  }
  ngAfterContentChecked() {
    console.log("parent's ngAfterContentChecked called!");

  }

  
  ngAfterViewInit() {
    console.log("parent's ngAfterViewInit called!");
    
  }
  
  ngAfterViewChecked() {
    console.log("parent's ngAfterViewChecked called!");
    
  }
  
  
  ngOnDestroy() {
    console.log("parent's ngOnDestroy called!");

  }
  
  
  



  eventEmit(event) {
    console.log("event:",event)
    this.pArray.push(event)
    console.log("pArray:", this.pArray)
  }




  increment() {
    this.number++
  }
  decrement() {
    this.number--
  }



constructor() {
  console.log("parent's constructor called!");

   setTimeout(() => {
     this.title = "my first DOM task";
   }, 2000);
   
  
}

}
