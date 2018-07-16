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

  addUserCat(cat: Cat): Promise<firebase.firestore.DocumentReference> {
    cat.id = this.db.createId();
    cat.ownerId = this.authService.getUserId();
    console.log('presist', cat);

    return this.db.collection<Cat>('cats').add(cat);
  }

  deleteCat(id: string): Promise<void> {
    const catRefs = this.db.collection<Cat>('cats');
    return catRefs.doc(id).delete();
  }

}
