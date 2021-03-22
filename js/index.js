'use strict'

const elForm = document.querySelector('#formReg');
const elName = document.querySelector('#textName');
const elCheckTerms = document.querySelector('#terms');
const elWorstShow = document.querySelector('#textWorstShow');
const elTermsHint = document.querySelector('#termsHint');
const elEmail = document.querySelector('#textEmail')
const elOutput = document.querySelector('#output');
const elBtnShowWorstShow = document.querySelector('#btnShowWorstShow')




function checkTerms(event) {
    if (!elCheckTerms.checked) {                                // If checkbox ticked
        elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
        event.preventDefault();                              // Don't submit form
    }


}


function saveNameAndShow (event){
    let name = elName.value;
    let show = elWorstShow.value;
    localStorage.setItem("name", name);
    localStorage.setItem("show", show)

    event.preventDefault();


}

function showNameAndShow(event){
    let name = localStorage.getItem("name");
    let show = localStorage.getItem("show");
    elOutput.textContent = "" + show +  " is the worst you know, " + name + "!"

    event.preventDefault();

    elForm.reset();

}


elForm.addEventListener("submit", saveNameAndShow,false);
elBtnShowWorstShow.addEventListener("click", showNameAndShow, false);


elForm.addEventListener("submit", checkTerms,false);


