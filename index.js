let Count1 = document.getElementById('count1')
let No1 = document.getElementById('no1')
let count1 = 0

function no11() {
    count1 += 1
    Count1.textContent = count1
}
function no12() {
    count1 += 2
    Count1.textContent = count1
}
function no13() {
    count1 += 3
    Count1.textContent = count1
}

let Count2 = document.getElementById('count2')
let No4= document.getElementById('no4')
let count2 = 0

function no1() {
    count2+= 1
    Count2.textContent = count2
}
function no2() {
    count2 += 2
    Count2.textContent = count2
}
function no3() {
    count2 += 3
    Count2.textContent = count2
}
function reset() {
     Count1.textContent = count1
     Count2.textContent = count2
     count1 = 0
     count2 = 0
     
   
}


