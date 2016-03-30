var number1 = document.getElementById('n1')
var number2 = document.getElementById('n2')
var number3 = document.getElementById('n3')
var number4 = document.getElementById('n4')
var a = Math.ceil(Math.random()*13);
var b = Math.ceil(Math.random()*13);
var c = Math.ceil(Math.random()*13);
var d = Math.ceil(Math.random()*13);
number1.innerHTML = a;
number2.innerHTML = b;
number3.innerHTML = c;
number4.innerHTML = d;

function addN(a){
	formula.innerHTML+=a;
	formulae.innerHTML +=a;
}
function addN(b){
	formula.innerHTML+=b;
	formulae.innerHTML+=b;
}
function addN(c){
	formula.innerHTML+=c;
	formulae.innerHTML+=c;
}
function addN(d){
	formula.innerHTML+=d;
	formulae.innerHTML+=d;
}
function add(){
	formula.innerHTML+='+';
	formulae.innerHTML+='+';
}
function minus(){
	formula.innerHTML+='-';
	formulae.innerHTML+='-';
}
function mult(){
	formula.innerHTML+='&#215';
	formulae.innerHTML+='*';
}
function divd(){
	formula.innerHTML+='&#247';
	formulae.innerHTML+='/';
}
function lbr(){
	formula.innerHTML+='(';
	formulae.innerHTML+='(';
}
function rbr(){
	formula.innerHTML+=')';
	formulae.innerHTML+=')';
}
function bkspc(){
	var s=formula.innerHTML;
	formula.innerHTML=s.substring(0,s.length-1);
	var se=formulae.innerHTML;
	formulae.innerHTML=se.substring(0,se.length-1);
}
function equ(){
	var v=eval(formulae.innerHTML);
	if (v==24){
	window.alert('CORRECT!');
	location.reload();
}
	else{
	window.alert('WRONG!')}
}

var timeInSecs;
var ticker;

function startTimer(secs){
	timeInSecs = parseInt(secs)-1;
	ticker = setInterval("tick()",1000);   // every second
}

function tick() {
var secs = timeInSecs;
if (secs>0) {
	timeInSecs--;
	}
	else {
clearInterval(ticker); 
window.alert('Time Out!!');
location.reload();
}

document.getElementById("countdown").innerHTML = secs;
}
startTimer(30);



var mode=new Array();
mode[0]=a+b+c+d;
mode[1]=a+b+c-d;
mode[2]='a+b-c-d';
mode[3]='a*b+c+d';
mode[4]='a*b*c+d';
mode[5]='a*b+c*d';
mode[6]='a*b*c*d';
mode[7]='a/b+c+d';
mode[8]='a/b/c+d';
mode[9]='a/b+c/d';
mode[10]='a*b*c/d';
mode[11]='a*b/c/d';
mode[12]='a*b/c+d';
mode[13]='a/b+c*d';
mode[14]='a*b-c-d';
mode[15]='a*b*c-d';
mode[16]='a*b-c*d';
mode[17]='a*b/c-d';
mode[18]='a*b+c-d';
mode[19]='(a+b+c)*d';
mode[20]='(a+b-c)*d';
mode[21]='(a*b+c)*d';
mode[22]='(a*b-c)*d';
mode[23]='(a/b+c)*d';
mode[24]='(a/b-c)*d';
mode[25]='(a+b+c)/d';
mode[26]='(a+b-c)/d';
mode[27]='(a*b+c)/d';
mode[28]='(a*b-c)/d';
mode[29]='(a/b+c)/d';
mode[30]='(a+b)*c+d';
mode[31]='(a-b)*c+d';
mode[32]='(a+b)/c+d';
mode[33]='(a-b)/c+d';
mode[34]='(a+b)*c-d';
mode[35]='(a-b)*c-d';
mode[36]='(a+b)/c-d';
mode[37]='(a+b)*c*d';
mode[38]='(a-b)*c*d';
mode[33]='(a+b)/c*d';
mode[40]='(a-b)/c*d';
mode[41]='(a+b)/c/d';
mode[42]='(a+b)*(c+d)';
mode[43]='(a+b)*(c-d)';
mode[44]='(a-b)*(c-d)';
mode[45]='(a+b)/(c+d)';
mode[46]='(a+b)/(c-d)';
mode[47]='a/b+c-d';
mode[48]='a+b/(c+d)';
mode[49]='a*b/(c+d)';
mode[50]='a+b/(c-d)';
mode[51]='a*b/(c-d)';
mode[52]='a/(b-c/d)';

function cal(){
showit.innerHTML='<br>Correct answers:<br>';
var p=0;
for(i=0;i<mode.length;i++){
for(j=0;j<24;j++){
a=parseInt(z[vari[j].charAt(0)]);
b=parseInt(z[vari[j].charAt(1)]);
c=parseInt(z[vari[j].charAt(2)]);
d=parseInt(z[vari[j].charAt(3)]);
var s=mode[i];
var result=eval(s);
if(Math.abs(result-24)<1E-5){
var ina=mode[i].indexOf('a');
var inb=mode[i].indexOf('b');
var inc=mode[i].indexOf('c');
var ind=mode[i].indexOf('d');
showit.innerHTML+=mode[i].substring(0,ina)+a+mode[i].substring(ina+1,inb)+b+mode[i].substring(inb+1,inc)+c+mode[i].substring(inc+1,ind)+d+mode[i].substring(ind+1,mode[i].length)+'=24\n';
showit.innerHTML+='<br>';
p=1;
break;
}
}
}
if(p) return 0;
else showit.innerHTML='No answers';
}