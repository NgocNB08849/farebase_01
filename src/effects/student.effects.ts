import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StudentService } from "src/app/services/students.service";
import * as StudentActions from "src/action/student.action"
import { catchError, map, from, of, switchMap, mergeMap } from "rxjs";
import { Student } from "src/models/student.models";

@Injectable()
export class StudentEffects {
    constructor(private actions$: Actions, private studentService: StudentService) { }

    addStudent$ = createEffect(() => this.actions$.pipe(
        ofType(StudentActions.addStudent),
        switchMap((action) => from(this.studentService.addNew(action.student))),
        map(() => StudentActions.addStudentSuccess()),
        catchError((error) => {
            return of(StudentActions.addStudentFailure({ error: error }));
        }
        )));

    getStudents$ = createEffect(() => this.actions$.pipe(
        ofType(StudentActions.getStudents),
        switchMap(() => from(this.studentService.getAll())),
        map((snapshot) => {
            let students = snapshot.map((doc) => <Student>doc.data());
                return StudentActions.getStudentsSuccess({students: students});
            }),
        catchError((error) => {
            return of(StudentActions.addStudentFailure({ error: error }));
        }
        )));
}