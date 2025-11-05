var teamMembers = [
    {
        name: 'Charles Poitras',
        role: 'Frontend Developer',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d0efd6f-0130-47a8-8ffd-daf855766e96/d81bvkf-af3536c4-ebc3-4c6a-ad78-63219b2a70f7.png/v1/fill/w_1024,h_1228,strp/mega_rayquaza_by_theangryaron_d81bvkf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIyOCIsInBhdGgiOiJcL2ZcLzFkMGVmZDZmLTAxMzAtNDdhOC04ZmZkLWRhZjg1NTc2NmU5NlwvZDgxYnZrZi1hZjM1MzZjNC1lYmMzLTRjNmEtYWQ3OC02MzIxOWIyYTcwZjcucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FWSo5Gi3t32adw1dY0NQU3zp1y3YeN3BjiUtzpL9itM',
        link: 'https://github.com/Chiababa',
        info: 'Proficient in HTML, CSS, and Java and Python oh and C++ (Glazing Myself Yes)'
    },
    {
        name: 'Sara Khan',
        role: 'Frontend Developer',
        img:  'https://assets.pokeos.com/pokemon/home/render/670-eternal.png',
        link: 'https://github.com/SaraKn0',
        info: 'No Idea For What To Write'
    },
    {
        name: 'Loik Bernatchez',
        role: 'Full Stack Developer',
        img: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/83ae6c65e360f0b9bfeb3fcf71de6ceab8d5de66.png',
        link: 'https://github.com/loik-b',
        info: 'The Frenchie'
    },
    {
        name: 'Nada Dahbour',
        role: 'Full Stack Developer',
        img:  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/784.png',
        link: 'https://github.com/NadaDahbour',
        info: 'Lucky, I Ran Out Of Idea Tonight'
    },
    {
        name: 'Huiting Huang',
        role: 'Full Stack Developer',
        img: 'https://archives.bulbagarden.net/media/upload/9/93/0957Tinkatink.png',
        link: 'https://github.com/solatohoshi',
        info: 'Still Not Sure'
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