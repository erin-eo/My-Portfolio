document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

document.querySelectorAll('.outer-circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});

//portfolio.js
const portfolio = {
    header: {
      nav: {
        items: [
          { href: "#home", text: "Home" },
          { href: "#about", text: "About" },
          { href: "#contact", text: "Contact" }
        ]
      }
    },
    homeSection: {
      glassDiv: {
        h1: [
          { class: "hi", text: "Hi," },
          { id: "name", text: "I'm Erin" }
        ],
        p: "a third-year student with a passion for web development."
      },
      img: {
        id: "Pic1",
        src: "pic1.png",
        alt: "My Image"
      }
    },
    aboutSection: {
      title: "About Me",
      aboutContainer: {
        leftSide: {
          img: {
            id: "Pic2",
            src: "pic2.png",
            alt: "My Image"
          },
          introText: "I'm Erin, a dedicated third-year Information Technology student at MarSU with a passion for web development and design. From a young age, I've always been fascinated by various things, especially designing. I wanted to create something unique through my artwork. As I grew older, I became captivated by games and anime, admiring their design and the way they bring comfort and a sense of peace. I'm always exploring new ideas to ensure I am satisfied with my work. While I'm not yet an expert in coding, I'm putting in the effort to improve my skills and enhance my projects. My journey in web development is fueled by my curiosity and creativity, and I'm always eager to learn new technology."
        },
        rightSide: {
          skills: {
            title: "Skills",
            skillCircles: [
              { name: "Python", percent: 50 },
              { name: "C#", percent: 50 },
              { name: "HTML", percent: 50 },
              { name: "CSS", percent: 50 },
              { name: "JavaScript", percent: 40 }
            ]
          },
          projects: {
            title: "Projects",
            photos: [
              {
                imgSrc: "project1.png",
                alt: "Marinduque Wonders",
                link: "https://hansdotdev.github.io/Marinduque-Wonders/?fbclid=IwZXh0bgNhZW0CMTEAAR2cHqXkYVpcovci1_YfjLKCGiMXBknLrpaBI4diF5c8a01ieVjoDQIUZAY_aem_qYY5gmf1-m26jKqnuWo_gA"
              },
              { imgSrc: "project2.jpg", alt: "Guess & Grow", link: "#" },
              { imgSrc: "project3.jpg", alt: "Student Hub", link: "#" },
              { imgSrc: "project4.png", alt: "TWMGOH", link: "#" }
            ]
          }
        }
      }
    },
    contactSection: {
      glassDiv: {
        h2: "Contact Me",
        p: "Feel free to reach out on any of the platforms below. Whether it's for collaboration, questions, or just a chat, I'm always happy to connect."
      },
      contactLinks: [
        { href: "https://www.facebook.com/erineo0/", imgSrc: "fb-logo.png", alt: "Facebook" },
        { href: "https://www.instagram.com/erineoo0/", imgSrc: "ig-logo.png", alt: "Instagram" },
        { href: "mailto:your-email@example.com", imgSrc: "email-logo.png", alt: "Email" },
        { href: "https://github.com/erin-eo", imgSrc: "github-logo.png", alt: "GitHub" }
      ]
    },
    footer: {
      p1: "&copy; 2024 My Portfolio.",
      p2: "Made by Erin Malapad."
    }
  };
  
  function renderPortfolio() {
    
     const header = document.querySelector('header');
     const nav = document.querySelector('nav');
     
     const ul = document.createElement('ul');
     portfolio.header.nav.items.forEach(item => {
       const li = document.createElement('li');
       const a = document.createElement('a');
       a.href = item.href;
       a.textContent = item.text;
       li.appendChild(a);
       ul.appendChild(li);
     });
   
     nav.appendChild(ul);
     header.appendChild(nav);
   
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });
  
    //Home Section
    const homeSection = document.getElementById('home');
    const glassDiv = document.getElementById('glass');
    
    portfolio.homeSection.glassDiv.h1.forEach(h => {
      const hElement = document.createElement('h1');
      hElement.className = h.class || '';
      hElement.id = h.id || '';
      hElement.textContent = h.text;
      glassDiv.appendChild(hElement);
    });
  
    const p = document.createElement('p');
    p.textContent = portfolio.homeSection.glassDiv.p;
    glassDiv.appendChild(p);
  
    //About Section
    const aboutSection = document.getElementById('about');
    const aboutContainer = document.getElementById('about-container');
    const aboutLeft = document.getElementById('about-left');
    
    const aboutImg = document.createElement('img');
    aboutImg.id = portfolio.aboutSection.aboutContainer.leftSide.img.id;
    aboutImg.src = portfolio.aboutSection.aboutContainer.leftSide.img.src;
    aboutImg.alt = portfolio.aboutSection.aboutContainer.leftSide.img.alt;
    
    const introText = document.createElement('p');
    introText.id = 'intro';
    introText.textContent = portfolio.aboutSection.aboutContainer.leftSide.introText;
    
    aboutLeft.appendChild(aboutImg);
    aboutLeft.appendChild(introText);
    
    //Skills
    const aboutRight = document.getElementById('About-Skills');
    const skills = document.createElement('div');
    skills.id = 'Skills';
    const skillsTitle = document.createElement('h2');
    skillsTitle.textContent = portfolio.aboutSection.aboutContainer.rightSide.skills.title;
    skills.appendChild(skillsTitle);
  
    portfolio.aboutSection.aboutContainer.rightSide.skills.skillCircles.forEach(skill => {
        const skillCircle = document.createElement('div');
        skillCircle.className = 'skill-circle';
        
        const outerCircle = document.createElement('div');
        outerCircle.className = 'outer-circle';
      
        outerCircle.style.setProperty('--percent', `${skill.percent}%`); 
    
        const innerCircle = document.createElement('div');
        innerCircle.className = 'inner-circle';
        const span = document.createElement('span');
        span.textContent = `${skill.percent}%`;
        innerCircle.appendChild(span);
    
        outerCircle.appendChild(innerCircle);
        skillCircle.appendChild(outerCircle);
    
        const skillText = document.createElement('p');
        skillText.textContent = skill.name;
        skillCircle.appendChild(skillText);
        
        skills.appendChild(skillCircle);
    });

    aboutRight.appendChild(skills);
  
    //Projects
    const projects = document.createElement('div');
    projects.id = 'Projects';
    const projectsTitle = document.createElement('h2');
    projectsTitle.textContent = portfolio.aboutSection.aboutContainer.rightSide.projects.title;
    projects.appendChild(projectsTitle);
  
    const photos = document.createElement('div');
    photos.id = 'photos';
    portfolio.aboutSection.aboutContainer.rightSide.projects.photos.forEach(photo => {
      const photoContainer = document.createElement('div');
      photoContainer.className = 'photo-container';
      
      const img = document.createElement('img');
      img.src = photo.imgSrc;
      img.alt = photo.alt;
      
      const p = document.createElement('p');
      const a = document.createElement('a');
      a.href = photo.link;
      a.textContent = photo.alt;
      p.appendChild(a);
      
      photoContainer.appendChild(img);
      photoContainer.appendChild(p);
      
      photos.appendChild(photoContainer);
    });
  
    projects.appendChild(photos);
    aboutRight.appendChild(projects);
    
    aboutContainer.appendChild(aboutLeft);
    aboutContainer.appendChild(aboutRight);
    aboutSection.appendChild(aboutContainer);
  
    //Contact Section
    const contactSection = document.getElementById('contact');
    const contactGlass = document.getElementById('glass2');
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = portfolio.contactSection.glassDiv.h2;
    const contactText = document.createElement('p');
    contactText.textContent = portfolio.contactSection.glassDiv.p;
    
    contactGlass.appendChild(contactTitle);
    contactGlass.appendChild(contactText);
  
    const contactLinks = document.getElementById('contact-links');
    portfolio.contactSection.contactLinks.forEach(link => {
      const contactLink = document.createElement('a');
      contactLink.href = link.href;
      
      const img = document.createElement('img');
      img.src = link.imgSrc;
      img.alt = link.alt;
      
      contactLink.appendChild(img);
      contactLinks.appendChild(contactLink);
    });
  
    //Footer
    const footer = document.querySelector('footer');
    const footerText1 = document.createElement('p');
    footerText1.innerHTML = portfolio.footer.p1;
    const footerText2 = document.createElement('p');
    footerText2.innerHTML = portfolio.footer.p2;
    footer.appendChild(footerText1);
    footer.appendChild(footerText2);
  }
  
  //Render portfolio
  renderPortfolio();
  
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('header').style.display = 'none';
  document.querySelector('#home').style.display = 'none';
  document.querySelector('#about').style.display = 'none';
  document.querySelector('#contact').style.display = 'none';
  document.querySelector('#footer').style.display = 'none';
});

