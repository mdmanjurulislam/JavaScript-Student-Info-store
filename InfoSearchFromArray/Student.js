// Creating Student Model
class Student{
    constructor(name,dept,id){
        this.name = name;
        this.dept=dept;
        this.id=id;
    }
    // get method for Name
    get getName(){
        return this.name;
    }

    // get method for Department
    get getDept(){
        return this.dept;
    }

    // get method for Id
    get getID(){
        return this.id;
    }
}
// Student Model end

let stdname;
let stddept;
let stdid;

const studentArray=[];
let totalStudnets = prompt("How Many Students info you want to store :");

for(i=0;i<totalStudnets;i++){
    stdname = prompt("Enter Your Name  : ");
    stddept = prompt("Enter Your Department  : ");
    stdid = prompt("Enter Your ID  : ");
    const std = new Student(stdname,stddept,stdid);
    
    studentArray.push(std);
}

// Search student by name
let search=prompt("Enter your Name or ID for see your information : ");
let found = false;

for(let i in studentArray){
    if(search === studentArray[i].getID || search === studentArray[i].getName){
        found = true;
        if(found){
            console.log("Student Found");
            console.log("Student Name : "+studentArray[i].getName);
            console.log("Student Department : "+studentArray[i].getDept);
            console.log("Student ID : "+studentArray[i].getID);
            break;
        }
    }
}
if(!found){
    console.log("Student not found");
}
