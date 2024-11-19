
document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const reviewSection = document.querySelector('.reviews');
  const newReview = document.createElement('div');
  newReview.classList.add('review');
  newReview.innerHTML = `<p><strong>${name}:</strong> ${message}</p>`;

  reviewSection.insertBefore(newReview, document.querySelector('.review-form'));

  document.getElementById('reviewForm').reset();
});
