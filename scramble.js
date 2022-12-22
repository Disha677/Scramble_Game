let msg = document.querySelector('.msg');
let input = document.querySelector('input');
let btn = document.querySelector('.btn');

let play = false;
let newWords = "";
let randomWords = "";

let sWords = ['python', 'javascript', 'kotlin', 'php', 'java', 'ruby', 'html', 'css', 'reactJs', 'angular', 'swift', 'android', 'sql']

let createNewWords = () => {
    // this will going to return a random word for me which is in my data 
    let random = Math.floor(Math.random() * sWords.length);
    let newTempWords = sWords[random];
    // console.log(newTempWords.split(""));
    return newTempWords;
}

let scrambleWords = (arr) => {
    // this will going to scramble the word which we receive from createNewWords
    for (let i = arr.length - 1; i >= 0; i--) {
         let temp = arr[i];
        //  console.log(temp);
         let randomIndexNum = Math.floor(Math.random()*(i+1));
        //  console.log(i);
        //  console.log(j);

        //swapping
         arr[i] = arr[randomIndexNum];
         arr[randomIndexNum] = temp;
    }
    return arr;
}

btn.addEventListener("click", function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
    // input.classList.toggle('hidden');
    input.style.display = "block";
    newWords = createNewWords(); //i get one random word
    randomWords = scrambleWords(newWords.split("")).join("");
    // console.log(randomWords.join(""));
    msg.innerHTML = randomWords;
    }
    else{
        let tempWord = input.value;
        if(newWords === tempWord){
            // console.log("correct");
            play = false;
            msg.innerHTML = `Awesome,It's Correct.It's ${newWords}`;
            input.style.display = "none";

            btn.innerHTML = "Start Again";
            input.value = "";
        }
        else{
            // console.log("incorrect");
            msg.innerHTML = `Sorry,You are wrong,Please try again.Your word is ${randomWords}`;
            input.value = "";
        }
    }
})
