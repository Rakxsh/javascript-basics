var user = {
    firstName : "Rakesh",
    lastName : "A",
    role: "Analyst",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);

    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of
        ${this.courseList.length} course`;
    },
};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("reactjs");
user.buyCourse("angularjs")
console.log(user.getCourseCount());