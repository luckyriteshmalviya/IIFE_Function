// *****Errors in JavaScript*****

// Errors are statements that don't let the program run properly. There are three main types of errors that can occur while compiling a JavaScript program: 

// syntax errors, 
// runtime errors,
// and logical errors.



// ****Syntax Errors****
// The most common type of errors are syntax errors, in which something incorrect in the syntax of the program body raises this error. Syntax errors are also known as parsing errors. In JavaScript, they occur at the interpretation time.


// Consider this code segment:

//   <script type=''text/javascript''>
//     window.show(;
//   </script>
// This program will raise an error as the closing bracket of the show function is missing.


// ****Runtime Error****
// Runtime errors occur during the runtime of the program after it's interpreted by the compiler.


// Consider this code segment:

//   <script type=''text/javascript''>
//     window.show();
//   </script>
// Notice that there is no show function defined. This program will raise an error at runtime as the function that is not present is called, although the syntax is correct.



// ****Logical Errors****
// Logic errors can be the most difficult type of errors to track down. These errors are not the result of a syntax or runtime error. Instead, they occur when you make a mistake in the logic that drives your script and you do not get the result you expected.

// You cannot catch those errors, because it depends on your business requirement what type of logic you want to put in your program.

