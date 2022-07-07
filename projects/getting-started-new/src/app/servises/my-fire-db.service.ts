import { Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction, DocumentReference, DocumentSnapshot } from "@angular/fire/compat/firestore";
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../Models/custoner';
@Injectable({
  providedIn: 'root'
})
export class MyFireDBService {

  custCollction!:AngularFirestoreCollection<Customer>;
  cust$!:Observable<Customer[]|null>
  constructor(private storeg: AngularFireStorage,private aFierStr: AngularFirestore) { 
     this.custCollction=aFierStr.collection('/cust');
     this.cust$ = this.custCollction.snapshotChanges().pipe(
      // mapping the data from the observable to a new observable
      map((actions: DocumentChangeAction<Customer>[]) => {
        return actions.map(a => {
          // extract the data from the reference as Custumer;
          const data = a.payload.doc.data() as Customer;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    );}
    addCust(Cust:Customer)
  {
     this.custCollction.add(Cust)
     .then((respons)=>{
       alert("נוסף");})
      .catch((err)=>{
        alert("נכשל");})
  }
  UdateCard(appCard:Customer)
  {
    appCard.id=appCard.id.toString() as string;
    const doc: AngularFirestoreDocument<Customer> = this.custCollction.doc('/'+appCard.id);
    doc.update(appCard)
     .then((respons)=>{
       alert("הצליח");
       return true;})
      .catch((err)=>{
      alert("נכשל");
      return false;})
    
  }
  //deletes a product for instrument lessens
  removeCust(cust:Customer)
  {
    cust.email=cust.email as string;
    const doc: AngularFirestoreDocument<Customer> = this.custCollction.doc(cust.email);
    doc.delete()
    .then((respons)=>{
      alert("הצליח");
      return true;})
     .catch((err)=>{
     alert("נכשל");
     return false;})
  }
}
