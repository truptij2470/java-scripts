alert("this is an alert message")
var ans=confirm("to select ok or cancel");
if(ans){
    document.write("<h3>you selected ok</h3>");

}else{
document.write("<h3>you selected Cancel</h3>");
}
//to display popup box with message and a text box
//evry value is treated as string
var name=prompt("Pls eneter name");
var sal=prompt("pls enetr salary");
document.write("name: "+name+"sal : "+sal);