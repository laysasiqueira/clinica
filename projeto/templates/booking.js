// Function to book appointments
function bookAppointment(date, time) {
  // Perform the appointment booking based on the selected date and time
  console.log("Appointment booked for " + date + " at " + time);
}

// Create a button element
var openBookingButton = document.getElementById("openBookingButton");

// Add a click event listener to the button
openBookingButton.addEventListener("click", function() {
  var appointmentDate = prompt("Enter appointment date:");
  var appointmentTime = prompt("Enter appointment time:");
  bookAppointment(appointmentDate, appointmentTime);
  openBookingPage();
});

// Function to open the booking page
function openBookingPage() {
  var bookingPageUrl = "https://www.example.com/booking"; // Replace with the actual URL of your booking page

  // Open the booking page in a new window or tab
  window.open(bookingPageUrl, "_blank");
}
