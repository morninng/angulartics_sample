import { Component, OnInit } from '@angular/core';

import { SendLogService } from './../send-log.service';

@Component({
  selector: 'app-test-test',
  templateUrl: './test-test.component.html',
  styleUrls: ['./test-test.component.css']
})
export class TestTestComponent implements OnInit {

  constructor(private sendLogService: SendLogService) { }

  ngOnInit() {
  }
  sendevent() {
    this.sendLogService.send();
  }

}
