const array = [{
  title1: 'Book an appointment',
  title2: 'Book an appointment',
  imagemov: '"./images/job1b.webp"',
  imagedesk: '"./images/job1.webp"',
  work1: ['RAILS/REACT', 'FULL STACK DEV', '2024'],
  work2: ['RAILS/REACT', 'FULL STACK DEV', '2024'],
  descr1: 'A useful application for managing coworking spaces and their reservations.',
  descr2: 'A useful application for managing coworking spaces and their reservations.',
  techstack1: ['RAILS', 'REACT', 'PostgreSQL/API'],
  techstack2: ['RAILS', 'REACT', 'REDUX', 'PostgreSQL/API'],
  github: 'https://github.com/jcmunav63/book-an-appointment-front-end-mv-final-capstone',
  live: 'https://jcmunav63.github.io/book-an-appointment-front-end-mv-final-capstone/',
  paragraph1: 'A useful application for managing coworking spaces and their reservations. Create or delete spaces, display their details, and create or delete reservations.',
  paragraph2: 'A project with two repos, front-end and back-end, for displaying the "Book An Appointment" web app. It is developed for the Final Capstone Project of the Microverse Full-Stack Developer program. This project uses React & Redux on the front-end and Ruby on Rails, API endpoints, and a PostgreSQL database.',
  id: '1',
},

{
  title1: 'Metrics App - NYC High Schools',
  title2: 'Metrics App - NYC High Schools',
  imagemov: '"./images/job2b.webp"',
  imagedesk: '"./images/job2.webp"',
  work1: ['REACT/REDUX', 'FRONT END DEV', '2023'],
  work2: ['REACT/REDUX', 'FRONT END DEV', '2023'],
  descr1: 'A practic application for displaying and finding information of NY City High Schools.',
  descr2: 'A practic application for displaying and finding information of NY City High Schools.',
  techstack1: ['HTML/CSS', 'JAVASCRIPT', 'REACT/API'],
  techstack2: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT/API'],
  github: 'https://github.com/jcmunav63/metrics_app_m3',
  live: 'https://metrics-app-nyc-schools.onrender.com/',
  paragraph1: 'A useful application for displaying and searching information from the 2017 High School Directory of New York City\'s 5 boroughs. Displays a list of schools for every borough and then displays the datailed information of the selected school. It can also use an efficient search bar.',
  paragraph2: 'A project for displaying the "Metrics App - New York City High Schools" web app. It was developed as the Capstone Project for the React-Redux module of the Microverse Full-Stack Developer program. This project uses React & Reduxa as well as JavaScript and a public API from the NYC OpenData website. The app get access to the 2017 DOE High School Directory dataset.',
  id: '2',
},

{
  title1: "Space Travelers' Hub",
  title2: "Space Travelers' Hub",
  imagemov: '"./images/job3b.webp"',
  imagedesk: '"./images/job3.webp"',
  work1: ['REACT/REDUX', 'FRONT END DEV', '2023'],
  work2: ['REACT/REDUX', 'FRONT END DEV', '2023'],
  descr1: 'An awesome application for reserving rockets and joining space misssions with Space X.',
  descr2: 'An awesome application for reserving rockets and joining space misssions with Space X.',
  techstack1: ['HTML/CSS', 'JAVASCRIPT', 'REACT/API'],
  techstack2: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT/API'],
  github: 'https://github.com/jcmunav63/space-missions-and-rockets',
  live: 'https://space-missions-and-rockets.onrender.com/',
  paragraph1: 'A useful application for displaying and searching information from the 2017 High School Directory of New York City\'s 5 boroughs. Displays a list of schools for every borough and then displays the datailed information of the selected school. It can also use an efficient search bar.',
  paragraph2: 'A project for displaying the "Metrics App - New York City High Schools" web app. It was developed as the Capstone Project for the React-Redux module of the Microverse Full-Stack Developer program. This project uses React & Reduxa as well as JavaScript and a public API from the NYC OpenData website. The app get access to the 2017 DOE High School Directory dataset.',
  id: '3',
},

{
  title1: 'Math Magicians',
  title2: 'Math Magicians',
  imagemov: '"./images/job4b.webp"',
  imagedesk: '"./images/job4.webp"',
  work1: ['REACT/REDUX', 'FRONT END DEV', '2023'],
  work2: ['REACT/REDUX', 'FRONT END DEV', '2023'],
  descr1: 'A simple calculator application with some random education quotes.',
  descr2: 'A simple calculator application with some random education quotes.',
  techstack1: ['HTML/CSS', 'JAVASCRIPT', 'REACT/API'],
  techstack2: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT/API'],
  github: 'https://github.com/jcmunav63/math-magicians-app',
  live: 'https://math-magicians2-bn5i.onrender.com/',
  id: '4',
},
];

