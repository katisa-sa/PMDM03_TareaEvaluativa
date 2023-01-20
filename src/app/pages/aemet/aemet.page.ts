import { AemetService } from './../../servicios/aemet.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aemet',
  templateUrl: './aemet.page.html',
  styleUrls: ['./aemet.page.scss'],
})

export class AemetPage implements OnInit {

  constructor(private servidorRest: HttpClient, private aemet: AemetService) { }

  

  arrayClima:any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio

   
  public getClima() { //llamamos a la funcion getPost de nuestro servicio.
    this.aemet.getClima()
    .then(data => {
      this.arrayClima = data;
      this.arrayClima.push(data);
      return this.arrayClima;
    });
  }

 
  ngOnInit() {
    this.getClima();
  }
  
 
}
