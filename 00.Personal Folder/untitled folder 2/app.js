// grab the two canvas elements
const ctx1 = document.getElementById('voltageChart');
const ctx2 = document.getElementById('currentChart');

// array that both charts read from
let labels = [];
let voltageData = [];
let currentData = [];

// produces one new data point per call
function generateData(){const time = new Date().toLocaleTimeString();labels.push(time);voltageData.push( 220 + Math.random()*10);currentData.push( 5 + Math.random());

    if (labels.length > 10) {labels.shift();voltageData.shift();currentData.shift();}
}

// chart instances
// voltage chart
const voltageChart =new Chart(ctx1,{type:'line',data:{labels:labels,datasets:[{label: 'Voltage (V)',data: voltageData}]}});
// current chart
const currentChart = new Chart(ctx2,{type:'line',data:{labels:labels,datasets:[{label:'Current (A)', data: currentData}]}})

//update loop(simulating realtime)
//calls generateData + re-renders every 2 seconds
setInterval(() => {generateData();voltageChart.update();currentChart.update();},2000);