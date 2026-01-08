// Organizace informací - Kvízová aplikace
// Main Application Logic

class QuizApp {
    constructor() {
        // State
        this.mode = null; // 'practice', 'test', 'random', 'failed'
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.answers = [];
        this.startTime = null;
        this.hintUsed = false;
        this.answered = false;

        // DOM Elements
        this.screens = {
            home: document.getElementById('screen-home'),
            quiz: document.getElementById('screen-quiz'),
            results: document.getElementById('screen-results')
        };

        // Initialize
        this.init();
    }

    init() {
        this.loadFailedQuestions();
        this.updateStats();
        this.bindEvents();
    }

    // LocalStorage for failed questions
    getFailedQuestions() {
        const stored = localStorage.getItem('failedQuestions');
        return stored ? JSON.parse(stored) : [];
    }

    saveFailedQuestion(questionId) {
        const failed = this.getFailedQuestions();
        if (!failed.includes(questionId)) {
            failed.push(questionId);
            localStorage.setItem('failedQuestions', JSON.stringify(failed));
        }
    }

    removeFailedQuestion(questionId) {
        let failed = this.getFailedQuestions();
        failed = failed.filter(id => id !== questionId);
        localStorage.setItem('failedQuestions', JSON.stringify(failed));
    }

    loadFailedQuestions() {
        const failed = this.getFailedQuestions();
        document.getElementById('failed-count').textContent = failed.length;

        const failedBtn = document.getElementById('btn-failed');
        if (failed.length === 0) {
            failedBtn.disabled = true;
            failedBtn.querySelector('.mode-btn__desc').textContent = 'Žádné chyby';
        } else {
            failedBtn.disabled = false;
            failedBtn.querySelector('.mode-btn__desc').textContent = `${failed.length} otázek k procvičení`;
        }
    }

    updateStats() {
        document.getElementById('total-questions').textContent = QUESTIONS.length;
    }

