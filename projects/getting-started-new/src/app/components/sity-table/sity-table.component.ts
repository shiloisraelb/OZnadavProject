import { Component, OnInit } from '@angular/core';
import { MyFireDBService } from '../../servises/my-fire-db.service';
import { MyJsonDBService } from '../../servises/my-json-db.service';
import { Citys, Customer } from '../../Models/custoner';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parse } from 'path';
import { map, Observable, skip } from 'rxjs';
import { values } from 'lodash';
import { cursorTo } from 'readline';
import * as _ from "lodash";

@Component({
  selector: 'app-sity-table',
  templateUrl: './sity-table.component.html',
  styleUrls: ['./sity-table.component.css']
})
export class SityTableComponent implements OnInit {
  constructor(private dataF:MyFireDBService) { }
  citys!:Array<Citys>;
  Mycustomers!:Array<Customer>;
  city!:Array<string>;
  ngOnInit(): void {
    this.dataF.cust$.subscribe(
      {
        next:(cu)=>
        {
          if(cu!=null)
          {
             this.Mycustomers=cu;
             this.city=[this.Mycustomers[0].city]
             this.Mycustomers.forEach(element => {
             
              this.city.push(element.city);
             });
             this.city=_.uniq(this.city);
             console.log(this.city);
             this.city.forEach(c=>
              {
                if(c!=null)
                     {
                      let ci:Citys={
                        name:"",
                        customers:[] 
                        };
                        ci.customers=this.Mycustomers.filter(x => _.includes(x.city, c.trim()));
                        ci.name=c;
                        console.log(ci);
                      if(this.citys==null)
                        this.citys=[ci]
                      else
                        this.citys.push(ci);
                     }

              })
              console.log(this.citys);
          }
        }
      }
    )
  }

}
