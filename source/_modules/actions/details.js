'use strict';

export default function Details() {
  let detailsMap = document.querySelectorAll('.m-productInfo__detailTrigger');

  detailsMap.forEach(function(item) {
    item.addEventListener('click', function(){
      let trigger = this;
      let target = this.parentElement.nextElementSibling;

      if(target.style.display == 'block'){
        target.style.display = 'none';
        trigger.innerHTML = `
          <a href="javascript:void(0)" class="m-productInfo__detailTrigger">
            Mais detalhes
            <i>
              <img src="public/images/plus-icon.png" alt="plus icon">
            </i>
          </a>`;
      } else {
        target.style.display = 'block';
        trigger.innerHTML = `
          <a href="javascript:void(0)" class="m-productInfo__detailTrigger">
            Fechar detalhes
            <i>
              <img src="public/images/close-icon.png" alt="close icon">
            </i>
          </a>`;
       }
    });
  });
  console.log('Details Function Ready.')
}