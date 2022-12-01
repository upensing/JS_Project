const counters = document.querySelectorAll('.counter');
counters.forEach((counter) =>{
    counter.innerHTML = 0;

const updateCounter = () => {
    const targetCounter = +counter.getAttribute('data-target')
    // console.log(targetCounter)
    // console.log(typeof targetCounter)

    const startingCount = Number(counter.innerHTML);

    const incr = targetCounter / 100;

    if(startingCount < targetCounter ){
        counter.innerHTML = `${startingCount + incr}`;
        setTimeout(updateCounter, 10)
    }
}

updateCounter();
})









// There are serval ways to achieve it 

// using unary plus operator:
// var n = +str;

// The Number constructor:
// var n = Number(str);

// The parseFloat(str);
// var n = parseFloat(str);




