let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishME(){
    let day=new Date()
    let hours=day.getHours()

    if(hours>=0 &&hours<12){
        speak("Good Morning sir!")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir!")
    }
    else{
        speak("Good Evening Sir!")
    }
}

window.addEventListener('load',()=>{
    wishME()
})

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()

recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

    if(message.includes("hello")||message.includes("hey")||message.includes("hello VRock")){
        speak("hello sir, What can i help you?")
    }

    else if(message.includes("who are you")){
        speak("I am your virtual assistant, Created by Vansh, I can help you with any task you want")
    }

    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com","_blank")
    }

    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.co.in/","_blank")
    }

    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("https://web.whatsapp.com","_blank")
    }

    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com","_blank")
    }

    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com","_blank")
    }

    else if(message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("https://www.linedin.com","_blank")
    }

    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }

    else if(message.includes("time")){
       speak(new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric",second:"numeric"}))
       speak(time)
    }

    else if(message.includes("date")){
        speak(new Date().toLocaleTimeString(undefined,{day:"numeric",month:"short",year:"numeric"}))
        speak(date)
     }

    else{
        speak(`this is what i found on internet regarding ${message.replace("VRock","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("VRock","")}`)
    }

}