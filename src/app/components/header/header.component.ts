import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  username = new FormControl('',[Validators.required])

  public getUser!: string;

  findUser() {
    alert(this.getUser)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
