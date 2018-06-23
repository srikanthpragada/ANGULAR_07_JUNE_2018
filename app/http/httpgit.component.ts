import { Component } from '@angular/core';
import { GitUser } from './GitUser';
import { HttpClient} from '@angular/common/http';


@Component(
    {
        selector: 'git-user',
        templateUrl: './httpgit.component.html'
    })
export class HttpGitComponent {
    public user: GitUser;
    private url: string = "https://api.github.com/users/";
    public isLoading: boolean = false;
    public message: string = null;

    constructor(private http: HttpClient) {
    }

    getDetails(username: string): void {
        this.user = null;
        this.isLoading = true;   
        this.message = null;

        this.http.get<GitUser>(this.url + username)
                 .subscribe(resp => this.user =  resp,
                            error => {
                                this.message = "Sorry! User Not Found!";
                                this.isLoading = false;
                            },
                            () => this.isLoading = false
                  );
    }
     
}
