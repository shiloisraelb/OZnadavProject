import { Component, OnInit } from '@angular/core';
import { MyFireDBService } from '../../servises/my-fire-db.service';
import { MyJsonDBService } from '../../servises/my-json-db.service';
import { Customer } from '../../Models/custoner';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parse } from 'path';
import { map, Observable } from 'rxjs';
import { max, values } from 'lodash';
import { cursorTo } from 'readline';

import * as _ from "lodash";


@Component({
  selector: 'app-update-cust',
  templateUrl: './update-cust.component.html',
  styleUrls: ['./update-cust.component.css']
})
export class UpdateCustComponent implements OnInit {
  constructor(private data :MyJsonDBService,private fireDate:MyFireDBService,private rout:Router) { }
  $cutomer!:Customer;
  customerFormGroup: FormGroup = new FormGroup({
    lastName: new FormControl(null, [Validators.required,Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required,Validators.minLength(6),Validators.email]),
    city: new FormControl(null, [Validators.required,Validators.minLength(2)]),
    phone: new FormControl(null, [Validators.required,Validators.minLength(2)]),
    sex: new FormControl(null, [Validators.required,Validators.minLength(2)]),
    address: new FormControl(null, [Validators.required,Validators.minLength(2)]),
    groups: new FormArray([]),
    firstName: new FormControl(null, [Validators.required,Validators.minLength(2)])
    
  });
  custData:FormData=new FormData;
  groo:Array<string>=["קבוצה א","קבוצה ב","קבוצה ג","קבוצה ד","קבוצה ה","קבוצה ו"]
  citys!:Observable<any[]>;
  $citys!:Array<string>;
  Castomers!:Array<Customer>;
  CastomersSerch!:Array<Customer>;
  newId:number=1;
  newCust!:Customer;
  ngOnInit(): void {
    this.citys=this.data.getSitys().pipe(
      map((x: any) => {
        const rtn = x.map((n: any) => n.name);
        return rtn;
      })
    );
    this.citys.subscribe(
      {
        next:(c)=>{this.$citys=c}
      }
    );
    this.fireDate.cust$.subscribe({
      next:(cu)=>{
         if(cu!=null)
         {
         var numbers:number[]=[0];
          this.Castomers=cu;
         }
      }
    })
  }
  delet(){
    this.fireDate.removeCust(this.$cutomer);
    this.rout.navigate(['']);
  }
setCust(){
  this.Castomers.forEach(c=>
    {
         if(c.email==this.customerFormGroup.get('email')?.value)
         {
          this.$cutomer=c;
         console.log(c);
         this.customerFormGroup.get('city')?.setValue;
         this.customerFormGroup.setValue(c);
         
         
         }
    })
}
 UpdateCust(){
    
    let cust:Customer= this.customerFormGroup.value;
    cust.idNumber=this.$cutomer.idNumber;
    cust.id=this.$cutomer.id;
    this.fireDate.UdateCard(cust);
   this.rout.navigate(['']);
  }
 
  public get groupsArr(): AbstractControl[] {
    const rtn = this.customerFormGroup.get('groups') as FormArray;
    return rtn.controls;
  }
  addGroop() {
    const FGControls: { [key: string]: AbstractControl; } = {
      groop: new FormControl(null),
    };

    (<FormArray>this.customerFormGroup.get('groups')).push(new FormGroup(FGControls))
  }

  deleteGroop(i: number) {

    (<FormArray>this.customerFormGroup.get('groups')).removeAt(i);
  }
}
