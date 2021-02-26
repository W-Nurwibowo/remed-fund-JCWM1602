function showData(index){
    let getTable = document.getElementById('table-produk')

    
    let getTbody = document.getElementById('data')

    

    let tr = ''
    for(let i =0 ; i < dataProduct.length; i++){
        if(i == index){
            console.log()
            tr += 
                    ` <tr>
                        <td>
                            <center><input type="text" name="product-name" value="${index+1}" class="input-edit-product"></center>
                        </td>
                         
                        <td>
                            <center><input type="text" name="product-name" value="${dataProduct[index].nama}" class="input-edit-product"></center>
                        </td>
                        <td>
                            <center><input type="text" name="product-name" value="${dataProduct[index].harga}" class="input-edit-product"></center>
                        </td>
                        <td>
                            <select name="value" class="inputProduk" id="category">
                                <option value="food">food</option>
                                <option value="drink">drink</option>
                                <option value="other">other</option>
                            </select>
                        </td>
                        <td>
                        <center>
                            <input type="button" name="button-save" value="Save" onClick="saveProduct(${index})">
                            <input type="button" name="button-cancel" value="Cancel" onClick="showData()">
                        </center>
                        </td>

                    </tr>
            
            
            `
        }else{
        
        
        tr +=`
        
            <tr>
                <td>
                    <center>${i+1}</center>
                </td>
                <td>
                    <center>${dataProduct[i].nama}</center>
                </td> 
                <td>
                    <center>${dataProduct[i].harga}</center>
                </td> 
                <td>
                    <center>${dataProduct[i].category}</center>
                </td> 

                <td>
                    <center><input type="button" value="edit" onClick="editProduct(${i})"></center>
                    <center><input type="button" value="delete" onClick="deleteProduct(${i})"></center>
                </td> 

            </tr>
        
        `
        }
    }
    getTbody.innerHTML = tr + `<tr> 
                                    <td>
                                        #
                                    </td>
                                    <td>
                                        <input type="text" class="inputProduk" placeholder="nama barang" id='namaProduk'  >
                                    </td>
                                    <td>
                                        <input type="text" class="inputProduk" placeholder="harga barang" id='hargaProduk' >
                                    </td>
                                    <td>
                                        <select name="value" class="inputProduk" id="category">
                                            <option value="food">food</option>
                                            <option value="drink">drink</option>
                                            <option value="other">other</option>
                                        </select>
                                    </td>
                                    <td>
                                       <center><input type="button" value="add" id="add"></center>
                                    </td>
                                </tr>
                                ` 
}

showData()


function tambahProduk(){
    let input = document.getElementsByName('inputProduk').value

    let namaProduk = document.getElementById('namaProduk').value
    let Harga = document.getElementById('hargaProduk').value
    let catergory =document.getElementById('category').value

    if(namaProduk && Harga && catergory){
        dataProduct.push({
            nama: namaProduk,
            harga: Harga,
            category: catergory
        })
        showData()
        input[0].value = ''
        input[1].value = ''
        input[2].value = ''
    }else{
        alert('produk harus terisi')
    }

}

document.getElementById('add').addEventListener("click", tambahProduk)

function deleteProduct(index){
    let confirmbox = confirm(`apakan anda akan mendelet ${dataProduct[index].nama}`)

    if(confirm){
        dataProduct.splice(i, 1)

        showData()
    }
}


function editProduct(i){
    let confirmbox = confirm(`apakan anda akan mengedit ${dataProduct[i].nama}`)

    // if(confirm == true){
    //     showData(i)

    // }

    showData(i)
}


function saveProduct(index){
    let inputs = document.getElementsByClassName('input-edit-product')
    
    let productName = inputs[1].value
    let harga = inputs[2].value
    let category = document.getElementById('category').value
    

    if(productName && harga && category){
        dataProduct[index].nama = productName
        dataProduct[index].harga = harga
        dataProduct[index].category = category
      

        alert('Edit Data Success!')
        showData()
        
    }else{
        alert('prodak harus terisi')
    }
}

