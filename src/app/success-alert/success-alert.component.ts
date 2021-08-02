import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  text:string = "Asad";
  innerText = false;
  para:string = "";
  name:string = "";
  array = [ 
        {
          name: "asad",
          favNo: 10,
          },
          {
            name: "atal",
            favNo: 12,
            },
            {
              name: "sajid",
              favNo: 21,
              },
              {
                name: "majid",
                favNo: 2,
                },
];
  showInnerText() {
    this.innerText = true
    // this.innerText = "Some text and " + this.text +"!";
  }
  showText (event: any) {
    console.log(event);
    this.para = (<HTMLInputElement>event.target).value;
    
  }

  showEvent(event: any) {
    console.log(event);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
