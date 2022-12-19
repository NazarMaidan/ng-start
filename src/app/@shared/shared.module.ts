import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";
import { NgxJsonViewerModule } from "ngx-json-viewer";

import { SharedDirectivesModule } from "./directives/directives.module";
import { SharedPipesModule } from "./pipes/pipes.module";
import { SharedComponentsModule } from "./components/components.module";
import { ValidationMessageModule } from "./modules/validation-message/validation-message.module";
import { TranslateModule } from "@ngx-translate/core";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { SelectComponent } from "../forms/select/select.component";
import { SelectGroupComponent } from "../forms/select/select-group/select-group.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,
    NgxJsonViewerModule,

    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule,

    ValidationMessageModule,

    ScrollingModule,
  ],
  declarations: [SelectComponent, SelectGroupComponent],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,
    NgxJsonViewerModule,

    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,

    ValidationMessageModule,

    SelectComponent,
    SelectGroupComponent,
    ScrollingModule,
  ],
})
export class SharedModule {}
