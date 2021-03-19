'use strict'

const elForm = document.querySelector('#formReg');
const elName = document.querySelector('#textName');
const elCheckTerms = document.querySelector('#terms');
const elTermsHint = document.querySelector('#termsHint');
const elEmail = document.querySelector('#textEmail')
const elFirst = document.querySelector('#textFirst');
const elSecond = document.querySelector('#textSecond');
const elThird = document.querySelector('#textThird');
const elFourth = document.querySelector('#textFourth');
const elFifth = document.querySelector('#textFifth');
const elOutput = document.querySelector('#output');


function showListOfTvShows (event){

    let name = elName.value;
    let email = elEmail.value;

    let firstPlace = elFirst.value;
    let secondPlace = elSecond.value;
    let thirdPlace = elThird.value;
    let fourthPlace = elFourth.value;
    let fifthPlace = elFifth.value;

    elOutput.textContent =
        + "1 " + firstPlace
        + "2. " + secondPlace
        + "3. " + thirdPlace
        + "4. " + fourthPlace
        + "5. " + fifthPlace


    elForm.reset();
    event.preventDefault();
}


function checkTerms(event) {                             // Declare function
    if (!elCheckTerms.checked) {                                // If checkbox ticked
        elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
        event.preventDefault();                              // Don't submit form
    }
}

elForm.addEventListener("submit", checkTerms,false);
elForm.addEventListener("change",showListOfTvShows,false);

