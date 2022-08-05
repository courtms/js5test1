class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

function newPersonMessage(){
    let person = new Person(document.getElementById('firstName').value, document.getElementById('lastName').value, document.getElementById('age').value);
    document.getElementById('message').innerHTML = "Hello, " + person.firstname + " " + person.lastname + ". You are " + person.age + " " + "years old!";
}

document.getElementById("button").addEventListener("click", newPersonMessage);