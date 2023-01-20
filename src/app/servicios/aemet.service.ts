import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AemetService {

  url = 'https://opendata.aemet.es/opendata/sh/f4459c68?eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrc2FuekBiaXJ0LmV1cyIsImp0aSI6IjgwZTY2MWU1LTkxZTMtNGUzMy05ZjZmLWJhZDJmNmJhZWIxNyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjc0MjMzNDcyLCJ1c2VySWQiOiI4MGU2NjFlNS05MWUzLTRlMzMtOWY2Zi1iYWQyZjZiYWViMTciLCJyb2xlIjoiIn0.Ohud_eQT8fGMgrsosHD08ys5ahJEDIKTrSfC4N8sJio';

 
  constructor(public http: HttpClient) {

  }

  getClima(){
    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
}
