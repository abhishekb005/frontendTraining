import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id:1,
    name:'Windstorm'
  };
  selectedHero?: Hero;
  onSelect(hero : Hero): void{
    this.selectedHero=hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  heroes: Hero[]=[];
  constructor(private heroService: HeroService,private messageService:MessageService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes=heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
