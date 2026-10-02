const home = document.getElementById("home");
const profile = document.getElementById("profile");
const openProfile = document.getElementById("profileHotspot");
const backHome = document.getElementById("homeHotspot");

function show(screen){
  home.classList.toggle("active", screen === "home");
  profile.classList.toggle("active", screen === "profile");
}

openProfile.addEventListener("click", () => show("profile"));
backHome.addEventListener("click", () => show("home"));
