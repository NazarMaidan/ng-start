import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { map } from "rxjs/operators";

@Component({
  selector: "l9-select-group",
  templateUrl: "./select-group.component.html",
  styleUrls: ["./select-group.component.scss"],
})
export class SelectGroupComponent implements OnInit, OnChanges {
  @Input() city: any;
  @Input() selectAllToogle: boolean;

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  selectAllState: boolean = false;
  public form: FormGroup = new FormGroup({
    gyms: new FormArray([]),
  });

  get gymControls() {
    return this.form.get("gyms") as FormArray;
  }

  get list() {
    return this.city.gyms.map((gym) => gym.name);
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectAllToogle.currentValue && !changes.selectAllToogle.firstChange) {
      this.selectAllState = true;
      this.selectAll();
    } else {
      this.selectAllState = false;
      this.unselectAll();
    }
  }

  ngOnInit(): void {
    this.onInitForm();
    this.onChangeForm();
  }

  onInitForm() {
    this.city.gyms.forEach(() => {
      const control = new FormControl(false);
      this.gymControls.push(control);
    });
  }

  onChangeForm() {
    this.gymControls.valueChanges
      .pipe(
        map((res) => res.map((checked: boolean, i) => (checked ? this.city.gyms[i].value : checked))),
        map((res) => res.filter(Boolean)),
      )
      .subscribe((res) => {
        this.selected.emit({ id: this.city.id, selected: res });
      });
  }

  onToggleSelectAll() {
    this.selectAllState = !this.selectAllState;

    if (this.selectAllState) {
      this.selectAll();
    } else {
      this.unselectAll();
    }
  }

  selectAll() {
    const allTrue = this.list.map(() => true);
    this.gymControls.patchValue(allTrue);
  }

  unselectAll() {
    const allFalse = this.list.map(() => false);
    this.gymControls.patchValue(allFalse);
  }
}
