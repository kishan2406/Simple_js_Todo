const inputBox = document.querySelector(".inputField input");

const addBtn = document.querySelector(".inputField button");

const todoList = document.querySelector(".todoList");

const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {

      let userData = inputBox.value; //get the value which user will enter

      if(userData.trim() != 0){

        addBtn.classList.add("active"); //active the add button

      }  else{
            addBtn.classList.remove("active");

        }
    }
    showTasks()

    // when you click on add button
    addBtn.onclick = () => {
        let userData = inputBox.value;

        let getLocalStorage = localStorage.getItem("New Todo"); 

        if(getLocalStorage == null){

            listArr = []; // creating a empty Array

         } else{
                listArr = JSON.parse(getLocalStorage); 
            }// in line 29, transforming json string into a js object

            listArr.push(userData);

            localStorage.setItem("New Todo", JSON.stringify(listArr));
            //line 34, transforming js object into a json string
            showTasks(); // calling tasks function
            deleteAllBtn.classList.remove("active")
            
    }

    //function to add todo list
        function showTasks() {


            let getLocalStorage = localStorage.getItem("New Todo"); 

        if(getLocalStorage == null){

            listArr = []; // creating a empty Array

        } else{
                listArr = JSON.parse(getLocalStorage); 
            }

         const pendingNumber = document.querySelector(".pendingNumber");
        
         pendingNumber.textContent = listArr.length; //passing the length of pending task
         
         if(listArr.length > 0){  // if array length is greater than 0
             deleteAllBtn.classList.add("active");// active the clearall btn
         }else{
             
            deleteAllBtn.classList.remove("active");
         }
        let newLiTag = "";

        listArr.forEach((element, index) => {
            newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
        });

        todoList.innerHTML = newLiTag;
        inputBox.value = "";
    }


//delete the task
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");

    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

//delete all the task

deleteAllBtn.onclick = ()=> {
    listArr = [];

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}


