
let array = [];

if (localStorage != "") {
    array = JSON.parse(localStorage.getItem("array") || ("[]"));
}

function save() {

    let theTask = document.getElementById("task");
    let saveDate = document.getElementById("date");
    let saveTime = document.getElementById("time");

    
    if (theTask.value == "" || saveDate.value == "") {
        alert ("Please fill all the mandatory inputs");
    }

    else{
       
        let details = {
            task: theTask.value,
            date: saveDate.value,
            time: saveTime.value
        };
        array.push(details);
        
    }    
    let json = JSON.stringify(array);
    localStorage.setItem("array", json); 

}



function findActiveTask() {
    const json = localStorage.getItem("array");
    const note = JSON.parse(json);
    
    const current_time = new Date();
    const timeConvert = current_time.toISOString();
    
    for(let i=0 ; i <array.length; i++) {
   
    const time_and_date = array[i].date + "<br/>" + array[i].time;
    
    if (time_and_date > timeConvert) {
       

        let petek = document.createElement("div");
        petek.className = "note";
       
        petek.innerHTML = "<button onclick=\"delete_me(this,"+i+");\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\
        <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\
        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\
      </svg></button>"
       
        let time_and_date = document.createElement('div');
        time_and_date.className = "timedate";
        time_and_date.innerHTML= `${array[i].date}<br/>${array[i].time}`;
      
        let task_body = document.createElement('div');
        task_body.className = "task";
        task_body.innerHTML = `${array[i].task}`;     
        

        const note_container = document.getElementById("note_container");
        
        note_container.appendChild(petek);
        petek.appendChild(task_body);
        petek.appendChild(time_and_date);   
      
    };
}
   
}
   function delete_me(obj,e){
    obj.parentElement.remove();
    array = JSON.parse(localStorage.getItem("array"));
     for (var i = 0; i < array.length; i++){
        if (i==e){
            array.splice(e, 1);
            location.reload();
            let json = JSON.stringify(array);
             localStorage.setItem("array", json);
            }
        }
   }
   