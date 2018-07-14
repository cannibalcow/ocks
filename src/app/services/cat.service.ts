import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Cat } from '../domain';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private db: AngularFirestore, private authService: AuthService) { }

  fetchUserCats(): AngularFirestoreCollection<Cat> {
    return this.db.collection<Cat>('cats', ref => ref.where('ownerId', '==', this.authService.getUserId()));
  }

  addUserCat(name: string) {

    console.log(`user ${this.authService.getUserId()}`)
    this.db.collection('cats').add({
      id: this.db.createId(),
      ownerId: this.authService.getUserId(),
      name: name
    }).then(c => console.log(c));
  }
}
