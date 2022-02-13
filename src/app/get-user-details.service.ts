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
  repos!:Repo;
  username: string = 'njoro410';
  clientid: string = '3e51fca811ef801de168';
  clientsecret: string = '5209739147ab1bd7ecd5c2d0ded144229b234d6b';

  constructor(private http: HttpClient) {
    this.results = new User("", "");
    
  }

  getUser() {
    interface ApiResponse {
      login: string;
      url: string;
    }
    let promise = new Promise<void>((resolve, reject) => {
      // let apiUrl = '${this.apiRoot}'+ this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret;
      let apiUrl = 'https://api.github.com/users/mdo?client_id=3e51fca811ef801de168&client_secret=5209739147ab1bd7ecd5c2d0ded144229b234d6b'
      this.http.get<ApiResponse>(apiUrl)
        .toPromise()
        .then(
          (res) => {
            this.results.login = res!.login
            this.results.url = res!.url

            resolve();
          }, error => {
            this.results.login = "Oooops, an error occured"
            this.results.url = "Oooops, an error occured"

            reject(error)
          })
    })
    return promise
  }



  getRepos():Observable<Repo[]> {

    let apiUrl = 'https://api.github.com/users/njoro410/repos?client_id=3e51fca811ef801de168&client_secret=5209739147ab1bd7ecd5c2d0ded144229b234d6b'
        return this.http.get<Repo[]>
        (apiUrl)
  }
}

