"use strict";
let body = document.querySelector("html");

let home = document.querySelector("#home");
let about = document.querySelector("#about-me");
let projects = document.querySelector("#projects");

window.addEventListener("scroll", function (event) {
  let homePosition = home.getBoundingClientRect().top;
  let aboutPosition = about.getBoundingClientRect().top;
  let projectsPosition = projects.getBoundingClientRect().top;

  let circlePrevious = document.querySelector(".ux-aside-previous");
  let circleCurrent = document.querySelector(".ux-aside-current");
  let circleNext = document.querySelector(".ux-aside-next");
  //   console.table(
  //     "home",
  //     homePosition,
  //     "about",
  //     aboutPosition,
  //     "projects",
  //     projectsPosition
  //   );
  if (aboutPosition > 0) {
    circlePrevious.classList.add("ui-hidden");
    circleNext.classList.remove("ui-hidden");
    circleCurrent.innerHTML = 0;
    circleNext.innerHTML = 1;
    console.log("home");
  } else if (aboutPosition < 0 && projectsPosition > 200) {
    circlePrevious.classList.remove("ui-hidden");
    circleNext.classList.remove("ui-hidden");
    circlePrevious.innerHTML = 0;
    circleCurrent.innerHTML = 1;
    circleNext.innerHTML = 2;
    console.log("about");
  } else {
    circlePrevious.classList.remove("ui-hidden");
    circleNext.classList.add("ui-hidden");

    circlePrevious.innerHTML = 1;
    circleCurrent.innerHTML = 2;
    console.log("projects");
  }
});
