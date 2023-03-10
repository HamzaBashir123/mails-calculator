var button5 =document.querySelector('.button5')
var button1 =document.querySelector('.button1')
var button2 =document.querySelector('.button2')
var button3 =document.querySelector('.button3')
var button4 =document.querySelector('.button4')
var button6 =document.querySelector('.button6')
var hotmilInbox =document.querySelector('.hotmilInbox')
var protonInbox =document.querySelector('.protonInbox')
var laposteInbox =document.querySelector('.laposteInbox')
var setInbox =document.querySelector('.setInbox')

hotmilInbox.addEventListener('input',() => {
    console.log(hotmilInbox.value)
    // var hotmiltotal = hotmilInbox.value*12
    button1.innerHTML = hotmilInbox.value*12
    // button5.innerHTML = hotmiltotal
    

})
protonInbox.addEventListener('input',() => {
    console.log(protonInbox.value)
    var protontotal = protonInbox.value*5
    button2.innerHTML = protonInbox.value*5
    // button5.innerHTML += button5.innerHTML + protontotal


})
laposteInbox.addEventListener('input',() => {
    console.log(laposteInbox.value)
    // var lapostetotal = laposteInbox.value*25
    button3.innerHTML = laposteInbox.value*25

})
setInbox.addEventListener('input',() => {
    console.log(setInbox.value)
    // var settotal = setInbox.value*39
    button4.innerHTML = setInbox.value*39

})
button6.addEventListener('click', ()=>{
    button6.innerHTML=Number( button1.innerHTML)+ Number( button2.innerHTML) +Number( button3.innerHTML) +Number( button4.innerHTML)
})