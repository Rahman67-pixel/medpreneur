// User Name

const userName = document.getElementById("userName");

if(userName){
    userName.textContent =
    localStorage.getItem("fullName") || "Medical Student";
}


// Load Study Data

let studySessions =
JSON.parse(localStorage.getItem("studySessions")) || [];


// Add Study Session

function addStudySession(){

    const subject =
    document.getElementById("subject").value;

    const hours =
    document.getElementById("hours").value;

    if(subject === "" || hours === ""){
        alert("Fill all fields");
        return;
    }

    studySessions.push({
        subject: subject,
        hours: Number(hours)
    });

    localStorage.setItem(
        "studySessions",
        JSON.stringify(studySessions)
    );

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";

    renderStudyData();
}


// Display Data

function renderStudyData(){

    const studyList =
    document.getElementById("studyList");

    const totalHours =
    document.getElementById("totalHours");

    if(!studyList || !totalHours){
        return;
    }

    studyList.innerHTML = "";

    let total = 0;

    studySessions.forEach(session => {

        total += session.hours;

        const li =
        document.createElement("li");

        li.textContent =
        `${session.subject} - ${session.hours} hrs`;

        studyList.appendChild(li);

    });

    totalHours.textContent = total;
}

renderStudyData();