// CREATE WORK SECTION
const grid = document.querySelector('#grid2');
grid.classList.add('grid-1b');
const grid1 = document.querySelector('#grid3');
grid1.classList.add('grid-1');

function loadGrids() {
  for (let i = 0; i < array.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('rows');
    row.innerHTML += `
    <div class="photo2">
      <img class="work1b-img grow" alt="work 1" src= ${array[i].imagedesk}>
    </div>
    `;

    const div1 = document.createElement('div');
    div1.classList.add('work1b');
    div1.innerHTML += `

      <h2 class="work-text1b poppins">${array[i].title2}</h2>
      <ul class="flex1">
          <li><p class="canopy poppins">${array[i].work2[0]}</p></li>
          <li><img class="dot" alt="" width="16px" height="16px" src="./images/dot1.png"></li>
          <li><p class="bed poppins">${array[i].work2[1]}</p></li>
          <li><p><img class="dot" alt="" width="16px" height="16px" src="./images/dot1.png"></p></li>
          <li><p class="year poppins">${array[i].work2[2]}</p></li>
      </ul>
      <p class="desc2 poppins">${array[i].descr2}</p>
      <ul class="flex2">
        <li class="stack poppins">${array[i].techstack2[0]}</li>
        <li class="stack poppins">${array[i].techstack2[1]}</li>
        <li class="stack poppins">${array[i].techstack2[2]}</li>
        <li class="stack poppins">${array[i].techstack2[3]}</li>
      </ul>
      <nav>
        <button class="see-project poppins" id='${array[i].id}' >See project</button>
      </nav>
      `;

    if (i === 1 || i === 3) {
      row.classList.add('reverse');
    }

    grid.appendChild(row);
    row.appendChild(div1);
  }

  for (let i = 0; i < array.length; i += 1) {
    const work = document.createElement('div');
    work.classList.add('work1');
    work.innerHTML += `
    <div class="photo2">
      <img class="work1-img grow" alt="work 1" src= ${array[i].imagemov}>
    </div>
    <h2 class="work-text1 poppins">${array[i].title1}</h2>
    <ul class="flex1">
        <li><p class="canopy poppins">${array[i].work1[0]}</p></li>
        <li><img class="dot" alt="" width="16px" height="16px" src="./images/dot1.png"></li>
        <li><p class="bed poppins">${array[i].work1[1]}</p></li>
        <li><p><img class="dot" alt="" width="16px" height="16px" src="./images/dot1.png"></p></li>
        <li><p class="year poppins">${array[i].work1[2]}</p></li>
    </ul>
    <p class="desc2 poppins">${array[i].descr1}</p>
    <ul class="flex2">
      <li class="stack poppins">${array[i].techstack1[0]}</li>
      <li class="stack poppins">${array[i].techstack1[1]}</li>
      <li class="stack poppins">${array[i].techstack1[2]}</li>
    </ul>
    <nav>
      <button class="see-project poppins" id='${array[i].id}' >See project</button>
    </nav>
    `;

    grid1.appendChild(work);
  }
}

// MODAL WINDOW
const detailContainer = document.querySelector('.detail-container');
const detail = document.querySelector('.detail');
const btnClose = document.querySelector('.btn-close');

