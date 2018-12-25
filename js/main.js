var ntxt = document.getElementById("f-name");
var etxt = document.getElementById("f-email");
var fage = document.getElementById("f-age");
var password = document.getElementById("f-password");
var cpassword = document.getElementById("f-cpassword");
var submitbtn = document.getElementById("f-btn");
var form = document.querySelector(".form");
var test = document.querySelector(".test");
var q = document.querySelector(".q");
var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var c3 = document.querySelector(".c3");
var c4 = document.querySelector(".c4");
var next = document.getElementById("next");
var sidebar = document.querySelector(".exam__sidebar");
var useranswer = document.querySelectorAll(".examform__c");
var examresultform = document.querySelector(".examresultform");
var printresult = document.querySelector(".examresultform-grade");
var finish = document.querySelector(".finish");
var skip = document.querySelector(".skip");
ntxt.addEventListener("keyup", function () {
    nvalue = ntxt.value;
    if (nvalue == null || nvalue.length <= 4 || !(/^[a-zA-Z]+$/.test(nvalue)) || nvalue.length >= 15) {
        ntxt.style.backgroundColor = "rgb(255,128,128)";
        document.getElementById("nameerror").textContent = "name should be more than 4 letters and less than 15 letters doesnot contain numbers.";
    }
    else {
        ntxt.style.backgroundColor = "rgb(168,206,215)";
        document.getElementById("nameerror").textContent = " ";
    }
})
etxt.addEventListener("keyup", function () {
    var evalue = etxt.value;
    if (evalue == null || !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(evalue))) {
        etxt.style.backgroundColor = "rgb(255,128,128)";
        document.getElementById("emailerror").textContent = "Email is not valid.";
    }
    else {
        etxt.style.backgroundColor = "rgb(168,206,215)";
        document.getElementById("emailerror").textContent = " ";
    }
})
fage.addEventListener("keyup", function () {
    var fvalue = fage.value;
    if (fvalue == null || !(fvalue >= 5) || !(fvalue <= 99)) {
        fage.style.backgroundColor = "rgb(255,128,128)";
        document.getElementById("ageerror").textContent = "Age range from 5 to 99.";
    }
    else {
        fage.style.backgroundColor = "rgb(168,206,215)";
        document.getElementById("ageerror").textContent = " ";
    }
})
password.addEventListener("keyup", function () {
    var passwordvalue = password.value;
    var cpasswordvalue = cpassword.value;
    if (passwordvalue == null || passwordvalue.length <= 5) {
        password.style.backgroundColor = "rgb(255,128,128)";
        document.getElementById("passworderror").textContent = "password is too weak.";
    }
    else {
        password.style.backgroundColor = "rgb(168,206,215)";
        document.getElementById("passworderror").textContent = " ";
    }
})
cpassword.addEventListener("keyup", function () {
    var passwordvalue = password.value;
    var cpasswordvalue = cpassword.value;
    if (passwordvalue != cpasswordvalue || passwordvalue == null || cpasswordvalue == null) {
        cpassword.style.backgroundColor = "rgb(255,128,128)";
        document.getElementById("passerror").textContent = "password does not match.";
    }
    else {
        cpassword.style.backgroundColor = "rgb(168,206,215)";
        document.getElementById("passerror").textContent = " ";
    }
})
finish.addEventListener("click", showresult)
submitbtn.addEventListener("click", function () {
    nvalue = ntxt.value;
    if (!(nvalue == null || nvalue.length <= 4 || !(/^[a-zA-Z]+$/.test(nvalue)) || nvalue.length >= 15)) {
        var evalue = etxt.value;
        if (!(evalue == null || !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(evalue)))) {
            var fvalue = fage.value;
            if (!(fvalue == null || !(fvalue >= 5) || !(fvalue <= 99))) {
                var passwordvalue = password.value;
                var cpasswordvalue = cpassword.value;
                if (!(passwordvalue == null || passwordvalue.length <= 5)) {
                    var passwordvalue = password.value;
                    var cpasswordvalue = cpassword.value;
                    if (!(passwordvalue != cpasswordvalue || passwordvalue == null || cpasswordvalue == null)) {
                        alert("Your exam will begin now!");
                        Timer();
                        form.style.display = "none";
                        test.style.display = "block";
                        sidebar.style.display = "block";

                    } else {
                        alert("password doesnot match");
                    }
                } else {
                    alert("password is empty or too weak.")
                }
            } else {
                alert("age is not valid.");
            }
        } else {
            alert("email is not valid.");
        }
    } else {
        alert("name should be more than 4 letters and less than 15 letters doesnot contain numbers.");
    }
})
function Question(ques, a, b, c, d, correctAnswer) {
    this.ques = ques;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.correctAnswer = correctAnswer;
}
var ques1 = new Question("I .... tennis every Sunday morning.", "playing", "play", "am playing", "am play", "play");
var ques2 = new Question("Don't make so much noise. Noriko ...... to study for her ESL test!", "try", "tries", "tried", "is trying", "is trying");
var ques3 = new Question("Jun-Sik ...... his teeth before breakfast every morning.", "will clean", "is cleaning", "cleans", "clean", "cleans");
var ques4 = new Question("Sorry, she can't come to the phone. She ... a bath!", "is having", "have", "has", "had", "is having");
var ques5 = new Question(".... many times every winter in Frankfurt.", "It snows", "It snowed", "It is snowing", "It is snow", "It snows");
var ques6 = new Question("How many students in your class ..... from Korea?", "comes", "come", "came", "are coming", "come");
var ques7 = new Question("Babies ..... when they are hungry.", "cry", "	cries", "cried", "are crying", "cry");
var ques8 = new Question("Jane ..... her blue jeans today, but usually she wears a skirt or a dress.", "wears", "is wearing", "wearing", "wear", "is wearing");
var ques9 = new Question("I think I ..... a new calculator. This one does not work properly any more.", "needs", "need", "am neading", "are needing", "need");
var ques10 = new Question("Sorry, you can't borrow my pencil. I ..... it myself.", "was using", "using", "use", "am using", "am using");
var qn = 1;
var original = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10];
var arr = [];
var index = -1;



