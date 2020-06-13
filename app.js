var btn=document.getElementById('btn');
var sec1=document.getElementById('sec1');
var overlay=document.getElementById('morph');

const path1="M1 214V1H1003V214C1003 214 738 92 619 214C500 336 392 332 272 214C152 96 1 214 1 214Z";
const path2="M1 559.5V1H1003V559.5C1003 559.5 790.5 559.5 617.5 559.5C444.5 559.5 481.5 559.5 270.5 559.5C59.5 559.5 1 559.5 1 559.5Z";
const path3="M1 1.5V1H1003V1.5C1003 1.5 785.5 1 574.5 1C363.5 1 486 1 285 1C84 1 1 1.5 1 1.5Z"  ;

var toggle=false;

btn.addEventListener('click', ()=>{

    const timeline=anime.timeline({
        duration: 1300,
        easing: "easeInOutQuint" 
    });

    if (!toggle){
        timeline.add({
            targets: '.morph',
            d: [   
               {value: path1},
               {value: path3}
            ]
        });
    }else {
        timeline.add({
            targets: '.morph',
            d: [   
               {value: path1},
               {value: path2}
            ]
        });
    }
    

    /*var morphing=anime({
        targets: '.morph',
        d: [
            toggle ? {value: path1} : {value: path2}
        ],
        easing: 'easeInOutQuint',
        duration: 1300
    
    })*/
    if(!toggle){
        
        
        toggle=true;
    }
    else {
        toggle=false;
    }
})


console.log(toggle);

