var teamMembers = [
    {
        name: 'Charles Poitras',
        role: 'Frontend Developer',
        img:  'imgs/teams/charlespoitras.jpg',
        link: 'https://github.com/Chiababa',
        info: 'Proficient in HTML, CSS, and Java and Python, C++, and learning assembly'
    },
    {
        name: 'Sara Khan',
        role: 'Frontend Developer',
        img:  'imgs/teams/saraimg.jpg',
        link: 'https://github.com/SaraKn0',
        info: 'Proficient in Python, HTML, and CSS, with a strong focus on building clean and user-friendly interfaces'
    },
    {
        name: 'Loik Bernatchez',
        role: 'Full Stack Developer',
        img: 'imgs/Loik_picture.png',
        link: 'https://github.com/loik-b',
        info: 'Proficient in HTML, CSS, Java and Python'
    },
    {
        name: 'Nada Dahbour',
        role: 'Full Stack Developer',
        img:  'imgs/teams/nada.jpeg',
        link: 'https://github.com/NadaDahbour',
        info: 'Full-stack developer committed to smooth front-end experiences and dependable back-end solutions.'
    },
    {
        name: 'Huiting Huang',
        role: 'Full Stack Developer',
        img: 'imgs/teams/huitinghuang.jpg',
        link: 'https://github.com/solatohoshi',
        info: 'Detailed oriented and hardworking developer with a passion for creating seamless user experiences.'
    },
    {
        name: 'Josh Barnabas',
        role: 'Full Stack Developer',
        img:  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/155.png',
        link: 'https://github.com/member6',
        info: 'The Other Pokemon Fan'
    }
];

var currentIndex = 0;

function displayMember() {
    var member = teamMembers[currentIndex];
    var memberDiv = document.getElementById('member');
    
    memberDiv.innerHTML = '<a href="' + member.link + '" target="_blank">' +
                          '<img src="' + member.img + '" alt="' + member.name + '">' +
                          '</a>' +
                          '<h2>' + member.name + '</h2>' +
                          '<p class="role">' + member.role + '</p>' +
                          '<div class="info"><p>' + member.info + '</p></div>';
}

function previousMember() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = teamMembers.length - 1;
    }
    displayMember();
}

function nextMember() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= teamMembers.length) {
        currentIndex = 0;
    }
    displayMember();
}

displayMember();
