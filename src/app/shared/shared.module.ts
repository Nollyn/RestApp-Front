import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from '@angular/forms';
import { ImgUploaderComponent } from './components/img-uploader/img-uploader.component';


@NgModule({
  declarations: [ImgUploaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [MaterialModule, ReactiveFormsModule, ImgUploaderComponent]
})
export class SharedModule {
}
