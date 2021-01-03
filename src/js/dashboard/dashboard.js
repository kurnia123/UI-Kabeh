import { getAccount } from './account.js';
import { getLayananMitra, btnFormUploadProduk } from './layanan-mitra.js';
import './layanan-mitra.js';

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

if (getCookie('token') === null) {
    window.location.replace('http://ci4api.xyz/login.html')
}

document.addEventListener("DOMContentLoaded", function() {
    
    let token = getCookie('token');
    
    // ======================= Load Data ==============
    
    getAccount(token,getCookie)
    
    // Click Event Listener
    let elmAccount = document.querySelector("#list-account-list");
    elmAccount.addEventListener('click', function() {
        getAccount(token, getCookie)
    });

    // ============== Layanan Mitra

    let elmLayananMitra = document.querySelector("#list-mitra-list");
    elmLayananMitra.addEventListener('click', function(){
        getLayananMitra(getCookie);
    })
})
