// Until I built this into a fullstack app I will be storing questions in an object

var questions = {
   0: `What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?`,
   1: `What is the difference between undefined and not defined in JavaScript?`,
   2: `Can you explain closure in JavaScript? Provide and example.`,
   3: `How do you check if an object is an array or not?`,
   4: `What is hoisting in JavaScript and why is it important?`,
   5: `Can you explain = vs == vs === in JavaScript?`
};


var answers = {
  0: `The potential pitfal is there are many constuctors that inherit from the object constructor. For example typof [] === "object" will return true. It can present false positives under these circumstances.`,
  1: `Undfined means often a variable may be declared but not assigned a value. Not defined means that in the scope or context of execution something needing to be defined is not present.`,
  2: `Closure is when an outer function has access to the values of an inner function even after the inner function has returned. An example might be to push the result of a function to an array so the outer function may do something with it.`,
  3: `You can check if an object is an array or not with Array.isArray(value). It's a native method on the Array constructor.`,
  4: `Hoisting is where a function or variable declared is hoited to the top of the current scope. That being inside of a function or perhaps the global scope. It's important because values in JavaScript need to be properly declared when one would need access of them. Most variables are declared at the top of the scope for this reason.`,
  5: ``
}

