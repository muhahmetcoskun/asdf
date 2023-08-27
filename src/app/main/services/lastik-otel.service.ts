import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import { LastikOtel } from 'src/app/models/LastikOtel';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.BASE_URL}/api/LastikOtels`
@Injectable({
  providedIn: 'root'
})
export class LastikOtelService {

  constructor(private httpService: HttpService,private http: HttpClient) { }


  getLastikBilgileri(): Observable<any> {
    return this.httpService.get("", "LastikOtels", 1);
  }

  getLastikBilgileriListesi(): Observable<any> {
    return this.httpService.get("", "LastikOtels", null);
  }
  lastikbilgisikaydet(LastikOtel) {
    return this.httpService.post("", "LastikOtels", LastikOtel);
  }

  lastikbilgisikaydet2(lastikOtel: LastikOtel): Observable<any> {
    return this.http.post<any>(API_URL , lastikOtel).pipe(
      map(response => {
        if (response) {
          console.log(response);
        }
        return response;
      })
    );
  }

  lastikbilgisikaydet3(lastikOtel: LastikOtel): Observable<any> {
  return this.http.post(API_URL,lastikOtel).pipe(
    catchError((err) => {
      console.error(err);
      window.alert("Failed");
      throw err
    })
  )}
  lastikbilgisikaydetDuzenle(lastikOtel: LastikOtel): Observable<any> {
    return this.http.post(API_URL+lastikOtel.id,lastikOtel).pipe(
      catchError((err) => {
        console.error(err);
        window.alert("Failed");
        throw err
      })
    )}
    async kaydet (lastikOtel: LastikOtel) {
    await this.http.post(API_URL,lastikOtel).toPromise()
    .then( async (resp:any) =>{ 

      console.log(resp);

    } ).catch( (error) => {

     console.log(error);

    } )}

    kayit(lastikOtel: LastikOtel): Observable<any> {
      return this.http.post(API_URL , lastikOtel);
    }
}