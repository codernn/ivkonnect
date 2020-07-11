import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    function animateValue(id, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
          current += increment;
          obj.innerHTML = current;
          if (current == end) {
              clearInterval(timer);
          }
      }, stepTime);
  }
  let p =false;
  function counter(){
    if(p)
    {
      animateValue("value1",0,18,5000);
      animateValue("value2",0,140,5000);
      animateValue("value3",0,900,1);
      animateValue("value4",0,48,5000);
    }
    p=true;
  }
  }

}
