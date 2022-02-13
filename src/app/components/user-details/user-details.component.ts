import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
    sentUsername:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.sentUsername = params.data;
    })
  }

}
