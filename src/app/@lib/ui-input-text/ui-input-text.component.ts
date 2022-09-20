import { AfterViewInit, Component, DoCheck, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-input-text',
  templateUrl: './ui-input-text.component.html',
  styleUrls: ['./ui-input-text.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => UiTextComponent)
}]
})
export class UiTextComponent implements ControlValueAccessor {

  private _type!: string;
  private _name!: string;
  private _label!: string;
  private _required!: boolean;
  private _placeholder!: string;
  private _helpText!: string;
  private _errorText!: string;
  private _disabled!: boolean;
  private _icon!: string;

  value!: string;

  private onTouched!: Function;
  private onChanged!: Function;

  @Input()
  set type(value: string) {
    this._type = value || 'text';
  }

  get type(): string {
    return this._type;
  }

  @Input()
  set name(value: string) {
    this._name = value || '';
  }

  get name(): string {
    return this._name;
  }

  @Input()
  set label(value: string) {
    this._label = value || '';
  }

  get label(): string {
    return this._label;
  }

  @Input()
  set required(value: boolean) {
    this._required = value || false;
  }

  get required(): boolean {
    return this._required;
  }

  @Input()
  set placeholder(value: string) {
    this._placeholder = value || '';
  }

  get placeholder(): string {
    return this._placeholder || '';
  }

  @Input()
  set helpText(value: string) {
    this._helpText = value || '';
  }

  get helpText(): string {
    return this._helpText;
  }

  @Input()
  set errorText(value: string) {
    this._errorText = value || '';
  }

  get errorText(): string {
    return this._errorText;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value || false;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set icon(value: string) {
    this._icon = value || '';
  }

  get icon(): string {
    return this._icon;
  }

  constructor() { }

  handleChange(val: any) {
    this.value = val;
    this.onChanged(this.value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void { }
}
