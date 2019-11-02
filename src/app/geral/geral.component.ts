import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {
  public texts = [
    {title: "Around the world...", decription: "Soon, you'll can search rankings of around the world in CoC BRAZIL! Pellentesque pharetra nisl eu nisi vestibulum scelerisque. Morbi pretium tortor mi, convallis vestibulum elit molestie ac. Pellentesque a velit sapien. Etiam consequat tempor massa nec ultricies. Donec laoreet nisl non arcu viverra, vel vehicula urna scelerisque. Vestibulum tempor, ligula ut malesuada tempus, nisi augue lacinia nunc, sed efficitur eros lectus quis turpis. ", image: '../../assets/images/clashlogo.png'},
    {title: "November are here!", decription: "#SeasonChallenges Complete multiple tasks to win Magic Items & loot as you go (including the Season Bank at the end of the Season!). And unlock multiple perks, as well as the ❄️ Ice Queen skin ❄️ with the Gold Pass! ", image: '../../assets/images/winter.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
