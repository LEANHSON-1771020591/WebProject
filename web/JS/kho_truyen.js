// JS/kho_truyen.js
document.addEventListener('DOMContentLoaded', () => {
    const khoTruyenList = document.getElementById('kho-truyen-list');
    const savedManga = JSON.parse(localStorage.getItem('khoTruyen')) || [];

    // Function to display saved manga
    function displayManga() {
        khoTruyenList.innerHTML = '';
        savedManga.forEach(manga => {
            const mangaItem = document.createElement('li');
            mangaItem.innerHTML = `
                <div class="manga-item">
                    <div class="manga-top">
                        <a href="${manga.link}" class="manga-thumb">
                            <img src="${manga.image}" alt="${manga.name}">
                        </a>
                        <a href="${manga.link}" class="read-now">Đọc Ngay</a>
                    </div>
                    <div class="manga-info">
                        <a href="${manga.categoryLink}" class="manga-cat">${manga.category}</a>
                        <a href="${manga.link}" class="manga-name">${manga.name}</a>
                        <div class="manga-view">${manga.views} View</div>
                    </div>
                </div>
            `;
            khoTruyenList.appendChild(mangaItem);
        });
    }

    displayManga();
});

// Function to save manga
function saveManga(manga) {
    const savedManga = JSON.parse(localStorage.getItem('khoTruyen')) || [];
    savedManga.push(manga);
    localStorage.setItem('khoTruyen', JSON.stringify(savedManga));
    alert('Truyện đã được lưu vào kho!');
}
