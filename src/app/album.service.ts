import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.albums = angularFire.database.list('albums');
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbums() {
    return this.albums;
  }

  getAlbumById(albumId: string) {
    return this.angularFire.database.object('albums/' + albumId);
  }

}
