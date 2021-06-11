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
      year:1997,
      brand:'Boszerie'
    },
    {
      year:1998,
      brand:'ninja'
    },
    {
      year:1999,
      brand:'honda'
    },
    {
      year:2000,
      brand:'toyota'
    }
  ];

  employeeCode = '007';
  employeeName = 'BoppinCode';
}
