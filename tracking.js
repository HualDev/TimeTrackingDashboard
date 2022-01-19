
let d=document.getElementsByClassName('daily')
let w=document.getElementsByClassName('weekly')
let m=document.getElementsByClassName('monthly')

document.getElementById('d').addEventListener('click', daily)
document.getElementById('w').addEventListener('click', weekly)
document.getElementById('m').addEventListener('click', monthly)


    

function daily(){   

    document.getElementById('d').style.color='whitesmoke'
    document.getElementById('w').style.color='hsl(236, 100%, 87%)'
    document.getElementById('m').style.color='hsl(236, 100%, 87%)'
    for(i=0; i<d.length; i++){
        d[i].style.display='flex'
        w[i].style.display='none'
        m[i].style.display='none'
    }    
}

function weekly(){   

    document.getElementById('d').style.color='hsl(236, 100%, 87%)'
    document.getElementById('w').style.color='whitesmoke'
    document.getElementById('m').style.color='hsl(236, 100%, 87%)'
    for(i=0; i<d.length; i++){
        d[i].style.display='none'
        w[i].style.display='flex'
        m[i].style.display='none'
    }    
}

function monthly(){   

    document.getElementById('d').style.color='hsl(236, 100%, 87%)'
    document.getElementById('w').style.color='hsl(236, 100%, 87%)'
    document.getElementById('m').style.color='whitesmoke'
    for(i=0; i<d.length; i++){
        d[i].style.display='none'
        w[i].style.display='none'
        m[i].style.display='flex'
    }    
}