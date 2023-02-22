var userNameInfo=[];
var pInfo=[];
var pInfo2=[];
var userEle=document.getElementById("userName");
var p1Ele=document.getElementById("p1");
var p2Ele=document.getElementById("p2");
var outBox=document.getElementById("userInfo");

function register(){
    userNameInfo.push(userEle.value);
    pInfo.push(p1Ele.value);
    pInfo2.push(p2Ele.value);

    for (var index=0; index<userNameInfo.length; index+=1){
        outBox.innerHTML+=userNameInfo[index]+"\t\t"+pInfo[index]+"\t"+pInfo2[index]+"\n";
    }
    userEle.value="";
    p1Ele.value="";
    p2Ele.value="";
}