import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { ToolbarModule, ToolbarConfig } from 'ngx-widgets';
import {
  ComponentLoaderFactory,
  DropdownConfig,
  DropdownModule,
  PositioningService,
  TooltipConfig
} from 'ng2-bootstrap';

import {
  PipelineModule
} from 'fabric8-runtime-console';

import { PipelinesComponent } from './pipelines.component';
import { PipelinesRoutingModule } from './pipelines-routing.module';
import {SpaceWizardModule} from "../../space-wizard/space-wizard.module";
import {ModalModule} from "ngx-modal";



@NgModule({
  imports: [
    CommonModule,
    PipelinesRoutingModule,
    PipelineModule,
    ToolbarModule,
    DropdownModule,
    ModalModule,
    SpaceWizardModule
  ],
  declarations: [PipelinesComponent],
  providers: [
    ComponentLoaderFactory,
    DropdownConfig,
    PositioningService,
    TooltipConfig,
  ]
})
export class PipelinesModule {
  constructor(http: Http) { }
}
