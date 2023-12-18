import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArrayWeather,Coord } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private endpoint:string = "https://api.openweathermap.org/data/2.5";
  private apikey:string = "e15242f93df911ebb655e66d3db1e121";
  arrayTiempo:Coord[] = [];
  constructor(private http:HttpClient) { }

  realizarPeticion(lat:number,lon:number){
    if(lon == 0 || lat == 0){
      console.log("No se han pasado parámetros");
    }

    const params = new HttpParams()
    .set("appid",this.apikey)
    .set("lat",lon)
    .set("lon",lat)
  
  this.http.get<ArrayWeather>(`${this.endpoint}/weather`,{params})
  .subscribe(
    response =>{this.arrayTiempo = response.coord})
}

}
