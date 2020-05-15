function greetPeople(people) {
  var greeting = "He";
  greeting = greeting + "llo";
  greeting = greeting + " ";

  people.forEach(function(person) {
    greeting = greeting + person;
	console.log(greeting);
  });

  return greeting;
}

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors);

// when we do greetings  = greetings + person inside foreach....during te execution of each items of the array it passes 
// the result of greeting variable to the greeting variable before the foreach and the same case repeats while executing 
//each items. this is why it goes on adding the elements verytime untill the foreach mehtod stops executing.

