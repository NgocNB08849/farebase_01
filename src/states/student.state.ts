import { Student } from "src/models/student.models";
 
export interface StudentState{
    students: Student[];
    isloading:boolean;
    error: string;
    
}