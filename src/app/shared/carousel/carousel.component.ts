import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    @Input() isMainSection: boolean = false;

    responsiveOptions: any[];
    products: string[];
    mainPages: string[];

    ngOnInit() {
        this.mainPages = ['bg-5.png', 'bg.png'];
        this.products = [
            'elina-2.jpeg',
            'natasha.jpg',
            'natasha-2.jpeg',
            'natasha.jpeg'
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '1024px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}
