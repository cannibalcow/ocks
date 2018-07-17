import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';
import { Cat } from '../domain';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private db: AngularFirestore, private authService: AuthService) { }

  fetchUserCats(): Observable<Cat[]> {
    return this.db.collection<Cat>('cats').snapshotChanges().pipe(
      take(1),
      map((p: DocumentChangeAction<Cat>[]) => {
        return p.map(x => {
          const cat = x.payload.doc.data() as Cat;
          cat.id = x.payload.doc.id;
          return cat;
        })
      })
    );
  }

  addUserCat(cat: Cat): Promise<firebase.firestore.DocumentReference> {
    cat.ownerId = this.authService.getUserId();
    console.log('presist', cat);

    return this.db.collection<Cat>('cats').add(cat);
  }

  deleteCat(id: string): Promise<void> {
    const catRefs = this.db.collection<Cat>('cats');
    return catRefs.doc(id).delete();
  }

}