function Timer() {
    setTimeout(function(){ showresult(); }, 120000);
  }

  
var showQuestionReturnAns = function showQuestion() {
    index += 1;
    rand = Math.floor(Math.random() * original.length);
    arr.push(original[rand]);
    original.splice(rand, 1);
    q.innerHTML = qn + ") " + arr[index].ques;
    c1.innerHTML = arr[index].a;
    c2.innerHTML = arr[index].b;
    c3.innerHTML = arr[index].c;
    c4.innerHTML = arr[index].d;
    var correctans = arr[index].correctAnswer;
    console.log(arr[index].ques);
    ++qn;
    if (qn == 7) {
        showresult();
    }
    return correctans;
}
var temp = " ";
temp = showQuestionReturnAns();
var result = "0";
var counter = "0";
useranswer.forEach((el) => {
    el.addEventListener('click', (event) => {
        for (var i = 0; i < useranswer.length; i++) {
            if (useranswer[i] == event.target) {
                console.log(useranswer[i].innerHTML);
                if (useranswer[i].innerHTML == temp) {
                    console.log("correct ")
                    result++;
                }
                else {
                    console.log("wrong");
                }
                temp = showQuestionReturnAns();
                counter++;
            }
        }
    })
})
var username = document.querySelector(".examresultform__username");

function showresult() {
    test.style.display = "none";
    examresultform.style.display = "block";
    sidebar.style.display = "none";
    if (result == 5) {
        username.innerHTML = "Hi " + nvalue;
        printresult.innerHTML += result + "/5 Excellent!</br> <img src='images/happymonkey.png' class='pt-lg' width='300px'>";
    }
    if (result == 4) {
        username.innerHTML = "Hi " + nvalue;
        printresult.innerHTML += result + "/5 good!</br> <img src='images/good.png' class='pt-lg' width='300px'>";
    }
    if (result == 3) {
        username.innerHTML = "Hi " + nvalue;
        printresult.innerHTML += result + "/5 fair!</br> <img src='images/fair.png' class='pt-lg' width='300px'>";
    }
    if (result < 3) {
        username.innerHTML = "Hi " + nvalue;
        printresult.innerHTML += result + "/5 very bad!</br> <img src='images/sad.png' class='pt-lg' width='300px'>";
    }
}
skip.addEventListener("click", skippedques);
var arrskippedques = [];
var quesnum = [];
function skippedques() {
    var questionnum = "question " + (qn - 1) + " ) ";
    quesnum.push(questionnum);
    arrskippedques.push(arr[index]);
    sidebar.innerHTML = " ";
    for (var i = 0; i < arrskippedques.length; i++) {
        sidebar.innerHTML += "<h4 class='skipquestion'>" + quesnum[i] + arrskippedques[i].ques + "</h4><hr>";
    }
    skipq = document.querySelectorAll(".skipquestion");
    skipq.forEach((e) => {
        e.addEventListener('click', (event) => {
            for (var i = 0; i < skipq.length; i++) {
                if (skipq[i] == event.target) {
                    skipq[i].style.display = "none";
                    q.innerHTML = quesnum[i] + arrskippedques[i].ques;
                    c1.innerHTML = arrskippedques[i].a;
                    c2.innerHTML = arrskippedques[i].b;
                    c3.innerHTML = arrskippedques[i].c;
                    c4.innerHTML = arrskippedques[i].d;
                    qn--;
                    temp = arrskippedques[i].correctAnswer;
                    arrskippedques.splice(i,1);
                    quesnum.splice(i,1);
                }
            }
        });
    });
   temp= showQuestionReturnAns();
}







