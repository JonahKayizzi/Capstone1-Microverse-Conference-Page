const speakers = [
    {
        id: 1,
        pic: 'url("assets/img/speaker_01.png")',
        fullname: 'yohai benkler',
        nickname: 'Yochai Benkler',
        position: 'Professor at Harvard Law School',
        keynote: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia. (Main book: The Wealth of the Network , Penguin and Leviathan )',
    },

    {
        id: 2,
        pic: 'url("assets/img/speaker_02.png")',
        fullname: 'Jeon Gil-nam',
        nickname: 'Kilnam Chon',
        position: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
        keynote: "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.",
    },

    {
        id: 3,
        pic: 'url("assets/img/speaker_03.png")',
        fullname: 'Noh So-young',
        nickname: 'Sohyeong Noh',
        position: 'Art Center Nabi Director, CC Korea Director',
        keynote: "As the author of <Digital Art Art of Our Time>, he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving.",
    },

    {
        id: 4,
        pic: 'url("assets/img/speaker_04.png")',
        fullname: 'Julia Leda',
        nickname: 'Julia Reda',
        position: 'Head of the Young Pirates of Europe',
        keynote: "European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU's",
    },

    {
        id: 5,
        pic: 'url("assets/img/speaker_05.png")',
        fullname: 'Layla Trettikov',
        nickname: 'Lila Tretikov',
        position: 'Secretary General of the Wikimedia Foundation',
        keynote: "Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world's population.",
    },

    {
        id: 6,
        pic: 'url("assets/img/speaker_06.png")',
        fullname: 'Ryan Merkley',
        nickname: 'Ryan Merkley',
        position: 'Creative Commons CEO, Former Mozilla Foundation COO',
        keynote: "He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.",
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

  const speakersHeadingContainer = createElementWithClassAndParent('div', 'speakers-heading-container','speakers-heading-container','',speakersSection);
  const speakersHeading = createElementWithClassAndParent('h2','speakers-heading','speakers-heading','main - speaker',speakersHeadingContainer);
  const speakersContainer = createElementWithClassAndParent('div','speakers-container','speakers-container','',speakersSection);

  speakers.forEach((i) => {
    const speakerContainer = createElementWithClassAndParent('div','speaker-container','speaker-container','',speakersContainer);
    const speakerImage = createElementWithClassAndParent('div','speaker-img','speaker-img','',speakerContainer);
    speakerImage.style.backgroundImage = `${speakers[speakers.indexOf(i)].pic}`;
    const speakerName = createElementWithClassAndParent('h5','speaker-name','speaker-name',`${speakers[speakers.indexOf(i)].fullname}`,speakerContainer);
    const speakerNickname = createElementWithClassAndParent('p','speaker-nickname','speaker-nickname',`${speakers[speakers.indexOf(i)].nickname}`,speakerContainer);
    const speakerPosition = createElementWithClassAndParent('p','speaker-position','speaker-position',`${speakers[speakers.indexOf(i)].position}`,speakerContainer);
    const speakerKeynote = createElementWithClassAndParent('p','speaker-keynote','speaker-keynote',`${speakers[speakers.indexOf(i)].keynote}`,speakerContainer);
  });
