


function hitungKata(str){
   let strSlt = str.split('')
    let output = []

    let vocal = 'aiueo'

    for(let i = 0; i < strSlt.length; i++ ){
       
            if(i == 0 ){
                output.push({huruf: strSlt[i], total: 1})
            }else{
        
            let arrStrJml = false
            let index = 0
            
            for(let j = 0; j < output.length; j++){
                if(output[j].huruf == strSlt[i]){
                    arrStrJml = true
                    index = j
                }
            }
            if(arrStrJml == true){
                output[index].total++
            }else{
            output.push({huruf : str[i], total: 1})
            }
        }
         
        
    
        
    } 

    console.log(output)
    
}


hitungKata('heeeloow')


let kata = "helllooe"
let strKata = kata.split('')

let vocal = 'aiueo'
let output = []

for(let i = 0; i < strKata.length; i++){
    for(let j = 0; j < vocal.length; j++){
        if(strKata[i] == vocal[j]){
            output.push(strKata[i])
        }
    }
    
}



console.log(output)