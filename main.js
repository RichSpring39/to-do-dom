//let
let toDoForm = document.querySelector('#toDoForm')
let toDoInput = document.querySelector('#toDoInput')
let img = document.querySelector('.img')

//Add Button
let addButton = document.querySelector('#addButton')
addButton.addEventListener

addButton.addEventListener('click', function(event){
    event.preventDefault();
        console.log('event test')
        let listItems = document.createElement('li');
        listItems.innerText = toDoInput.value;
        liItems.appendChild(listItems)
        listItems.addEventListener('click', function(){
            console.log('event test')
    if(listItems.style.textDecoration === 'line-through'){
        listItems.style.textDecoration = ''
        listItems.classList.remove('completed')
    }else if(listItems.style.textDecoration === ''){
        listItems.style.textDecoration = 'line-through'
        listItems.classList.add('completed')
        }
    })
        toDoInput.value = '';
       
    })

//Reomve Completed Task
let removeCompTask = document.querySelector('#removeCompTask')

removeCompTask.addEventListener('click',function(event){
    event.preventDefault();
    console.log('event test')
    let CompItems = document.querySelectorAll('li')
    for(let i = 0; i < CompItems.length; i++){
        if(CompItems[i].style.textDecoration === 'line-through')
        CompItems[i].remove();
    }
})

//Remove All
let removeAll = document.querySelector('#removeAll')

removeAll.addEventListener('click',function(event){
    event.preventDefault();
    console.log('event test')
    let raItems = document.querySelectorAll('li')
    for(let i = 0; i < raItems.length; i++){
    raItems[i].remove();
    }
})

