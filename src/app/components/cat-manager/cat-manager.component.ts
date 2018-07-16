import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from '../../../../node_modules/rxjs/internal/Observable';
import { Cat } from '../../domain';
import { KillState } from '../../store/kill.reducer';
import { Store } from '../../../../node_modules/@ngrx/store';
import { CreateCatAction } from '../../store/kill.actions';

@Component({
  selector: 'app-cat-manager',
  templateUrl: './cat-manager.component.html',
  styleUrls: ['./cat-manager.component.scss']
})
export class CatManagerComponent implements OnInit {

  form: FormGroup;
  cats: Observable<Cat[]>;
  constructor(private fb: FormBuilder, private store: Store<KillState>) { }

  ngOnInit() {
    this.initForm();
    this.cats = this.store.select('appState', 'cats');
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addCat() {
    if (!this.form.invalid) {
      this.store.dispatch(new CreateCatAction({ name: this.form.get('name').value, id: null, ownerId: null }));
    }
  }
}
