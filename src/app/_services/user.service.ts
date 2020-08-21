import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }
    createUser(user){
      return this.http.post(UserService.BaseUrl+'allfriends',user);
     }
    getAllUser(){
      return this.http.get(UserService.BaseUrl+'allfriends').pipe(map((response: Response) => response.json()));;
      }
    deleteUser(user){
      return this.http.delete(UserService.BaseUrl+'allfriends/'+ user.id);
      }
    postfitnessdata(data){

      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) => response.json()));
      }
    getfitnessdata() {
      return this.http.get(UserService.BaseUrl+'allfriends',httpOptions).pipe(map((response: Response) => response.json()));
      }
    getspecificdata(userid){
      return this.http.get(UserService.BaseUrl+'allfriends/'+userid).pipe(map((response: Response) => response.json()));;
      }
    updateUser(user){
      return this.http.put(UserService.BaseUrl+'allfriends/'+user.id,user);
      }
    createContact(obj){
      return this.http.post(UserService.BaseUrl+'contactus',obj);
      }
}