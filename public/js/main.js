document.addEventListener('DOMContentLoaded', function() {
  // File upload functionality
  const uploadArea = document.getElementById('upload-area');
  const fileInput = document.getElementById('file-input');
  const fileInfo = document.getElementById('file-info');
  const compressBtn = document.getElementById('compress-btn');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.getElementById('progress-container');
  const resultContainer = document.getElementById('result-container');
  const downloadBtn = document.getElementById('download-btn');
  const resetBtn = document.getElementById('reset-btn');
  
  let selectedFile = null;
  
  // Handle file selection
  fileInput.addEventListener('change', function(e) {
    handleFileSelection(e.target.files);
  });
  
  // Handle drag and drop
  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadArea.classList.add('active');
  });
  
  uploadArea.addEventListener('dragleave', function() {
    uploadArea.classList.remove('active');
  });
  
  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadArea.classList.remove('active');
    handleFileSelection(e.dataTransfer.files);
  });
  
  uploadArea.addEventListener('click', function() {
    fileInput.click();
  });
  
  // Handle file selection
  function handleFileSelection(files) {
    if (files.length === 0) return;
    
    const file = files[0];
    
    // Check if file is a PDF
    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file');
      return;
    }
    
    selectedFile = file;
    
    // Show file info
    uploadArea.style.display = 'none';
    fileInfo.style.display = 'block';
    fileInfo.querySelector('.file-name').textContent = file.name;
    fileInfo.querySelector('.file-size').textContent = formatFileSize(file.size);
    compressBtn.style.display = 'block';
  }
  
  // Handle compression
  compressBtn.addEventListener('click', function() {
    if (!selectedFile) return;
    
    // Hide compress button
    compressBtn.style.display = 'none';
    
    // Show progress
    progressContainer.style.display = 'block';
    
    // Simulate compression
    let progress = 0;
    const interval = setInterval(function() {
      progress += 10;
      progressBar.style.width = progress + '%';
      
      if (progress >= 100) {
        clearInterval(interval);
        
        // Hide progress
        progressContainer.style.display = 'none';
        
        // Show result
        resultContainer.style.display = 'block';
        
        // Create download URL
        const downloadUrl = URL.createObjectURL(selectedFile);
        downloadBtn.href = downloadUrl;
        downloadBtn.download = 'compressed-' + selectedFile.name;
      }
    }, 500);
  });
  
  // Reset
  resetBtn.addEventListener('click', function() {
    // Reset state
    selectedFile = null;
    fileInput.value = '';
    
    // Reset UI
    uploadArea.style.display = 'block';
    fileInfo.style.display = 'none';
    compressBtn.style.display = 'none';
    progressContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    progressBar.style.width = '0%';
  });
  
  // Helper function to format file size
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
});
