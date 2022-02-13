import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private route:Router) { }

  username = new FormControl('',[Validators.required])

  public name!: any;
 

  findUser() {
    this.route.navigate(['second-comp'],{queryParams:{data:this.name}})
   
  }

  

  ngOnInit(): void {
  }

}
