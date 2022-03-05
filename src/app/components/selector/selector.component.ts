import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  public selection!: string;
  @Input() dropdownList!: string[];
  @Input() placeholder!: string;
  @Output() onSelectorSelect = new EventEmitter();

  ngOnInit(): void {
    console.log("Hello", this.dropdownList);
  }

  onSelectionChange(selection: string) {
    this.onSelectorSelect.emit(selection);
  }
}
