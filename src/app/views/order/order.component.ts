import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { OrderFormComponent } from "../../components/order-form/order-form.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [OrderFormComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

}
