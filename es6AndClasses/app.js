
class Person{
  constructor(firstname, lastname){
    this.firstname = firstname; // remember the property name isn't the same,
    this.lastname = lastname; // it's just good practise to name it the same as the value.
  }

  // method
  greet(){
    return "hi " + firstname;
  }

}

var john = new Person("John", "Doe");





class informalPerson extends Person {

  constructor(firstname, lastname){
    super(firstname, lastname);
  }

  greet(){
    return "yo " + firstname;
  }


}
