import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NotifyService } from './notify.service';

import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter, finalize } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private notify: NotifyService
  ) {
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }
}
