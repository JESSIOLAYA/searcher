
const loadProducts = async (textFilter) => {
  let eProducto = '';
  
  eProducto = await getListProducts('https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json', 'json', textFilter);
  eProducto = eProducto + await getListProducts('https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml', 'xml', textFilter);

  const eListProducts = document.getElementById("listProducts");
  eListProducts.innerHTML = eProducto;
}

const getListProducts = async (url, typeUrl, textFilter) => {

  let xml = '';
  let products = '';
  let listProducts = '';
  let response = await fetch(url);
  let result = (typeUrl === 'xml') ? await response.text(): await response.json();

  products = result;

  if(typeUrl === 'xml'){
    xml = (new DOMParser()).parseFromString(result, 'application/xml');
    products = xml.getElementsByTagName("product");
  }
  
  for (let e of products) {
    let name  = '';
    let src   = '';
    let type  = '';
    let price = '';

    if(typeUrl === 'xml'){
      name  = e.getElementsByTagName("name")[0].innerHTML;
      src   = e.getElementsByTagName("src")[0].innerHTML;
      type  = e.getElementsByTagName("type")[0].innerHTML;
      price = e.getElementsByTagName("price")[0].innerHTML;
    }else{
      name  = e.name;
      src   = e.src;
      type  = e.type;
      price = e.price;
    }

    if(name === textFilter || type === textFilter || textFilter === ''){
      listProducts = listProducts + `
      <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
        <div class="card card-blog card-plain">
          <div class="card-header p-0 mt-n4 mx-3">
            <a class="d-block shadow-xl border-radius-xl">
              <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
            </a>
          </div>
          <div class="card-body p-3">
            <p class="mb-0 text-sm">${type}</p>
            <a href="javascript:;">
              <h5>
                ${name}
              </h5>
            </a>
            <p class="mb-4 text-sm">
              <b>Price: </b> $ ${price}
            </p>
          </div>
        </div>
      </div>`;
    }
    
  }

  return listProducts;

}


const btnFilter = document.getElementById("filter");

btnFilter.addEventListener('click', () => {
  const text = document.getElementById("text").value;
  loadProducts(text);
})

