const studentID = 1234
// constant and will not change !

let studentEmail = "shreyas1@gmail.com"
var password = "12345"
studentPassword = "2345"
let x

console.table([studentEmail,password,studentPassword])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

studentEmail = "Namanshreyas@google.com"
password = "6767"
studentPassword = 9999999

console.table([studentEmail,password,studentPassword])

