// purchase.js
document.addEventListener('DOMContentLoaded', () => {
    const courseDetails = JSON.parse(localStorage.getItem('selectedCourse'));
    if (courseDetails) {
        document.getElementById('course-name').textContent = `Course: ${courseDetails.name}`;
        document.getElementById('course-price').textContent = `Price: ₹${courseDetails.price}`;
        document.getElementById('course-description').textContent = `Description: Learn all about ${courseDetails.name} with this comprehensive course.`;
        document.getElementById('total-cost').textContent = courseDetails.price;
    }

    const purchaseForm = document.getElementById('purchase-form');
    purchaseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        // Notify the user that a confirmation email has been sent
        alert(`Thank you for your purchase, ${name}! A confirmation email about your classes and courses has been sent to ${email}.\n\nYour Contact Information:\nPhone: ${phone}\nAddress: ${address}`);

        // Redirect to success page after form submission
        window.location.href = 'success.html';
    });
});
