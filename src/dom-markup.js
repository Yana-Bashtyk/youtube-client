function setAttributes(elem, attr) {
  Object.entries(attr).forEach(args => elem.setAttribute(...args));
}

function none(elem) {
  const hidden = elem;
  hidden.style.display = 'none';
}

export default function createElements() {
  const fragment = document.createDocumentFragment();
  const wrapperDiv = document.createElement('div');
  const searchDiv = document.createElement('div');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const iconElem = document.createElement('i');
  const videoSection = document.createElement('section');
  const output = document.createElement('div');

  wrapperDiv.className = 'wrapper';
  searchDiv.className = 'search';
  form.setAttribute('id', 'search-form');

  setAttributes(input, {
    type: 'text', id: 'search-input', class: 'searchTerm', placeholder: 'What are you looking for?',
  });
  setAttributes(button, { type: 'submit', class: 'searchButton' });

  iconElem.setAttribute('class', 'fas fa-search');
  videoSection.className = 'video-wrapper';
  output.setAttribute('class', 'video');

  button.appendChild(iconElem);
  form.appendChild(input);
  form.appendChild(button);
  searchDiv.appendChild(form);
  wrapperDiv.appendChild(searchDiv);
  wrapperDiv.appendChild(videoSection);
  videoSection.appendChild(output);
  fragment.appendChild(wrapperDiv);
  document.body.appendChild(fragment);

  const navigation = document.createElement('div');
  navigation.setAttribute('class', 'navigation-arrows');
  const arrowR = document.createElement('i');
  arrowR.setAttribute('class', 'fas fa-angle-right');
  const arrowL = document.createElement('i');
  arrowL.setAttribute('class', 'fas fa-angle-left');
  navigation.appendChild(arrowL);
  navigation.appendChild(arrowR);

  const pagination = document.createElement('div');
  pagination.setAttribute('class', 'navigation-dots-box');

  for (let i = 1; i < 6; i += 1) {
    const dots = document.createElement('span');
    dots.setAttribute('class', 'dots');
    dots.setAttribute('id', `page-${i}`);
    pagination.appendChild(dots);
  }

  videoSection.appendChild(navigation);
  videoSection.appendChild(pagination);
  const first = document.querySelector('#page-1');
  first.innerHTML = '1';
  first.className += ' active';
  none(pagination);
  none(navigation);
}
