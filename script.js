// You can add your codes here 
function setfocus(){
    document.getElementById(name).setfocus();
}

function getPercentage()
{
    //alert("hi");
    //var card = document.getElementById("reportCard");
    //card.removeAttribute("hidden","true");
    //card.setAttribute("hidden","false");

    // Getting Elements

    var studPara = document.querySelector("#displayPara");
    var head = document.querySelector("#cardHead");
    var avgSpan = document.querySelector("#avgDisplay")
    var divCard = document.querySelector("#divReportCard")
    var btnReset = document.getElementById("paraReset");
    var inputForm = document.querySelector(".inputArea");
    var studName = document.querySelector("#name");    
    var studClass = document.querySelector("#class");    
    var studRollNo = document.querySelector("#rollNo");
    var mark1 = document.getElementById("mark1");
    var mark2 = document.getElementById("mark2");
    var mark3 = document.getElementById("mark3");
    


    var sub1 = parseFloat(mark1.value);    
    var sub2 = parseFloat(mark2.value);
    var sub3 = parseFloat(mark3.value);
    var percentage = parseInt((sub1 + sub2 + sub3)/3);
    //alert ("Percentage is "+ percentage);
    //alert(studName);

    //Form Validation
    var alphaExp = /^[a-zA-Z]+$/;
    var numExp = /^[0-9]+$/;
    if(studName.value.length==0){alert("Please Enter Name!"); studName.focus();}
    //else if(studName.value.match(alphaExp)){alert("Valid Name");}
    else if(studClass.value.length==0){alert("Please Enter Class!"); studClass.focus();}
    else if(studRollNo.value.length==0){alert("Please Enter Roll Number!"); studRollNo.focus();}
    //else if()
    else if(sub1.length==0){alert("Please Enter Mark of Subject 1!"); mark1.focus(); }
    else if(sub1<0||sub1>=100){alert("Please Enter valid mark for Subject 1 (0 to 100)!"); mark1.focus();}
    else if(sub2.length==0){alert("Please Enter Mark of Subject 2!"); mark2.focus();}
    else if(sub2<0||sub2>=100){alert("Please Enter valid mark for Subject 2 (0 to 100)!"); mark2.focus();}
    else if(sub3.length==0){alert("Please Enter Mark of Subject 3!"); mark3.focus();}
    else if(sub3<0||sub3>=100){alert("Please Enter valid mark for Subject 3 (0 to 100)!"); mark3.focus();}
    else if(percentage>=0||percentage<=100)
    {
        // setting style 
        divCard.style.border = "solid red 4px";
        divCard.style.backgroundColor = "aqua";
        divCard.style.padding="5%";
        
        //Removing Form
        inputForm.setAttribute("hidden","true");

        //Adding Content

        head.innerText="Percentage Card";
        studPara.innerText="The percentage obtained by your ward  " + studName.value + " of Class " +studClass.value + " with RollNo : " + studRollNo.value + " is : ";
        avgSpan.innerText= percentage+" %";
        if(percentage<40)
        { avgSpan.style.color="red"; }
        else if(percentage<70){
            avgSpan.style.color="green";
        }
        else
        { avgSpan.style.color="white"; }
        btnReset.innerHTML="<button id=btnReset onclick='resetAll();'>Reset</button>"
    }

    //para.innerText="hi";

}

function resetAll()
{
    location.reload ();
}
