import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      product: ['', Validators.required],
      observation: ['', [Validators.required, Validators.minLength(10)]],
      quantity: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault()
    window.alert('Pedido submetido.');
  }
}
