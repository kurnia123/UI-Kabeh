const inputUrl = document.querySelector(".input-url-redirect");

const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('url');
const myParam = "http://ci4api.xyz";

inputUrl.value = myParam;

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
 
function setCookie(name,value) {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*36000;
    now.setTime(expireTime);
    let result = document.cookie = name + "=" + value + "; expires=" + now.toUTCString() + "; domain=.ci4api.xyz; path=/; SameSite=Lax";

    console.log("Result Cookies : ",result);
    console.log("Cek after setCookies : ",getCookie(name));
}

async function postFormDataAsJson({url, formData}) {
    const fetchOptions = {
        method: "POST",
        body: formData
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();
}


async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({url, formData});

        let data = responseData.token.split('|');
        console.log(responseData);

        setCookie('token', data[0]);
        setCookie('id_user', data[1]);
        setCookie('is_seller', data[2]);

        console.log("Cookies Token : ", getCookie('token'));
        console.log("Cookies id_user : ", getCookie('id_user'));
        console.log("Cookies is_seller : ", getCookie('is_seller'));

        if (getCookie('token') !== null) {
            window.location.replace(data[3]);
        }
    } catch (error) {
        console.log("ini error : ",error);
    }
}

const formData = document.querySelector(".form-login");
formData.addEventListener("submit", handleFormSubmit);


if (getCookie("token") != null) {
    window.location.replace("http://ci4api.xyz");
}