//function starts here
function restoreDefaultStyles() {

  const selectors = ['#home', '#about',  'header', '#glass'];

  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.removeAttribute('style'); 
      element.style.display = 'flex';
    }
  });

  // Restore font family and color to default for text elements in #home, #about, and #contact
  document.querySelectorAll('#home h1, #home p, #about h1, #about p, #contact h1, #contact p').forEach(element => {
    element.style.fontFamily = '';
    element.style.color = '';     
  });

  const contactSection = document.querySelector('#contact');
  if (contactSection && contactSection.style.display === 'none') {
    contactSection.style.display = 'none'; 
  }

  // Function to remove hover effect for the photo container
function removeHoverEffects() {
  
  const photoContainers = document.querySelectorAll('.photo-container');

  photoContainers.forEach(container => {
  
    const image = container.querySelector('img');
    if (image) {
      image.style.transform = 'none'; 
    }

    container.style.transform = 'none'; 
    container.style.boxShadow = 'none'; 

    const link = container.querySelector('a');
    if (link) {
      link.style.textDecoration = 'none';
      link.style.color = 'inherit';
    }
  });
}

removeHoverEffects();
}

function build() {
  document.getElementById('build').style.display = 'none';

  const selectors = ['#home', 'header', '#footer', "#glass"];
  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.all = 'unset';
    }
  });

  // Remove hover effect and style navbar links permanently
  const style = document.createElement('style');
  style.innerHTML = `
    /* Remove hover effect */
    nav a:hover {
      background: none !important;
      color: inherit !important;
      text-decoration: none !important;
      padding: 0 !important;
      text-align: inherit !important;
    }

    /* Style navbar links permanently */
    nav a {
      background: none !important;
      color: white !important;
      text-decoration: none !important;
      padding: 0 !important;
      font-family: Arial, sans-serif !important;
      text-align: left !important;
    }
  `;
  document.head.appendChild(style);

  // Show the hiome section and header with no styles
  document.getElementById('home').style.display = 'block';
  document.querySelector('header').style.display = 'block';

  function setHomeFontAndColor() {
    const h1Element = document.querySelector('#home h1');
    const nameElement = document.querySelector('#name');
    const pElement = document.querySelector('#home p');

    if (h1Element) {
      h1Element.style.fontFamily = 'Arial, sans-serif';
      h1Element.style.color = 'white';
    }
    if (nameElement) {
      nameElement.style.fontFamily = 'Arial, sans-serif';
      nameElement.style.color = 'white';
    }
    if (pElement) {
      pElement.style.fontFamily = 'Arial, sans-serif';
      pElement.style.color = 'white';
    }
  }

  setHomeFontAndColor();
}

