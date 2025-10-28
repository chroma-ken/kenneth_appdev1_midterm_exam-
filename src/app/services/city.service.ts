import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: string[] = [];

  getCities(): string[] {
    return this.cities;
  }

  addCity(city: string): void {
    if (!this.cities.includes(city)) {
      this.cities.push(city);
    }
  }

  removeCity(city: string): void {
    this.cities = this.cities.filter(c => c !== city);
  }

  clearCities(): void {
    this.cities = [];
  }
}
