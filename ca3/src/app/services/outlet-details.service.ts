import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutletDetailsService {

  constructor() { }

  // Outlet details

  outletDetails = [
    {
      id: 1,
      outletName: "Dominos Pizza",
      outletImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 2,
      outletName: "NK Restaurant",
      outletImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id: 3,
      outletName: "Cafe Coffee Day",
      outletImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id: 4,
      outletName: "Food Factory",
      outletImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
  ]




}
