import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { Brand, Category, Characteristic, ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-sidebar-filter',
    templateUrl: './sidebar-filter.component.html',
    styleUrls: ['./sidebar-filter.component.scss']
})
export class SidebarFilterComponent implements OnInit, OnDestroy {
    private unsubscriber = new Subject<void>();
    
    brands: Brand[] = [];
    categories: Category[] = [];
    characteristics: Characteristic[] = [];

    selectedBrand!: Brand;
    selectedCategory!: Category;
    minPrice!: number;
    maxPrice!: number;
    name!: string;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getFilters()
            .pipe(
                takeUntil(this.unsubscriber),
                tap(filters => {
                    this.brands = filters.Brands;
                    this.categories = filters.Categories;
                })
            ).subscribe();
    }

    brandChanged(brand: Brand) {
        this.selectedBrand = brand;
    }

    categoryChanged(category: Category) {
        this.selectedCategory = category;
        this.characteristics = category.Characteristics;
    }

    nameChanged(name: string) {
        this.name = name;
    }

    minPriceChanged(price: number) {
        this.minPrice = price;
    }

    maxPriceChanged(name: number) {
        this.maxPrice = name;
    }

    onApply(): void {
        this.productService.setFiltersContext({
            Name: this.name,
            BrandId: this.selectedBrand?.Id,
            MinPrice: this.minPrice,
            MaxPrice: this.maxPrice,
            CategoryId: this.selectedCategory?.Id
        });
    }

    ngOnDestroy(): void {
        this.unsubscriber.next();
        this.unsubscriber.complete();
    }
}
