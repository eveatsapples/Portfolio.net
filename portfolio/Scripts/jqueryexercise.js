$(document).ready(function () {
    $(".doSomeMath").submit(function (e) {
        e.preventDefault();

        let input1 = $("#doSomeMathInput1").val();
        let input2 = $("#doSomeMathInput2").val();
        let input3 = $("#doSomeMathInput3").val();
        let input4 = $("#doSomeMathInput4").val();
        let input5 = $("#doSomeMathInput5").val();
        let numbersArr = [input1, input2, input3, input4, input5];

        let lowestNumber = Math.min.apply(null, numbersArr);
        let highestNumber = Math.max.apply(null, numbersArr);
        let mean = 0;
        let sum = 0;
        let product;

        //find the sum of all the numbers
        for (let i = 0; i < numbersArr.length; i++) {
            sum = parseFloat(sum) + parseFloat(numbersArr[i])
        }

        // find the mean of the numbers
        mean = sum / numbersArr.length;

        // find the product of all the numbers
        product = numbersArr.reduce((a, b) => a * b);

        $("#lowestNumber").html(`${lowestNumber} is the lowest number`);
        $("#highestNumber").html(`${highestNumber} is the highest number`);
        $("#mean").html(`${mean} is the mean`);
        $("#sum").html(`${sum} is the sum`);
        $("#product").html(`${product} is the product`);

        $("#doSomeMathInput1").val("");
        $("#doSomeMathInput2").val("");
        $("#doSomeMathInput3").val("");
        $("#doSomeMathInput4").val("");
        $("#doSomeMathInput5").val("");
    });

    $(".findFactorial").submit(function (e) {
        e.preventDefault();
        let input = $("#findFactorialInput").val();
        let initialInput = input;

        const findFactorial = (number) => {
            if (number < 0) {
                return null;
            } else if (number == 0) {
                return 1;
            } else {
                return (number * findFactorial(number - 1));
            }
        }
        let result = findFactorial(input);
   
        $("#factorialResult").html(`the factorial of ${initialInput} is ${result}`);
        $("#findFactorialInput").val("");
    });

    $(".fizzbuzz").submit(function (e) {
        e.preventDefault();

        let number1 = $("#fizzbuzzInput1").val();
        let number2 = $("#fizzbuzzInput2").val();
        
        $("#fizzbuzzResults").html("");
        for (i = 1; i <= 100; i++) {
            if (i % number1 === 0 && i % number2 === 0) {
                $("#fizzbuzzResults").append("<li>fizzbuzz</li>");
            } else if (i % number1 === 0) {
                $("#fizzbuzzResults").append("<li>fizz</li>");
            } else if (i % number2 === 0) {
                $("#fizzbuzzResults").append("<li>buzz</li>");
            } else {
                $("#fizzbuzzResults").append(`<li>${i}</li>`);
            }
        }

        $("#fizzbuzzInput1").val("");
        $("#fizzbuzzInput2").val("");
    });

    $(".palindrome").submit(function (e) {
        e.preventDefault();

        let input = $("#palindromeInput").val();
        let reversed = input.split("").reverse().join("");
        if (input == reversed) {
            $(".palindromeResult").html(`${input} and ${reversed} are the same therefore it is a palindrome`);
        } else {
            $(".palindromeResult").html(`${input} and ${reversed} are not the same and therefore not a palindrome`);
        }

        $("#palindromeInput").val("");
    });


    // button functionality
    $(document).ready(function(){
      $("#ex1-display-btn").click(function(){
        $("#ex1-code").toggleClass("hide-code");
      });
    });

    $(document).ready(function(){
      $("#ex2-display-btn").click(function(){
        $("#ex2-code").toggleClass("hide-code");
      });
    });

    $(document).ready(function(){
      $("#ex3-display-btn").click(function(){
        $("#ex3-code").toggleClass("hide-code");
      });
    });

    $(document).ready(function(){
      $("#ex4-display-btn").click(function(){
        $("#ex4-code").toggleClass("hide-code");
      });
    });

});
