import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-fancy-example',
  templateUrl: 'card-fancy-example.html',
  styleUrls: ['card-fancy-example.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardFancyExample {}

