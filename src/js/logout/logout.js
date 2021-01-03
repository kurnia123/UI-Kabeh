// function delete_cookie( name, path, domain ) {
//     if( get_cookie( name ) ) {
//         document.cookie = name + "=" +
//         ((path) ? ";path="+path:"")+
//         ((domain)?";domain="+domain:"") +
//         ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
//     }
// }

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

let delete_cookie = function (name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

// delete_cookie('id_user','/','localhost')
// delete_cookie('is_seller','/','localhost')
// delete_cookie('token','/','localhost')
delete_cookie('id_user')
delete_cookie('is_seller')
delete_cookie('token')
console.log(getCookie('id_user')) 
console.log(getCookie('is_seller'))
console.log(getCookie('token'))

window.location.replace("http://ci4api.xyz/login.html");