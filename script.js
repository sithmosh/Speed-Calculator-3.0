'use strict';

///////////////////TMS///////////////////////
const alejandroL = 57;
const alejandroV = 56;
const alexR = 36;
const alfredo = 50;
const anaG = 70;
const audreyH = 52;
const brianH = 93;
const chandaO = 83;
const christineD = 103;
const chrisP = 94;
const clarissaS = 46;
const deniellW = 79;
const emilyW = 69;
const ericA = 87;
const gabriellaL = 57;
const guilianaA = 99;
const joetteV = 83;
const joseM = 77;
const joshS = 90;
const kylahC = 75;
const lisetteB = 72;
const loriH = 69;
const marisaG = 62;
const mayaS = 103;
const monicaB = 50;
const monicaR = 49;
const naiyaR = 46;
const nickE = 73;
const sherrieB = 75;
const sienaC = 71;
const sofiaP = 72;
const tavianG = 63;
const tiffL = 53;
const fabiolaP = 76;
const nancyG = 46;

///////////BASE TM ARRAY////////////////
let tmList = [alejandroL, alejandroV, alexR, alfredo, anaG, audreyH, brianH, chandaO, christineD, chrisP, clarissaS, deniellW, emilyW, ericA, gabriellaL, guilianaA, joetteV, joseM, joshS, kylahC, lisetteB, loriH, marisaG, mayaS, monicaB, monicaR, naiyaR, nickE, sherrieB, sienaC, sofiaP, tavianG, tiffL, fabiolaP, nancyG];

////////////////////////////ARRAY/////////////////////

let tmList2 = [];

///////////////////////////TM BUTTONS//////////////////
function tmButton(tm, btn){
tmList2.push(tm);
document.getElementById(btn).style.backgroundColor = '#0abdc6';
};
function changeButtonColor(tm){
  document.getElementById(tm).style.backgroundColor = '#0abdc6';
};


//////////////////PICK SPEED//////////////
let pickSpeed = document.querySelector('.pick-speed');
let pickSpeed2 = document.querySelector('.pick-speed-2');
const pickSpeedGenerate = document.querySelector('.pick-speed-generate');
const pickSpeedShow = document.querySelector('.pick-speed-show');
const timeOutput = document.querySelector('.time-to-complete');
var sum = 0;
function upm(x){
  return Math.round((x / 60) * 100) / 100;
};
function resetButtonColor (btn){
  document.getElementById(btn).style.backgroundColor = '#ea00d9';
};
pickSpeedGenerate.addEventListener('click', function (){
for (let i = 0; i < tmList2.length; i++) {
    sum += tmList2[i];
    pickSpeed.textContent = sum;
    pickSpeed2.textContent = upm(sum);
}
});
function reset(){
  tmList2 = [];
  sum = 0;
  pickSpeed.textContent = '???';
  pickSpeed2.textContent = '???';
  time.textContent = '???'
  resetButtonColor('btn-AV');
  resetButtonColor('btn-AR');
  resetButtonColor('btn-ALF');
  resetButtonColor('btn-AG');
  resetButtonColor('btn-AH');
  resetButtonColor('btn-BH');
  resetButtonColor('btn-CO');
  resetButtonColor('btn-CD');
  resetButtonColor('btn-CP');
  resetButtonColor('btn-CS');
  resetButtonColor('btn-DW');
  resetButtonColor('btn-EW');
  resetButtonColor('btn-EA');
  resetButtonColor('btn-FP');
  resetButtonColor('btn-GL');
  resetButtonColor('btn-GA');
  resetButtonColor('btn-JV');
  resetButtonColor('btn-JM');
  resetButtonColor('btn-JS');
  resetButtonColor('btn-KC');
  resetButtonColor('btn-LB');
  resetButtonColor('btn-MG');
  resetButtonColor('btn-MS');
  resetButtonColor('btn-NR');
  resetButtonColor('btn-NG');
  resetButtonColor('btn-NE');
  resetButtonColor('btn-SB');
  resetButtonColor('btn-SC');
  resetButtonColor('btn-SP');
  resetButtonColor('btn-TG');
  resetButtonColor('btn-TL');
};
///////////////////UNITS LEFT///////////////////

const input = document.querySelector('input');
const time = document.querySelector('.time-to-complete');
let units;

input.addEventListener('input', updateUnits);

function updateUnits(e) {
  units = e.target.value;
};

function timeToComplete() {
var timeLeft = Math.round(units / upm(sum));
time.textContent = timeLeft;
};