// Function to show about section and reset styles
function add() {

  document.getElementById('add').style.display = 'none';

  document.getElementById('about').style.display = 'block';

  const aboutSection = document.querySelector('#about');
  if (aboutSection) {
    aboutSection.style.all = ''; 
  }

  function setHomeFontAndColor() {
    const h1Element = document.querySelector('#home h1');
    const nameElement = document.querySelector('#name');
    const pElement = document.querySelector('#home p');

    if (h1Element) {
      h1Element.style.fontFamily = '';
      h1Element.style.color = '';
    }
    if (nameElement) {
      nameElement.style.fontFamily = '';
      nameElement.style.color = '';
    }
    if (pElement) {
      pElement.style.fontFamily = '';
      pElement.style.color = '';
    }
  }

  setHomeFontAndColor();
  restoreDefaultStyles();
}

function restore() {
  
  document.getElementById('add').style.display = 'block';

  // Reset the button text
  const addButton = document.getElementById('add-btn');
  if (addButton) {
    addButton.textContent = 'Add Design';
  }

  // Hide the About section
  document.getElementById('about').style.display = 'none';
}

function improve() {

addContactSectionAnimations();

observeContactSection();

addAboutSectionAnimations();

observeAboutSection();

addAnimationStyles();


observeElements();
  const observerOptions = {
    threshold: 0.1, 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    const children = section.querySelectorAll('*'); 
    children.forEach((child) => observer.observe(child));
  });
  
  document.getElementById('contact').style.display = '';
  document.querySelector('#improve').style.display = 'none';
  document.getElementById('home').style.display = '';
  document.getElementById('about').style.display = '';
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display='block';

  // Select all the sections that restores to default
  const selectors = ['#home', '#about', 'header', '#glass'];

  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.removeAttribute('style'); 
      element.style.display = ''; 
    }
  });

  // Restore hover effects for the navbar and photo containers
  restoreNavbarHoverEffect();
  restorePhotoContainerHoverEffect();
  function restoreNavbarHoverEffect() {
    
    const customStyleBlock = [...document.head.querySelectorAll('style')].find(style => 
      style.innerHTML.includes('nav a:hover') || style.innerHTML.includes('nav a {')
    );
  
    if (customStyleBlock) {
      customStyleBlock.remove(); 
    }
  
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.removeAttribute('style');
    });
  }
}

