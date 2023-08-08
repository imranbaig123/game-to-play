import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  gamesData: any[] = [];
  genres: string[] = ['MMORPG', 'Sailing', 'Permadeath', 'SuperHero', 'Shooter', 'Pixel', 'Sports', 'Strategy'];
  genre: string;
  platform:string='pc';
  sortType:string='';
  constructor(private gameService:GameService,private route: ActivatedRoute){
let {cat}=route.snapshot.params
this.genre=cat
}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.genre = params['cat'];
    // this._data.getByCategory(this.category).subscribe(async (res) => {
    //   this.gamesData = await res;
    // });
    this.filterGames()
  });
}
filterGames(): void {
  console.log('filtered');
  
  this.gameService.getFilteredGames(this.genre,this.platform).subscribe(async (res) => {
    this.gamesData = await res;
    console.log("!!!!!!!!", this.gamesData)
  });
}}
