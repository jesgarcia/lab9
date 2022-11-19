/* jesus garcia
lab 9 q1
18/11/2022
*/
function play() {
    let lyrics;
  for(let i = 99; i >= 0; i--) {
      if(i > 1) {
        let lyrics =  `${i} bottles of beer on the wall, ${i} bottles of beer <br> Take one down and pass it around, ${i - 1} bottles of beer on the wall <br>`
         document.getElementById("container").innerHTML += lyrics;
      }else if(i == 1) {
        document.getElementById("container").innerHTML += `${i} bottle of beer on the wall, ${i} bottle of beer <br> Take one down and pass it around, no more bottles of beer on the wall <br>`
      }else {
        document.getElementById("container").innerHTML += `No more bottles of beer on the wall, no more bottles of beer <br> Go to the store and buy some more, 99 bottles of beer on the wall`
          
      }
    
  }
   
}
