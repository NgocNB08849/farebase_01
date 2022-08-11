import { createReducer, on } from "@ngrx/store";
import { StudentState } from "src/states/student.state";
import * as StudentActions from "src/action/student.action";

const initialState: StudentState = {
    students: [],
    isloading: false,
    error: ""
}

export const studentReducer = createReducer(
     initialState,
     on(StudentActions.addStudent, state =>({
        ...state,
        isloading: true
     })),
     on(StudentActions.addStudentSuccess, (state) =>({
        ...state,
        isloading: false,
        error: "" 
     })),
     on(StudentActions.addStudentFailure, (state, {error }) => ({
        ...state,
        isloading: false,
        error: error
     })),
     
     on(StudentActions.getStudents, state =>({
        ...state,
        isLoading: true,
        error: ""
     })),
     on(StudentActions.getStudentsSuccess, (state, { students }) =>({
        ...state,
        isLoading: true,
        error: "",
        students: students
     })),
     on(StudentActions.getStudentsFailure, (state, {error}) =>({
        ...state,
        isloading: false,
        error: error
     }))
);

     

   