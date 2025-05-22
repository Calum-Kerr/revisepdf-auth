/**
 * RevisePDF - Main JavaScript
 *
 * This file contains the client-side functionality for the RevisePDF application.
 * It handles file uploads, simulates PDF compression, and manages the UI state.
 */

document.addEventListener('DOMContentLoaded', function() {
  // DOM element references
  const uploadArea = document.getElementById('upload-area');
  const fileInput = document.getElementById('file-input');
  const fileInfo = document.getElementById('file-info');
  const compressBtn = document.getElementById('compress-btn');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.getElementById('progress-container');
  const resultContainer = document.getElementById('result-container');
  const downloadBtn = document.getElementById('download-btn');
  const resetBtn = document.getElementById('reset-btn');

  // State variable to store the selected file
  let selectedFile = null;

  /**
   * Event Listeners
   */

  // Handle file selection via the file input
  fileInput.addEventListener('change', function(e) {
    handleFileSelection(e.target.files);
  });

  // Handle dragover event (when file is dragged over the drop area)
  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault(); // Prevent default browser behavior
    uploadArea.classList.add('active'); // Add active class for visual feedback
  });

  // Handle dragleave event (when file is dragged out of the drop area)
  uploadArea.addEventListener('dragleave', function() {
    uploadArea.classList.remove('active'); // Remove active class
  });

  // Handle drop event (when file is dropped on the drop area)
  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault(); // Prevent default browser behavior
    uploadArea.classList.remove('active'); // Remove active class
    handleFileSelection(e.dataTransfer.files); // Process the dropped files
  });

  // Handle click on the upload area (trigger file input click)
  uploadArea.addEventListener('click', function() {
    fileInput.click(); // Simulate click on the hidden file input
  });

  // Handle click on the compress button
  compressBtn.addEventListener('click', function() {
    simulateCompression();
  });

  // Handle click on the reset button
  resetBtn.addEventListener('click', function() {
    resetUI();
  });

  /**
   * Functions
   */

  /**
   * Handle file selection from input or drop
   * @param {FileList} files - The list of files selected or dropped
   */
  function handleFileSelection(files) {
    if (files.length === 0) return;

    const file = files[0];

    // Validate file type (only accept PDFs)
    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file');
      return;
    }

    // Store the selected file
    selectedFile = file;

    // Update UI to show file info
    uploadArea.style.display = 'none';
    fileInfo.style.display = 'block';
    fileInfo.querySelector('.file-name').textContent = file.name;
    fileInfo.querySelector('.file-size').textContent = formatFileSize(file.size);
    compressBtn.style.display = 'block';
  }

  /**
   * Simulate PDF compression with a progress bar
   */
  function simulateCompression() {
    if (!selectedFile) return;

    // Update UI to show compression in progress
    compressBtn.style.display = 'none';
    progressContainer.style.display = 'block';

    // Simulate compression with a progress bar
    let progress = 0;
    const interval = setInterval(function() {
      progress += 10;
      progressBar.style.width = progress + '%';

      if (progress >= 100) {
        clearInterval(interval);

        // Update UI to show compression complete
        progressContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        // Create download URL for the "compressed" file
        // In a real application, this would be the URL to the actual compressed file
        const downloadUrl = URL.createObjectURL(selectedFile);
        downloadBtn.href = downloadUrl;
        downloadBtn.download = 'compressed-' + selectedFile.name;
      }
    }, 500); // Update progress every 500ms
  }

  /**
   * Reset the UI and state to initial values
   */
  function resetUI() {
    // Reset state
    selectedFile = null;
    fileInput.value = '';

    // Reset UI elements
    uploadArea.style.display = 'block';
    fileInfo.style.display = 'none';
    compressBtn.style.display = 'none';
    progressContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    progressBar.style.width = '0%';
  }

  /**
   * Format file size in bytes to a human-readable format
   * @param {number} bytes - File size in bytes
   * @returns {string} Formatted file size with units
   */
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
});
