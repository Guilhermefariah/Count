function count(){         
    let inputStart = document.getElementById('txtstart')  
    let inputEnd = document.getElementById('txtend')
    let inputPass = document.getElementById('txtpass')
    let divRes = document.getElementById('res')
    
    if (inputStart.value.length == 0 || inputEnd.value.length == 0 || inputPass.value.length == 0){
      //  window.alert('[ERROR] !')
      redivRes.innerHTML = 'Impossible to count!'
    }else{
        divRes.innerHTML = 'Counting:  <br>'
        let start = Number(inputStart.value)
        let end = Number(inputEnd.value)
        let pass = Number(inputPass.value)
        if (pass <= 0){
            window.alert('Invalid step, considering step One')
            pass = 1
        }
        if(start < end){
            // Contagem Crescente 
            for(count= start; count <= end; count+= pass){
                res.innerHTML += ` ${count} \u{1f60d}`
            }
            divRes.innerHTML += `\u{1f3c1}`
            // Contagem Regressiva
        }else {
            for(let count = start; count >= end; count -=pass){
                divRes.innerHTML += ` ${count} \u{1f60d}`
            }
            divRes.innerHTML += `\u{1f3c1}`
        }
    }
}