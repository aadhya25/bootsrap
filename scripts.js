// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Save About section
function saveAbout() {
  const aboutText = document.getElementById('aboutText').value;
  alert('About section updated: ' + aboutText);
}

// Add new project
function addProject() {
  const container = document.getElementById('projectContainer');
  const title = prompt('Enter Project Title:');
  const description = prompt('Enter Project Description:');

  if (title && description) {
    const projectHTML = `<div class="col-md-4 mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', projectHTML);
  }
}

// Add new skill
function addSkill() {
  const container = document.getElementById('skillContainer');
  const title = prompt('Enter Skill Name:');
  const description = prompt('Enter Skill Description:');

  if (title && description) {
    const skillHTML = `<div class="col-md-4 mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', skillHTML);
  }
}

// Toggle profile input visibility
document.getElementById('editProfile')?.addEventListener('click', function () {
  document.getElementById('profileInput').classList.toggle('d-none');
});

// Handle contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Submitted successfully!');
});
