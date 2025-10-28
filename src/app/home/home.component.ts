import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service'; // ✅ fixed import

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html', // ✅ fixed file path
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weather: WeatherService) {}

  getWeather() {
    this.weatherData = null;
    this.errorMessage = '';

    if (!this.city.trim()) {
      this.errorMessage = '⚠️ Please enter a city name.';
      return;
    }

    this.weather.getWeather(this.city).subscribe({
      next: (data: any) => {
        if (data && data.current) {
          this.weatherData = data;
        } else {
          this.errorMessage = 'City not found or API error.';
        }
      },
      error: () => {
        this.errorMessage = 'Unable to connect to the weather service.';
      }
    });
  }
}
