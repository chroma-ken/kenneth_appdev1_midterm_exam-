import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-saved-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent {
  cities: string[] = [];

  constructor(private cityService: CityService, private router: Router) {
    this.loadCities();
  }

  loadCities() {
    this.cities = this.cityService.getCities();
  }

  removeCity(city: string) {
    this.cityService.removeCity(city);
    this.loadCities();
  }

  clearAll() {
    this.cityService.clearCities();
    this.loadCities();
  }

  viewWeather(city: string) {
    // Navigate to Home and display that city’s weather
    this.router.navigate(['/home'], { queryParams: { city } });
  }
}
