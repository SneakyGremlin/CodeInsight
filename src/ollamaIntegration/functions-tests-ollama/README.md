The "tests" enclosed in this directory correspond to the tests inside the "test" directory (higher up in the directory structure). These have less documentation, and the function name is aliased for all i.e. functionName => foo.

They are tested using eval, and they are fetched in the form of a string from a corresponding test file (the name matches). This avails templating, to allow for a more efficient process.

They do not use any standard testing library. Instead I leverage eval() and templates which gives me greater control over "simulating" testing whilst actually running a standard library.

Also, I acknowledge the inherent risks associated with using eval() directly to run code. But this is a prototype.

The decision to return the parameters and the expected output for a unit test, was made considering that this is a comprehension exercise. Some indication has to be given as to the test, and generic answers like "edge case" may have the same effect e.g. "Are you considering edge cases?" for a function to count number of even numbers in an array (foo2), provided with the function itself, is _almost_ the same as saying "[] => 0." This is of course debatable, but this is added functionality, and based off of coding assignments in UBC CPSC Courses.
