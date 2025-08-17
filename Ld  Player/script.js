// Handle download button click with animation
document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 300);
    console.log('Download button clicked!');
  });
});

// Comment system
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const commentText = document.getElementById('comment-text').value.trim();

  if (username && commentText) {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
      <span class="username">${username}</span>
      <span class="text">${commentText}</span>
    `;
    commentsContainer.appendChild(commentElement);
    commentForm.reset();
  }
});
