import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  game:any;
  games: any[]=[];
  id:any;
constructor(private _data:GameService,private activeRouts: ActivatedRoute){
  let {id}=activeRouts.snapshot.params
 this.id=id
}
red:string='red';
ngOnInit(): void {
  this._data.getGameById(this.id).subscribe(async(res)=>{
    this.game=await res
  })
  this._data.getAllGames().subscribe(
   async (response) => {
      this.games = await response;
    })
console.log(this.games[0].thumbnail);

}
}
