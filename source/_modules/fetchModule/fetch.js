'use strict';

const URL = 'https://5b6264dd07412d00142acf61.mockapi.io/api/v1/cars';

export default class Fetch {
  constructor(){
    this.getData(URL);
    console.log('Fetch module ready.');
  }

  getData(URL){
    fetch(URL)
      .then(data => data.json())
      .then(data => {
        let container = document.getElementById('dataContainer'); 
        let map = data.map((item) => {
          this.renderCars(item, container);
        });
      });
  }

  renderCars(data, container){
    let discount = false;
    data.imageName == 'red-car' ? discount = true : '';

    container.innerHTML += `
      <article class="m-product">
        <div class="m-productShape">
          <div class="m-productAboveTablet">
            <div class="m-productShape__image">
              <img src="/public/images/${data.imageName}.png" alt="${data.name} Car">
              ${discount ? '<p class="discount">desconto <span>20%</span></p>' : '' }
              ${discount ? '<i class="rent-icon"><img src="/public/images/hertz.png" alt="Hertz"></i>'
                : '<i class="rent-icon"><img src="/public/images/budget.png" alt="Budget"></i>'}       
            </div>
          
            <div class="m-productInfo">
              <a class="title" href="javascript:void(0)">
                <h2>${data.name}</h2>
              </a>
              
              <p class="m-productInfo__mainInfo">código da taxa: ${data.taxCode}</p>
              <p class="m-productInfo__mainInfo">${data.brand}</p>

              <ul class="m-productInfo__list">
                <li class="m-productInfo__listItem">Quilometragem livre</li>
                <li class="m-productInfo__listItem">Seguro total do veículo</li>
                <li class="m-productInfo__listItem">seguro a terceiros</li>
                <li class="m-productInfo__listItem">Taxas de serviço inclusas</li>
              </ul>

              <a href="javascript:void(0)" class="m-productInfo__detailTrigger">
                Mais detalhes
                <i>
                  <img src="/public/images/plus-icon.png" alt="plus icon">
                </i>
              </a>

              <a class="favorite" href="javascript:void(0)">
                <img src="/public/images/red-heart-icon.png" alt="Favorite Heart">
              </a>        
            </div>

            <div class="m-productSpecifications">
              <p>${data.details}.</p>
            </div>

            <div class="m-productDetails">
              <ul class="m-productDetails__list">
                
                <li class="m-productDetails__listItem">
                  <i class="icon">
                    <img src="/public/images/car-icon.png" alt="car icon">
                  </i>
                  <a href="javascript:void(0)"><span>${data.doors} </span>portas</a>
                </li>

                <li class="m-productDetails__listItem">
                  <i class="icon">
                    <img src="/public/images/air-conditioner-icon.png" alt="air conditioner icon">
                  </i>
                  <a href="javascript:void(0)">Ar-condicionado</a>
                </li>
                
                ${data.powerWindows
                  
                  ? `<li class="m-productDetails__listItem">
                      <i class="icon">
                        <img src="/public/images/power-glass-icon.png" alt="power glass icon">
                      </i>
                      <a href="javascript:void(0)">Vidro elétrico</a>   
                    </li>`: '' 
                }
              </ul>

              <ul class="m-productDetails__list">

                <li class="m-productDetails__listItem">
                  <i class="icon">
                    <img src="/public/images/user-icon.png" alt="user icon">
                  </i>
                  <a href="javascript:void(0)"><span>${data.capacity} </span>pessoas</a>
                </li>

                <li class="m-productDetails__listItem">
                  <i class="icon">
                    <img src="/public/images/automatic-icon.png" alt="automatic icon">
                  </i>
                  <a href="javascript:void(0)">Automático</a>
                </li>

                ${data.cdOrUsb 
                  ? `<li class="m-productDetails__listItem">
                      <i class="icon">
                        <img src="/public/images/usb.png" alt="cd or usb icon">
                      </i>
                      <a href="javascript:void(0)">CD ou USB</a>
                    </li>
                    ` : ''
                  }
              </ul>

              <ul class="m-productDetails__list">
                <li class="m-productDetails__listItem">
                  <i class="icon">
                    <img src="/public/images/bag-icon.png" alt="bag icon">
                  </i>
                  <a href="javascript:void(0)"><span>${data.bags} </span>malas</a>
                </li>

                ${data.hidraulic
                  ? `<li class="m-productDetails__listItem">
                      <i class="icon">
                        <img src="/public/images/wheel-icon.png" alt="wheel icon">
                      </i>
                      <a href="javascript:void(0)">Direção hidráulica</a>
                    </li>`  : ''
                }                
                
                ${data.radio
                  ? `<li class="m-productDetails__listItem">
                      <i class="icon">
                        <img src="/public/images/radio-icon.png" alt="radio icon">
                      </i>
                      <a href="javascript:void(0)">Radio AM/FM</a>
                    </li>` : ''
                }
              </ul> 
            </div>
          </div>

          <div class="m-productFooter">
            <div class="m-productFooterWrapper">
              <h3>Total da locação</h3>
              ${discount 
                ? `<span class="from">de R$ 938</span>` : ''
              }      
              <p class="newPrice">por <span>R$ 838</span></p>
              <span class="payment-condition">em até 10x</span>

              <a href="javascript:void(0)" class="c-button">alugar</a>

              <span class="tax-information">Taxas inclusas</span>
            </div>
          </div>
        </div>  
      </article>
    `;
  }
}