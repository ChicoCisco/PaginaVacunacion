import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get<any[]>('http://127.0.0.5:3333/api/personas')
  }

  BorrarData(id: any){
    this.httpClient.post('http://127.0.0.5:3333/api/eliminarPersona', id).subscribe((response)=> console.log("todo bien"))
  }

}
