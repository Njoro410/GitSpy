import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
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
  reposi: Repo[] = [];
  rep!: [];

  constructor(private route: ActivatedRoute, private gitUser: GetUserDetailsService) { }
  sentUsername: any;
  name: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params)
      this.sentUsername = params.data;
      this.name = params.data;

      this.gitUser.getUser(this.sentUsername)
      this.user = this.gitUser.results

      // this.gitUser.getRepos(this.name)
      // this.reposi = this.gitUser.repos
      this.gitUser.getRepos(this.name).subscribe(data => {
        this.reposi = data
      })
    })
    console.log(this.reposi)
    console.log(this.user)
  }
}
