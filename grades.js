/* jesus garcia
lab 9
19/11/2022
*/



function submt() {
var x = document.getElementById("amount").value 
for(let i = 0; i < x; i++) {
    document.getElementById("subj").innerHTML += `<input id=${i}><br/>`
}
document.getElementById("subj").innerHTML += `<input type="submit" onclick="getAvg()" id="btn-subj">`
document.getElementById("btn-amt").style.display = "none"
}

function getAvg() {
    var total = 0
    for(let i = 0; i < document.getElementById("amount").value ; i++) {
        total += Number(document.getElementById("subj")[i].value)
        console.log(total)
    }
    
    var res =  total/document.getElementById("amount").value 
    console.log(res)
    var letter;
    if (res >= 90) {
        letter = "A";
    } else if(res >=80) {
        letter = "B";
    }else if(res >= 70) {
        letter = "C";
    }else if(res >= 60) {
        letter = "D";
    }else {
        letter = "F";
    }
    document.getElementById("subj").innerHTML += "your result is : " + letter
    document.getElementById("btn-subj").style.display = "none"

 }