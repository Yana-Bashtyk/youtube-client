import createElements from './dom-markup';
import search from './fetch-request';
import searchNext from './next-page-request';

createElements();
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const output = document.querySelector('.video');
const pagination = document.querySelector('.navigation-dots-box');
const navigation = document.querySelector('.navigation-arrows');
const wrapperDiv = document.querySelector('.wrapper');
const searchDiv = document.querySelector('.search');
const arrowL = document.querySelector('.fa-angle-left');
const arrowR = document.querySelector('.fa-angle-right');
const videoPerPage = 4;


function showMessage(message, className) {
  const div = document.createElement('div');
  div.className = `${className}`;
  const span = document.createElement('span');
  span.innerHTML = message;
  div.appendChild(span);

  wrapperDiv.insertBefore(div, searchDiv);
  setTimeout(() => { div.remove(); }, 5000);
}

function truncWord(descr, limit) {
  const shortend = descr.indexOf(' ', limit);
  if (shortend === -1) return descr;
  return descr.substring(0, shortend);
}

function btnActive(arg) {
  const span = arg;
  const active = document.querySelector('.active');
  active.className = active.className.replace(' active', '');
  active.innerHTML = '';
  span.className += ' active';
}

function nextPage() {
  const searchTerm = input.value;
  const clipsNumber = localStorage.getItem('clipsNumber');
  searchNext(searchTerm).then((results) => {
    const arrayOfVideo = [];
    results.forEach((video, i) => {
      const dataIndex = +clipsNumber + +i;
      arrayOfVideo.push(`
          <div class="video-item" data-index="${dataIndex}">
            <p class="image-background">
                  <img class="preview" src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
              </p>
            <div class="video-item-content">
              <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">${video.snippet.title}</a>
              <i class="fas fa-user"></i>
              <span>${video.snippet.channelTitle}</span>
              <i class="far fa-calendar-alt"></i>
              <span>${video.snippet.publishedAt}</span>
              <i class="far fa-eye"></i>
              <span>${video.statistics.viewCount}</span>
              <p>${truncWord(video.snippet.description, 120)}</p> 
            </div>
          </div>
          `);
    });

    const numVideo = arrayOfVideo.length;
    const sumOfClips = +clipsNumber + numVideo;

    localStorage.setItem('clipsNumber', `${sumOfClips}`);
    for (let i = 0; i < arrayOfVideo.length; i += 1) {
      output.innerHTML += arrayOfVideo[i];
    }
    output.style.setProperty('--n', sumOfClips);
  });
}


form.addEventListener('submit', (e) => {
  const searchTerm = input.value;
  if (searchTerm === undefined) {
    showMessage('Please type anything to search', 'alert-danger');
  }

  input.value = '';

  search(searchTerm).then((results) => {
    if (searchTerm !== '') {
      output.innerHTML = '';
      output.style.setProperty('--i', 0);
      const arrayOfVideo = [];
      results.forEach((video, i) => {
        arrayOfVideo.push(`
            <div class="video-item" data-index="${i}">
              <p class="image-background">
                    <img class="preview" src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                </p>
              <div class="video-item-content">
                <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">${video.snippet.title}</a>
                <i class="fas fa-user"></i>
                <span>${video.snippet.channelTitle}</span>
                <i class="far fa-calendar-alt"></i>
                <span>${video.snippet.publishedAt}</span>
                <i class="far fa-eye"></i>
                <span>${video.statistics.viewCount}</span>
                <p>${truncWord(video.snippet.description, 120)}</p> 
              </div>
            </div>
            `);
      });

      const numVideo = arrayOfVideo.length;
      localStorage.setItem('clipsNumber', `${numVideo}`);
      for (let i = 0; i < arrayOfVideo.length; i += 1) {
        output.innerHTML += arrayOfVideo[i];
      }

      output.style.setProperty('--n', numVideo);
      pagination.style.display = '';
      navigation.style.display = '';
    }
  });

  function unify(elem) {
    return elem.changedTouches ? elem.changedTouches[0] : elem;
  }
  let x0 = null;
  function lock(f) { x0 = unify(f).clientX; }
  let i = 0;

  function move(item) {
    if (x0 || x0 === 0) {
      const dx = unify(item).clientX - x0;
      const s = Math.sign(dx);
      const clipsNumber = localStorage.getItem('clipsNumber');
      if ((i > 0 || s < 0) && (i < Math.ceil(clipsNumber / videoPerPage) - 1 || s > 0)) {
        output.style.setProperty('--i', i -= s);
        if (i === Math.floor(clipsNumber / videoPerPage / 2)) { nextPage(); }
        let current = document.querySelector(`#page-${i + 1}`);
        if (i < 3) {
          btnActive(current);
          current.innerHTML = `${i + 1}`;
        } else {
          current = document.querySelector('#page-3');
          btnActive(current);
          current.innerHTML = `${i + 1}`;
        }
      }
      x0 = null;
    }
  }

  arrowL.addEventListener('click', () => {
    if (i > 0) {
      output.style.setProperty('--i', i -= 1);
      let current = document.querySelector(`#page-${i + 1}`);
      if (i < 3) {
        btnActive(current);
        current.innerHTML = `${i + 1}`;
      } else {
        current = document.querySelector('#page-3');
        btnActive(current);
        current.innerHTML = `${i + 1}`;
      }
    }
  });
  arrowR.addEventListener('click', () => {
    const clipsNumber = localStorage.getItem('clipsNumber');
    if (i === Math.floor(clipsNumber / videoPerPage / 2)) { nextPage(); }
    if (i < Math.ceil(clipsNumber / videoPerPage) - 1) {
      output.style.setProperty('--i', i += 1);
      let current = document.querySelector(`#page-${i + 1}`);
      if (i < 3) {
        btnActive(current);
        current.innerHTML = `${i + 1}`;
      } else {
        current = document.querySelector('#page-3');
        btnActive(current);
        current.innerHTML = `${i + 1}`;
      }
    }
  });

  output.addEventListener('mousedown', lock, false);
  output.addEventListener('touchstart', lock, false);

  output.addEventListener('mouseup', move, false);
  output.addEventListener('touchend', move, false);

  e.preventDefault();
});
