import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular';
  ninjaname = 'UchihaBoss';
  ninjaConsole(){
    console.log('My name is :' ,this.ninjaname);
  }
  changeNinjaName(name:string){
    this.ninjaname = name;
  }
  value2: string ='Hello PrimeNG';
  
  cars = [
    {
      year:1998,
      brand:'Boszerie'
    }
  ];

  employeeCode = '007';
  employeeName = 'BoppinCode';
}
