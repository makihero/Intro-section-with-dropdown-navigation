
const menu = document.querySelector('#icon-menu');
const nav = document.getElementById('navBar');
const close = document.querySelector('#close');

const feature = document.querySelector('#feature');
const features = document.querySelector('.features');
const company = document.querySelector('#company');
const companies = document.querySelector('.company');

const iconArrowFeatures = document.querySelector('.icon-arrow-features');
const iconArrowCompany = document.querySelector('.icon-arrow-company');


menu.addEventListener('click', () => {
    menu.style.display = 'none';
    navBar.style.display = 'block';

})

close.addEventListener('click', () => {
    menu.style.display = 'block';
    navBar.style.display = 'none';
})

feature.addEventListener('click', () => {
    // if (features.style.display === 'block') {
    //     features.style.display = 'none';
    // } else {
    //     features.style.display = 'block';
    // }

    features.style.display === 'block' ? features.style.display = 'none' : features.style.display = 'block';
    iconArrowFeatures.style.transition = 'transform 0.5s ease';
    iconArrowFeatures.style.transform === 'rotate(180deg)' ? iconArrowFeatures.style.transform = 'rotate(0deg)' : iconArrowFeatures.style.transform = 'rotate(180deg)';
})

company.addEventListener('click', () => {
    // if (companies.style.display === 'block') {
    //     companies.style.display = 'none';
    // } else {
    //     companies.style.display = 'block';
    // }

    companies.style.display === 'block' ? companies.style.display = 'none' : companies.style.display = 'block';
    iconArrowCompany.style.transition = 'transform 0.5s ease';
    iconArrowCompany.style.transform === 'rotate(180deg)' ? iconArrowCompany.style.transform = 'rotate(0deg)' : iconArrowCompany.style.transform = 'rotate(180deg)';
})