    bindEvents() {
        // Header click - return home
        document.getElementById('header').addEventListener('click', () => {
            this.showScreen('home');
        });

        // Mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                if (!e.currentTarget.disabled) {
                    this.startQuiz(mode);
                }
            });
        });

        // Answer buttons
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!this.answered) {
                    const index = parseInt(e.currentTarget.dataset.index);
                    this.selectAnswer(index);
                }
            });
        });

        // Hint button
        document.getElementById('hint-btn').addEventListener('click', () => {
            this.showHint();
        });

        // Next button
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Results buttons
        document.getElementById('retry-btn').addEventListener('click', () => {
            this.startQuiz(this.mode);
        });

        document.getElementById('home-btn').addEventListener('click', () => {
            this.showScreen('home');
        });
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });
        this.screens[screenName].classList.add('active');

        if (screenName === 'home') {
            this.loadFailedQuestions();
        }
    }

    // Fisher-Yates shuffle
    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    startQuiz(mode) {
        this.mode = mode;
        this.currentIndex = 0;
        this.score = 0;
        this.answers = [];
        this.startTime = Date.now();

        // Select questions based on mode
        let availableQuestions = [...QUESTIONS];

        if (mode === 'failed') {
            const failedIds = this.getFailedQuestions();
            availableQuestions = QUESTIONS.filter(q => failedIds.includes(q.id));
        }

        // Shuffle for random mode or always shuffle
        if (mode === 'random' || mode === 'practice' || mode === 'test') {
            availableQuestions = this.shuffle(availableQuestions);
        }

        // Get question count
        let count;
        if (mode === 'test') {
            count = 20; // Fixed 20 questions for Test Mode as per real exam
        } else {
            const countSelect = document.getElementById('question-count');
            count = countSelect.value === 'all' ? availableQuestions.length : parseInt(countSelect.value);
        }

        this.questions = availableQuestions.slice(0, Math.min(count, availableQuestions.length));

        if (this.questions.length === 0) {
            alert('Žádné otázky k dispozici!');
            return;
        }

        // Update UI
        document.getElementById('total-quiz-questions').textContent = this.questions.length;

        // Show score in practice mode
        const scoreDisplay = document.getElementById('score-display');
        if (mode === 'practice' || mode === 'failed') {
            scoreDisplay.classList.remove('hidden');
        } else {
            scoreDisplay.classList.add('hidden');
        }

        this.showScreen('quiz');
        this.showQuestion();
    }

    showQuestion() {
        const question = this.questions[this.currentIndex];
        this.answered = false;
        this.hintUsed = false;

        // Update progress
        document.getElementById('current-question').textContent = this.currentIndex + 1;
        const progress = ((this.currentIndex) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('score-display').textContent = `Skóre: ${this.score}`;

        // Update category
        document.getElementById('question-category').textContent = question.category;

        // Update question text
        document.getElementById('question-text').textContent = question.question;

        // Shuffle answers
        const answerIndices = [0, 1, 2, 3];
        const shuffledIndices = this.shuffle(answerIndices);

        // Store correct answer position after shuffle
        this.correctAnswerIndex = shuffledIndices.indexOf(question.correct);

        // Update answer buttons
        const answerBtns = document.querySelectorAll('.answer-btn');
        const letters = ['A', 'B', 'C', 'D'];

        answerBtns.forEach((btn, i) => {
            const originalIndex = shuffledIndices[i];
            btn.querySelector('.answer-btn__letter').textContent = letters[i];
            btn.querySelector('.answer-btn__text').textContent = question.answers[originalIndex];
            btn.classList.remove('selected', 'correct', 'wrong');
            btn.disabled = false;
            btn.dataset.originalIndex = originalIndex;
        });

        // Reset hint
        document.getElementById('hint-btn').disabled = false;
        document.getElementById('hint-container').classList.add('hidden');
        document.getElementById('hint-text').textContent = question.hint || 'Žádná nápověda není k dispozici.';

        // Hide explanation and actions
        document.getElementById('explanation-container').classList.add('hidden');
        document.getElementById('quiz-actions').classList.add('hidden');
    }

    showHint() {
        this.hintUsed = true;
        document.getElementById('hint-container').classList.remove('hidden');
        document.getElementById('hint-btn').disabled = true;
    }

    selectAnswer(buttonIndex) {
        if (this.answered) return;

        const question = this.questions[this.currentIndex];
        const answerBtns = document.querySelectorAll('.answer-btn');
        const selectedBtn = answerBtns[buttonIndex];
        const selectedOriginalIndex = parseInt(selectedBtn.dataset.originalIndex);

        const isCorrect = selectedOriginalIndex === question.correct;

        // Store answer
        this.answers.push({
            questionId: question.id,
            selectedIndex: selectedOriginalIndex,
            correct: isCorrect,
            hintUsed: this.hintUsed
        });

        // Update score
        if (isCorrect) {
            this.score++;
            // Remove from failed if correct
            this.removeFailedQuestion(question.id);
        } else {
            // Add to failed
            this.saveFailedQuestion(question.id);
        }

        // Visual feedback based on mode
        if (this.mode === 'practice' || this.mode === 'failed') {
            this.showFeedback(buttonIndex, isCorrect);
        } else {
            // Test mode - just mark selected and move on
            selectedBtn.classList.add('selected');
            this.answered = true;

            // Auto-advance after short delay
            setTimeout(() => {
                this.nextQuestion();
            }, 300);
        }
    }

    showFeedback(buttonIndex, isCorrect) {
        this.answered = true;
        const question = this.questions[this.currentIndex];
        const answerBtns = document.querySelectorAll('.answer-btn');

        // Disable all buttons
        answerBtns.forEach(btn => btn.disabled = true);

        // Show correct/wrong
        answerBtns.forEach((btn, i) => {
            const originalIndex = parseInt(btn.dataset.originalIndex);
            if (originalIndex === question.correct) {
                btn.classList.add('correct');
            } else if (i === buttonIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // Show explanation
        document.getElementById('explanation-text').textContent = question.explanation;
        document.getElementById('explanation-container').classList.remove('hidden');

        // Update score display
        document.getElementById('score-display').textContent = `Skóre: ${this.score}`;

        // Show next button
        const nextBtn = document.getElementById('next-btn');
        if (this.currentIndex === this.questions.length - 1) {
            nextBtn.textContent = 'Zobrazit výsledky';
        } else {
            nextBtn.textContent = 'Další otázka →';
        }
        document.getElementById('quiz-actions').classList.remove('hidden');
    }

    nextQuestion() {
        this.currentIndex++;

        if (this.currentIndex >= this.questions.length) {
            this.showResults();
        } else {
            this.showQuestion();
        }
    }

    showResults() {
        const totalTime = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        const correct = this.score;
        const total = this.questions.length;
        const percent = Math.round((correct / total) * 100);

        // Update results
        document.getElementById('correct-count').textContent = correct;
        document.getElementById('total-count').textContent = total;
        document.getElementById('score-percent').textContent = `${percent}%`;
        document.getElementById('stat-correct').textContent = correct;
        document.getElementById('stat-wrong').textContent = total - correct;
        document.getElementById('stat-time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Update title and icon based on score
        const resultsIcon = document.getElementById('results-icon');
        const resultsTitle = document.getElementById('results-title');

        if (percent >= 90) {
            resultsIcon.textContent = '🏆';
            resultsTitle.textContent = 'Výborně!';
        } else if (percent >= 70) {
            resultsIcon.textContent = '🎉';
            resultsTitle.textContent = 'Skvělé!';
        } else if (percent >= 50) {
            resultsIcon.textContent = '👍';
            resultsTitle.textContent = 'Dobře!';
        } else {
            resultsIcon.textContent = '📚';
            resultsTitle.textContent = 'Potřebuješ procvičovat';
        }

        // Animate score circle
        const scoreCircle = document.getElementById('score-circle');
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (percent / 100) * circumference;

        // Add SVG gradient
        const svg = scoreCircle.closest('svg');
        if (!svg.querySelector('defs')) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            gradient.setAttribute('id', 'gradient');
            gradient.setAttribute('x1', '0%');
            gradient.setAttribute('y1', '0%');
            gradient.setAttribute('x2', '100%');
            gradient.setAttribute('y2', '100%');

            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', '#667eea');

            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('stop-color', '#764ba2');

            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
            svg.insertBefore(defs, svg.firstChild);
        }

        scoreCircle.style.strokeDasharray = circumference;
        scoreCircle.style.strokeDashoffset = circumference;

        // Animate after a short delay
        setTimeout(() => {
            scoreCircle.style.strokeDashoffset = offset;
        }, 100);

        // Update progress bar to 100%
        document.getElementById('progress-fill').style.width = '100%';

        this.showScreen('results');
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.quizApp = new QuizApp();
});
