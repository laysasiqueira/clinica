document.addEventListener('DOMContentLoaded', function() {
  const bookButton = document.getElementById('bookButton');
  bookButton.addEventListener('click', bookAppointment);
});

// Calendar object with available slots
const calendar = {
  '2023-06-08': ['10:00', '11:00', '12:00'],
  '2023-06-09': ['13:00', '14:00', '15:00'],
  '2023-06-10': ['9:00', '10:00', '11:00']
};

// Function to book an appointment
function bookAppointment() {
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (calendar.hasOwnProperty(date)) {
    const availableSlots = calendar[date];
    if (availableSlots.includes(time)) {
      // Remove the booked slot from the calendar
      const index = availableSlots.indexOf(time);
      availableSlots.splice(index, 1);
      alert(`Appointment booked for ${date} at ${time}`);
    } else {
      alert(`Time slot ${time} is not available on ${date}`);
    }
  } else {
    alert(`No appointments available on ${date}`);
  }
}
