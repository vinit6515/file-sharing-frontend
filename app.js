const backendUrl = 'https://file-sharing-app-backend-azure.vercel.app'; // Correct backend URL

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const validEmail = 'admin@example.com';
        const validPassword = 'password123';

        if (email === validEmail && password === validPassword) {
          window.location.href = 'upload.html'; // Redirect to upload page
        } else {
          window.location.href = 'download.html'; // Redirect to download page
        }
      });
    }

    // Fetch files for the download page
    const fileList = document.getElementById('fileList');
    if (fileList) {
      fetch(`${backendUrl}/files`) // Corrected backend URL
        .then(response => response.json())
        .then(files => {
          files.forEach(file => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${backendUrl}/download/${file}" target="_blank">${file}</a>`; // Corrected download URL
            fileList.appendChild(listItem);
          });
        })
        .catch(error => console.error('Error fetching files:', error));
    }
});
