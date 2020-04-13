// You can add your codes here 
function getPercentage()
{
    alert("hi");
    var card = document.getElementById("reportCard");
    var studPara = document.getElementById("displayPara");
    var head = document.getElementById("cardHead");
    var studName = document.getElementById("name");
    var studClass = document.getElementById("class");
    var studRollNo = document.getElementById("rollNo");

    //card.removeAttribute("hidden","true");
    //card.setAttribute("hidden","false");
    head.innerHTML="Percentage Card";

    var sub1 = parseFloat(document.getElementById("mark1").value);
    alert(sub1);
    var sub2 = parseFloat(document.getElementById("mark2").value);
    var sub3 = parseFloat(document.getElementById("mark3").value);
    var percentage = (sub1 + sub2 + sub3)/3;
    alert (percentage);
    para.innerHTML="The percentage obtained by your ward" + studName + " of Class " +studClass + " with RollNo" + studRollNo + "is"+  percentage;
    //para.innerText="hi";





}
