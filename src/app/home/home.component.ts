import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from '../api-calls.service';

interface SongInterface {
  name: String,
  artist: String,
  genre: String,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showModal: boolean = false;
  song: SongInterface = {
    name: '',
    artist: '',
    genre: '',
  }
  allSongs: any[] = [];
  allPlaylists: any[] = [];
  username: String = ''
  genres: String[] = ['Pop', 'Rock', 'Metal', 'Classical']
  constructor(private router: Router, private api: ApiCallsService) {
    let user: any = localStorage.getItem('user')
    if (!user) {
      this.router.navigate(['']);
    } else {
      this.username = JSON.parse(user).username;
      this.getSongs()
    }
  }
  newSong() {
    this.api.addSong(this.song).subscribe((resp: any) => {
      if (resp.success) {
        this.getSongs();
      }
    })
  }

  updatePage(songs) {
    this.showModal = false;
    this.allSongs = songs
    this.allPlaylists = this.genres.map(genre => {
      return {
        genre,
        songs: this.allSongs.filter(song => song.genre == genre)
      }
    })
  }

  getSongs() {
    this.api.getSongs().subscribe((resp: any) => {
      if (resp.success) {
        this.updatePage(resp.songs)
      }
    })
  }

  deleteSong(songId) {
    this.api.deleteSong(songId).subscribe((resp: any) => {
      if (resp.success) {
        this.getSongs()
      }
    })
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
