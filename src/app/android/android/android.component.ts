import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, of, Subject, switchMap, tap } from 'rxjs';
import { AboutComponent } from '../../about/about/about.component';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css'],
})
export class AndroidComponent {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    of(1)
      .pipe(
        switchMap((value) => this.onOpenDialog()),
        tap((value) => console.log(value))
      )
      .subscribe();
  }

  onOpenDialog(): Subject<any> {
    const myObservable = new Subject<any>();
    this.openOtherDialog(myObservable);
    return myObservable;
  }

  async openOtherDialog(myObservable: Subject<any>) {
    const dialog = this.dialog.open(AboutComponent).afterClosed();
    myObservable.next(await firstValueFrom(dialog));
  }
}
