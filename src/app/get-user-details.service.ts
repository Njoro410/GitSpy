import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';
import { Observable, observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsService {
  apiRoot: string = 'https://api.github.com/users/';
  results!: User;
  repos!: Repo[];
  // data!:[];
  // data!:[];
  username!: string;
  clientid: string = '3e51fca811ef801de168';
  clientsecret: string = '5209739147ab1bd7ecd5c2d0ded144229b234d6b';

  constructor(private http: HttpClient) {
    this.results = new User("","","","","",0,0,0,0,"","","",new Date());
    this.repos = [];

  }

  getUser(username: string) {
    interface ApiResponse {
      name: string;
      html_url: string;
      avatar_url:string;
      company:string;
      bio:string;
      public_repos:number;
      followers:number;
      following:number;
      public_gists:number;
      location:string;
      email:string;
      blog:string;
      created_at:Date;
    }
    let promise = new Promise<void>((resolve, reject) => {
      // let apiUrl = '${this.apiRoot}'+ this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret;
      let apiUrl = 'https://api.github.com/users/' + username + '?client_id=3e51fca811ef801de168&client_secret=5209739147ab1bd7ecd5c2d0ded144229b234d6b'
      this.http.get<ApiResponse>(apiUrl)
        .toPromise()
        .then(
          (res) => {
            this.results.login = res!.name
            this.results.url = res!.html_url
            this.results.avatar = res!.avatar_url
            this.results.company = res!.company
            this.results.bio = res!.bio
            this.results.public_repos = res!.public_repos
            this.results.followers = res!.followers
            this.results.following = res!.following
            this.results.gist = res!.public_gists
            this.results.location = res!.location
            this.results.email = res!.email
            this.results.blog = res!.blog
            this.results.created_at = res!.created_at

            resolve();
          }, error => {
            this.results.login = "Oooops, an error occured"
            this.results.url = "Oooops, an error occured"

            reject(error)
          })
    })
    return promise
  }


  getRepos(username: string): Observable<Repo[]> {

    let apiUrl = 'https://api.github.com/users/' + username + '/repos?client_id=3e51fca811ef801de168&client_secret=5209739147ab1bd7ecd5c2d0ded144229b234d6b'
    return this.http.get<Repo[]>
      (apiUrl)
  }


  // getRepos(username:string) {
  //   interface Repo {
  //     msee: string;
  //   }

  //   let promise = new Promise<void>((resolve, reject) => {
  //     let apiUrl = 'https://api.github.com/users/'+username+'/repos?client_id=3e51fca811ef801de168&client_secret=5209739147ab1bd7ecd5c2d0ded144229b234d6b'
  //     this.http.get<Repo>(apiUrl)
  //       .toPromise()
  //       .then((res: any) => {
  //         this.repos = res.map((item: any) => {
  //           return new Repo(
  //             item.name,
  //             item.html_url,
  //             item.description
  //           );
  //         });
  //         console.log(this.repos)
  //         resolve();
  //       },
  //         _err => {
  //           reject('sorrrry')
  //         })
  //   })
  //   // true
  //   return promise;
  //   // return this.repos;

  // }

}

