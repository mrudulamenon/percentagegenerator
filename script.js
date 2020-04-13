// You can add your codes here 
function getPercentage()
{
    alert("hi");
    //var card = document.getElementById("reportCard");
    var studPara = document.querySelector("#displayPara");
    var head = document.querySelector("#cardHead");
    var studName = document.querySelector("#name");
    var studClass = document.querySelector("#class");
    var studRollNo = document.querySelector("#rollNo");
    var avgSpan = document.querySelector("#avgDisplay")

    //card.removeAttribute("hidden","true");
    //card.setAttribute("hidden","false");
    head.innerText="Percentage Card";

    var sub1 = parseFloat(document.getElementById("mark1").value);
    //alert(sub1);
    var sub2 = parseFloat(document.getElementById("mark2").value);
    var sub3 = parseFloat(document.getElementById("mark3").value);
    var percentage = (sub1 + sub2 + sub3)/3;
    alert ("Percentage is "+ percentage);

    studPara.innerText="The percentage obtained by your ward" + studName + " of Class " +studClass + " with RollNo" + studRollNo + "has scored";
    avgSpan.innerHTML="Percentage" + percentage;
    if(percentage<40)
    { avgSpan.style.color="red"; }
    else if(percentage<70){
        avgSpan.style.color="green";
    }
    else
    { avgSpan.style.color="white";}

    //para.innerText="hi";

}
