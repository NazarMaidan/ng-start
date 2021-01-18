import { Component } from "@angular/core";
import { LoaderService } from "@core/services/loader.service";

@Component({
  selector: "bb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private loader: LoaderService) {}

  onClick() {
    this.loader.display(true);

    setTimeout(() => {
      this.loader.display(false);
    }, 1000);
  }
}
