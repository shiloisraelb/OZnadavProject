import { Component, OnInit } from '@angular/core';
import { MyFireDBService } from '../../servises/my-fire-db.service';
import { MyJsonDBService } from '../../servises/my-json-db.service';
import { Citys, Customer, Groups } from '../../Models/custoner';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parse } from 'path';
import { map, Observable, skip } from 'rxjs';
import { values } from 'lodash';
import { cursorTo } from 'readline';
import * as _ from "lodash";

@Component({
  selector: 'app-groo-table',
  templateUrl: './groo-table.component.html',
  styleUrls: ['./groo-table.component.css']
})
export class GrooTableComponent implements OnInit {
  groo:Array<Groups>=[{group:"קבוצה א"},{group:"קבוצה ב"},{group:"קבוצה ג"},{group:"קבוצה ד"},{group:"קבוצה ה"},{group:"קבוצה ו"}]
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
             
             this.groo.forEach(c=>
              {
                
                      let ci:Citys={
                        name:"",
                        customers:[] 
                        };
                       this.Mycustomers.forEach(element2 => {
                        element2.groups.forEach(g=>
                          {
                         if(g.group==c.group){
                          if(ci.customers==null)
                          ci.customers=[element2]
                          else
                          ci.customers.push(element2);
                         console.log(element2.firstName);
                         }
                          });
                        }
                        );
                        
                        ci.name=c.group;
                        console.log(ci);
                      if(ci.customers!=null) {  
                        if(this.citys==null)
                         this.citys=[ci]
                        else
                        this.citys.push(ci);
                     }
                    }

              )
              console.log(this.citys);
          }
        }
      }
    )
  }

}
