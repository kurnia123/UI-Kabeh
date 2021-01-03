// ======================= proses load data lokasi ========================

let elmProvinsi = document.querySelector('#provinsi');
let elmKabupaten = document.querySelector('#kabupaten');
let elmKecamatan = document.querySelector('#kecamatan');

let url_get_data_provinsi = 'https://dev.farizdotid.com/api/daerahindonesia/provinsi';
let url_get_data_kabupaten = 'https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=';
let url_get_data_kecamatan = 'https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=';


function loadData(url, elmSelect, region) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
                let htmlChildOptions = '';
                res[region].forEach(item => {
                    htmlChildOptions += `
                    <option id="${item.id}" value="${item.nama}|${item.id}">${item.nama}</option>
                    `;
                })
                elmSelect.innerHTML = htmlChildOptions;
            })
            .catch(err => console.log(err))
            
        elmSelect.addEventListener('change', function() {
            console.log(elmSelect.value);
            resolve(elmSelect.value);
        })
    })
}

// proses get data provinsi
loadData(url_get_data_provinsi, elmProvinsi, 'provinsi')
.then(function(val) {
    let valId = val.split('|');
    return loadData(url_get_data_kabupaten+valId[1], elmKabupaten, 'kota_kabupaten');
})
.then(function(val) {
    let valId = val.split('|');
    loadData(url_get_data_kecamatan+valId[1], elmKecamatan, 'kecamatan');
})
.then(function(val) {
    console.log(val.split('|'))
})

// proses get data kabupaten