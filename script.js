const questions = document.querySelectorAll('.question');


questions.forEach((question) => {
    question.addEventListener('click', () => {
        if (!question.parentNode.classList.contains('active')) {
            questions.forEach((question) => { question.parentNode.classList.remove('active') })
            question.parentNode.classList.add('active')
        }
        else{
            question.parentNode.classList.remove('active');
        }  
    })
})