import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import {MdbTableDirective} from 'angular-bootstrap-md'; 
import { PaymentService } from './payment.service';
import { Payment } from './payment.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Article } from './Article.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true })
  mdbTable:MdbTableDirective;
  elements: Payment[]=[] ;
  closeResult: string;
 searchText: string = '';
  previous: string;
  paymentAdd: any;
  articles: Article[]=[] ;
 myGroup: FormGroup;
 constructor(private paymentservice:PaymentService,private modalService: NgbModal,private formBuilder: FormBuilder) {
  this.paymentservice.GetPaiementList().subscribe(
    (payment: Payment[]) => {
      //this.elements.push(payment);
      this.elements===payment;
    }
  );
  this.paymentservice.GetArticleList().subscribe(
    (articles: Article[]) => {
      this.articles=articles;
    }
  );
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  @HostListener('input') oninput()
   { this.searchItems();
 }

 onSubmit(){
  let payment=new Payment();
  payment.payement_date=new Date();
  payment.article_id=this.myGroup.controls['mySelect'].value
  this.paymentservice.AddPaiement(payment);
  this.paymentservice.GetPaiementList().subscribe(
    (payment: Payment[]) => {
     //this.elements.push(payment);
     this.elements===payment;
    }
  );
  this.modalService.dismissAll();

}
  ngOnInit() {
    this.myGroup = this.formBuilder.group({
      mySelect: ['', Validators.required]});



 this.mdbTable.setDataSource(this.elements); this.previous =this.mdbTable.getDataSource(); 

}
  searchItems() { const prev =this.mdbTable.getDataSource();
    if (!this.searchText) {
 this.mdbTable.setDataSource(this.previous); this.elements =
 this.mdbTable.getDataSource(); } 
 if (this.searchText) { this.elements =
 this.mdbTable.searchLocalDataBy(this.searchText);
 this.mdbTable.setDataSource(prev); } 
}

unpaid(payment:Payment){
  this.paymentservice.DeletePaiement(payment);
  this.paymentservice.GetPaiementList().subscribe(
    (payment: Payment[]) => {
     //this.elements.push(payment);
     this.elements===payment;
    }
  );
}
}
