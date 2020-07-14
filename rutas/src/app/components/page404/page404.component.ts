import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  products: Observable <any[]>;
  constructor(private db: AngularFirestore ){
    this.products = db.collection('cats').valueChanges()
  }
  ngOnInit(): void {
  }

}
