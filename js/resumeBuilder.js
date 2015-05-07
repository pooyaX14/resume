    //$("#main").append(["Hello," + " " + " "]);
// var awesomeThoughts;
// awesomeThoughts = "I am Purnima. I'm AWESOME!";
// console.log(awesomeThoughts);
// var funThougts = awesomeThoughts.replace("AWESOME","FUN");
// console.log(funThougts);
// var email = "ablocaacity.com";
// console.log(email);
// var newemail = emalocaeplace("udacity","gmail");
// console.log(newemail);
// $("#main").append(funThougts);
var bio = {};
bio.name = "Purnima Gupta";
bio.role = "Web Developer";
bio.contacts = {
    "mobile": HTMLmobile.replace("{{mobile}}","8750677715"),
    "email": HTMLcontactGeneric.replace("{{contact}}","purnimaguptapccs@gmail.com"),
    "github": HTMLgithub.replace("{{github}}","pooyax14"),
    "twitter":HTMLtwitter.replace("{{twitter}}","@pooyax14"),
    "location":HTMLlocation.replace("{{location}}","Mumbai")
};

bio.welcome_message = "Hi, I am " + bio.name + "! I am an awesome web" + 
                     "designer and developer";
bio.skills = ["HTML", "CSS", "JavaScript"];
bio.picture_URL = "image/purnima.jpg";

