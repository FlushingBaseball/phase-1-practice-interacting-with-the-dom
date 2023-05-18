const pause = document.querySelector('#pause');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

const heart = document.querySelector('#heart');
const likesArea = document.querySelector('.likes');


const commentArea = document.querySelector("#comment-form")

const counterBox = document.querySelector('#counter')
let paused = false;

let seconds = 0;

heartObj ={};





let myInterval;
console.log(`right after declaring myInterval is ${myInterval}`)

function changeTime() {
    // check if an interval has already been set up
    if (!myInterval) {
        myInterval = setInterval(incrementTime, 1000);
        console.log(`in change time myInterval is ${myInterval}`)
    }
}

function incrementTime() {


    seconds += 1;
    counterBox.textContent = seconds;
    console.log(`I was called`);
}
function decrementTime() {
    seconds -= 1;
    counterBox.textContent = seconds;
    console.log(`I was called`);
}



pause.addEventListener('click', (event)=>{

    if (paused === false){

        console.log(`I was turned off`);
        clearInterval(myInterval);
        console.log(`after being cleared myInterval is ${myInterval}`)
        paused = true;
        myInterval = null;
    }
    else {
        console.log(`I was started`);
        paused = false;
        changeTime();
        
    }
})



plus.addEventListener('click', (event)=>{
    console.log(`Incremented`)
    incrementTime()


});

minus.addEventListener('click', (event)=>{
    console.log(`decremented`)
    decrementTime()

});





changeTime()




heart.addEventListener('click', (Event)=>{

    Event.preventDefault();
    const newLi = document.createElement('li')

if (seconds in heartObj) {
    heartObj[seconds]++
}
else{
    heartObj[seconds] = 1
}


    newLi.textContent = `${seconds} has been liked ${heartObj[seconds]} times`
    likesArea.appendChild(newLi);


});


commentArea.addEventListener('submit', (event)=>{
    event.preventDefault()
    const newComment = document.createElement('li')
    newComment.textContent = event.target.comment.value;
    commentArea.appendChild(newComment)
    console.log('SUBmiteddddd')


});




// {/* <div id='list' class='comments'></div>

// <h3>Leave a comment</h3>

// <form id="comment-form" action="">
//   <input type='text' name="comment" id="comment-input" cols="30" rows="10">
//   </br>
//   <button id='submit'>submit</button>
// </form> */}




//everytime an number is liked it could push it into an array, we could loop through the array to find the number of times
// u









// function stopTextColor() {
//   clearInterval(nIntervId);
//   // release our intervalID from the variable
//   nIntervId = null;
// }

// document.getElementById("start").addEventListener("click", changeColor);
// document.getElementById("stop").addEventListener("click", stopTextColor);


















// function letTimeRun(){
//     while(paused !== true){
//         setInterval(incrementTime(), 100)
//     }

// }



// pause.addEventListener('click', (event)=>{

//     paused = true

// });


// letTimeRun();