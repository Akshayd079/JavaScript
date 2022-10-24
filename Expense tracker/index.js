let y = 1;


function load(){
    
    var storeInfo =  JSON.parse(localStorage.getItem('storeInfo') || null);
    
    var x = "Delete";

    if(storeInfo){
        var output = document.querySelector("#output tbody");
        output.innerHTML = "";
        storeInfo.forEach((element, index) => {
            //output.innerHTML += "<tr><td>" + name + "</td><td>" + date + "</td><td>" + amt.value + "</td><td>" + btn.appendchild + "</td></tr>"
            output.innerHTML += "<tr id=row_" + element.y + "><td>" + element.y + "</td><td>" + element.name + "</td><td>" + element.date + "</td><td>" + element.amt + "</td><td> <button  onClick= rowInd(" + index + ")>" + x + "</button></td></tr>"             
        });
    }

   
}

function addData() {
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("Please Enter expense");
        return false;
    }
    var date = document.getElementById("date").value;
    var curDate = new Date();
    let year = curDate.getFullYear();
    let month = (curDate.getMonth()) + 1;
    let day = curDate.getDate();

    var dateCheck = year + "-" + month + "-" + day;
    console.log(dateCheck);
    if (dateCheck < date) {

        alert("You can't add future expense!!!");
        return false;
    }
    if (date == "") {
        alert("Please enter date");
        return false;
    }

    var amount = document.getElementById("amt").value;
    if (amount == "") {
        alert("Please enter amount");
        return false;
    }
    if (amount <= 0) {
        alert("Please enter valid amount");
        return;
    }

    var storeInfo ={
        y : y,
        name : name,
        date: date,
        amt : amt.value
    }


    let existingData = JSON.parse(localStorage.getItem('storeInfo') || null);

    if(existingData){
        existingData.push(storeInfo);
        localStorage.setItem("storeInfo",JSON.stringify (existingData));
    }
    else{
        localStorage.setItem("storeInfo",JSON.stringify ([storeInfo]));
    }

    load();
    
    frm.reset();
    y++;

   console.log(localStorage)
}

function rowInd(x) {
    var storeInfo = JSON.parse(localStorage.getItem('storeInfo'));
    storeInfo.splice(x,1)
    localStorage.setItem('storeInfo', JSON.stringify(storeInfo));
    load();
}

