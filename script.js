if (!document.querySelector('link[href="style.css"]')) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'style.css';
    document.head.appendChild(stylesheet);
}

const mainHeading = document.getElementById('main-heading');
const changeTitleBtn = document.getElementById('change-title-btn');
const toggleBooksBtn = document.getElementById('toggle-books-btn');
const changeBgBtn = document.getElementById('change-bg-btn');
const featuredBooks = document.getElementById('featured-books');
const featuredCard1 = document.getElementById('featured-1');

if (changeTitleBtn) {
    changeTitleBtn.addEventListener('click', function() {
        mainHeading.textContent = 'Welcome to the Best Campus Book Exchange!';
    });
}

if (toggleBooksBtn) {
    toggleBooksBtn.addEventListener('click', function() {
        featuredBooks.classList.toggle('hidden-element');
    });
}

if (changeBgBtn) {
    changeBgBtn.addEventListener('click', function() {
        featuredCard1.classList.add('highlighted');
    });
}

const reqBtn1 = document.getElementById('req-1');
const reqBtn2 = document.getElementById('req-2');
const reqBtn3 = document.getElementById('req-3');
const reqBtn4 = document.getElementById('req-4');
const requestStatusMsg = document.getElementById('request-status-msg');

function setupRequestButton(btn) {
    if (btn) {
        btn.addEventListener('click', function() {
            btn.textContent = 'Request Sent';
            btn.classList.add('requested');
            requestStatusMsg.textContent = 'Your request has been sent successfully.';
            requestStatusMsg.className = 'success-text';
        });
    }
}

setupRequestButton(reqBtn1);
setupRequestButton(reqBtn2);
setupRequestButton(reqBtn3);
setupRequestButton(reqBtn4);

const bookSearch = document.getElementById('book-search');
const showBookBtn = document.getElementById('show-book-btn');
const searchConfirmationMsg = document.getElementById('search-confirmation-msg');
const displaySearchResult = document.getElementById('display-search-result');
const modifyCardBtn = document.getElementById('modify-card-btn');
const browseCard1 = document.getElementById('browse-1');

if (showBookBtn) {
    showBookBtn.addEventListener('click', function() {
        const titleInput = bookSearch.value;
        if (titleInput !== '') {
            displaySearchResult.textContent = 'Found: ' + titleInput;
            searchConfirmationMsg.textContent = 'Search successful.';
            searchConfirmationMsg.className = 'success-text';
        } else {
            searchConfirmationMsg.textContent = 'Please enter a title to search.';
            searchConfirmationMsg.className = 'error-text';
            displaySearchResult.textContent = '';
        }
    });
}

if (modifyCardBtn) {
    modifyCardBtn.addEventListener('click', function() {
        browseCard1.classList.add('highlighted');
    });
}

const toggleFormBtn = document.getElementById('toggle-form-btn');
const increaseFontBtn = document.getElementById('increase-font-btn');
const formWrapper = document.getElementById('form-wrapper');
const formTitle = document.getElementById('form-title');
const submitListingBtn = document.getElementById('submit-listing-btn');

if (toggleFormBtn) {
    toggleFormBtn.addEventListener('click', function() {
        formWrapper.classList.toggle('hidden-element');
    });
}

if (increaseFontBtn) {
    increaseFontBtn.addEventListener('click', function() {
        formTitle.classList.add('large-heading');
    });
}

if (submitListingBtn) {
    submitListingBtn.addEventListener('click', function() {
        const sName = document.getElementById('student-name').value;
        const bTitle = document.getElementById('book-title').value;
        const bAuthor = document.getElementById('book-author').value;
        const bSubject = document.getElementById('book-subject').value;
        const bCond = document.getElementById('book-condition').value;
        const formFeedback = document.getElementById('form-feedback');

        if (sName === '' || bTitle === '' || bAuthor === '' || bSubject === '' || bCond === '') {
            formFeedback.textContent = 'Please fill out all the fields before submitting.';
            formFeedback.className = 'error-text';
        } else {
            formFeedback.textContent = 'Thank you, ' + sName + '! Your book "' + bTitle + '" has been listed successfully.';
            formFeedback.className = 'success-text';
            document.getElementById('listing-form').reset();
        }
    });
}