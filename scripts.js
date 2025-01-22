// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const course = event.target.closest('.course, .offer');
            const courseId = course.dataset.id;
            const courseName = course.querySelector('h3').textContent;
            const coursePrice = course.querySelector('.discounted-price') ? 
                                course.querySelector('.discounted-price').textContent.replace('₹', '') : 
                                course.querySelector('p').textContent.replace('Price: $', '');

            // Store course details in localStorage
            localStorage.setItem('selectedCourse', JSON.stringify({ id: courseId, name: courseName, price: coursePrice }));

            // Redirect to purchase page
            window.location.href = 'purchase.html';
        });
    });
});
