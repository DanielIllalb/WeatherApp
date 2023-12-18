import { Component,ElementRef,ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-searchbox',
  standalone: true,
  imports: [],
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {
  @ViewChild("textoInput") latitudRecibida!:ElementRef<HTMLInputElement>;
  constructor(private servicio:WeatherService){}

  searchLat(){
    this.servicio.realizarPeticion(this.latitudRecibida.nativeElement.value,this.textoRecibido.nativeElement.value);
    this.textoRecibido.nativeElement.value = "";
  }
}
