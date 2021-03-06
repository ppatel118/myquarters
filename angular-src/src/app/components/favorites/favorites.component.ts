import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  user:Object;
  favorites=[];

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
       console.log(err);
       return false;
    });

     this.favorites = this.authService.getFav();
  }

    removeFav(img) {
      this.authService.deleteFav(img).subscribe();
      this.favorites = this.authService.getFav();
    }

}