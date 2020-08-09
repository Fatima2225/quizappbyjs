function check(){
    var score = 0
    var right_answer_1 = document.getElementById("q1-a1");
    var q1_answer_2 = document.getElementById("q1-a2");
    var q1_answer_3 = document.getElementById("q1-a3");
    if(right_answer_1.checked==true){
        score++
        alert("Q1 Answer Is Correct!")
    }
    else{
        alert("Sorry! Q1 Answer IS Wrong.")
    }


    var right_answer_2 = document.getElementById("q2-a2");
    var q1_answer_1 = document.getElementById("q2-a1");
    var q1_answer_3 = document.getElementById("q2-a3");
    if(right_answer_2.checked==true){
        score++
        alert("Q2 Answer Is Correct!")
    }
    else{
        alert("Sorry! Q2 Answer IS Wrong.")
    }

    var right_answer_3 = document.getElementById("q3-a2");
    var q3_answer_1 = document.getElementById("q3-a1");
    var q3_answer_3 = document.getElementById("q3-a3");
    if(right_answer_3.checked==true){
        score++
        alert("Q3 Answer Is Correct!")
    }
    else{
        alert("Sorry! Q3 Answer IS Wrong.")
    }


    var right_answer_4 = document.getElementById("q4-a1");
    var q4_answer_2 = document.getElementById("q4-a2");
    var q4_answer_3 = document.getElementById("q4-a3");
    if(right_answer_4.checked==true){
        score++
        alert("Q4 Answer Is Correct!")
    }
    else{
        alert("Sorry! Q4 Answer IS Wrong.")
    }

    var right_answer_5 = document.getElementById("q5-a2");
    var q5_answer_1 = document.getElementById("q5-a1");
    var q5_answer_3 = document.getElementById("q5-a3");
    if(right_answer_5.checked==true){
        score++
        alert("Q5 Answer Is Correct!")
    }
    else{
        alert("Sorry! Q5 Answer IS Wrong.")
    }
    alert("Your Score is " + score++)

}
