const array = [{
  title1: 'Book an appointment',
  title2: 'Book an appointment',
  imagemov: '"./images/job1b.png"',
  imagedesk: '"./images/job1.png"',
  work1: ['RAILS, REACT', 'Full Stack Dev', '2024'],
  work2: ['RAILS, REACT', 'Full Stack Dev', '2024'],
  descr1: 'A useful application for managing coworking spaces and their reservations.',
  descr2: 'A useful application for managing coworking spaces and their reservations.',
  techstack1: ['Ruby on Rails', 'React', 'PostgreSQL/API'],
  techstack2: ['Rails', 'React', 'Redux', 'PostgreSQL/API'],
  id: '1',
},

{
  title1: 'Metrics App - NYC High Schools',
  title2: 'Metrics App - NYC High Schools',
  imagemov: '"./images/job2b.png"',
  imagedesk: '"./images/job2.png"',
  work1: ['REACT, REDUX', 'Front End Dev', '2023'],
  work2: ['REACT, REDUX', 'Front End Dev', '2023'],
  descr1: 'A practic application for displaying and finding information of NY City High Schools.',
  descr2: 'A practic application for displaying and finding information of NY City High Schools.',
  techstack1: ['HTML/CSS', 'JavaScript', 'React/API'],
  techstack2: ['HTML', 'CSS', 'JavaScript', 'React/API'],
  id: '2',
},

{
  title1: "Space Travelers' Hub",
  title2: "Space Travelers' Hub",
  imagemov: '"./images/job3b.png"',
  imagedesk: '"./images/job3.png"',
  work1: ['REACT, REDUX', 'Front End Dev', '2023'],
  work2: ['REACT/REDUX', 'Front End Dev', '2023'],
  descr1: 'An awesome application for reserving rockets and joining space misssions with Space X.',
  descr2: 'An awesome application for reserving rockets and joining space misssions with Space X.',
  techstack1: ['HTML/CSS', 'JavaScript', 'React/API'],
  techstack2: ['HTML', 'CSS', 'JavaScript', 'React/API'],
  id: '3',
},

{
  title1: 'Math Magicians',
  title2: 'Math Magicians',
  imagemov: '"./images/job4b.png"',
  imagedesk: '"./images/job4.png"',
  work1: ['REACT, REDUX', 'Front End Dev', '2023'],
  work2: ['REACT, REDUX', 'Front End Dev', '2023'],
  descr1: 'A simple calculator application with some random education quotes.',
  descr2: 'A simple calculator application with some random education quotes.',
  techstack1: ['HTML/CSS', 'JavaScript', 'React/API'],
  techstack2: ['HTML', 'CSS', 'JavaScript', 'React/API'],
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
        <a href="https://jcmunav63.github.io/mv_portfolio2/" class="linkButton see-project2 poppins" target="_blank" id="">See live<img src="./images/live-button.png" class="img-inbtn"></a>
        <a href="https://github.com/jcmunav63/mv_portfolio2" class="linkButton see-project2 poppins" target="_blank" id="">See source<img src="./images/github-button.svg" class="img-inbtn" height="18px" width="18px"></a>
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
        <p class="para poppins">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indsutry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s. Lorem ipsum dolor is simply dummy text of the printing and typesetting industry.</p>
        <p class="para poppins">Lorem ipsum dolor is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indsutry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s with the releorem. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took 
        a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p>
      </div>
      <div class="box4">
        <ul class="flex2a">
          <li><p class="stack poppins">${array[buttonId - 1].techstack2[0]}</p></li>
          <li><p class="stack poppins">${array[buttonId - 1].techstack2[1]}</p></li>
          <li><p class="stack poppins">${array[buttonId - 1].techstack2[2]}</p></li>
          <li><p class="stack poppins">${array[buttonId - 1].techstack2[3]}</p></li>
        </ul>
        <div class="btn-box">
          <a href="https://jcmunav63.github.io/mv_portfolio2/" class="linkButton see-project2 poppins" target="_blank" id="">See live<img src="./images/live-button.png" class="img-inbtn" height="18px" width="18px"></a>
          <a href="https://github.com/jcmunav63/mv_portfolio2" class="linkButton see-project2 poppins" target="_blank" id="">See source<img src="./images/github-button.svg" class="img-inbtn" height="18px" width="18px"></a>
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
