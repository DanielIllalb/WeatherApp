import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArrayGeocoding, Feature } from '../interfaces/interfaz2';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http:HttpClient) { }

  private endpoint:string = "https://api.maptiler.com/geocoding/";
  private apiKey:string = "QVTnE36ewW2cVmyCmK5o";
  arrayCiudades:Feature[] = [];

  realizarPeticion(ciudad:string){

    const params = new HttpParams()
    .set("key",this.apiKey)

    this.http.get<ArrayGeocoding>(`${this.endpoint}/${ciudad}.json`,{params})
    .subscribe(
      response =>{this.arrayCiudades = response.features}
    )
  }

}
