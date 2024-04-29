$(document).ready(function (){

    const question1Input = $('#question1_input');
    const question1Button = $('#question1_button');

    const question2Input = $('#question2_input');
    const question2Button = $('#qustion2_button');

    const question3Input =  $('#question3_input');
    const question3Button = $('#qustion3_button');

    // Add event listeners to the submit buttons
    question1Button.on('click', function () {
        const inputValue = question1Input.val();

        //initial variables
        let sum = 0;
        let max = 10;

        for (let i = 1; i < max; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        if (inputValue == sum) {
            console.log(sum);
            swal("Good job!", "You succeeded!", "success");
        } else {
            console.log("wrong answer");
            swal("Incorrect!", "Try Again", "error");

        }
    });

    question2Button.on('click', function () {
        const inputValue = question2Input.val();

        //initial variables and calculations
        let number = 4000000;
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
            console.log(sum);
            swal("Good job!", "You succeeded!", "seccess");
        } else {
            swal("Incorrect!", "Try Again", "error");
        }
    });

    question3Button.on('click', function () {
        const inputValue = question3Input.val();

        //initial variables and calculations
        let number = 600851475143;
        let i = 2;
        while (i < n) {
            if (number % i == 0) {
                number /= i;
            } else {
                i++;
            }
        }
        if (inputValue == n) {
            console.log(n);
            swal("Good job!", "You succeeded!", "success");
        } else {
            swal("Incorrect!", "Try Again", "error");
        }
    });
});
