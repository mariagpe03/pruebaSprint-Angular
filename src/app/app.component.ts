import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  personas :Persona[] | undefined;
  constructor(private http : HttpClient){
  }
  ngOnInit(){
    this.http.get('http://127.0.0.1:8080/controlador/list').subscribe((resp:any) =>{
      this.personas = resp  
    console.log(resp[0])
    });
  }
}
