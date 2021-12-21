



/**
 * Email pattern
 */




let gmail = "mdmizanurrahman036@gmail.com";

let pattern1 = /^[a-z0-9\._]*@[a-z0-9]*\.[a-z]{1,5}$/;

console.log(pattern1.test(gmail));





/**
 * Username pattern
 */

let user_name = "Mizanur Rahmna";

let pattern2 = /^[a-zA-Z0-9 ]*$/;

console.log(pattern2.test(user_name));



/**
 * Phone number pattern
 */


let mobile_number = "+8801840031198";

let pattern3 = /^(01|0881|\+8801)[0-9]{9}$/;

console.log(pattern3.test(mobile_number));




/**
 * Password pattern
 */


let passw = "mizan=d.Rahman5436";

let pattern4 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

console.log(pattern4.test(passw));




/**
 * Zip code pattern in Bangladesh
 */


 let bangladesh_zip = "1200";

 let pattern5 = /(^\d{4}$)|(^\d{4}-\d{4}$)/;
 
 console.log(pattern5.test(bangladesh_zip));







/**
 * Zip code pattern in USA
 */


 let usa_zip = "35464";


 let pattern6 = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
 
 console.log(pattern6.test(usa_zip));

