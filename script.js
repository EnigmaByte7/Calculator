let rvalue='';
refresh('0');
mood="day";

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
    setTimeout(function() {
        elem.style.boxShadow = '4px 4px 4px 0px rgb(0 0 0 / 31%), -4px -2px 8px -1px rgba(255,255,255,0.70)';
    }, 150);
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
    else if (id === "magic") {
        if (mood === 'day') {
            mood = "night";
            document.body.style.backgroundColor = 'rgb(24 24 24)';
            document.getElementsByClassName('main')[0].style.backgroundColor = 'rgb(26 23 23)';
            document.getElementById('display').style.backgroundColor='rgb(40 113 8)';
            document.querySelectorAll('.row button').forEach(button => button.style.backgroundColor= '#e0ff26de');
            document.getElementById('display').style.boxShadow='inset 10px 11px 9px -1px rgba(0, 0, 0, 0.425), inset -5px -6px 9px -1px rgb(98 195 56)';
        } else {
            mood = 'day';
            document.body.style.backgroundColor = '#adaeafc9';
            document.getElementsByClassName('main')[0].style.backgroundColor = 'rgb(238, 233, 233)';
            document.getElementById('display').style.backgroundColor='rgb(238, 233, 233)';
            document.getElementById('display').style.boxShadow=' inset 10px 11px 9px -1px rgba(0, 0, 0, 0.425), inset -5px -6px 9px -1px rgba(255,255,255,0.70)';
            document.querySelectorAll('.row button').forEach(button => button.style.backgroundColor= 'rgb(235 235 235)');
        }
    }
    else if (
        !(rvalue === '' && ["=", "/", "*"].includes(id)) ||
        (!["/", "+", "-","*","."].includes(rvalue.slice(0,-1)) || !isNaN(Number(id)))
      ) {
        rvalue += id;
        refresh(rvalue);
      }

}
