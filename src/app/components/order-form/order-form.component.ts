import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { Hamburger } from '../../types';
import { HamburguerService } from '../../services/hamburguer.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule, ButtonComponent, SelectComponent],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {
  form!: FormGroup;
  hamburguerOptions: { value: string | number; label: string }[] = []

  constructor(
    private fb: FormBuilder,
    private hamburguerService: HamburguerService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.loadBurguers();
    this.form = this.fb.group({
      product: ['', Validators.required],
      observation: ['', [Validators.required, Validators.minLength(10)]],
      quantity: [null, [Validators.required, Validators.min(0)]],
    });
  }

  loadBurguers(): void {
    this.hamburguerService.getHamburgers().subscribe(data => {
      this.hamburguerOptions = data.map((h) => { return { value: h.id, label: h.name }});
    });
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  onProductSelected(selectedValue: string|number) {
    console.log('Select value.', selectedValue);
  }
  
  onSubmit(event: Event): void {
    event.preventDefault()
    
    window.alert(this.form.value)
    // should call the service to create, no time left to implement
    /*this.orderService.createOrder(this.form.value).subscribe(
      createdOrder => {
        window.alert('Pedido Criado.');
      },
      error => {
        window.alert('Erro ao criar pedido.');
      }
    );*/
  }
}
