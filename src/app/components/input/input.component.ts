import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit{
  @Input() label: string = ''; // Label for the input
  @Input() type: 'text' | 'textarea' | 'number' = 'text'; // Type of input
  @Input() placeholder: string = ''; // Placeholder text
  @Input() control: AbstractControl | null = null;
  
  value: any = '';
  labelWithAsterisk!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  // Callbacks for ControlValueAccessor
  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    if (this.control && this.control.hasValidator && this.control.hasValidator(Validators.required)) {
      const html = `${this.label} <span style="color:red;" class="required">*</span>`;
      this.labelWithAsterisk = this.sanitizer.bypassSecurityTrustHtml(html);
    } else {
      this.labelWithAsterisk = this.label;
    }
  }

  writeValue(value: any): void {
    if(value !== undefined)
      this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(event: Event): void {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = input.value; 
    this.onChange(this.value);
    this.onTouched();
  }
}
