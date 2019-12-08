import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  // BASE_URL: string = 'http://localhost:3000'
  BASE_URL: string = 'https://music-songs.herokuapp.com'
  
  constructor(private http: HttpClient) { }

  signUp(username: string, password: string) {
    return this.http.post(`${this.BASE_URL}/signup`, { username, password })
  }

  login(username: string, password: string) {
    return this.http.post(`${this.BASE_URL}/login`, { username, password })
  }

  addSong(song) {
    return this.http.post(`${this.BASE_URL}/song`, song)
  }

  getSongs() {
    return this.http.get(`${this.BASE_URL}/songs`)
  }

  deleteSong(songId: string) {
    return this.http.delete(`${this.BASE_URL}/song/${songId}`)

  }
}
