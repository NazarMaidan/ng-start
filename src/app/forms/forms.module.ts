import { NgModule } from "@angular/core";

import { FormsRoutingModule } from "./forms-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FormsContainersModule } from "./containers/containers.module";

import { FormsService } from "./services/forms.service";
import { FormGroupDirective } from "@angular/forms";
import { SelectComponent } from "./select/select.component";
import { SelectGroupComponent } from "./select/select-group/select-group.component";

@NgModule({
  imports: [SharedModule, FormsContainersModule, FormsRoutingModule],
  providers: [FormsService, FormGroupDirective],
  declarations: [],
})
export class FormsModule {}
