
const Apil="https://api.covid19api.com/summary";

async function getdata() {
    const response = await fetch(Apil);

    const data = await response.json();
    var length = data.length;
    console.log("Array length " + length);
    console.log(data);

    var confirm = document.getElementById('totalcon');
    var Recover = document.getElementById('totalrec');
    var death = document.getElementById('totaldet');
    

    confirm.append(data.Global.TotalConfirmed);
    death.append(data.Global.TotalDeaths);
    Recover.append(356,363,885);

    var cor = data.Global.TotalConfirmed;
    var dor = data.Global.TotalDeaths;
    var ror = 356363885;


    var country = [];
    var countryDeath = [];
    var countryconfirm = [];
    var reco = [];
    var newconfirm = [];
    var newdeta = [];
    var newReco = [];

    for (i = 1; i < 100; i++) {
        country.push(data.Countries[i].Country);
        countryDeath.push(data.Countries[i].TotalDeaths);
        countryconfirm.push(data.Countries[i].TotalConfirmed);
        newconfirm.push(data.Countries[i].NewConfirmed);
        newdeta.push(data.Countries[i].NewDeaths);
        newReco.push(data.Countries[i].NewRecovered);
    }
    for (i = 100; i < 190; i++) {
        country.push(data.Countries[i].Country);
        countryDeath.push(data.Countries[i].TotalDeaths);
        countryconfirm.push(data.Countries[i].TotalConfirmed);
        reco.push(data.Countries[i].TotalRecovered);
        newconfirm.push(data.Countries[i].NewConfirmed);
        newdeta.push(data.Countries[i].NewDeaths);
        newReco.push(data.Countries[i].NewRecovered);
        
    }
    console.log(reco);
    console.log(countryDeath);
  //  var tablecountry = document.getElementById('tablecountry');
  //  var newactive = document.getElementById('newactive');
   // var newdeath = document.getElementById('newdeath');
   // var newrecover = document.getElementById("newrecover");
   // var totalactive = document.getElementById("totalactive");
  //  var totaldeath = document.getElementById(" totaldeath");
  //  var totalrecover = document.getElementById("totalrecover")
  // for(i = 100; i<185; i++){
  //  tablecountry.append(country[i],('\n'));
  //  newactive.append(newconfirm[i],('\n'));
  //  newdeath.append(newdeta[i],('\n'));
  //  newrecover.append(newReco[i],('\n'));
  //  totalactive.append(countryconfirm[i],('\n'));
  //  totalrecover.append(reco[i],('\n'));

 // }


    var chart3 = document.getElementById("myChart3").getContext("2d");

    var chart = new Chart(chart3, {

        type: "bar",
        data: {
            labels: country,
            datasets: [{
                label: "Confirmed",
                data: countryconfirm,
                fill: true,
                backgroundColor:"green",
                borderColor: 'rgb(69,238,83)',
                minBarLength:50,
                tension:0.8
        

            },
            {
                label: "Deaths",
                data: countryDeath,
                fill: true,
                backgroundColor:"red",
                borderColor:"red",
                minBarLength:50,
                tension:0.9
            }
            ]
        }
    })

    var chart4 = document.getElementById("sog").getContext("2d");

    var chart = new Chart(chart4, {

        type: "line",
        data: {
            labels: ['16/20/March','18/20/May','10/20/Aug','10/20/Oct','14/20/Dec','15/21/Feb','12/21/April','14/21/June','23/21/Aug','20/21/Sept','11/21/Oct','20/21/Dec','3/22/Jun','2/22/Feb'],
            datasets: [{
                label: "Confirmed",
                data: [168958,694133,1827270,3122024,45550808,2568493,5223083,2553307,4577761,3523185,28789924,5852273,15792856,162639944],
                backgroundColor: 'blue',
                fill: false,
                borderColor: 'blue',
                minBarLength:20,
                tension:0.8
        

            }
            ]
        }
    })
    var d1 = dor / 100 * 60.2;
    var d2 = dor / 100* 39.9;
    var d3 = dor / 100 * 2;
    var de = [d1,d2,d3];

    var r1 = document.getElementById('k1');
    var r2 =  document.getElementById('k2');
    var r3 = document.getElementById('k3');

    r1.append(d1);
    r2.append(d2);
    r3.append(d3);

    var chartm = document.getElementById("male").getContext("2d");

    var chart= new Chart(chartm, {

        type:"doughnut" ,
        data: {
            labels: [" Male : 60.2%","Female : 39.2%","TransGender : 0.002%"],
            datasets: [{
                label: "Confirmed",
                data: de,
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)' ,
                    'rgba(54, 162, 235, 0.6)'   ,
                    'rgba(255, 205, 86, 0.9)'
                ],
                fill: false,
                borderColor:[
                     'rgb(255, 99, 138)',
                      'rgb(54, 162, 238)',
                      'rgb(255, 205, 88)'         
                ],
                minBarLength:20,
                tension:0.8
            }
            ]
        }
    })
    var myChartgp= document.getElementById("myChartgp").getContext('2d');

    var chart = new  Chart(myChartgp,{
       type:"line",
        data: {
           labels:["Jun 30", "Sep 30","Dec 31","Mar 31","Jun 30","Sep 30","Dec 31","Feb 14"],
           datasets:[
               {   
                   label:"Europe",
                   data: [19082031,45655310,190730101,315871371,393037470,491763669,707870085,1181936583],
                   fill:true,
                   borderColor:"rgb(194, 221, 71)",
                   tension:0.2
               },
               {
                   label:"Americas",
                   data: [38382980,117997859,250454013,392792510,506705998,629359437,722329560,1010252383],
                   fill:true,
                   borderColor:"orange",
                   tension:0.2
               },
               {
                   label:"South East",
                   data: [5894076,49547369,83799956,104609586,244648073,301009805,314732462,383008894],
                   fill:true,
                   borderColor:'rgb(5,5,116)',
                   tension:0.2
               },{
                  label:"Westearn",
                  data:[1530762,4304229,7620952,13418114,2503319,59831312,90709304,139571345],
                  fill:true,
                  borderColor:'rgb(92,6,66)',
                  tension:0.8
               },
               {
                label:"Estearn",
                data:[7678040,16897318,34386495,52957000,77173587,110297463,120053988,144505722],
                fill:true,
                borderColor:'rgb(9, 202, 144)',
                tension:0.8
               },
               {
                   label:"Africa",
                   data:[2239752,8311731,13286061,21664185,28520510,42165748,50437013,57812675],
                   fill:true,
                   borderColor:'rgb(153, 15, 207)',
                   tension:0.8
               }
           ]
        },
   })




   var p1 = cor / 100 * 54.9;
   var p2 = cor / 100 *46.1;
   var p3 = cor / 100 *2;
   var arr = [p1,p2,p3];
   var c1 = document.getElementById('m1');
   var c2 = document.getElementById('f1');
   var c3 = document.getElementById('g1');
   c1.append(p1);
   c2.append(p2);
   c3.append(p3);
    var chartf = document.getElementById("female").getContext("2d");
    var chart= new Chart(chartf, {
        type:"bar" ,
        data: {
            labels: ["Male","Female","TransGender"],
            datasets: [{
                label:"",
                data: arr,
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)' ,
                    'rgba(54, 162, 235, 0.6)'   ,
                    'rgba(255, 205, 86, 0.9)'
                ],
                fill: false,
                borderColor:[
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)'
                ],
                minBarLength:20,
                tension:0.8
            }
            ]
        }
    })
     var r1 = ror / 100 * 96.9;
     var r2 = ror / 100 *90.1;
     var r3 = ror / 100 *70;
     var arr1 = [r1,r2,r3];
     console.log(p3);
    var chartt = document.getElementById("trans").getContext("2d");
    var chart= new Chart(chartt, {
    

        type:"polarArea" ,
        data: {
            labels: ["Male : 96.8%" ,"Female : 90.8%","TransGender : 99%"],
            datasets: [{
                label: "Confirmed",
                data: arr1,
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)' ,
                    'rgba(54, 162, 235, 0.6)'   ,
                    'rgba(255, 205, 86, 0.9)'
                ],
                fill: false,
                borderColor:[
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)' 
                ],
                minBarLength:0,
                tension:0.8
        

            }
            ]
        }
    })
}
getdata();

