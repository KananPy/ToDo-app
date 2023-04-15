 var toDoAdd = document.querySelector('#button-addon2')
 var toDoInput = document.querySelector('#input')
 var toDoList = document.querySelector('#list')
var deleteAll = document.querySelector('#removeAll')
 var toRemove = document.querySelector('#remove')
 var toDoAlert = document.querySelector('.card-body')



var arr = []


function showAlert(type, text){
    var divAl = document.createElement('div')
    divAl.className = `alert ${type} `
    divAl.textContent = `${text}`
    divAl.role = 'alert'
    toDoAlert.appendChild(divAl)

    setTimeout( () => {
      divAl.remove()
    }, 2000)

}

 function addItems(){
    var value = toDoInput.value.toLowerCase().trim()

    if(!value){
        showAlert("alert-danger", "Please fill the input form")
        return
    }
    arr.push(value)
    showAlert("alert-success", "Succesfully added")


    toDoInput.value = ''

    show()
 }

 function show(){
   //  var showList = []
   //  for(var el of arr){
   //      showList.push(`<li class="list-group-item d-flex justify-content-between"> ${el} <i class="edit fa-regular fa-pen-to-square"></i><i class="trash fa-solid fa-trash-can" onclick="remove()" id="remove"></i></li>`)
   //  }


    toDoList.innerHTML = arr.map(function (item, index){
      return `<li class="list-group-item d-flex justify-content-between">${index + 1}. ${item} <i class="edit fa-regular fa-pen-to-square"></i><i class="trash fa-solid fa-trash-can" onclick="remove(${item})" id="remove"></i></li>`
    }).join("")

   //  console.log('show', index);



 }

 function remove(index){

    newArr = arr.filter(function(_, elIndex) {
      if(elIndex !== index) {
         console.log('element' ,elIndex);
         return true

      }

      return false
    })

    console.log('index',index);

    arr = newArr

    showAlert("alert-info", `${arr[index]} deleted`)

    show()



 }

 function removeAll(){

   arr.length = 0

   show()
 }



toDoInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    toDoAdd.click();
  }
});

 toDoAdd.onclick = addItems
 deleteAll.onclick = removeAll


