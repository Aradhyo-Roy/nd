function Submit(){
    address=document.getElementById("address").value;
    Name=document.getElementById("name").value;
    Age=document.getElementById("age").value;
    localStorage.setItem("address", address);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Age", Age);
    window.location="nd.html";
}