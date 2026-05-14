const inputText=document.querySelector("#input");
const countBtn=document.querySelector("#count");
const con=document.querySelector("#con");
const vow=document.querySelector("#vow");
const words=document.querySelector("#word");
const reset=document.querySelector("#reset");
const letter=document.querySelector("#letters");

const countLetters=(text)=>{
    const result = text.replace(/\s/g, "");
    const letters=result.length;
    letter.innerText=letters;
    
}

const countWord=(text)=>{
    let arr=text.trim().split(/\s+/);
    let Length=arr.length;
    words.innerText=Length;
}


const letterCount = (text) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let v = 0, c = 0;

    for (let char of text.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            vowels.includes(char) ? v++ : c++;
        }
    }
    con.innerText=c;
    vow.innerText=v;
    
};
countBtn.addEventListener("click",()=>{
      const text=inputText.value;
      if (text===" ") {
          alert("alert! Enter valid input..")
      }else{
    letterCount(text);
    countWord(text);
    countLetters(text);
    }
})

reset.addEventListener("click",()=>{
    inputText.value = "";
    vow.innerText = 0;
    con.innerText = 0;
    words.innerText = 0;
    letter.innerText=0;
    
})