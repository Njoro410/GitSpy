import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { GetUserDetailsService } from 'src/app/get-user-details.service';
import { Repo } from 'src/app/repo';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!: User;
  reposi!:Repo[];

  constructor(private route: ActivatedRoute, public gitUser: GetUserDetailsService) { }
    sentUsername:any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.sentUsername = params.data;

     this.gitUser.getUser()
     this.user = this.gitUser.results
     this.gitUser.getRepos().subscribe(data => {
       this.reposi = data
     })
     
    })

    console.log(this.user)
    console.log(this.reposi)
    
  }
  
  
 

}
