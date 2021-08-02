import { Component, Input, OnInit, OnChanges, SimpleChange,
         SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-lifecycle-hooks',
  templateUrl: './child-lifecycle-hooks.component.html',
  styleUrls: ['./child-lifecycle-hooks.component.css']
})
export class ChildLifecycleHooksComponent implements 
OnInit, 
OnChanges, 
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
  {

  @Input() parentNumber;

  constructor() { 
    console.log("Child's constructor called!")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }
  
  ngOnChanges(changes:SimpleChanges) {
    // console.log("OnChanges!", changes);
    console.log("Child's ngOnChanges called!");
    let pNumber = changes['parentNumber'];
    console.log("previous value:", pNumber.previousValue);
    console.log("current value:", pNumber.currentValue);
    console.log("firstChange:", pNumber.firstChange);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }

  ngOnInit(): void {
    console.log("Child's ngOnInit called!");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }
  
  ngDoCheck() {
    console.log("Child's ngDoCheck called!")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }
  ngAfterContentInit() {
    console.log("Child's ngAfterContentInit called!")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }
  ngAfterContentChecked() {
    console.log("Child's ngAfterContentChecked called!")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }
  ngAfterViewInit() {
    console.log("Child's ngAfterViewInit called!")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }
  ngAfterViewChecked() {
    console.log("Child's ngAfterViewChecked called!")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }
  ngOnDestroy() {
    console.log("Child's ngOnDestroy called!");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  }

}
