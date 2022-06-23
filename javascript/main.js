//scroll animation
$(window).scroll(function(){
    let box1 = $('#card-main-item1');
    let box2 = $('#card-main-item2');
    let box3 = $('#card-main-item3');
    box1.animate({
        top:-20,
        opacity:1
    },'slow');
    box2.delay(300).animate({
        top:-20,
        opacity:1
    },'slow');
    box3.delay(500).animate({
        top:-20,
        opacity:1
    },'slow');

})


// focus on form in the card
const labels = document.querySelectorAll('.form-group label');
const inputs = document.querySelectorAll('.form-group input');

labels.forEach(label =>{
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) =>`<span style="transition-delay:${idx *50}ms;">${letter}</span>`)
        .join('')
})

if(inputs.value == '' && !$(inputs).is(':focus')) {
    $('.form-group span').animate({
        transform: 'translateY(-30px)'
    })
}

// Icrementing Numbers
const counters =document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')

        const c = +counter.innerText
        const increment = target /100
        
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1) 
        }
        else{
            counter.innerText = target
        }
    }

    updateCounter();
})


// FAQ's Area
const toggles = document.querySelectorAll('.faq-toggle')

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active')
        })
    })