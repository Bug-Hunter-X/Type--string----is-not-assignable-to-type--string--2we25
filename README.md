# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.
The `greeter` function is defined to accept a single string argument, but the `user` variable is an array of strings.  Attempting to pass `user` to `greeter` results in a type error.
The solution involves either modifying the `greeter` function to accept an array of strings or modifying the `user` variable to hold a single string.