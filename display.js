let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
e.preventDefault();
submit();
})


const submit=()=>{
let name = document.getElementById("fname").value;
    let website = document.getElementById("website").value;
    let myCheck = document.getElementById("myCheck").value;
    // let course = document.getElementById("course").value;
    var checkboxes = 
            document.getElementsByName('course');

        var result = "";

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                result += checkboxes[i].value 
                    + " ";
            }
        }
    


let newArray = [name,myCheck,website,result];
newArray.forEach((item)=>{
    var li = document.createElement("li");
var text = document.createTextNode(item);
li.appendChild(text);
table.appendChild(li);
})
form.reset(); 
}


function resetFuc() {
    document.getElementById("formSubmission").reset();
}