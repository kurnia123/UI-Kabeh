import * as mdb from 'mdb-ui-kit';

export default {
  mdb,
};


function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


let token = getCookie('token');
let elmProfile = document.querySelector('.nav_dropdown-menu-profile');
let elmBtnLogin = document.querySelector('.nav_btn-login-profile');

if (token !== null) {
  console.log('token ada')
  elmProfile.classList.add('nav_profile-active');
  elmBtnLogin.classList.remove('nav_profile-active')
} else {
  console.log('token tidak ada')
  elmProfile.classList.remove('nav_profile-active');
  elmBtnLogin.classList.add('nav_profile-active');
}