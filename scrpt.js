$(document).ready(function () {

    //variables declaration
    let question1Input = $('#question1_input');
    let question1Button = $('#question1_button');

    let question2Input = $('#question2_input');
    let question2Button = $('#qustion2_button');

    let question3Input = $('#question3_input');
    let question3Button = $('#qustion3_button');

    let input1 = $("#form1");
    let answ1 = $(".answ1");
    let input2 = $("#form2");
    let answ2 = $(".answ2");
    let input3 = $("#form3");
    let answ3 = $(".answ3");

    //random number function
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //initial random numbers
    let randNum = getRandomNumber(1, 10000);;
    $("#randm").text(randNum);
    $("#randm2").text(randNum);
    $("#randm3").text(randNum);

    //event triggers for tabs and generating random numbers
    $(document).on("click", "#tab1, #refresh,#tab2,refresh2,#tab3,refresh3", function (event) {

        if ($(event.target).is("#tab1") || $(event.target).is("#refresh")) {
            randNum = getRandomNumber(1, 1000);
            $("#randm").text(randNum);
            answ1.hide();
            input1.show();
        }
        else if ($(event.target).is("#tab2") || $(event.target).is("#refresh2")) {
            randNum = getRandomNumber(1, 4000000);
            $("#randm2").text(randNum);
            answ2.hide();
            input2.show();
        }
        else if ($(event.target).is("#tab3") || $(event.target).is("#refresh3")) {
            randNum = getRandomNumber(1, 100000);
            $("#randm3").text(randNum);
            answ3.hide();
            input3.show();
        }


    });
    /////////////////////////////////////////////////////////////////////////////////////////
    $(document).on("click", "#question1_button, #question2_button,#question3_button", function (event) {

        if ($(event.target).is("#tab1") || $(event.target).is("#refresh")) {
            randNum = getRandomNumber(1, 1000);
            $("#randm").text(randNum);
            answ1.hide();
            input1.show();
        }
        else if ($(event.target).is("#tab2") || $(event.target).is("#refresh2")) {
            randNum = getRandomNumber(1, 4000000);
            $("#randm2").text(randNum);
            answ2.hide();
            input2.show();
        }
        else if ($(event.target).is("#tab3") || $(event.target).is("#refresh3")) {
            randNum = getRandomNumber(1, 100000);
            $("#randm3").text(randNum);
            answ3.hide();
            input3.show();
        }


    });
    /////////////////////////////////////////////////////////////////////////////////////


    // Add event listeners to the submit buttons
    question1Button.on('click', function () {
        const inputValue = question1Input.val();


        //initial variables
        let sum = 0;
        let max = randNum;

        for (let i = 1; i < max; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }

        if (inputValue == sum) {

            swal("Good job!", "Congratulation!", "success");
            answ1.show();
            input1.hide();
            $("#ans1").text(sum);

        } else {
            console.log("wrong answer");
            swal("Incorrect!", "Try Again", "error");

        }
    });

    //event listener for question 2 
    question2Button.on('click', function () {
        const inputValue = question2Input.val();

        //initial variables and calculations
        let number = randNum;
        let sum = 0;
        let a = 1;
        let b = 1;
        let c;
        while (b < number) {
            if (b % 2 == 0) {
                sum = sum + b;
            }
            c = a + b;
            a = b;
            b = c;
        }

        if (inputValue == sum) {

            swal("Good job!", "Congratulation", "success");
            answ2.show();
            input2.hide();
            $("#ans2").text(sum);

        } else {
            swal("Incorrect!", "Try Again", "error");
        }
    });

    //event listener for button 3
    question3Button.on('click', function () {
        const inputValue = question3Input.val();

        //initial variables and calculations
        let number = randNum;
        let i = 2;
        while (i < number) {
            if (number % i == 0) {
                number /= i;
            } else {
                i++;
            }
        }
        if (inputValue == number) {

            swal("Good job!", "Congratulation!", "success");
            answ3.show();
            input3.hide();
            $("#ans3").text(number);
        } else {
            swal("Incorrect!", "Try Again", "error");
        }
    });
});