function loadModal(buttonId) {
  if (this.screen.width < 768) {
    const html = `
    <h2 class="work-text1a poppins">${array[buttonId - 1].title1}</h2>
    <ul class="flex1a">
      <li><p class="canopy2 poppins">${array[buttonId - 1].work1[0]}</p></li>
      <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"/></li>
      <li><p class="bed2 poppins">${array[buttonId - 1].work1[1]}</p></li>
      <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"/></li>
      <li><p class="year2 poppins">${array[buttonId - 1].work1[2]}</p></li>
    </ul>
    <img class="img" alt="work1" width="" height="" src=${array[buttonId - 1].imagemov}/>
    <div class="box">
      <p class="para poppins">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indsutry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s. Lorem ipsum dolor is simply dummy text of the printing and typesetting industry.</p>
      <p class="para poppins">Lorem ipsum dolor is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indsutry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releorem. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took 
      a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p>
      <ul class="flex2a">
        <li><p class="stack poppins">${array[buttonId - 1].techstack1[0]}</p></li>
        <li><p class="stack poppins">${array[buttonId - 1].techstack1[1]}</p></li>
        <li><p class="stack poppins">${array[buttonId - 1].techstack1[2]}</p></li>
      </ul>
      <div class="btn-box">
        <a href=${array[buttonId - 1].live} class="linkButton see-project2 poppins" target="_blank" id="">See live<img src="./images/live-button.png" class="img-inbtn"></a>
        <a href=${array[buttonId - 1].github} class="linkButton see-project2 poppins" target="_blank" id="">See source<img src="./images/github-button.svg" class="img-inbtn" height="18px" width="18px"></a>
      </div>
    </div>`;
    detail.insertAdjacentHTML('afterbegin', html);
    document.body.style.overflow = 'hidden';
    detailContainer.classList.add('show-detail');
  } else if (this.screen.width > 767) {
    const html = `
    <h2 class="work-text1a poppins">${array[buttonId - 1].title2}</h2>
    <ul class="flex1a">
      <li><p class="canopy2 poppins">${array[buttonId - 1].work2[0]}</p></li>
      <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"/></li>
      <li><p class="bed2 poppins">${array[buttonId - 1].work2[1]}</p></li>
      <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"/></li>
      <li><p class="year2 poppins">${array[buttonId - 1].work2[2]}</p></li>
    </ul>
    <img class="img" alt="work1" width="" height="" src=${array[buttonId - 1].imagedesk}/>
    <div class="grid-1c">
      <div class="box">
        <p class="para poppins">${array[buttonId - 1].paragraph1}</p>
        <p class="para poppins">${array[buttonId - 1].paragraph2}</p>
      </div>
      <div class="box4">
        <ul class="flex2a">
          <li><p class="stack poppins">${array[buttonId - 1].techstack2[0]}</p></li>
          <li><p class="stack poppins">${array[buttonId - 1].techstack2[1]}</p></li>
          <li><p class="stack poppins">${array[buttonId - 1].techstack2[2]}</p></li>
          <li><p class="stack poppins">${array[buttonId - 1].techstack2[3]}</p></li>
        </ul>
        <div class="btn-box">
          <a href="${array[buttonId - 1].live}" class="linkButton see-project2 poppins" target="_blank" id="">See live<img src="./images/live-button.png" class="img-inbtn" height="18px" width="18px"></a>
          <a href=${array[buttonId - 1].github} class="linkButton see-project2 poppins" target="_blank" id="">See source<img src="./images/github-button.svg" class="img-inbtn" height="18px" width="18px"></a>
        </div>
      </div>
    </div>`;
    detail.insertAdjacentHTML('afterbegin', html);
    document.body.style.overflow = 'hidden';
    detailContainer.classList.add('show-detail');
  }
}

// ONLOAD LISTENER
window.addEventListener('load', () => {
  loadGrids();

  const seeProject = document.querySelectorAll('.see-project');

  seeProject.forEach((button) => {
    button.addEventListener('click', () => {
      detail.innerHTML = '';
      loadModal(button.id);
    });
  });

  btnClose.addEventListener('click', () => {
    detailContainer.classList.remove('show-detail');
    detail.innerHTML = '';
    document.body.style.overflow = 'auto';
  });
});
