import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  city = '';
  weatherData: any = null;
  filteredCities: string[] = [];
  allCities: string[] = [];

  constructor(private weatherService: WeatherService, private cityService: CityService) {
    this.loadCities();
  }

  getWeather() {
    if (!this.city.trim()) return;
    this.weatherData = null;

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => (this.weatherData = data),
      error: (err) => console.error('Error fetching weather:', err)
    });
  }

  saveCity() {
    if (this.city.trim()) {
      this.cityService.addCity(this.city.trim());
      alert(`${this.city} saved!`);
      this.loadCities();
      this.city = '';
    }
  }

  loadCities() {
    this.allCities = this.cityService.getCities();
    this.filteredCities = [...this.allCities];
  }

  filterCities() {
    const term = this.city.toLowerCase();
    this.filteredCities = this.allCities.filter(c => c.toLowerCase().includes(term));
  }

  selectCity(city: string) {
    this.city = city;
    this.getWeather();
  }
}
