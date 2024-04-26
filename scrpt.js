
const question1Input = document.getElementById('question1_input');
const question1Button = document.getElementById('question1_button');

const question2Input = document.getElementById('question2_input');
const question2Button = document.getElementById('qustion2_button');

const question3Input = document.getElementById('question3_input');
const question3Button = document.getElementById('qustion3_button');



// Add event listeners to the submit buttons
question1Button.addEventListener('click', function () {
    const inputValue = question1Input.value;


    let sum = 0;
    let max = 1000;

    for (let i = 1; i < max; i++) {

        if (i % 3 == 0 || i % 5 == 0) {

            sum += i;
        }
    }
    if(inputValue==sum){
    console.log(sum);
    }   
});

question2Button.addEventListener('click', function () {
    const inputValue = question2Input.value;

    let n = 4000000
    let sum = 0
    let a = 1
    let b = 1
    let c;
    while (b < n) {
        if (b % 2 == 0) {
            sum = sum + b
        }
        c = a + b
        a = b
        b = c
    }

    if (inputValue == sum) {
        console.log(sum);
    }

});

question3Button.addEventListener('click', function () {
    const inputValue = question3Input.value;

    let n=600851475143;
    let i=2;
    while(i<n){
        if(n%i==0){
            n/=i;
        }
        else{
            i++;
        }

    }
    if(inputValue==n){
        console.log(n);
    }

});

