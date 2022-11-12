import { Component, OnInit } from '@angular/core';
import { Menu } from "../../Menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[];
  constructor() {
    this.menus = [
      {
        sno: 1,
        title: "North Indian",
        active: true
      },
      {
        sno: 2,
        title: "South Indian",
        active: true
      },
      {
        sno: 3,
        title: "Chinese",
        active: true
      },
    ]
  }
  ngOnInit(): void { }

}
