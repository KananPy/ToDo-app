 var toDoAdd = document.querySelector('#button-addon2')
 var toDoInput = document.querySelector('#input')
 var toDoList = document.querySelector('#list')
var deleteAll = document.querySelector('#removeAll')
 var toRemove = document.querySelector('#remove')
 var toDoAlert = document.querySelector('.card-body')



var arr = []


function showAlert(type, text){
   
}

 function addItems(){
    var value = toDoInput.value

    if(!value.trim()){
        return
    }
    arr.push(value)

    toDoInput.value = ''
    
    show()
 }

 function show(){
    var showList = []
   //  for(var el of arr){
   //      showList.push(`<li class="list-group-item d-flex justify-content-between"> ${el} <i class="edit fa-regular fa-pen-to-square"></i><i class="trash fa-solid fa-trash-can" onclick="remove()" id="remove"></i></li>`)
   //  }


    toDoList.innerHTML = arr.map(function (item, index){
      return `<li class="list-group-item d-flex justify-content-between">${index + 1}. ${item} <i class="edit fa-regular fa-pen-to-square"></i><i class="trash fa-solid fa-trash-can" onclick="remove(${index})" id="remove"></i></li>`
    }).join("")
    
    
    
 }

 function remove(index){

    newArr = arr.filter(function(_, elIndex) {
      if(elIndex !== index) {
         return true
      }
      return false
    })

    arr = newArr

    show()
    
    

 }

 function removeAll(){

   arr.length = 0
   console.log('click');

   show()
 }

 toDoAdd.onclick = addItems
 deleteAll.onclick = removeAll

 
