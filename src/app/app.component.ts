import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentState } from 'src/states/student.state';
import * as StudentActions from 'src/action/student.action'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  studentState$: Observable<StudentState>;
  constructor(private store: Store<{ student: StudentState }>) { 
    this.studentState$ = this.store.select(state=> state.student)
    this.studentState$.subscribe(state => {
      console.log(state);
    });

  }

  ngOnInit(): void {

 
    this.store.dispatch(StudentActions.addStudent({
      student: {
        id: Date.now().toString(),
        name: 'hoa',
        email: 'h1@email.com',
        dod: '1/1/2000',
        phone: {
          code: '+84',
          number: '1234567'},
      },
    })
    );
    this.store.dispatch(StudentActions.getStudents());
  }
  title = 'firebase_01';


}

