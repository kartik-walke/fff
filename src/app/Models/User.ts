export class User {
    email:String | undefined;
    password:String | undefined;
    city:String | undefined;
    state:String | undefined;

    constructor(email:String, password:String, city:String, state:String) {
        this.email = email;
        this.password = password;
        this.city = city;
        this.state = state;
    }
}