// import './layanan-mitra.js';

let elmSideMenu = document.querySelector('.dashboard_container_sideMenu').children;
let content = document.querySelector('.content-ku');

elmSideMenu.forEach(itemElm => {
    if(itemElm.localName == "hr") {
        return;
    }

    itemElm.addEventListener('click', function(event) {
        console.log(event.target.attributes['id'].value);
        let nameFile = event.target.attributes['id'].value;
        
        // cek page Layanan Mitra
        if (nameFile == 'list-mitra-list') {
            nameFile = nameFile + "-non";
        }
        
        fetch(`../../template/dashboard/${nameFile}.html`)
        .then(res => res.text())
        .then(res => {
            console.log(res);
            content.innerHTML = res;
        })
    })
})