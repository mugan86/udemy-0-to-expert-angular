import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Marker } from '../../classes/marker.class';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {
  forma: FormGroup;

  constructor( public fb: FormBuilder,
    public dialogRef: MatDialogRef<Marker>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      this.forma = fb.group({
        'title': data.title,
        'desc': data.desc
      });
    }

  ngOnInit() {
  }

  saveData() {
    console.log(this.forma.value);
    this.closeDialog(this.forma.value);
  }

  closeDialog(argument?: any) {
    this.dialogRef.close(argument);
  }

}
