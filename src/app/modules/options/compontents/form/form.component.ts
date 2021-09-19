import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenusService } from '@app/core/services/menus.service';
import { OptionsModel } from "@app/models/options.model";

@Component({
  selector: 'options-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() option: OptionsModel;
  @Output() saveForm = new EventEmitter<OptionsModel>();
  @Output() cancelForm = new EventEmitter();

  form: FormGroup;

  constructor(private menusService: MenusService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.option?.name ?? '',[Validators.required]),
      description: new FormControl(this.option?.description ?? '',[Validators.required]),
    })
  }

  submit(value:OptionsModel){
    this.saveForm.emit(value);
  }

  clickHandler(){
    this.cancelForm.emit();
  }
}
