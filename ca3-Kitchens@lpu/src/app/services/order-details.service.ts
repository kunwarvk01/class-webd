import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id: 1,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 80,
      foodImg: "https://honestcooking.com/wp-content/uploads/2014/01/veg-grilled-sandwich1.jpg"
    },
    {
      id: 2,
      foodName: "Veggie Supreme",
      foodDetails: "Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice: 280,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/xheysiet81o1h8zofhdm"
    },
    {
      id: 3,
      foodName: "Veg Masala Roll",
      foodDetails: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice: 110,
      foodImg: "https://content.jwplatform.com/thumbs/C6naZvHY-720.jpg"
    },
    {
      id: 4,
      foodName: "Paneer Burger",
      foodDetails: "panner",
      foodPrice: 70,
      foodImg: "https://mcdonaldsblog.in/wp-content/uploads/2016/06/mcspicy-paneer-1-1.jpg"
    },

    {
      id: 5,
      foodName: "Indulgence Brownie",
      foodDetails: "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice: 80,
      foodImg: "https://lh3.googleusercontent.com/RrKHVM6EPo02QIaInjYiWVudI3thq3UxgAtP5e9W1tM4Qu9hLS6cue-xy_mRoPJv4U_RPxTXzEqxwGI_mK0_78fRtlWfw-Yb6RJDWZ_o=w512-rw"
    },
    {
      id: 6,
      foodName: "Oreo Cheesecake Ice Cream",
      foodDetails: "Oreo ice cream",
      foodPrice: 90,
      foodImg: "https://www.the-girl-who-ate-everything.com/wp-content/uploads/blogger/_A39cgxoHN64/Spk75M9EnbI/AAAAAAAADvg/aScnJ1FBy2o/s1600/IMG_3318.JPG"
    }
  ]




}
