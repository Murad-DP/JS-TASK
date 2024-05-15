function per(){
    
    let value = document.getElementById("p")
    if(en!='' || uzunluq!=''){

        let en = parseInt(document.getElementById("en").value);
        let uzunluq = parseInt(document.getElementById("uzunluq").value);
        
        let cavab = 2 * (parseInt(en) + parseInt(uzunluq));

        en = parseInt(document.getElementById("en").value = '');
        uzunluq = parseInt(document.getElementById("uzunluq").value = '');
        
        value.innerHTML = `<p>Perimetr: </p> ${cavab}`
    }else{
        alert("Xanalari doldurun...")
    }
}

function sahe(){

    let value = document.getElementById("s")
    if(en!='' || uzunluq!=''){

        let en = parseInt(document.getElementById("en").value);
        let uzunluq = parseInt(document.getElementById("uzunluq").value);
        
        let result = parseInt(en) * parseInt(uzunluq);

        value.innerHTML = `<p>Sahə: </p> ${result}`
    }else{
        alert("Xanalari doldurun...")
    }
}