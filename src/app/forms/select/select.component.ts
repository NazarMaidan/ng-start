import { Component, OnInit } from "@angular/core";

import GYMS from "./model";

@Component({
  selector: "l9-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent implements OnInit {
  groups = GYMS;
  selectAllToogle: boolean = false;
  selectedGymsList = {};

  selectedLength = 0;

  constructor() {}

  ngOnInit(): void {}

  selectedGyms({ id, selected }) {
    this.selectedGymsList[id] = selected;
    setTimeout(() => (this.selectedLength = Object.values(this.selectedGymsList).flat().length));
  }

  onToogleSelectAll() {
    this.selectAllToogle = !this.selectAllToogle;
  }

  onCreateNew() {
    console.log(this.selectedGymsList);
    console.log(Object.values(this.selectedGymsList));
    console.log(Object.values(this.selectedGymsList).flat());
  }
}
