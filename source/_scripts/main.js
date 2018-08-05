import Fetch from '../_modules/fetchModule/fetch';
import Favorite from '../_modules/actions/favorite';
import Details from '../_modules/actions/details';

'use strict';

(function(){
  let fetch = new Fetch();
  
  setTimeout(() =>{
    Favorite();
    Details();
  }, 1000);

})();