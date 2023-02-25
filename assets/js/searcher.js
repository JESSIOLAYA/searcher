

let loadproducts = () => {

    fecht("https://raw.githubuserconten.com/bootcamp-espol/fsd02/main/s03d03/clase/recursos/products.json")
    .then(response => responde.json()))
    .then(products => {...}
        
    
    fecht("https://raw.githubuserconten.com/bootcamp-espol/fsd02/main/s03d03/clase/recursos/products.xml")
    .then(response => responde.text()))
      .then(result => {
             let xml = (new DOMParser()).parsefromString(result,'aplication/xml');
             let arrayproduct = xml.getelementsbytagname("product")
             for (let item of arrayproduct) {...
             }
      } )
    } catch (error)
    {console.log(error)
    
    }

         

loadproducts()

