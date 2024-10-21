const toggleCheckbox = document.getElementById('toggle-checkbox');
const mainHeader = document.getElementById('main-header');
const menubarHeader = document.getElementById('menu-header');
const darkLightBtn = document.getElementById('dark-light-mode');
const darkLightCap = document.getElementById('dark-light-cap');
const smallJourneyImg = document.getElementById('journey-small');
const largeJourneyImg = document.getElementById('journey-large');
let mainImg = document.getElementById('main-img');
let homeSvg = document.getElementById('home-svg');

mainImg.innerHTML = '<img src="images/main.png" alt="main">';
// homeSvg.style.fill = '#000';
let lightMode = true;

smallJourneyImg.src = './images/journey.png';
largeJourneyImg.src = './images/journey-large.png';

const homeBtn = document.getElementById('home-btn');

const mainContainer = document.getElementById('main-container');
const mainSection = document.getElementById('main-section');
const aboutSection = document.getElementById('about-section');
const experienceSection = document.getElementById('experience-section');
const projectSection = document.getElementById('project-section');
const tracker = document.getElementById('tracker-id');

mainSection.style.display = 'block';
aboutSection.style.display = 'none';
experienceSection.style.display = 'none';
projectSection.style.display = 'none';

// Functionality for dark light mode
darkLightBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkLightCap.classList.toggle('dark');
    lightMode = !lightMode;
    // homeSvg.style.fill = lightMode ? '#000' : '#fff';
    mainImg.innerHTML = lightMode ? '<img src="images/main.png" alt="main">' : '<img src="images/main-dark.png" alt="main">';

    smallJourneyImg.src = lightMode ? './images/journey.png' : './images/journey-dark.png';
    largeJourneyImg.src = lightMode ? './images/journey-large.png' : './images/journey-large-dark.png';
});

function showSection(sectionToShow) {
    mainSection.style.display = 'none';
    aboutSection.style.display = 'none';
    experienceSection.style.display = 'none';
    projectSection.style.display = 'none';
    
    sectionToShow.style.display = 'block';
    
    if (sectionToShow === mainSection) {
        tracker.innerText = 'Home';
    } else if (sectionToShow === aboutSection) {
        tracker.innerText = 'À propos';
    } else if (sectionToShow === experienceSection) {
        tracker.innerText = 'Expérience';
    } else if (sectionToShow === projectSection) {
        tracker.innerText = 'Projets';
    }
    
    toggleCheckbox.checked = false;
    homeBtn.innerHTML = '&#x3c;';

    menubarHeader.style.opacity = '0';
    setTimeout(() => {
        menubarHeader.style.display = 'none';
        mainHeader.style.display = 'block';
        setTimeout(() => {
            mainHeader.style.opacity = '1';
        }, 10); // Small delay to ensure the display property takes effect before opacity transition
    }, 300);
}

function showMain() { 
    showSection(mainSection);
    homeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>`;
}
function showAbout() { showSection(aboutSection); }
function showExperience() { showSection(experienceSection); }
function showProject() { showSection(projectSection); }

toggleCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        mainHeader.style.opacity = '0';
        setTimeout(() => {
            mainHeader.style.display = 'none';
            menubarHeader.style.display = 'flex';
            menubarHeader.style.opacity = '1';
        }, 300); // Adjust the timeout to match your CSS transition duration if necessary
    } else {
        menubarHeader.style.opacity = '0';
        setTimeout(() => {
            menubarHeader.style.display = 'none';
            mainHeader.style.display = 'block';
            setTimeout(() => {
                mainHeader.style.opacity = '1';
            }, 10); // Small delay to ensure the display property takes effect before opacity transition
        }, 300); // Adjust the timeout to match your CSS transition duration if necessary
    }
});
