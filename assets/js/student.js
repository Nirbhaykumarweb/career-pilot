document.addEventListener('DOMContentLoaded', function () {
    const questionCards = document.querySelectorAll('[data-save-question]');
    questionCards.forEach((card) => {
        card.addEventListener('click', function () {
            const questionTitle = this.dataset.saveQuestion;
            let saved = JSON.parse(localStorage.getItem('careerPilotSavedQuestions') || '[]');
            if (!saved.includes(questionTitle)) {
                saved.push(questionTitle);
                localStorage.setItem('careerPilotSavedQuestions', JSON.stringify(saved));
            }
            alert('Question saved to your saved list.');
        });
    });

    const solveButtons = document.querySelectorAll('[data-solved]');
    solveButtons.forEach((button) => {
        button.addEventListener('click', function () {
            this.textContent = 'Solved';
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-success');
        });
    });

    const progressBars = document.querySelectorAll('[data-progress]');
    progressBars.forEach((bar) => {
        const value = parseInt(bar.dataset.progress, 10) || 0;
        bar.style.width = value + '%';
        bar.setAttribute('aria-valuenow', value);
    });

    const quizForm = document.getElementById('aptitudeQuiz');
    if (quizForm) {
        const options = document.querySelectorAll('.quiz-option');
        let currentIndex = 0;
        const questions = [
            {
                question: 'If a train travels 120 km in 2 hours, what is its speed?',
                options: ['40 km/h', '50 km/h', '60 km/h', '70 km/h'],
                answer: '60 km/h'
            },
            {
                question: 'Which of the following is an example of a prime number?',
                options: ['21', '29', '33', '49'],
                answer: '29'
            },
            {
                question: 'Choose the correctly spelled word.',
                options: ['Acomodate', 'Accommodate', 'Acommadate', 'Acomodate'],
                answer: 'Accommodate'
            }
        ];

        const questionText = document.getElementById('quizQuestion');
        const optionButtons = document.querySelectorAll('.quiz-option');
        const nextBtn = document.getElementById('nextQuestion');
        const prevBtn = document.getElementById('prevQuestion');
        const submitBtn = document.getElementById('submitQuiz');
        const resultBox = document.getElementById('quizResult');
        const answers = new Array(questions.length).fill(null);

        function renderQuestion() {
            const q = questions[currentIndex];
            questionText.textContent = `${currentIndex + 1}. ${q.question}`;
            optionButtons.forEach((button, idx) => {
                button.textContent = q.options[idx];
                button.classList.toggle('selected', answers[currentIndex] === q.options[idx]);
            });
            prevBtn.disabled = currentIndex === 0;
        }

        optionButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const selected = this.textContent;
                answers[currentIndex] = selected;
                optionButtons.forEach((btn) => btn.classList.remove('selected'));
                this.classList.add('selected');
            });
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < questions.length - 1) currentIndex++;
            renderQuestion();
        });

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) currentIndex--;
            renderQuestion();
        });

        submitBtn.addEventListener('click', function () {
            let score = 0;
            questions.forEach((q, idx) => {
                if (answers[idx] === q.answer) score++;
            });
            resultBox.innerHTML = `<strong>Quiz Completed:</strong> ${score}/${questions.length} correct.`;
        });

        renderQuestion();
    }

    const interviewButton = document.getElementById('startInterview');
    if (interviewButton) {
        interviewButton.addEventListener('click', function () {
            window.location.href = 'ai-interview.html';
        });
    }

    const reportButton = document.getElementById('generateReport');
    if (reportButton) {
        reportButton.addEventListener('click', function () {
            window.location.href = 'ai-interview-report.html';
        });
    }
});
