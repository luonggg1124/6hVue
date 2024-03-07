let count = 0;
const countHeader = document.querySelector('#count');
const countAddBtn = document.querySelector('#add');
const countSubtractBtn = document.querySelector('#subtract');
countHeader.innerHTML = count;
countAddBtn.addEventListener('click',function(){
    count++;
    countHeader.innerHTML = count;
})


countSubtractBtn.addEventListener('click', () =>{
    count--;
    countHeader.innerHTML = count;
})