function renderChart() {     
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['16/20/March','18/20/May','10/20/Aug','10/20/Oct','14/20/Dec','15/21/Feb','12/21/April','14/21/June','23/21/Aug','20/21/Sept','11/21/Oct','20/21/Dec','3/22/Jun','2/22/Feb'],
            datasets: [{
                label: "Confirmed",
                data: [168958,694133,1827270,3122024,45550808,2568493,5223083,2553307,4577761,3523185,28789924,5852273,15792856,162639944],
                borderColor: 'rgba(75, 192, 192, 0.2)',
                backgroundColor: 'rgb(168, 4, 4)',
                tension:1
            }]
        },
    });
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = 'block'
    renderChart();
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


function renderChart1() {     
    var ctx1 = document.getElementById("sog5").getContext('2d');
    var myChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['30/20/March','27/20/July','21/20/Sept','7/20/Dec','25/21/Jun','8/21/March','26/21/April','5/21/July','20/21/Oct','6/21/Dec','7/22/Feb'],
            datasets: [{
                label: "Deaths",
                data: [35444,44162,37319,78626,102169,95572,55393,49471,46651,73844],
                borderColor: 'red',
                backgroundColor: 'rgb(168,4,4)',
                tension:1
            }]
        },
    });
}
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("btn1");
var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function () {
    modal1.style.display = 'block'
    renderChart1();
}

span1.onclick = function() {
    modal1.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = 'none';
    }
}
var show = document.getElementById("show1");
var hove  = document.getElementsByClassName("show");
var s = "dmjbvmxbvkuwefsvm mhgfukvxnfbwkeshfvb nbkjehfv  vdhvl   kjrhsv, vshgfjx";
function myFunction(){
    const element = document.getElementById("show1");

}
let gg = document.getElementById('myChartgp');

function rg(){
    gg.style.backgroundColor="rgb(120, 145, 136)";
}
function ct(){
    gg.style.backgroundColor="rgb(121, 88, 151)";
}
function kw(){
    gg.style.backgroundColor="rgb(195, 176, 133)";
}
function dl(){
    gg.style.backgroundColor="rgb(156, 106, 126)";
}




