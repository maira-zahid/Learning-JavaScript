// ===================================
//   Student Dashboard - JavaScript
//   Topics Covered:
//   - Constructor Functions
//   - Object Methods
//   - DOM Manipulation
//   - setInterval (Clock + Timer)
// ===================================


// ── 1. STUDENT CONSTRUCTOR FUNCTION ──────────────────────────
// A constructor function in JavaScript is a function used to create and initialize objects.
// A constructor function is like a blueprint.
// Every time we add a student, we create a NEW object from this blueprint.

function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;

  // Object Method #1 — introduce the student
  this.introduce = function () {
    return "Hi! My name is " + this.name + ". I am " + this.age +
      " years old and I am studying " + this.course + ".";
  };

  // Object Method #2 — show course details
  this.courseDetails = function () {
    var info = {
      "Web Development": "Covers HTML, CSS, JavaScript & more.",
      "Data Science": "Covers Python, data analysis & graphs.",
      "Cybersecurity": "Covers ethical hacking & network safety.",
      "UI/UX Design": "Covers Figma, prototyping & user research.",
      "Mobile Development": "Covers iOS & Android app building.",
      "Artificial Intelligence": "Covers AI models, ML & deep learning.",
      "Graphic Designing": "Covers Adobe tools, branding & visual design.",
      "Freelancing": "Covers client handling, pricing & remote work."
    };
    return "Course Info: " + (info[this.course] || "Details coming soon.");
  };

  // Object Method #3 — get first letter(s) for avatar
  this.getInitials = function () {
    var parts = this.name.split(" ");
    var initials = "";
    for (var i = 0; i < parts.length; i++) {
      initials += parts[i][0];
    }
    return initials.toUpperCase().slice(0, 2);
  };
}


// ── 2. APP DATA ───────────────────────────────────────────────
var studentList = [];   // stores all Student objects
var studentIdCounter = 1;


// ── 3. AVATAR COLORS ──────────────────────────────────────────
var colors = ["#4f46e5", "#22c55e", "#f97316", "#3b82f6", "#ec4899", "#a855f7"];

function getColor(index) {
  return colors[index % colors.length];
}


// ── 4. DIGITAL CLOCK — setInterval #1 ────────────────────────
// setInterval runs a function repeatedly.
// Here we update the clock every 1 second.

function updateClock() {
  var now = new Date();
  var hrs = now.getHours().toString().padStart(2, "0");
  var mins = now.getMinutes().toString().padStart(2, "0");
  var secs = now.getSeconds().toString().padStart(2, "0");
  document.getElementById("clock").innerText = hrs + ":" + mins + ":" + secs;
}

setInterval(updateClock, 1000);   // It starts clock right away
updateClock();                    // run once immediately


// ── 5. STUDY TIMER — setInterval #2 ──────────────────────────
var timerSeconds = 0;
var timerRunning = false;
var timerInterval = null;
var sessionsDone = 0;

function formatTime(secs) {
  var h = Math.floor(secs / 3600);
  var m = Math.floor((secs % 3600) / 60);
  var s = secs % 60;
  return (
    h.toString().padStart(2, "0") + ":" +
    m.toString().padStart(2, "0") + ":" +
    s.toString().padStart(2, "0")
  );
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  document.getElementById("startBtn").disabled = true;
  document.getElementById("pauseBtn").disabled = false;

  timerInterval = setInterval(function () {
    timerSeconds++;
    document.getElementById("timerDisplay").innerText = formatTime(timerSeconds);
  }, 1000);
}

function pauseTimer() {
  if (!timerRunning) return;
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById("startBtn").disabled = false;
  document.getElementById("pauseBtn").disabled = true;

  // Count it as a session
  sessionsDone++;
  document.getElementById("sessionCount").innerText = sessionsDone;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 0;
  document.getElementById("timerDisplay").innerText = "00:00:00";
  document.getElementById("startBtn").disabled = false;
  document.getElementById("pauseBtn").disabled = true;
}


