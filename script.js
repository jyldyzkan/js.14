const list = document.querySelector("#list")
const button = document.querySelector("#addBtn")
const input = document.querySelector("#input")
const textContainer = document.querySelector(".text-container")
const closeBtn = document.querySelector('#closeBtn')



const todos=[
    {
        id:1,
        text: 'Take out trash',
        completes: true
    },
    {
        id:2,
        text: 'Do the cleaning',
        completes: false
    }
]

button.addEventListener("click",()=>{
    const newStr = input.value
    if(newStr !== '' && todos.length<10){
        todos.push({
            id:todos.length+1,
            text: newStr,
            completes: false
        })
        console.log(todos)
        input.value=''
        closeButton()
        todoFunc()

    }else if(newStr===''){
        console.log('Error')
        textContainer.style.display='block'

    }

})

function todoFunc(){
    list.innerHTML=
        `
        ${todos.map(todo=>{
            return `
            <li>
            <input type="checkbox" ${todo.completes?'checked':''}/>
            <span>${todo.text}</span>
            </li>
            `
        }).join('')}
        `

}
todoFunc()

closeBtn.addEventListener('click',()=>{
    textContainer.style.display='none'



})

function closeButton(){
    button.style.display=todos.length===10?'none':'block'
}




