import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fagcollapse',
  templateUrl: './fagcollapse.component.html',
  styleUrls: ['./fagcollapse.component.css']
})
export class FagcollapseComponent implements OnInit {
  isCollapsed = false;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
