
export function getLayananMitra(getCookie) {
    let content = document.querySelector('.content-ku');
    if (getCookie('is_seller') != '1') {
        fetch('../../template/dashboard/list-mitra-list-non.html')
        .then(res => res.text())
        .then(res => {
            content.innerHTML = res;

            let btnJoinMitra = document.querySelector('.btn-join-mitra');
            btnJoinMitra.addEventListener('click', function() {
            
                let myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${getCookie('token')}`);
                
                let requestOptions = {
                    method: 'GET',
                    // headers: myHeaders
                };
                
                fetch(`http://api.ci4api.xyz/user/${getCookie('id_user')}`, {method: 'GET'})
                    .then(response => response.json())
                    .then(res => {
                        let formData = new FormData();
                        for(let key in res) {
                            if (key == 'id_user') {
                                delete res.id_user;
                            } else if (key == 'is_seller') {
                                res[key] = 1;
                            }
                            // formData.append(key, res[key]);
                        }
                        console.log(res);
                        fetch(`http://api.ci4api.xyz/user/${getCookie('id_user')}`,{
                            method: 'PUT',
                            body: JSON.stringify(res)
                        })
                        .then(res => res.json())
                        .then(res => {
                            console.log(res)
                            let d = new Date()
                            let days = d.toString().split(' ')[0];
                            document.cookie = "is_seller = 1; expires=" + 
                            + days + ','
                            + d.toString().substr(4,12)
                            + d.getHours() + 5 + ":" + d.getMinutes() + ":" + d.getSeconds() + ' GMT'
                            + "; path=/; SameSite=Lax";
                        })
                    })
                    .catch(error => console.log('error', error));
            })
        })
    } else {

        fetch('../../template/dashboard/list-mitra-list.html')
        .then(res => res.text())
        .then(res => {
            content.innerHTML = res;

            let elmBtnFormUploadProduk = document.querySelector('.form_produk_upload');
            elmBtnFormUploadProduk.addEventListener('submit', function(e) {
                e.preventDefault();
                
                console.log('ini form')
            })
        })

    }
}