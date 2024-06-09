

var marks = +prompt("enter your marks!")

if (marks >= 90){
    console.log("your grade is A+ and your GPA is 4.0");
}
else if (marks >= 85  && marks <= 89 ){
    console.log("your grade is A and your GPA is 4.0");
}
else if (marks >= 80 && marks <= 84){
    console.log("your grade is A- and your GPA is 3.8");
}
else if (marks >= 75 && marks <= 79){
    console.log("your grade is B+ and your GPA is 3.4");
}
else if (marks >= 71 && marks <= 74){
    console.log("your grade is B and your GPA is 3.0");
}
else if (marks >= 68 && marks <= 70){
    console.log("your grade is B- and your GPA is 2.8");
}
else if (marks >= 64 && marks <= 67){
    console.log("your grade is C+ and your GPA is 2.4");
}
else if (marks >= 61 && marks <= 63){
    console.log("your grade is C and your GPA is 2.0");
}
else if (marks >= 57 && marks <= 60){
    console.log("your grade is C- and your GPA is 1.8");
}
else if (marks >= 53 && marks <= 56){
    console.log("your grade is D+ and your GPA is 1.4");
}
else if (marks >= 50 && marks <= 52){
    console.log("your grade is D and your GPA is 1.0");
}
else if (marks < 49){
    console.log("you are fail and your GPA is 0.0");
}