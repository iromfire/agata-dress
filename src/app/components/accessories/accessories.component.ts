import { Component, OnInit } from '@angular/core';
import { Handbag } from '../../domain/handbag';

@Component({
    selector: 'app-accessories',
    templateUrl: './accessories.component.html',
    styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
    handbags: Handbag[];

    ngOnInit() {
        this.handbags = [
            {
                photo: 'BAG-1.png',
                price: 8000
            },
            {
                photo: 'BAG-2.png',
                price: 8500
            },
            {
                photo: 'BAG-3.png',
                price: 7000
            },
            {
                photo: 'BAG-4.png',
                price: 9000
            },
            {
                photo: 'BAG-5.png',
                price: 6500
            }
        ];
    }
}