// ── 6. ADD STUDENT ────────────────────────────────────────────
function addStudent() {
  var name = document.getElementById("nameInput").value.trim();
  var age = document.getElementById("ageInput").value.trim();
  var course = document.getElementById("courseInput").value;
  var errMsg = document.getElementById("errorMsg");

  // Simple validation
  if (!name) {
    errMsg.innerText = "Please enter a student name.";
    return;
  }
  // if (!age || age < 5 || age > 80) {
  //   errMsg.innerText = "Please enter a valid age (5–80).";
  //   return;
  // }
  var ageNum = parseInt(age);
  if (!age || isNaN(ageNum) || ageNum < 5 || ageNum > 80) {
    errMsg.innerText = "Please enter a valid age (5–80).";
    return;
  }
  if (!course) {
    errMsg.innerText = "Please select a course.";
    return;
  }

  errMsg.innerText = "";  // clear error

  // Create a new Student object using our constructor
  var newStudent = new Student(name, ageNum, course);
  newStudent.id = studentIdCounter++;
  newStudent.color = getColor(studentList.length);

  // Add to our list
  studentList.push(newStudent);

  // Update stats and re-render cards
  updateStats();
  renderCards(studentList);

  // Clear the form inputs
  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
  document.getElementById("courseInput").value = "";
}


// ── 7. UPDATE STATS BOXES ─────────────────────────────────────
function updateStats() {
  // Total students
  document.getElementById("totalCount").innerText = studentList.length;

  // Unique courses
  var uniqueCourses = [];
  for (var i = 0; i < studentList.length; i++) {
    if (uniqueCourses.indexOf(studentList[i].course) === -1) {
      uniqueCourses.push(studentList[i].course);
    }
  }
  document.getElementById("courseCount").innerText = uniqueCourses.length;

  // Average age
  if (studentList.length === 0) {
    document.getElementById("avgAgeDisplay").innerText = "0";
  } else {
    var totalAge = 0;
    for (var j = 0; j < studentList.length; j++) {
      totalAge += studentList[j].age;
    }
    var avg = Math.round(totalAge / studentList.length);
    document.getElementById("avgAgeDisplay").innerText = avg;
  }
}


// ── 8. RENDER STUDENT CARDS (DOM Manipulation) ────────────────
function renderCards(list) {
  var container = document.getElementById("studentList");

  if (list.length === 0) {
    container.innerHTML = '<p class="no-students">No students found.</p>';
    return;
  }

  var html = "";

  for (var i = 0; i < list.length; i++) {
    var s = list[i];
    html +=
      '<div class="student-card">' +
      '<div class="avatar" style="background-color:' + s.color + '">' +
      s.getInitials() +
      '</div>' +
      '<div class="student-info">' +
      '<h4>' + s.name + '</h4>' +
      '<p>' + s.course + ' &bull; Age: ' + s.age + '</p>' +
      '</div>' +
      '<div class="card-buttons">' +
      '<button class="btn-view" onclick="openModal(' + s.id + ')">👁 View</button>' +
      '<button class="btn-delete" onclick="deleteStudent(' + s.id + ')">🗑 Delete</button>' +
      '</div>' +
      '</div>';
  }

  container.innerHTML = html;
}


// ── 9. DELETE STUDENT ─────────────────────────────────────────
function deleteStudent(id) {
  // Filter out the student with matching id
  studentList = studentList.filter(function (s) {
    return s.id !== id;
  });
  updateStats();
  renderCards(studentList);
}


// ── 10. SEARCH ────────────────────────────────────────────────
function searchStudents() {
  var query = document.getElementById("searchBox").value.toLowerCase();
  var results = studentList.filter(function (s) {
    return s.name.toLowerCase().includes(query) ||
      s.course.toLowerCase().includes(query);
  });
  renderCards(results);
}


// ── 11. MODAL (VIEW STUDENT DETAILS) ─────────────────────────
function openModal(id) {
  // Find student by id
  var student = null;
  for (var i = 0; i < studentList.length; i++) {
    if (studentList[i].id === id) {
      student = studentList[i];
      break;
    }
  }
  if (!student) return;

  // Fill modal content using our Object Methods
  document.getElementById("modalAvatar").innerText = student.getInitials();
  document.getElementById("modalAvatar").style.backgroundColor = student.color;
  document.getElementById("modalName").innerText = student.name;
  document.getElementById("modalIntro").innerText = student.introduce();       // Object Method
  document.getElementById("modalCourseDetail").innerText = student.courseDetails();   // Object Method

  // Show the modal
  document.getElementById("overlay").classList.add("show");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("show");
}
