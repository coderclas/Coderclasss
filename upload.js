// upload.js
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const uploadResult = document.getElementById('upload-result');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const fileInput = document.getElementById('screenshot');
        const file = fileInput.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                uploadResult.innerHTML = `<p>Screenshot uploaded successfully!</p><img src="${e.target.result}" alt="Uploaded Screenshot" style="max-width: 100%;">`;
            };
            reader.readAsDataURL(file);
        } else {
            uploadResult.innerHTML = `<p>No file selected. Please try again.</p>`;
        }
    });
});
