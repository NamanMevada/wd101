const registrationForm = document.getElementById('registrationForm');
const registeredData = document.getElementById('registeredData');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = registrationForm.name.value;
  const email = registrationForm.email.value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
  `;

  registeredData.appendChild(newRow);

  registrationForm.reset();
});
