import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedFilters = new ReplaySubject<SelectedFilter>();
  selectedFilters$ = this.selectedFilters.asObservable(); 

  constructor() { }

  getFilters(): Observable<FiltersModel> {
    const chars : Characteristic[] = Array.from(Array(10).keys()).map(i => { return {Id: i, Name: `Charasteristic ${i+1}`}});

    return of({
      Brands : [{Id: 1, Name: 'Brand 1'}, {Id: 2, Name: 'Brand 2'}, {Id: 3, Name: 'Brand 3'}],
      Categories: [
        {Id: 1, Name: 'Category 1', Characteristics: chars.slice(0, 5)},
        {Id: 2, Name: 'Category 2', Characteristics: chars.slice(5)}
      ]
    })
  }

  setFiltersContext(selectedFilters: SelectedFilter) {
    this.selectedFilters.next(selectedFilters);
  }
}

export interface FiltersModel {
  Brands: Brand[],
  Categories: Category[]
}

export interface Brand {
  Id: number,
  Name: string
}

export interface Characteristic {
  Id: number,
  Name: string
}

export interface Category {
  Id: number,
  Name: string,
  Characteristics: Characteristic[]
}

export interface SelectedFilter {
  Name?: string;
  BrandId?: number;
  MinPrice?: number;
  MaxPrice?: number;
  CategoryId?: number;
}