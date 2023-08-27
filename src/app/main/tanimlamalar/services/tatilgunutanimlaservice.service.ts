import { Injectable } from '@angular/core';
import { first, firstValueFrom,  Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
const API_URL = `${environment.BASE_URL}/api/ResmiTatils`;
@Injectable({
  providedIn: 'root'
})
export class TatilgunutanimlaserviceService {

  constructor(private httpService: HttpService) { }

 
   getTatilGunleri(): Observable<any> {
    return this.httpService.get("", "ResmiTatils", 1);
}


  // = this.httpService.get("", "ResmiTatils",1);


  // var asdf2= this.httpService.get("", "ResmiTatils",1).pipe(first()).toPromise();;
 
   
  }

