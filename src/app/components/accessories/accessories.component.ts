import { Component, OnInit } from '@angular/core';
import { Handbag } from '../../domain/handbag';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent implements OnInit {
  handbags: Handbag[];

  ngOnInit() {
    this.handbags = [
      {
        photo: 'BAG-1.jpg',
        price: 8000,
      },
      {
        photo: 'BAG-2.jpg',
        price: 8500,
      },
      {
        photo: 'BAG-3.jpg',
        price: 7000,
      },
      {
        photo: 'BAG-4.jpg',
        price: 9000,
      },
      {
        photo: 'BAG-5.jpg',
        price: 6500,
      },
    ];
  }
}
