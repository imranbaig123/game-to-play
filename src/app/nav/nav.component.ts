import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  ngOnInit(): void {
  }
  // productDetails: any;
  // genres: string[] = ['Shooter'];
  // genre: string ;
  // constructor(private _data: GameService,private route: ActivatedRoute){
  //   let {cat}=route.snapshot.params
  //   this.genre=cat
  //   }
//   myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }
 

// ngOnInit(): void {
//   this.route.params.subscribe(params => {
//     this.genre = params['cat'];
    // this._data.getByCategory(this.category).subscribe(async (res) => {
    //   this.gamesData = await res;
    // });
//     this.filterGames()
//   });
// }
// filterGames(): void {
//   console.log('filtered');
  
//   this._data.getFilteredGames(this.genre).subscribe(async (res: any) => {
//     this.productDetails = await res;
//     console.log("fetch", this.genre)
//   });
// }
}
