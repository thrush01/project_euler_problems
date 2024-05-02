$(document).ready(function () {

    //variables declaration
    let question1Input = $('#question1_input');
    let question2Input = $('#question2_input');
    let question3Input = $('#question3_input');

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
   
    let randNum1=1000,randNum2=4000000,randNum3=600851475143;

    $("#randm").text(randNum1);
    $("#randm2").text(randNum2);
    $("#randm3").text(randNum3);

    //event triggers for tabs and generating random numbers
    $(document).on("click", "#refresh,#refresh2,#refresh3", function (event) {

        if ($(event.target).is("#refresh")) {
            randNum1 = getRandomNumber(1, 1000);
            $("#randm").text(randNum1);
            answ1.hide();
            input1.show();
        }
        else if ($(event.target).is("#refresh2")) {
            randNum2 = getRandomNumber(1, 4000000);
            $("#randm2").text(randNum2);
            answ2.hide();
            input2.show();
        }
        else if ($(event.target).is("#tab3") || $(event.target).is("#refresh3")) {
            randNum3 = getRandomNumber(1, 100000);
            $("#randm3").text(randNum3);
            answ3.hide();
            input3.show();
        }


    });
    /////////////////////////////////////////////////////////////////////////////////////////
    $(document).on("click", "#question1_button, #question2_button,#question3_button", function (event) {

        
        if ($(event.target).is("#question1_button")) {
            console.log("1");
            const inputValue = question1Input.val();
            //initial variables
            let sum = 0;
            let max = randNum1;

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
        }
        else if ($(event.target).is("#question2_button")) {

            const inputValue = question2Input.val();

            //initial variables and calculations
            let number = randNum2;
            let sum = 0, a = 1, b = 2,c;
            while (b < number) {
                if (b % 2 == 0) {
                    sum = sum + b;
                }
                c = a + b,a = b, b = c;
            }
            if (inputValue == sum) {

                swal("Good job!", "Congratulation", "success");
                answ2.show();
                input2.hide();
                $("#ans2").text(sum);

            } else {
                swal("Incorrect!", "Try Again", "error");
            }

        }
        else if($(event.target).is("#question3_button")) {

            const inputValue = question3Input.val();
            //initial variables and calculations
            let number = randNum3;
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
        }


    });
    
    
});
