// Code your solution in this file!
 function distanceFromHqInBlocks(something){
    if(something > 42)  {
    return (something - 42)}
    else return (42- something)}

    function distanceFromHqInFeet(something){
    
    if(something > 42)  {
        return (something - 42) * 264}
        else return (42- something) * 264}
    
function distanceTravelledInFeet(a,b){
    if (a > b){
        return (a-b) * 264

    }
    else return (b-a) *264

}

function calculatesFarePrice(a,b){
   
   
    if (distanceTravelledInFeet(a,b) <= 400){
       return 0
   }
   else if (distanceTravelledInFeet(a,b) <= 2000){
    return 2.56
   }
   else if (distanceTravelledInFeet(a,b) <= 2500){
       return 25}
    else return "cannot travel that far"

}
