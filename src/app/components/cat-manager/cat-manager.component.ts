import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../domain';
import { AngularFirestoreCollection } from '../../../../node_modules/angularfire2/firestore';
import { map } from '../../../../node_modules/rxjs/operators';
import { Observable } from '../../../../node_modules/rxjs/internal/Observable';

@Component({
  selector: 'app-cat-manager',
  templateUrl: './cat-manager.component.html',
  styleUrls: ['./cat-manager.component.scss']
})
export class CatManagerComponent implements OnInit {

  form: FormGroup;
  cats: Observable<Cat[]>;
  constructor(private fb: FormBuilder, private catService: CatService) { }

  ngOnInit() {
    this.initForm();
    this.cats = this.catService.fetchUserCats().valueChanges();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }
}
