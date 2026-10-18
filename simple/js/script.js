// ============================================
// Tamarind Grove Zoo - my JavaScript file
// Made by Rishabh Aryan
// ============================================

// ---------- 1. Highlight the menu link for the page I am on ----------
var links = document.querySelectorAll("nav a");
var page = window.location.pathname.split("/").pop();

// if the address ends with "/" then it is the home page
if (page === "") {
  page = "index.html";
}

for (var i = 0; i < links.length; i++) {
  if (links[i].getAttribute("href") === page) {
    links[i].className = "active";
  }
}

// ---------- 2. Random animal fact button (home page) ----------
var facts = [
  "A giraffe's tongue can be about 50 cm long!",
  "Elephants can recognise themselves in a mirror.",
  "Flamingos are pink because of the food they eat.",
  "A group of zebras is called a dazzle.",
  "Red pandas spend most of their life up in trees.",
  "No two tigers have the same stripes.",
  "Sea turtles have been around since the time of dinosaurs.",
  "Penguins cannot fly, but they are amazing swimmers.",
  "A lion's roar can be heard up to 8 km away.",
  "Gorillas share about 98% of their DNA with humans."
];

var factButton = document.getElementById("factButton");

if (factButton) {
  factButton.addEventListener("click", function () {
    var number = Math.floor(Math.random() * facts.length);
    document.getElementById("factText").innerHTML = facts[number];
  });
}

// ---------- 3. Ticket price calculator (tickets page) ----------
var adultPrice = 300; // rupees
var childPrice = 150;
var seniorPrice = 200;

var ticketForm = document.getElementById("ticketForm");

if (ticketForm) {
  ticketForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    // get the numbers from the boxes (0 if empty)
    var adults = Number(document.getElementById("adults").value) || 0;
    var children = Number(document.getElementById("children").value) || 0;
    var seniors = Number(document.getElementById("seniors").value) || 0;
    var result = document.getElementById("total");

    if (adults < 0 || children < 0 || seniors < 0) {
      result.innerHTML = "Please do not use negative numbers.";
      result.className = "message error";
      return;
    }

    var total = adults * adultPrice + children * childPrice + seniors * seniorPrice;

    if (total === 0) {
      result.innerHTML = "Please add at least one ticket.";
      result.className = "message error";
    } else {
      result.innerHTML = "Total price: ₹" + total;
      result.className = "message success";
    }
  });
}

// ---------- 4. Gallery: click a photo to see it big ----------
var photos = document.querySelectorAll(".gallery img");
var bigView = document.getElementById("bigView");
var bigImage = document.getElementById("bigImage");
var bigCaption = document.getElementById("bigCaption");
var current = 0; // which photo is open

function showPhoto(index) {
  // go round in a circle when we reach the start or end
  if (index < 0) {
    index = photos.length - 1;
  }
  if (index >= photos.length) {
    index = 0;
  }
  current = index;
  bigImage.src = photos[current].src;
  bigImage.alt = photos[current].alt;
  bigCaption.innerHTML = photos[current].alt;
  bigView.style.display = "block";
}

if (bigView) {
  for (var j = 0; j < photos.length; j++) {
    // remember the number of each photo
    photos[j].setAttribute("data-number", j);
    photos[j].addEventListener("click", function () {
      showPhoto(Number(this.getAttribute("data-number")));
    });
  }

  document.getElementById("prevButton").addEventListener("click", function () {
    showPhoto(current - 1);
  });

  document.getElementById("nextButton").addEventListener("click", function () {
    showPhoto(current + 1);
  });

  document.getElementById("closeButton").addEventListener("click", function () {
    bigView.style.display = "none";
  });
}

// ---------- 5. Contact form check ----------
var contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var text = document.getElementById("text").value.trim();
    var formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || text === "") {
      formMessage.innerHTML = "Please fill in all the boxes.";
      formMessage.className = "message error";
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      formMessage.innerHTML = "Please type a correct email address.";
      formMessage.className = "message error";
    } else {
      formMessage.innerHTML = "Thank you, " + name + "! We will reply soon.";
      formMessage.className = "message success";
      contactForm.reset();
    }
  });
}
