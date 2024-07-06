const text = document.createElement('p')
let text_1 = prompt("Soz kiriting")
 text.innerHTML =  text_1

 let body = document.querySelector('body')

body.appendChild(text)

let bg = prompt("Orqa rang kiriting")
let c = prompt("text rangini kiriting")

body.style.background = bg
text.style.color = c


text.classList.add('matn')

// let body = document.querySelector('body')

// let dv = document.createElement('div')
// body.appendChild  



//     let text = document.createElement('p')
    
//     text.innerHTML = "Programming is the process of writing computer code to create a program, to solve a problem12. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms in a chosen programming language2. Programming is like giving a set of instructions to a computer to execute3. Programming is used to create many web pages, and it also has a history of bugs and viruses4."
    
//     body.appendChild(text)
    
//     let btn = document.createElement('button')
    
//     btn.innerHTML = "Know more"
    
//     body.appendChild(btn)    


