import './get_data_location.js';

const inputUrl = document.querySelector(".form-signup");

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
 
function setCookie(name,value,days) {
    var expires = "";
    expires = "; expires=" + days;

    let result = document.cookie = name + "=" + value  + expires + "; path=/; SameSite=Lax";

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

        console.log(responseData);
        if (responseData.status == 200) {
            alert("Berhasil Membuat Akun")
        }

        window.location.replace("http://ci4api.xyz/login.html");
    } catch (error) {
        console.log("ini error : ",error);
    }
}

const formData = document.querySelector(".form-signup");
formData.addEventListener("submit", handleFormSubmit);
