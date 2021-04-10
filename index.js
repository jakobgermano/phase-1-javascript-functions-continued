function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
//saturdayFun();
//saturdayFun("bathe my dog");

function mondayWork(plan="go to the office") {
    return `This Monday, I will ${plan}.`;
}
//mondayWork();
//mondayWork("work from home")

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
}