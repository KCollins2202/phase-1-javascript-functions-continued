function saturdayFun(game="roller-skate"){
    return(`This Saturday, I want to ${game}!`)
}
function mondayWork(activity="go to the office"){
    return(`This Monday, I will ${activity}.`)
}
function wrapAdjective(offer="*"){
    return function(word  = "Special"){
    return `You are ${offer}${word}${offer}!`
    }
}