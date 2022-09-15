const speakers = [
  {
    id: 1,
    pic: 'url("assets/img/speaker_01.png")',
    fullname: 'Peter Dury',
    position: 'Sports commentary (Association football)',
    keynote: 'Peter Drury is a sports commentator who currently works for NBC Sports as the lead main commentator for its Premier League coverage in the United States.',
  },

  {
    id: 2,
    pic: 'url("assets/img/speaker_02.png")',
    fullname: 'Seema Jaswal',
    position: 'British television and radio presenter',
    keynote: "Jaswal hosts the Premier League's worldwide coverage for Premier League Productions which includes flagship shows Kick Off and Fanzone.",
  },

  {
    id: 3,
    pic: 'url("assets/img/speaker_03.png")',
    fullname: 'Jim Beglin',
    position: 'Co-commentator Sky Sports',
    keynote: 'James Martin Beglin is an Irish former professional footballer and current co-commentator for RTÉ, CBS Sports, BT Sport, and Premier League Productions.',
  },

  {
    id: 4,
    pic: 'url("assets/img/speaker_04.png")',
    fullname: 'Jim Proudfoot',
    position: 'Experienced Sports Commentator',
    keynote: 'Jim Proudfoot is an English football commentator who has worked on national radio and television since the late 1990s.',
  },

  {
    id: 5,
    pic: 'url("assets/img/speaker_05.png")',
    fullname: 'Jules Breach',
    position: 'Jules Breach is a British sports broadcaster',
    keynote: 'Breach was born in Brighton, Sussex. She moved with her family to Mauritius until she was 5 at which point she returned to the UK and attended St Mary’s RC Primary School in Portslade, Sussex.',
  },

  {
    id: 6,
    pic: 'url("assets/img/speaker_06.png")',
    fullname: 'Rio Ferdinand',
    position: 'Former England & Man United Player',
    keynote: 'Rio Gavin Ferdinand OBE is an English former professional footballer who played as a centre-back, and is now a television pundit for BT Sport.',
  },
];

const speakersSection = document.getElementById('featured-speakers');

const createElementWithClassAndParent = (newElement, className, id, inHTML, parent) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${inHTML}`;
  parent.appendChild(element);
  return element;
};

const speakersHeadingContainer = createElementWithClassAndParent('div', 'speakers-heading-container', 'speakers-heading-container', '', speakersSection);
createElementWithClassAndParent('h2', 'speakers-heading', 'speakers-heading', 'Featured Speakers', speakersHeadingContainer);
createElementWithClassAndParent('div', 'red-line', 'red-line', '', speakersSection);
const speakersContainer = createElementWithClassAndParent('div', 'speakers-container flex-col', 'speakers-container', '', speakersSection);
const moreButton = createElementWithClassAndParent('button', 'more-button', 'more-button', 'MORE', speakersSection);
moreButton.style.backgroundImage = 'url("assets/img/down.png")';

const populateSpeakers = (start, end) => {
  speakers.slice(start, end).forEach((i) => {
    const speakerContainer = createElementWithClassAndParent('div', 'speaker-container flex-row', 'speaker-container', '', speakersContainer);
    const speakerImage = createElementWithClassAndParent('div', 'speaker-img', 'speaker-img', '', speakerContainer);
    speakerImage.style.backgroundImage = `${speakers[speakers.indexOf(i)].pic}`;
    const speakerContentContainer = createElementWithClassAndParent('div', 'speaker-content-container', 'speaker-content-container', '', speakerContainer);
    createElementWithClassAndParent('h5', 'speaker-name', 'speaker-name', `${speakers[speakers.indexOf(i)].fullname}`, speakerContentContainer);
    createElementWithClassAndParent('p', 'speaker-position clr-o', 'speaker-position', `${speakers[speakers.indexOf(i)].position}`, speakerContentContainer);
    createElementWithClassAndParent('p', 'speaker-keynote', 'speaker-keynote', `${speakers[speakers.indexOf(i)].keynote}`, speakerContentContainer);
  });
};

const mobileScreen = window.matchMedia('(max-width: 768px)');
if (mobileScreen.matches) {
  populateSpeakers(0, 2);

  const moreClick = document.querySelector('.more-button');

  moreClick.addEventListener('click', () => {
    populateSpeakers(2, 6);

    moreButton.style.display = 'none';
  });
} else {
  populateSpeakers(0, 6);
}
