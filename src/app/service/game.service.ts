import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from "../modal/product";
import { Observable } from "rxjs/internal/Observable";


@Injectable({providedIn: "root"})
export class GameService{
  apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

    allProducts: Product[] = [];
    isFetching: boolean = false;
    public getjsonvalue: any;

    constructor(private http:HttpClient){}


    // fetchProductData() {
    //   const headers = {
    //     'x-rapidapi-key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
    //     'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    //   };
    
    //   return this.http.get<{[key: string]: Product}>('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', { headers })
    //     .pipe(map((res) => {
    //       const product = [];
    //       for(const key in res) {
    //         if(res.hasOwnProperty(key)) {
    //           product.push(res[key])
    //         }
    //       }
    
    //       return product;
    //     }));
    // }

    getByCategory(cat:string):Observable<any>{
      const headers = new HttpHeaders({
        'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      });
  
      return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, { headers });
  
    }

    getFilteredGames(category: string,platform: string): Observable<any> {
      const headers = new HttpHeaders({
        'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      });
  
      let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&category=${category}`;
  
      return this.http.get(url, { headers });
    }

    getAllGames(): Observable<any> {
      const headers = new HttpHeaders({
        'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      });
  
      return this.http.get(this.apiUrl, { headers });
    }

    getGameById(id:any){
      const headers = new HttpHeaders({
        'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      });
  
      return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, { headers });
  
    }
    

}