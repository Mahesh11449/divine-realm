document.addEventListener('DOMContentLoaded', () => {
  const uploadForm = document.getElementById('uploadForm');
  const fileInput = document.getElementById('fileInput');
  const sectionSelect = document.getElementById('sectionSelect');
  const previewArea = document.getElementById('previewArea');

  // Preview selected file
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    previewArea.innerHTML = '';

    if (!file) return;

    const fileType = file.type;
    let previewElement;

    if (fileType.startsWith('video/')) {
      previewElement = document.createElement('video');
      previewElement.controls = true;
      previewElement.src = URL.createObjectURL(file);
    } else if (fileType.startsWith('audio/')) {
      previewElement = document.createElement('audio');
      previewElement.controls = true;
      previewElement.src = URL.createObjectURL(file);
    } else if (fileType.startsWith('image/')) {
      previewElement = document.createElement('img');
      previewElement.src = URL.createObjectURL(file);
    } else {
      previewElement = document.createElement('p');
      previewElement.textContent = `File selected: ${file.name}`;
    }

    previewArea.appendChild(previewElement);
  });

  // Handle Upload
  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    const section = sectionSelect.value;

    if (!file || !section) {
      alert('Please select both file and section.');
      return;
    }

    const fileType = file.type;
    const targetGrid = document.querySelector(`#${section} .content-grid`);
    let mediaElement;

    if (fileType.startsWith('video/')) {
      mediaElement = document.createElement('video');
      mediaElement.controls = true;
      mediaElement.src = URL.createObjectURL(file);
    } else if (fileType.startsWith('audio/')) {
      mediaElement = document.createElement('audio');
      mediaElement.controls = true;
      mediaElement.src = URL.createObjectURL(file);
    } else if (fileType.startsWith('image/')) {
      mediaElement = document.createElement('img');
      mediaElement.src = URL.createObjectURL(file);
    } else {
      mediaElement = document.createElement('p');
      mediaElement.textContent = file.name;
    }

    targetGrid.appendChild(mediaElement);

    // Reset form and preview
    uploadForm.reset();
    previewArea.innerHTML = '';

    alert('Upload successful! Your file is now visible in the selected section.');
  });
});
