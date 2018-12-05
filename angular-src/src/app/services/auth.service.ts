import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  favorites=[];

  constructor(private http:Http, private flashMessage: FlashMessagesService) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
    .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
    .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile',  {headers: headers})
    .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('favorites', JSON.stringify(user['favorites']));
    this.authToken = token;
    this.user = user;
    this.favorites = user['favorites'];
  }

  saveFav(img){
    const notFav = this.user.favorites.indexOf(img);
    if (notFav == -1) {
      this.user.favorites.push(img);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put('http://localhost:3000/users/favorite', this.user, {headers: headers})
      .map(res => res.json());
    }
    else {
      this.flashMessage.show('This image is already a favorite.', {cssClass: 'alert-danger'});
    }
  }

  getFav() {
    return this.user.favorites;
  }

  deleteFav(img) {
    const notFav = this.user.favorites.indexOf(img);
    if (notFav > -1) {
      this.user.favorites.splice(notFav, 1);

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put('http://localhost:3000/users/favorite', this.user, {headers: headers})
      .map(res => res.json());
    }
  }

  savePost(post){
    const savePost = this.user.posts.indexOf(post);
    
    this.user.posts.push(post);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/users/post', this.user, {headers: headers})
    .map(res => res.json());
  }

  getPost() {
    return this.user.posts;
  }

  deletePost(post) {
      const deletePost = this.user.posts.indexOf(post);
      this.user.posts.splice(deletePost, 1);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put('http://localhost:3000/users/post', this.user, {headers: headers})
      .map(res => res.json());

  }

  saveProfilePic(profilePic){
    this.user.profilePic = profilePic;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/users/profilePic', this.user, {headers: headers})
    .map(res => res.json());
  }

  getProfilePic() {
    return this.user.profilePic;
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
