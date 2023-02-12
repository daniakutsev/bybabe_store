import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "./user.interface";
import {catchError, Observable, Subject, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {FbAuthResponse} from "../../../environments/env.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   errorMessage$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)

      .pipe(
        // @ts-ignore
        tap(this.setToken),
        // @ts-ignore
        catchError(this.handleError.bind(this))
      )
  }

  handleError(error: HttpErrorResponse) {
    const {message} = error.error.error
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.errorMessage$.next('Email not found')
        break

      case 'INVALID_EMAIL':
        this.errorMessage$.next('Invalid email')
        break

      case 'INVALID_PASSWORD':
        this.errorMessage$.next('Invalid password')
        break


    }
  }

  logout() {
    this.setToken(null)
  }

  get token(): string | null {
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('fb-token-exp'))
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }

  isAuthenticated(): boolean {
    return !!this.token
  }
}
