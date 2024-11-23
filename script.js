// Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initial slide setup and interval for slideshow
showSlide(currentSlide);
setInterval(nextSlide, 5000); // Changes slide every 5 seconds

// Course Data Array
// Course Data Array (lessons with content and code examples)
const courses = [
    {
        title: "Java Programing",
        lessons: [
          { 
            title: "Introduction to Java",
            content: "Java is a popular, high-level, object-oriented programming language designed to be platform-independent.",
            code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Welcome to Java!\");\n  }\n}",
            output: "Welcome to Java!"
          },
          { 
            title: "Variables in Java",
            content: "Variables are containers for storing data values. Java supports different types such as int, float, and String.",
            code: "public class Main {\n  public static void main(String[] args) {\n    int myNumber = 10;\n    String myName = \"John\";\n    System.out.println(\"Number: \" + myNumber);\n    System.out.println(\"Name: \" + myName);\n  }\n}",
            output: "Number: 10\nName: John"
          },
          { 
            title: "Printing in Java",
            content: "You can use the System.out.println() method to print text or variables in Java.",
            code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, Java!\");\n  }\n}",
            output: "Hello, Java!"
          },
          { 
            title: "Loops in Java",
            content: "Loops allow you to repeat a block of code multiple times. Java provides for, while, and do-while loops.",
            code: "public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(\"Iteration: \" + i);\n    }\n  }\n}",
            output: "Iteration: 1\nIteration: 2\nIteration: 3\nIteration: 4\nIteration: 5"
          }
        ]
      },
      {
        title: "Python Programing",
        lessons: [
          { 
            title: "Introduction to Python",
            content: "Python is an easy-to-read, high-level programming language.",
            code: `print("Welcome to Python!")`,
            output: "Welcome to Python!"
          },
          { 
            title: "Variables in Python",
            content: "Variables in Python are dynamically typed.",
            code: `name = "Bob"
    ge = 30
    print(name + " is " + str(age) + " years old.")`,
            output: "Bob is 30 years old."
          }
        ]
      },
      {
        title: "C Programing",
        lessons: [
        { 
            title: "Introduction to C",
            content: "C is a low-level, procedural programming language.",
            code: `#include <stdio.h>
    int main() {
    printf("Welcome to C!\n");
    return 0;
    }`,
            output: "Welcome to C!"
        },
        {
            title: "Variables in C",
            content: "In C, variables are declared with their data type, like int, float, and char.",
            code: `#include <stdio.h>
    int main() {
    int age = 25;
    printf("Age: %d\n", age);
    return 0;
    }`,
            output: "Age: 25"
        }
        ]
      },
      {
        title: "C++ Programing",
        lessons: [
        {
            title: "Introduction to C++",
            content: "C++ is an extension of C that supports object-oriented programming.",
            code: `#include <iostream>
    using namespace std;

    int main() {
    cout << "Welcome to C++!" << endl;
    return 0;
    }`,
            output: "Welcome to C++!"
        },
        {
            title: "Variables in C++",
            content: "C++ allows you to declare variables like in C, with types such as int, float, and char.",
            code: `#include <iostream>
    using namespace std;

    int main() {
    int age = 30;
    cout << "Age: " << age << endl;
    return 0;
    }`,
            output: "Age: 30"
        },
        // Add more lessons for C++, like Conditions, Loops, OOP, etc.
        ]
      }
  ];
  
  // Display Courses
function displayCourses() {
    const courseContainer = document.getElementById("course-list");
    courses.forEach((course, index) => {
      const courseCard = document.createElement("div");
      courseCard.classList.add("course-card");
      courseCard.innerHTML = `<h3>${course.title}</h3>`;
      courseCard.addEventListener("click", () => showCourseDetails(index));
      courseContainer.appendChild(courseCard);
    });
  }
  
  // Show Course Details with Example Output
  function showCourseDetails(courseIndex) {
    const courseDetails = courses[courseIndex];
    document.getElementById("course-title").innerText = courseDetails.title;
    
    const contentContainer = document.getElementById("course-content");
    contentContainer.innerHTML = "";
    
    courseDetails.lessons.forEach(lesson => {
      contentContainer.innerHTML += `
        <h3>${lesson.title}</h3>
        <p>${lesson.content}</p>
        <pre><code>${lesson.code}</code></pre>
        <p><strong>Output:</strong></p>
        <pre><code>${lesson.output}</code></pre>
      `;
    });
    
    document.getElementById("course-details").classList.remove("hidden");
  }
  
  // Close Course Details
  document.getElementById("close-details").addEventListener("click", () => {
    document.getElementById("course-details").classList.add("hidden");
  });


// Teachers Array with Images
const teachers = [
    {
      name: "Mr. Nai Panhavorn",
      position: "Senior Java GUI",
      experience: "10 years in GUI development",
      image: "vorn.jpg",
      price: "$50/hour"
    },
    { 
      name: "Mr. Chron Rachana",
      position: "Python Expert",
      experience: "7 years on Cyber Security",
      image: "nha.jpg",
      price: "$40/hour"
    }
  ];
  
  // Display Teachers with Price
  function displayTeachers() {
    const teacherContainer = document.getElementById("teacher-list");
    teachers.forEach(teacher => {
      const teacherCard = document.createElement("div");
      teacherCard.classList.add("teacher-card");
      teacherCard.innerHTML = `
        <img src="${teacher.image}" alt="${teacher.name}">
        <h3>${teacher.name}</h3>
        <p><strong>${teacher.position}</strong></p>
        <p>${teacher.experience}</p>
        <p class="price"><strong>Price: ${teacher.price}</strong></p>
        <button class="hire-btn">Hire Now</button>
      `;
      teacherContainer.appendChild(teacherCard);
    });
  }

// Load Content on Page Load
window.onload = () => {
  displayCourses();
  displayTeachers();
};
