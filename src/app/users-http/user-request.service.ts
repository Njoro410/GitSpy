import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { resolve } from 'dns';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  userDetails: User;

  constructor(private http:HttpClient) {
    this.userDetails = new User("","","","","","","","","","");
   }

   userRequest(){
     interface ApiResponse {
        name:string,
        avatar_url:any,
        bio:string,
        html_url:any,
        company:string,
        public_repos: any,
        followers: any,
        created_at:any,
        blog:any,
        location:string
     }
     let promise = new Promise<void>((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.userDetails.name = response!.name
         this.userDetails.bio = response!.bio
         this.userDetails.company = response!.company
         this.userDetails.location = response!.location
         this.userDetails.memberSince = response!.created_at
         this.userDetails.image = response!.avatar_url
         this.userDetails.profile = response!.html_url
         this.userDetails.numberofRepos = response!.public_repos
         this.userDetails.followers = response!.followers
         this.userDetails.blog = response!.followers

         resolve()
       },
       error=>{
        this.userDetails.name = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.bio = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.company = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.location = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.memberSince = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.image = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.profile = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.numberofRepos = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.followers = "Ooops, Looks like an error occured while retriving data"
        this.userDetails.blog = "Ooops, Looks like an error occured while retriving data"

        reject(error)
       })
     })
     return promise
   }
}
