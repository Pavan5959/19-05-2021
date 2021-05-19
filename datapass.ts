<!--app.component.ts-->
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Angular-APP';
   data="Angular"
}

<!--user-list.component.ts-->
import { Component, OnInit.Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
@Input() hero:

  Input | undefined() { }

  ngOnInit(); void {
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

