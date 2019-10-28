const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav



let firstLink = document.querySelector('nav a');
firstLink.textContent = siteContent['nav']["nav-item-1"];

let secondLink = document.querySelector('nav a:nth-child(2)');
secondLink.textContent = siteContent['nav']["nav-item-2"];

let thirdLink = document.querySelector('nav a:nth-child(3)');
thirdLink.textContent = siteContent['nav']["nav-item-3"];

let fourthLink = document.querySelector('nav a:nth-child(4)');
fourthLink.textContent = siteContent['nav']["nav-item-4"];

let fifthLink = document.querySelector('nav a:nth-child(5)');
fifthLink.textContent = siteContent['nav']["nav-item-5"];

let sixthLink = document.querySelector('nav a:nth-child(6)');
sixthLink.textContent = siteContent['nav']["nav-item-6"];

let seventhLink = document.createElement('a');
seventhLink.textContent = 'Log In';
seventhLink.href = '#';
let navContainer = document.querySelector('nav');
navContainer.appendChild(seventhLink);

let homeLink = document.createElement('a');
homeLink.textContent = 'Home';
homeLink.href = '#';
navContainer.prepend(homeLink);

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(element => {
  element.style.color = 'green';
});

//cta

let ctaTitle = document.querySelector('.cta-text h1')
ctaTitle.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main content

let featuresTitle = document.querySelector('.top-content .text-content:first-child h4');
featuresTitle.textContent = siteContent['main-content']['features-h4'];

let featuresText = document.querySelector('.top-content .text-content:first-child p');
featuresText.textContent = siteContent['main-content']['features-content'];

let aboutTitle = document.querySelector('.top-content .text-content:last-child h4');
aboutTitle.textContent = siteContent['main-content']['about-h4'];

let aboutText = document.querySelector('.top-content .text-content:last-child p');
aboutText.textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesTitle = document.querySelector('.bottom-content .text-content:first-child h4');
servicesTitle.textContent = siteContent['main-content']['services-h4'];

let servicesText = document.querySelector('.bottom-content .text-content:first-child p');
servicesText.textContent = siteContent['main-content']['services-content'];

let productTitle = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productTitle.textContent = siteContent['main-content']['product-h4'];

let productText = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productText.textContent = siteContent['main-content']['product-content'];

let visionTitle = document.querySelector('.bottom-content .text-content:last-child h4');
visionTitle.textContent = siteContent['main-content']['vision-h4'];

let visionText = document.querySelector('.bottom-content .text-content:last-child p');
visionText.textContent = siteContent['main-content']['vision-content'];

//contact

let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelector('.contact p:nth-child(2)');
contactAddress.textContent = siteContent['contact']['address'];

let contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.textContent = siteContent['contact']['phone'];

let contactEmail = document.querySelector('.contact p:last-child');
contactEmail.textContent = siteContent['contact']['email'];

//footer

let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];