function restoreNavbarHoverEffect() {
  
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    
    link.removeAttribute('style');
  });

  const photoContainers = document.querySelectorAll('.photo-container');
  
  photoContainers.forEach(container => {
    
    container.style.transform = '';
    container.style.boxShadow = '';
    
    const link = container.querySelector('a');
    if (link) {
      link.style.textDecoration = '';
      link.style.color = '';
    }
  });
  
}

// Function to dynamically add CSS styles for animation
function addAnimationStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    /* Initial hidden state with animations */
    section#home h1, section#home p, section#home img {
      opacity: 0; /* Initially hidden */
      transform: translateX(30px); /* Positioned slightly below */
      transition: opacity 0.8s ease, transform 0.8s ease; /* Smooth transition */
    }

    /* When in view, the elements animate */
    section#home h1.in-view, section#home p.in-view, section#home img.in-view {
      opacity: 1; /* Fully visible */
      transform: translateY(0); /* Reset position */
    }
  `;
  
  document.head.appendChild(style);
}

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}

function observeElements() {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.8,
  });

  const elements = document.querySelectorAll('#home h1, #home p, #home img');
  elements.forEach(element => {
    observer.observe(element);
  });
}

// Function to add animations with different effects to About Section
function addAboutSectionAnimations() {
  const style = document.createElement('style');
  style.innerHTML = `
    /* About Section - Initial hidden state */
    #about h1, #about #intro, #about #Pic2, #about #About-Skills {
      opacity: 0; /* Initially hidden */
      transform: scale(0.9); /* Start smaller */
      transition: opacity 1s ease, transform 1s ease; /* Smooth transition */
    }

    /* When in view, the elements animate */
    #about.in-view h1 {
      opacity: 1;
      transform: scale(1); /* Scale to normal size */
    }

    #about.in-view #intro {
      opacity: 1;
      transform: translateX(20px); /* Slide in from the right */
    }

    #about.in-view #Pic2 {
      opacity: 1;
      transform: translateX(20px); /* Slight rotation effect */
    }

    #about.in-view #About-Skills {
      opacity: 1;
      transform: translateY(20px); /* Slide from below */
    }
  `;
  document.head.appendChild(style);
}

function handleAboutSectionIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}

function observeAboutSection() {
  const observer = new IntersectionObserver(handleAboutSectionIntersection, {
    threshold: 0.8, 
  });

  const aboutSection = document.querySelector('#about');
  observer.observe(aboutSection);
}

// Function to add animations with different effects to Contact Section
function addContactSectionAnimations() {
  const style = document.createElement('style');
  style.innerHTML = `
    /* Contact Section - Initial hidden state */
    #contact h2, #contact p, #contact #glass2, #contact-links {
      opacity: 0; /* Initially hidden */
      transform: translateY(30px); /* Positioned slightly below */
      transition: opacity 1s ease, transform 1s ease; /* Smooth transition */
    }

    /* When in view, the elements animate */
    #contact.in-view h2 {
      opacity: 1;
      transform: translateY(0); /* Fade in with no shift */
    }

    #contact.in-view p {
      opacity: 1;
      transform: translateY(0); /* Fade in with no shift */
    }

    #contact.in-view #glass2 {
      opacity: 1;
      transform: translateY(0); /* Fade in with no shift */
    }

    #contact.in-view #contact-links {
      opacity: 1;
      transform: translateY(0); /* Slide up to original position */
    }

    /* Hover effects on the contact icons */
    #contact-links a {
      opacity: 1;
      transform: scale(1); /* Ensure they are at normal scale initially */
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    #contact-links a:hover {
      transform: scale(1.1); /* Slightly enlarge on hover */
      opacity: 1.2; /* Increase opacity on hover */
    }
    
    #contact-links img {
      transition: transform 0.3s, box-shadow 0.3s ease;
    }

    #contact-links img:hover {
      transform: scale(1.1); /* Slightly enlarge the icon */
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.6); /* Intensify shadow on hover */
    }
  `;
  document.head.appendChild(style);
}

function handleContactSectionIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}

function observeContactSection() {
  const observer = new IntersectionObserver(handleContactSectionIntersection, {
    threshold: 0.8,
  });

  const contactSection = document.querySelector('#contact');
  observer.observe(contactSection);
}