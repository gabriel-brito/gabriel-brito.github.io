'use strict';

export default function Favorite() {
  let favoritesMap = document.querySelectorAll('.favorite');

  favoritesMap.forEach(function(item) {
    item.addEventListener('click', function(){
      this.style.filter == 'invert(0)' 
        ? this.style.filter = 'invert(55%)' 
        : this.style.filter = 'invert(0)';
    });
  });
  console.log('Favorite function ready.')
}