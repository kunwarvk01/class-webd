import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {

  constructor(private service: OrderDetailsService) { }
  foodData: any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
