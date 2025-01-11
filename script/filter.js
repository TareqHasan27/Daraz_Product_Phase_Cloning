const filterToggle = document.getElementById('filterToggle');
    const filterMenu = document.getElementById('filterMenu');

    filterToggle.addEventListener('click', () => {
        filterMenu.classList.toggle('hidden');
        filterMenu.classList.toggle('block');
        console.log('filterToggle clicked');    
    });