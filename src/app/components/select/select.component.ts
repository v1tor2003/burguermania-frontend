import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() label: string = 'Select an option';
  @Input() options: { value: string | number; label: string }[] = [];
  @Input() required: boolean = false;
  @Input() control: FormControl = new FormControl('');

  @Output() selectionChange = new EventEmitter<string | number>();
  labelWithAsterisk!: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer){ }

  ngOnInit() {
    if (this.required) {
      this.control.addValidators(Validators.required);
      const html = `${this.label} <span style="color:red;" class="required">*</span>`;
      this.labelWithAsterisk = this.sanitizer.bypassSecurityTrustHtml(html);
    } else {
      this.labelWithAsterisk = this.label;
    }
  }

  onSelectionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.control.setValue(value);
    if (this.control.valid) {
      this.selectionChange.emit(value);
    }
  }
}
