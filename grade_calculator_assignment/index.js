function calculate(){


var english=parseInt(document.getElementById("english").value)
var Math=parseInt(document.getElementById("math").value)
var Physics=parseInt(document.getElementById("physics").value)
var chemistry=parseInt(document.getElementById("chemistry").value)
var Computer=parseInt(document.getElementById("computer").value)


var total= english + Math + Physics + chemistry + Computer 
var average=total/5
console.log(english)

if(english>100 || Math>100||Physics>100||chemistry>100||Computer>100){
    alert("please select marks less that 100")
}

// var grade=(total/500)*100
var grade
if(average>=90){
    grade="A"
}
else if(average>=80){
    grade="B"

}else if(average>=70){
    grade="C"

}
else if(average>=60){
    grade="D"

}else{
    grade="F"

}
var result=document.getElementById("Total")
result.innerHTML=total

var result2=document.getElementById("Grade")
result2.innerHTML=grade

var result3=document.getElementById("Average")
result3.innerHTML=average

}