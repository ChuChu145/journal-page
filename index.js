const hamburgerMenu = document.getElementById('hamburger-menu');
const navContainer = document.getElementById('nav-container');
const viewMoreBtn = document.getElementById('view-more');
const morePost = document.getElementById('extra-posts');

// Toggle navigation menu
hamburgerMenu.addEventListener('click', function () {
    navContainer.classList.toggle('hidden');
});

// Close nav when a link is clicked
navContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        navContainer.classList.add('hidden');
    }
});

viewMoreBtn.addEventListener('click', function () {
    // Toggle the "hidden" class to hide or show the extra posts
    morePost.classList.toggle('more'); 

    // Change the text of the button based on whether extra posts are visible or not
    if (morePost.classList.contains('more')) {
        viewMoreBtn.textContent = 'View More';
    } else {
        viewMoreBtn.textContent = 'View Less';
    }
});