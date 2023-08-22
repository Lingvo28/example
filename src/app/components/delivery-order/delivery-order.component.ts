import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delivery-order',
    templateUrl: './delivery-order.component.html',
    styleUrls: ['./delivery-order.component.scss']
})
export class DeliveryOrderComponent implements OnInit {
    defaultLocation = { lat: 21.623962561370238, lng: 107.904090988103 };
    currentLocation!: GeolocationPosition;
    
    gMapsOptions!: google.maps.MapOptions;
    markerOptions: google.maps.MarkerOptions = {draggable: true};

    startMarkerPosition!: google.maps.LatLngLiteral;
    destinationMarkerPosition!: google.maps.LatLngLiteral;

    deliveryName!: string;
    isFragile!: boolean;
    deliveryDescription!: string;
    deliveryHeight!: number;
    deliveryWeight!: number;
    deliveryLength!: number;
    deliveryWidth!: number;
    startLocation: string = '';
    destinationLocation: string = '';
    name: string = '';
    surname: string = '';
    phone: string = '';

    submitForm() {
        const request = {
            deliveryName: this.deliveryName,
            isFragile: this.isFragile,
            deliveryDescription: this.deliveryDescription,
            deliveryHeight: this.deliveryHeight,
            deliveryWeight: this.deliveryWeight,
            deliveryLength: this.deliveryLength,
            deliveryWidth: this.deliveryWidth,
            startLocation: this.startLocation,
            destinationLocation: this.destinationLocation,
            name: this.name,
            surname: this.surname,
            phone: this.phone
        }

        //someService.addBooking(request);
    }

    constructor() { }

    ngOnInit(): void {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.currentLocation = position;
                
                this.gMapsOptions = {
                    center: {lat: position.coords.latitude, lng: position.coords.longitude},
                    zoom: 15
                }
            }, 
            () => {
                this.gMapsOptions = {
                    center: this.defaultLocation,
                    zoom: 15
                }

                this.startMarkerPosition = this.defaultLocation;
                this.destinationMarkerPosition = this.defaultLocation;
                this.startLocation = `${this.defaultLocation?.lat}, ${this.defaultLocation?.lng}`;
                this.destinationLocation = `${this.defaultLocation?.lat}, ${this.defaultLocation?.lng}`;

            }, 
            { timeout: 10000 }
        );
    }

    addStartMarker(event: google.maps.MapMouseEvent) {
        this.startMarkerPosition = event!.latLng!.toJSON();
        this.startLocation = `${event.latLng?.lat()}, ${event.latLng?.lng()}`;
    }

    addDestinationMarker(event: google.maps.MapMouseEvent) {
        this.destinationMarkerPosition = event!.latLng!.toJSON();
        this.destinationLocation = `${event.latLng?.lat()}, ${event.latLng?.lng()}`;
    }
}
