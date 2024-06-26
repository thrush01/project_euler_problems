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

    //event triggers for tabs and generating random numbers
    $(document).on("click", "#refresh,#refresh2,#refresh3", function (event) {

        if ($(event.target).is("#refresh")) {

            answ1.hide();
            input1.show();
        }
        else if ($(event.target).is("#refresh2")) {

            answ2.hide();
            input2.show();
        }
        else if ($(event.target).is("#refresh3")) {

            answ3.hide();
            input3.show();
        }

    });

    ////////////////////////////////////////// Event for all 3 buttons ///////////////////////////////////////////////
    $(document).on("click", "#question1_button, #question2_button,#question3_button", function (event) {

        //checking if button 1 is clicked
        if ($(event.target).is("#question1_button")) {

            //variables
            const x = $("#np1").val();
            const y = $("#np2").val();
            const inputValue = question1Input.val();
            let sum = 0;
            let max = inputValue;

            // validating the user input if is whole number
            if (/^[0-9]+$/.test(inputValue) && /^[0-9]+$/.test(x) && /^[0-9]+$/.test(y)) {

                for (let i = 1; i < max; i++) {
                    if (i % x == 0 || i % y == 0) {
                        sum += i;
                    }
                }

                swal("Successful!", "-----", "success");
                answ1.show();
                input1.hide();
                $("#ans1").text(sum);

            } else {
                console.log("wrong answer");
                swal("Invalid Input!", "Try Again", "error");

            }
        }       //checking for button 2 click
        else if ($(event.target).is("#question2_button")) {

            const inputValue = question2Input.val();

            //initial variables and calculations
            let number = inputValue;
            let sum = 0, a = parseInt($("#np3").val()), b = parseInt($("#np4").val()), c;

            // validating the user input for whole number
            if (/^[0-9]+$/.test(inputValue) && /^[0-9]+$/.test(a) && /^[0-9]+$/.test(b)) {

                while (b < number) {
                    if (b % 2 == 0) {
                        sum = sum + b;
                    }
                    c = a + b, a = b, b = c;
                }


                swal("Successful!", "-----", "success");
                answ2.show();
                input2.hide();
                $("#ans2").text(sum);

            } else {
                swal("Invalid! Input", "Try Again", "error");
            }

        } ///checking for button 3 click
        else if ($(event.target).is("#question3_button")) {

            const inputValue = question3Input.val();
            //initial variables and calculations
            let number = inputValue;
            let i = 2;

            // validating thee user input
            if (/^[0-9]+$/.test(inputValue)) {

                while (i < number) {
                    if (number % i == 0) {
                        number /= i;
                    } else {
                        i++;
                    }
                }

                swal("Successful!", "-------", "success");
                answ3.show();
                input3.hide();
                $("#ans3").text(number);

            } else {
                swal("Invalid Input!", "Try Again", "error");
            }
        }
    });

});
