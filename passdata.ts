<!--app.component.html-->
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Angular-APP';
  users =[{
    name:'abc',
    age:19,
    address:'dubai'
  },
  {
    name:'def',
    age:'20',
    address:'london'
  },
  {
    name:'ghi',
    age:'21',
    address:'germany'
  }

  ]
}

<!--user.component.ts-->
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() hero: any
  constructor() { }

  ngOnInit(): void {
    console.warn(this.hero)
  }

}
