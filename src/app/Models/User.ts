export class User {
    firstName:String | undefined
    lastName:String | undefined
    dateOfBirth:String | undefined
    age:number | undefined
    mobile:number | undefined
    vaccineName:String | undefined
    vaccineNumber:number | undefined
    dateOfVaccine:String | undefined
    email:String | undefined;
    password:String | undefined;
    aadharNumber:number | undefined;

    constructor(firstName:String, lastName:String, 
        dateOfBirth:String, age:number, mobile:number, 
        vaccineName:String, vaccineNumber:number, dateOfVaccine : String,
        email:String, password:String, aadharNumber:number) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dateOfBirth = dateOfBirth;
            this.age = age;
            this.mobile = mobile;
            this.vaccineName = vaccineName;
            this.vaccineNumber = vaccineNumber;
            this.dateOfVaccine = dateOfVaccine;
            this.email = email;
            this.password = password;
            this.aadharNumber = aadharNumber;
    }
}