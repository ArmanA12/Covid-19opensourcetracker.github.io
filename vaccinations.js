console.log("mr arman shekh");
function mr(){
  let mr =   document.getElementById("mr");
   mr.style.display ='block';
}
function mr1(){
let mr1 = document.getElementById('mr');
   mr1.style.display ='none';
}
function site(){
    let x = document.getElementById('m');
    x.style.display='block';
}
function siteout(){
    let y = document.getElementById('m');
    y.innerHTML= "mr arman shekh there are not working due to methode ";
}

var vaccinbyg = document.getElementById("vaccinbyg").getContext('2d');
var chart = new Chart( vaccinbyg, {
    type:"doughnut",
    data: {
        labels: ["Male","Female","TransGender"],
        datasets: [{
            label:"",
            data: [909067037,871311291,50000],
            backgroundColor:[
                'blue' ,
                'rgb(245, 38, 90)',
                'rgba(255, 205, 86, 0.9)'
            ],
            fill: false,
            borderColor:[
                'blue',
                'rgb(245, 38, 90)',
                'rgba(255, 205, 86, 0.9)'

            ],
            minBarLength:20,
            tension:0.8
        }
    ]
    }
})

var vaccinbytype = document.getElementById('vaccinbytype').getContext('2d');

var chart = new Chart( vaccinbytype, {
    type:"doughnut",
    data: {
        labels: ["Covishield","Covaxin","Sputnik"],
        datasets: [{
            label:"",
            data: [1501435214,301529230,7634587],
            backgroundColor:[
                'blue' ,
                'rgb(248, 168, 76)'   ,
                'rgb(14, 97, 3)'
            ],
            fill: false,
            borderColor:[
                'blue',
                'rgb(248, 168, 76)',
                'rgb(14, 97, 3)'
            ],
            minBarLength:20,
            tension:0.8
        }
    ]
    }
})

var vaccinbyage = document.getElementById('vaccinbyage').getContext('2d');
var chart = new Chart( vaccinbyage, {
    type:"bar",
    data: {
        labels: ["18-44","45-60","12-15","15-17","Above 60"],
        datasets: [{
            label:"",
            data: [1057835956,401537588,1138254,91499390,253311759],
            backgroundColor:[
                'green' ,
                'grey'   ,
                'rgba(255, 205, 86, 0.9)',
                'red',
                'rgba(60, 5, 71)'
            ],
            fill: false,
            borderColor:[
                'green',
                'grey'
            ],
            minBarLength:20,
            tension:0.8
        }
    ]
    }
})
function pp(){
   let b = document.getElementById("vp1");
   b.style.display ='block';
}
function pf(){
    let c = document.getElementById('vp1');
    c.style.display  ='none';
}

