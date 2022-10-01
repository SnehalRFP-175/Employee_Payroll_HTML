class EmployeePayrollData{
    
    constructor(...params){
        this._name = params[0];
        this._profileImage = params[1];
        this._gender = params[2];
        this._department = params[3];
        this._salary = params[4];
        this._startDate = params[5];
        this._notes = params[6];
    }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        console.log("Name : "+ name);
        if(nameRegex.test(name)){
            this._name = name;
        }else{
            throw "Invalid name";
        }
        
    }

    get profileImage(){
        return this._profileImage;
    }
    set profileImage(profileImage){
        this._profileImage = profileImage;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }

    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate = startDate;
    }

    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes = notes;
    }

    toString(){
        return "Name : "+this.name+", profile image : "+this.profileImage+", gender : "+this.gender
        +", Department : "+this.department+ ", Salary : "+this.salary+" , start date : "+ this.startDate
        +", notes : "+this.notes;
    }

}

function save(){

    //Name
    let employeeName = document.getElementById("name").value;
    
    //Profile
    let employeeProfileImage = document.querySelector('input[name="profile"]:checked').value;

    //Gender
    let employeeGender = document.querySelector('input[name="gender"]:checked').value;
    
    //Department
    let employeeDepartment = document.querySelectorAll(".checkbox");
    let employeeDepartmentArr = [];
    for(let emp of employeeDepartment){
        if(emp.checked){
            employeeDepartmentArr.push(emp.value);
        }
    }
    //salary
    let employeeSalary = document.querySelector("#salary").value;
    
    //Start Date
    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let employeeStartDate = new Date(year,month,day);
    
    //Notes
    let employeeNotes = document.querySelector('#notes').value;

    try{

        let employeePayroll = new EmployeePayrollData(employeeName,employeeProfileImage,employeeGender,employeeDepartmentArr,employeeSalary,employeeStartDate,employeeNotes);
        
        alert(employeePayroll.toString());
    }catch(e) {
        console.error(e);
    }
    
}

