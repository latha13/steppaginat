
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagination demo App';
  tableheading = 'Device Table Data';
  constructor (private httpService: HttpClient) { }
  arrdevice: string [];
  p: number = 1;

  ngOnInit () {
    this.httpService.get('./assets/device.json').subscribe(
      data => {
        this.arrdevice = data as string [];	 
       
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
