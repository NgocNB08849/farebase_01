import { Injectable } from "@angular/core";
import { Firestore, getDocs} from "@angular/fire/firestore";
import { addDoc, collection, setDoc, doc } from "@firebase/firestore";
import { Student } from "src/models/student.models";


@Injectable({
    providedIn: 'root'
})
export class StudentService{
    constructor(private db: Firestore){ }
    
        addNew(student: Student){
            if(!student.id){
              throw new Error('Student id is required');  
            }
            return setDoc(doc(this.db, 'students/' + student.id), student);   
    }
    getAll(){
      return getDocs(collection(this.db, 'students'))
    }
}