var formattedRole = HTMLheaderRole.replace("{{data}}",bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("{{data}}", bio.name);
$("#header").prepend(formattedName);

var str1 = "audaloca";
var str2 = str1.slice(1);
console.log(str2);

var work = {
    "jobs":[
        {
            "employer": "Puri's Company",
            "title": "Web Developer",
            "location": "Toronto",
            "dates": "2008-2012",
            "url": "http://pooyax14.wordpress.com",
            "description": "A web designer develops and creates websites and " + 
            "associated applications. Web designers work in a variety of" +
            "industries and often as independent contractors. Education " +
            "requirements can vary, but web designers can get entry-level work" + 
            "with an associate's degree; bachelor's degrees provide students " +
            "with an expanded and advanced skill set that can lead to better job "+
            "prospects or career advancement."
        },
        {
            "employer": "Sutherland",
            "title": "Consultant",
            "location": "Mumbai",
            "dates": "2014-2015",
            "url": "http://sutherland.com",
            "description": "A web designer develops and creates websites and " + 
            "associated applications. Web designers work in a variety of" +
            "industries and often as independent contractors. Education " +
            "requirements can vary, but web designers can get entry-level work" + 
            "with an associate's degree; bachelor's degrees provide students " +
            "with an expanded and advanced skill set that can lead to better job "+
            "prospects or career advancement."
        },
        {
            "employer": "Pooya Beauty Parlors",
            "title": "CEO",
            "years": "2015-2022",
            "location": "Kanaykumari",
            "url": "http://pooyax14.com",
            "description": "A web designer develops and creates websites and " + 
            "associated applications. Web designers work in a variety of" +
            "industries and often as independent contractors. Education " +
            "requirements can vary, but web designers can get entry-level work" + 
            "with an associate's degree; bachelor's degrees provide students " +
            "with an expanded and advanced skill set that can lead to better job "+
            "prospects or career advancement."
        }
    ],
    "displayWork":function() {
        for(var job in work.jobs) {
        // cache the job in this iteration
        var thisJob = work.jobs[job];
        console.log("Processing thisJob at iteration" + job +  "-> ", thisJob);

        // Process and prepare data for presentation
        if(thisJob['title']) {
        var fmtTitle = HTMLworkTitle.replace("{{data}}", thisJob['title']);
        }

        if(thisJob['employer']) {
        var fmtEmployer = HTMLworkEmployer.replace("{{data}}", thisJob['employer']);

        if(thisJob['url']) {
            fmtEmployer = fmtEmployer.replace("#", thisJob['url']);
        }
        }

        if(thisJob['location']) {
        var fmtLocation = HTMLworkLocation.replace("{{data}}", thisJob['location']);
        }

        if(thisJob['years']) {
        var fmtDates = HTMLworkDates.replace("{{data}}", thisJob['years']);
        }
        if(thisJob['description']) {
        var fmtDescription = HTMLworkDescription.replace("{{data}}", thisJob['description']);
        }
        // Final content prepared from available data
        var fmtWork = fmtEmployer + fmtTitle;

        // Create the empty div.work-entry container
        console.log("Creating -> " + HTMLworkStart);
        $("#workExperience").append(HTMLworkStart);
        console.log("After Creating -> " + HTMLworkStart);

        // appending content to DOM node
        $(".work-entry:last").append(fmtWork);
        $(".work-entry:last").append(fmtLocation); 
        $(".work-entry:last").append(fmtDates); 
        console.log("Creating -> " + fmtDates);
        $(".work-entry:last").append(fmtDescription);
        }
    }

};
work.displayWork();

var projects = {
    "projects": [
        {
            "title":"JavaScript Project",
            "dates":"29-April-2015 to 10-May-2016",
            "description":"tic-toe game in JavaScript used to have real self image problems, but I didn’t fix it by forcing a more positive image on myself. I just stopped having a self image. It’s been incredible. I just don’t care anymore. Leads to some interesting outfits, sure, but life is way more relaxed.",
            "image":["images/fry.jpg"]
        },
        {
            "title":"Java Project",
            "dates":"29-April-2014 to 10-May-2013",
            "description":"tic-toe game in JavaScript  used to have real self image problems, but I didn’t fix it by forcing a more positive image on myself. I just stopped having a self image. It’s been incredible. I just don’t care anymore. Leads to some interesting outfits, sure, but life is way more relaxed.",
            "image":"images/fry.jpg"
        },
        {
            "title":"Some awesome Project",
            "dates":"29-April-2012 to 10-May-2011",
            "description":"tic-toe game in JavaScript  used to have real self image problems, but I didn’t fix it by forcing a more positive image on myself. I just stopped having a self image. It’s been incredible. I just don’t care anymore. Leads to some interesting outfits, sure, but life is way more relaxed.",
            "image":"images/fry.jpg"
        }

    ],
    "display": function() {
        for(var key in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var thisJob = projects.projects[key];
            if(thisJob['title']) {
                var fmtprojectTitle = HTMLprojectTitle.replace("{{data}}",thisJob['title']);
            }
            if(thisJob['dates']) {
                var fmtprojectDates = HTMLprojectDates.replace("{{data}}",thisJob['dates']);
            }
            if(thisJob['description']) {
                var fmtprojectDescription = HTMLprojectDescription.replace("{{data}}",thisJob['description']);
            }
            if(thisJob.image.length > 0){
                for(img in thisJob.image)
                 {
                    var fmtprojectImage = HTMLprojectImage.replace("{{data}}",thisJob['image']);
                 }
             }   
            $(".project-entry:last").append(fmtprojectTitle);
            $(".project-entry:last").append(fmtprojectDates);
            $(".project-entry:last").append(fmtprojectDescription);
            $(".project-entry:last").append(fmtprojectImage);
        }
    }
};
projects.display();

var education = {
    "schools": [
        {
            "name": "UPTU University",
            "degree": "B.Tech",
            "dates": "2008-2012",
            "location":"Noida",
            "major":["Computer Science", "Data Structure"]
        },
        {
            "name": "SAV College",
            "degree":"12th",
            "dates": "2007-2008",
            "location":"Etawah",
            "major": "Maths"
        }
    ],
    "online_courses":[
        {
            "title":"Introduction to HTML and CSS",
            "school":"Udacity",
            "dates": "7-March-2015",
            "url":"https://www.udacity.com/Udacity"
        },
        {
            "title":"JavaScript-Crash Course",
            "school":"Udacity",
            "dates": "7-April-2015",
            "url":"https://www.udacity.com/Udacity"
        }
    ],
    "display": function() 
    {
        for(var key in education.schools)
         {
            $("#education").append(HTMLschoolStart);
            var thisJob = education.schools[key];
            if(thisJob['name']) {
                var fmtschoolName = HTMLschoolName.replace("{{data}}",thisJob['name']);
            }
            if(thisJob['degree']) {
                var fmtschoolDegree = HTMLschoolDegree.replace("{{data}}",thisJob['degree']);
            }
            if(thisJob['dates']) {
                var fmtschoolDates = HTMLschoolDates.replace("{{data}}",thisJob['dates']);
            }
            if(thisJob['location']) {
                var fmtschoolLocation = HTMLschoolLocation.replace("{{data}}",thisJob['location']);
            }
            if(thisJob['major']) {
                var fmtschoolMajor = HTMLschoolMajor.replace("{{data}}",thisJob['major']);
            }
            $(".education-entry:last").append(fmtschoolName);
            $(".education-entry:last").append(fmtschoolDegree);
            $(".education-entry:last").append(fmtschoolDates);
            $(".education-entry:last").append(fmtschoolLocation);
            $(".education-entry:last").append(fmtschoolMajor);
        }
        $("#education").append(HTMLonlineClasses);
        for(var key in education.online_courses) {
            var thisJob = education.online_courses[key];
            if(thisJob['title']) {
                var fmtonlineTitle = HTMLonlineTitle.replace("{{data}}",thisJob['title']);
            }
            if(thisJob['school']) {
                var fmtonlineSchool = HTMLonlineSchool.replace("{{data}}",thisJob['school']);
            }
            if(thisJob['dates']) {
                var fmtonlineDates = HTMLonlineDates.replace("{{data}}",thisJob['dates']);
            }
            if(thisJob['url']) {
                var fmtonlineURL = HTMLonlineURL.replace("{{data}}",thisJob['url']);
            }
            $(".education-entry:last").append(fmtonlineTitle);
            $(".education-entry:last").append(fmtonlineSchool);
            $(".education-entry:last").append(fmtonlineDates);
            $(".education-entry:last").append(fmtonlineURL);
        }
    }
};
education.display();
// ----------------------------------------------
//    check for skills in the bio object
// ----------------------------------------------

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("{{data}}", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

// work.jobs is an Array!
// Iterate over it here.



$("#main").append(internationalizeButton);
function inName() {
    var oldName = bio.name;
    var finalName = oldName;
    var name = oldName.split(" ");
    name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    finalName = name.join(" ");
    return finalName;
}
$("#mapDiv").append(googleMap);
