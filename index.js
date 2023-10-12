// code your solution here
function saturdayFun(activity = "roller-skate") {
 return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());
console.log(saturdayFun('bathe my dog'))



function mondayWork(workOption = 'go to the office') {
    switch (workOption) {
        case 'work from home':
            return 'This Monday, I will work from home.';
        default:
            return 'This Monday, I will ' + workOption + '.';
    }
};

console.log(mondayWork());






function wrapAdjective(highlight = "*") {
    return function(adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }


console.log(wrapAdjective()())

