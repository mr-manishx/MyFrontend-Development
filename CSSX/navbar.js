document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const ulMenu = document.querySelector('ul');

    // Toggle the navigation menu on click (for mobile)
    menuToggle.addEventListener('click', function() {
        ulMenu.classList.toggle('menu-active');
    });

    // For mobile, toggle dropdown on click (inside list items)
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Prevent the event from propagating to the parent
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                listItems.forEach(otherItem => otherItem.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});
