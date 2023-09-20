fetch('./assets/js/DATA.json')
    .then(response => response.json())
    .then(data => {
        const beachList = document.getElementById('content');

        // Menampilkan data di dalam elemen HTML
        data.forEach(beach => {
            const beachItem = document.createElement('article');
            beachItem.innerHTML = `
                <h3 class="content-article__title">${beach.location}</h3>
                <hr>
                <img src="./assets/img/${beach.image}" alt="${beach.beachName}">
                <p class="content-article__description">${beach.description}</p>
                <a class="content-article__button" href="#baca_selengkapnya">Baca Selengkapnya</a>
            `;
            beachList.appendChild(beachItem);
        });
    })
    .catch(error => console.error('Error:', error));
