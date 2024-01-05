let rvalue='';
refresh('0');

function refresh(value){
    if (value.length > 12){
        value="Over"
    }
    document.getElementById('output').innerHTML=value;
}

function clear(){
    rvalue='';
    refresh('0');
}

function clicked(id){
    const elem = document.getElementById(id);
    elem.style.boxShadow = 'inset 4px 4px 4px 0px rgb(0 0 0 / 31%), inset -4px -2px 8px -1px rgba(255,255,255,0.70)';
    setTimeout(function(id){    
        elem.style.boxShadow = '4px 4px 4px 0px rgb(0 0 0 / 31%), -4px -2px 8px -1px rgba(255,255,255,0.70)';},150);
    if (id === "C"){
        clear();
    }
    else if (id==="=" && rvalue!=='')
    {
        rvalue=Math.round(eval(rvalue)*1000)/1000;
        refresh(rvalue);
    }
    else if (id==="DEL"){
        rvalue=rvalue.slice(0,-1);
        refresh(rvalue);
        if (rvalue === ''){
            refresh('0');
        }
    }
    else if (
        !(rvalue === '' && ["=", "/", "*"].includes(id)) &&
        (!["/", "+", "-","*","."].includes(rvalue.slice(0,-1)) || !isNaN(Number(id)))
      ) {
        rvalue += id;
        refresh(rvalue);
      }
}
