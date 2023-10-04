import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private navegator: Router) {
    // http://localhost:4200/portfolio/{1}
    this.activeRoute.params.subscribe((res) => console.log(res));
    this.activeRoute.firstChild?.params.subscribe((res) => console.log(res));

    // http://localhost:4200/portfolio/1?{nome=gabriel&token=661}
    this.activeRoute.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegator.navigate(['/']);
    // }, 5000);
  }
}
