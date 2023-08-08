import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../service/game.service'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  productDetails: any;

  constructor(
    private http: HttpClient,
    private gameService: GameService) {

  }
  ngOnInit(){
    this.fetchProduct();
  }

  fetchProduct(){
    console.log(this.productDetails)
    this.gameService.getAllGames().subscribe(((product: any) => {
      this.productDetails = product;      
      console.log('data....',product)
    }))
  }


//   myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }

}

