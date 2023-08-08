const registrationForm = document.getElementById('registrationForm');
const entriesBody = document.getElementById('entriesBody');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = registrationForm.name.value;
    const email = registrationForm.email.value;
    const dob = registrationForm.dob.value;
    
    // Validate age (between 18 and 55 years old)
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18 || age > 55) {
        alert('Sorry, only users between 18 and 55 years old are allowed.');
        return;
    }

    // Add entry to the table
    const newRow = entriesBody.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${dob}</td>`;
    
    // Clear the form
    registrationForm.reset();
});
