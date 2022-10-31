let color = null
let letra = null


function pintarLetra(letra, color){
    clear()
    if(letra == "letraT"){
        document.getElementById('div2').style.backgroundColor= color;
        document.getElementById('div3').style.backgroundColor= color;
        document.getElementById('div4').style.backgroundColor= color;
        document.getElementById('div8').style.backgroundColor= color;
        document.getElementById('div13').style.backgroundColor= color;
        document.getElementById('div18').style.backgroundColor= color;
        document.getElementById('div23').style.backgroundColor= color;
       
    }
    else if(letra == "letraF"){
        document.getElementById('div2').style.backgroundColor=color;
        document.getElementById('div3').style.backgroundColor=color;
        document.getElementById('div4').style.backgroundColor=color;
        document.getElementById('div7').style.backgroundColor=color;
        document.getElementById('div12').style.backgroundColor=color;
        document.getElementById('div13').style.backgroundColor=color;
        document.getElementById('div17').style.backgroundColor=color;
        document.getElementById('div22').style.backgroundColor=color;
        
    }
    else{
        document.getElementById('div2').style.backgroundColor=color;
        document.getElementById('div7').style.backgroundColor=color;
        document.getElementById('div12').style.backgroundColor=color;
        document.getElementById('div17').style.backgroundColor=color;
        document.getElementById('div22').style.backgroundColor=color;
        document.getElementById('div23').style.backgroundColor=color;
        document.getElementById('div24').style.backgroundColor=color;
        
    }
    
}

function clear(){
        document.getElementById('div1').style.backgroundColor= 'white';
        document.getElementById('div2').style.backgroundColor= 'white';
        document.getElementById('div3').style.backgroundColor= 'white';
        document.getElementById('div4').style.backgroundColor= 'white';
        document.getElementById('div5').style.backgroundColor= 'white';
        document.getElementById('div6').style.backgroundColor= 'white';
        document.getElementById('div7').style.backgroundColor= 'white';
        document.getElementById('div8').style.backgroundColor= 'white';
        document.getElementById('div9').style.backgroundColor= 'white';
        document.getElementById('div10').style.backgroundColor= 'white';
        document.getElementById('div11').style.backgroundColor= 'white';
        document.getElementById('div12').style.backgroundColor= 'white';
        document.getElementById('div13').style.backgroundColor= 'white';
        document.getElementById('div14').style.backgroundColor= 'white';
        document.getElementById('div15').style.backgroundColor= 'white';
        document.getElementById('div16').style.backgroundColor= 'white';
        document.getElementById('div17').style.backgroundColor= 'white';
        document.getElementById('div18').style.backgroundColor= 'white';
        document.getElementById('div19').style.backgroundColor= 'white';
        document.getElementById('div20').style.backgroundColor= 'white';
        document.getElementById('div21').style.backgroundColor= 'white';
        document.getElementById('div22').style.backgroundColor= 'white';
        document.getElementById('div23').style.backgroundColor= 'white';
        document.getElementById('div24').style.backgroundColor= 'white';
        document.getElementById('div25').style.backgroundColor= 'white';
}
function colorSelect(radio){
    color = radio.value
    if(letra != null){
        pintarLetra(letra, color)
    }
}
function letraSelect(radio){
    letra = radio.value
    if(color != null){
        pintarLetra(letra, color)
    }
}

          