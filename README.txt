1. Give three examples of Python programs that use binary operators and/or builtins from this PA, but have different behavior than your compiler. For each, write:
a. a sentence about why that is
b. a sentence about what you might do to extend the compiler to support it
Example 1: Python's print/max/min functions can receive multiple arguments, while my compiler cannot support it. To deal with variable  length arguments, Python will store all arguments in a tuple with name args. We can store them in an array represented by a head pointer and length.
Example 2: In Python, max/min functions can support float type other than integer. That's because Python has dynamic type, and its Number type includes complex number, real number, and integer. To support this function, we should strengthen our Number type to match other types and overload these functions according to the type of parameters.
Example 3: In Python, pow function can accept negative integer as its second argument like pow(2, -1). That's because the functions in Python can have dynamic return type. An approximate implementation of this feature is to use float numbers as the input and output types of pow function.


2. What resources did you find most helpful in completing the assignment?
TA's video covered most of what I needed to complete the assignment. Besides that, I found TypeScript Documentation was every helpful to learn the language.


3. Who (if anyone) in the class did you work with on the assignment? (See collaboration below)
I did it by myself.

