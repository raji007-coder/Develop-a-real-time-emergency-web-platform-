function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Rescue Form Handler
document.getElementById('rescueForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const location = inputs[0].value;
  const issue = inputs[1].value;
  const li = document.createElement('li');
  li.textContent = `📍 ${location} - 🚨 ${issue}`;
  document.getElementById('rescueList').appendChild(li);
  this.reset();
});

// Donation Form Handler
document.getElementById('donationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const name = inputs[0].value;
  const resource = inputs[1].value;
  const li = document.createElement('li');
  li.textContent = `🙏 ${name} donated ${resource}`;
  document.getElementById('donationList').appendChild(li);
  this.reset();
});

// Alert Form Handler
document.getElementById('alertForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const title = inputs[0].value;
  const message = inputs[1].value;
  const li = document.createElement('li');
  li.innerHTML = `<strong>${title}</strong>: ${message}`;
  document.getElementById('alertList').appendChild(li);
  this.reset();
});
