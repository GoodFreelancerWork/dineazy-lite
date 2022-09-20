import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonClass } from './ButtonClass';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {
  @Input() type: ButtonClass = ButtonClass.PRIMARY;
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(event: any) {
    this.onClick.emit(event);
  }

}
