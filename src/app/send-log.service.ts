import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Injectable()
export class SendLogService {

  constructor(private angulartics2: Angulartics2) { }

  send() {

    this.angulartics2.eventTrack.next({
      action: 'myAction',
      properties: { category: 'myCategory' },
    });


  }

}
