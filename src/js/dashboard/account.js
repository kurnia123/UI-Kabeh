export function getAccount(token="", getCookie) {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  let requestOptions = {
      method: 'GET',
      // headers: myHeaders
  };
  
  fetch(`http://api.ci4api.xyz/user/${getCookie('id_user')}`, requestOptions)
  // fetch(`http://localhost:8081/user/1`)
      .then(response => response.json())
      .then(res => {
          let htmlElement = `
          <p class="fw-bold fs-4">Informasi Mitra</p>
          <hr />
          <div class="row">
            <div class="col-sm-5 mt-5">
              <h5 class="fw-bold">Kontak</h5>
              <p class="fs-6">${res.username_user}</p>
              <p class="fs-6">${res.no_telephone}</p>
              <div class="d-flex justify-content-between">
                <a href="#" class="text-decoration-underline">Edit</a>
                <a href="#" class="text-decoration-underline">Change Password</a>
              </div>
            </div>
            <div class="col-sm-2 mt-5"></div>
            <div class="col-sm-5 mt-5">
              <h5 class="fw-bold">Bio</h5>
              <p class="fs-6">Penyedia layanan dekor nomor satu di Kuvukilan</p>
              <a href="#" class="text-decoration-underline">Edit</a>
            </div>
          </div>
          <br />
          <p class="fw-bold fs-4 mt-5">Alamat</p>
          <hr />
          <div class="row mb-5">
            <div class="col-sm-5 mt-5">
              <h5 class="fw-bold">Alamat Mitra</h5>
              <p class="fs-6">${res.alamat}</p>
              <a href="#" class="text-decoration-underline">Edit Address</a>
            </div>
            <div class="col-sm-2 mt-5"></div>
            <div class="col-sm-5 mt-5">
              <h5 class="fw-bold">Jangkauan Layanan</h5>
              <p class="fs-6">Area sekitar ${res.kabupaten}</p>
              <a href="#" class="text-decoration-underline">Edit Address</a>
            </div>
          </div>        
          `
          let content = document.querySelector('.content-ku');
          content.innerHTML = htmlElement;
          console.log(res);
      })
      .catch(error => console.log('error', error));
}