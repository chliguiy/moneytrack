import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Payment } from './payment.model';
import { Article } from './Article.model';



@Injectable({
  providedIn: 'root',
})
export class PaymentService {



  constructor(
    private http: HttpClient) {}
    GetPaiementList (): Observable<Payment[]> {
      return this.http.get<Payment[]>(
        'http://private-anon-66511089cd-testtechniquefront.apiary-mock.com/payments',
        
      );
    }
 
    GetArticleList (): Observable<Article[]> {
        return this.http.get<Article[]>(
          'https://private-anon-66511089cd-testtechniquefront.apiary-mock.com/articles',
          
        );
      }
      DeletePaiement (payment:Payment) {

        return this.http.delete(
          'http://private-anon-66511089cd-testtechniquefront.apiary-mock.com/payments',   payment.article_id
        );
      }
      AddPaiement (payment:Payment) {

        return this.http.post(
          'http://private-anon-66511089cd-testtechniquefront.apiary-mock.com/payments',  Payment 
        );
      }


}
