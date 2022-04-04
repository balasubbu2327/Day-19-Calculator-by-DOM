var div = document.createElement("div");
div.className="container";
var div2 = document.createElement("div");
div2.className="Calculator";

var inp = but ("input","type","text","")
inp.setAttribute("id","output");
inp.setAttribute("placeholder","0");

var but1=but ("button","onclick","Clear()","Cl");
var but2=but ("button","onclick","del()","Del");
var but3=but ("button","onclick","display('%')","%");
var but4=but ("button","onclick","display('/')","/");
var but5=but ("button","onclick","display('7')","7");
var but6=but ("button","onclick","display('8')","8");
var but7=but ("button","onclick","display('9')","9");
var but8=but ("button","onclick","display('*')","*");
var but9=but ("button","onclick","display('4')","4");
var but10=but ("button","onclick","display('5')","5");
var but11=but ("button","onclick","display('6')","6");
var but12=but ("button","onclick","display('-')","-");
var but13=but ("button","onclick","display('1')","1");
var but14=but ("button","onclick","display('2')","2");
var but15=but ("button","onclick","display('3')","3");
var but16=but ("button","onclick","display('+')","+");
var but17=but ("button","onclick","display('.')",".");
var but18=but ("button","onclick","display('0')","0");
var but19=but ("button","onclick","Calculate()","=");
but19.setAttribute("class","equal");
// function Shortcut
function but (elementname,attribute,attrvalue,value){
    var res = document.createElement(elementname);
    res.setAttribute(attribute,attrvalue);
    res.innerHTML=value;
    return res;
}
div2.append(inp,but1,but2,but3,but4,but5,but6,but7,but8,but9,but10,but11,but12,but13,but14,but15,but16,but17,but18,but19);
div.append(div2);
document.body.append(div);
// function for mathematical Operations
let outputScreen = document.getElementById("output");
function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    outputScreen.value =" ";
}
function del(){
    outputScreen.value =outputScreen.value.slice(0,-1);
}