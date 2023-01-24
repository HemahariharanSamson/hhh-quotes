const quotes = {
    "- Hema Hariharan": 'When you are not happy in the present, have no clue about the future then the heart automatically seeks for the past.',
    "- Dhatchyani": 'Dark turns light to fire up the tears.',
    "- Joohi Jahan": 'React with no reaction, but still observe everything with logic.',
    "- Harini": 'Characterize people by their action and you will never be fooled by their words.',
    "- Janani": 'If you want to shine like a sun, first burn like a sun.',
    "- Gayathri": 'Each heart has it’s pain, only the way of expression is different. Some hide it in their eyes, while some hide it in their fake smile.',
    "- Madhan": 'Don’t make time for people who can’t make time for you.',
    "- Vijay": 'If there is family, there will be problem, but we have only one family.',
    "- John Lennon": 'Life is what happens to you while you’re busy making other plans.',
    "- Earl Nightingale": 'We become what we think about.',
    "- Charles Swindoll": 'Life is 10% what happens to me and 90% of how I react to it.',
    "- Buddah": 'The mind is everything. What you think you become.',
    "- Woody Allen": 'Eighty percent of success is showing up.',
    "- Steve Jobs": 'Your time is limited, so don’t waste it living someone else’s life.',
    "- Vince Lombardi": 'Winning isn’t everything, but wanting to win is.',
    "- Stephen Covey": 'I am not a product of my circumstances. I am a product of my decisions. ',
    "- Christopher Columbus": 'You can never cross the ocean until you have the courage to lose sight of the shore.',
    "- Maya Angelou": 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ',
    "- Jim Rohn": 'Either you run the day, or the day runs you.',
    "- Henry Ford": 'Whether you think you can or you think you can’t, you’re right.',
    "- Frank Sinatra": 'The best revenge is massive success.',
    "- Zig Ziglar": 'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.',
    "- Aristotle": 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing',
    "- Ralph Waldo Emerson": 'The only person you are destined to become is the person you decide to be.',
    "- Henry David Thoreau": 'Go confidently in the direction of your dreams.  Live the life you have imagined.',
    "- Booker T. Washington": 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.'
  };


const quoteText = document.querySelector("#quote"),//modified by me
quoteBtn = document.querySelector("#generate"),//modified by me
authorName = document.querySelector("#author"),//modified by me
speechBtn = document.querySelector(".speech"),
musicBtn = document.querySelector(".music"),//modified by me
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;


document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  function generate(){
    // grab all the keys in the dictionary (authors) and store in an array
    const authors = Object.keys(quotes);
    // grab a random key (author) and store it in author
    const author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    const quote = quotes[author]
  
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
    quoteBtn.classList.remove("loading");
    quoteBtn.innerText = "Next";
  }
  
  window.onload = function(){
    generate()
  }

  var mySong= document.getElementById("mySong");
  var button= document.getElementById("mubtn");
  var icon= document.querySelector(".fa-music");
  button.onclick= function(){
      if(mySong.paused && icon.classList.contains("fa-music")){
        mySong.play();
        icon.classList.replace("fa-music","fa-pause");
        
      }
      else{
        mySong.pause();
        icon.classList.replace("fa-pause","fa-music");

      }
  }





// function randomQuote(){
//     quoteBtn.classList.add("loading");
//     quoteBtn.innerText = "Loading Quote...";
//     fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
//         quoteText.innerText = result.content;
//         authorName.innerText = result.author;
//         quoteBtn.classList.remove("loading");
//         quoteBtn.innerText = "New Quote";
//     });
// }

speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let voices= window.speechSynthesis.getVoices();
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        utterance.voice = voices[1];
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

// twitterBtn.addEventListener("click", ()=>{
//     let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
//     window.open(tweetUrl, "_blank");
// });

// quoteBtn.addEventListener("click", randomQuote);


