import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.scss']
})
export class DiamondComponent implements OnInit {
  aside = new FormControl('');
  alfa = new FormControl('');
  perimeter = new FormControl('');
  area= new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
