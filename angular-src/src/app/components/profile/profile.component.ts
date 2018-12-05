import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  posts=[];
  profilePic="";

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     });

     this.posts = this.authService.getPost();

    }

    saveProfilePic(post) {
      this.authService.savePost(post).subscribe();
    }

    addToWall(post) {
      this.authService.savePost(post).subscribe();
    }
    
    removePost(post) {
      this.authService.deletePost(post).subscribe();
      this.posts = this.authService.getPost();
    }

}