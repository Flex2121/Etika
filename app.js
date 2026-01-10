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
        this.hintUsed = false;
        this.answered = false;
        this.ttsEnabled = false;
        this.voice = null;
        this.voiceURI = null;
        this.rate = 1.0;
        this.sessionHistory = [];

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
        this.populateCategories();
        this.updateStats();
        this.loadFailedQuestions();
        this.populateCategories();
        this.initTTS();
        this.updateStats();
        this.bindEvents();
    }

    initTTS() {
        const ttsToggle = document.getElementById('tts-toggle');
        const voiceSelect = document.getElementById('voice-select');
        const rateRange = document.getElementById('rate-range');
        const rateValue = document.getElementById('rate-value');
        const ttsControls = document.getElementById('tts-controls');

        // Load saved state
        const savedEnabled = localStorage.getItem('ttsEnabled');
        this.ttsEnabled = savedEnabled === 'true';
        if (ttsToggle) ttsToggle.checked = this.ttsEnabled;
        if (ttsControls) {
            if (this.ttsEnabled) ttsControls.classList.remove('hidden');
            else ttsControls.classList.add('hidden');
        }

        const savedVoice = localStorage.getItem('ttsVoiceURI');
        if (savedVoice) this.voiceURI = savedVoice;

        const savedRate = localStorage.getItem('ttsRate');
        if (savedRate) {
            this.rate = parseFloat(savedRate);
            if (rateRange) rateRange.value = this.rate;
            if (rateValue) rateValue.textContent = `${this.rate}x`;
        }

        // Toggle event
        if (ttsToggle) {
            ttsToggle.addEventListener('change', (e) => {
                this.ttsEnabled = e.target.checked;
                localStorage.setItem('ttsEnabled', this.ttsEnabled);
                if (this.ttsEnabled) {
                    ttsControls.classList.remove('hidden');
                } else {
                    ttsControls.classList.add('hidden');
                    this.stopSpeech();
                }
            });
        }

        // Voice Select Event
        if (voiceSelect) {
            voiceSelect.addEventListener('change', (e) => {
                this.voiceURI = e.target.value;
                localStorage.setItem('ttsVoiceURI', this.voiceURI);

                // Update current voice object
                const voices = window.speechSynthesis.getVoices();
                this.voice = voices.find(v => v.voiceURI === this.voiceURI);
            });
        }

        // Rate Range Event
        if (rateRange) {
            rateRange.addEventListener('input', (e) => {
                this.rate = parseFloat(e.target.value);
                rateValue.textContent = `${this.rate}x`;
                localStorage.setItem('ttsRate', this.rate);
            });
        }

        // Init voices
        if ('speechSynthesis' in window) {
            const loadVoices = () => {
                const voices = window.speechSynthesis.getVoices();

                if (voiceSelect) {
                    voiceSelect.innerHTML = '';

                    // Filter strictly for Czech voices (by lang OR name)
                    let csVoices = voices.filter(v =>
                        v.lang.includes('cs') ||
                        v.lang.includes('cz') ||
                        v.name.includes('Czech') ||
                        v.name.includes('Čeština')
                    );

                    // Sort: Prioritize "Google" voices (usually higher quality/female), then others
                    csVoices.sort((a, b) => {
                        const isGoogleA = a.name.includes('Google');
                        const isGoogleB = b.name.includes('Google');
                        if (isGoogleA && !isGoogleB) return -1;
                        if (!isGoogleA && isGoogleB) return 1;
                        return a.name.localeCompare(b.name);
                    });

                    if (csVoices.length === 0) {
                        const option = document.createElement('option');
                        option.textContent = "Nenalezen žádný český hlas";
                        voiceSelect.appendChild(option);
                        voiceSelect.disabled = true;
                    } else {
                        csVoices.forEach(v => {
                            const option = document.createElement('option');
                            option.value = v.voiceURI;
                            option.textContent = v.name;
                            if (v.voiceURI === this.voiceURI) {
                                option.selected = true;
                            }
                            voiceSelect.appendChild(option);
                        });
                        voiceSelect.disabled = false;
                    }

                    // Set default if not set
                    if (!this.voiceURI && csVoices.length > 0) {
                        this.voiceURI = csVoices[0].voiceURI;
                        voiceSelect.value = this.voiceURI;
                        this.voice = csVoices[0];
                    } else if (this.voiceURI) {
                        // Verify saved voice still exists
                        const foundVoice = voices.find(v => v.voiceURI === this.voiceURI);
                        if (foundVoice) {
                            this.voice = foundVoice;
                        } else if (csVoices.length > 0) {
                            // Fallback to first CS voice if saved one is missing
                            this.voice = csVoices[0];
                            this.voiceURI = csVoices[0].voiceURI;
                            voiceSelect.value = this.voiceURI;
                        }
                    }
                }
            };

            window.speechSynthesis.onvoiceschanged = loadVoices;
            loadVoices();
        }
    }

    speak(text) {
        if (!this.ttsEnabled || !('speechSynthesis' in window)) return;

        this.stopSpeech();

        const utterance = new SpeechSynthesisUtterance(text);
        if (this.voice) {
            utterance.voice = this.voice;
            utterance.lang = this.voice.lang;
        }
        utterance.rate = this.rate;

        window.speechSynthesis.speak(utterance);
    }

    stopSpeech() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }

    // LocalStorage for failed questions
    getFailedQuestions() {
        const stored = localStorage.getItem('failedQuestions');
        if (!stored) return {};

        let parsed = JSON.parse(stored);

        // Migration: Array to Object
        if (Array.isArray(parsed)) {
            const migrated = {};
            parsed.forEach(id => {
                migrated[id] = 0;
            });
            localStorage.setItem('failedQuestions', JSON.stringify(migrated));
            return migrated;
        }

        return parsed;
    }

    handleIncorrectAnswer(questionId) {
        const failed = this.getFailedQuestions();
        // Always reset count to 0 on error
        failed[questionId] = 0;
        localStorage.setItem('failedQuestions', JSON.stringify(failed));
    }

    handleCorrectAnswer(questionId) {
        const failed = this.getFailedQuestions();
        // Only track if it was already in failed list
        if (failed.hasOwnProperty(questionId)) {
            // Increment success count
            failed[questionId] = (failed[questionId] || 0) + 1;

            // Remove only after 3 successful attempts
            if (failed[questionId] >= 3) {
                delete failed[questionId];
            }

            localStorage.setItem('failedQuestions', JSON.stringify(failed));
        }
    }

    loadFailedQuestions() {
        const failed = this.getFailedQuestions();
        const count = Object.keys(failed).length;
        document.getElementById('failed-count').textContent = count;

        const failedBtn = document.getElementById('btn-failed');
        if (count === 0) {
            failedBtn.disabled = true;
            failedBtn.querySelector('.mode-btn__desc').textContent = 'Žádné chyby';
        } else {
            failedBtn.disabled = false;
            failedBtn.querySelector('.mode-btn__desc').textContent = `${count} otázek k procvičení`;
        }
    }

    updateStats() {
        document.getElementById('total-questions').textContent = QUESTIONS.length;
    }

    populateCategories() {
        const categorySelect = document.getElementById('category-select');
        const uniqueCategories = [...new Set(QUESTIONS.map(q => q.category))];

        // Define syllabus order
        const categoryOrder = [
            "ÚVOD | PROČ třídíme",
            "CO třídíme",
            "ČÍM třídíme I.",
            "ČÍM třídíme II.",
            "JAK třídíme I.",
            "JAK třídíme II.",
            "Univerzální systémy organizace informací",
            "Oborové a specializované systémy organizace informací",
            "JAK s tříděnými informacemi NAKLÁDÁME",
            "K ČEMU se tříděním DOBÍRÁME",
            "Minulost, současnost a budoucnost organizace informací"
        ];

        // Sort categories based on the defined order
        uniqueCategories.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a);
            const indexB = categoryOrder.indexOf(b);
            // If category is not in the list, put it at the end
            return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
        });

        uniqueCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
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

        // Explanation toggle button
        const explanationBtn = document.getElementById('explanation-toggle-btn');
        if (explanationBtn) {
            explanationBtn.addEventListener('click', () => {
                const container = document.getElementById('explanation-container');
                container.classList.toggle('hidden');
                if (!container.classList.contains('hidden')) {
                    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        }
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });
        this.screens[screenName].classList.add('active');

        if (screenName === 'home') {
            this.loadFailedQuestions();
            this.stopSpeech();
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
            const failedState = this.getFailedQuestions();
            // Convert string keys to numbers for comparison
            const failedIds = Object.keys(failedState).map(Number);
            availableQuestions = QUESTIONS.filter(q => failedIds.includes(q.id));
        }

        // Filter by category
        const categorySelect = document.getElementById('category-select');
        if (categorySelect && categorySelect.value !== 'all') {
            availableQuestions = availableQuestions.filter(q => q.category === categorySelect.value);
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

        // TTS
        this.speak(question.question);

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

        const selectedBtn = document.querySelectorAll('.answer-btn')[buttonIndex];
        const originalIndex = parseInt(selectedBtn.dataset.originalIndex);
        const question = this.questions[this.currentIndex];
        const isCorrect = originalIndex === question.correct;

        // Track session history for review
        this.sessionHistory.push({
            question: question,
            selectedAnswerIndex: originalIndex,
            isCorrect: isCorrect
        });

        // Update score
        if (isCorrect) {
            this.playSuccessSound();
            this.score++;
            // Handle spaced repetition
            this.handleCorrectAnswer(question.id);
        } else {
            // Add to failed / Reset count
            this.handleIncorrectAnswer(question.id);
            this.playErrorSound();
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
            this.stopSpeech();
        }
    }

    playSuccessSound() {
        if (!window.AudioContext && !window.webkitAudioContext) return;

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();

        // C Major Chord (C5, E5, G5) for a pleasant "ding"
        const frequencies = [523.25, 659.25, 783.99];
        const now = ctx.currentTime;

        frequencies.forEach((freq, i) => {
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            oscillator.type = 'sine';
            oscillator.frequency.value = freq;

            // Envelope - "Bell" shape
            // i*0.05 adds a tiny strum effect (arpeggio)
            const startTime = now + (i * 0.05);

            gainNode.gain.setValueAtTime(0, startTime);
            gainNode.gain.linearRampToValueAtTime(0.25, startTime + 0.05); // Attack (Balanced)
            gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.8); // Long Decay

            oscillator.start(startTime);
            oscillator.stop(startTime + 1);
        });
    }

    playErrorSound() {
        if (!window.AudioContext && !window.webkitAudioContext) return;

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        // "Dun... Dun..." effect (Deeper and heavier)
        // 1st beat: "Dun"
        this.playDrumNote(ctx, 80, now);

        // 2nd beat: "Dun" (same pitch, slower interval)
        this.playDrumNote(ctx, 80, now + 0.25);
    }

    playDrumNote(ctx, freq, startTime) {
        // Layer 1: Triangle for "Punch" (Main body)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.connect(gain1);
        gain1.connect(ctx.destination);

        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, startTime);
        osc1.frequency.exponentialRampToValueAtTime(freq * 0.5, startTime + 0.5);

        // High gain (3.0) and instant attack
        gain1.gain.setValueAtTime(0, startTime);
        gain1.gain.linearRampToValueAtTime(3.0, startTime + 0.001);
        gain1.gain.exponentialRampToValueAtTime(0.001, startTime + 0.5);

        osc1.start(startTime);
        osc1.stop(startTime + 0.5);

        // Layer 2: Sine for "Sub-bass" (Bottom end)
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 0.8, startTime); // Slightly lower
        osc2.frequency.exponentialRampToValueAtTime(freq * 0.4, startTime + 0.5);

        gain2.gain.setValueAtTime(0, startTime);
        gain2.gain.linearRampToValueAtTime(3.0, startTime + 0.001);
        gain2.gain.exponentialRampToValueAtTime(0.001, startTime + 0.5);

        osc2.start(startTime);
        osc2.stop(startTime + 0.5);

        // Cleanup
        if (startTime > ctx.currentTime + 0.1) {
            osc1.onended = () => {
                setTimeout(() => {
                    if (ctx.state !== 'closed') ctx.close();
                }, 100);
            };
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


        // Show feedback (don't show explanation automatically)
        document.getElementById('explanation-text').textContent = question.explanation;
        document.getElementById('explanation-container').classList.add('hidden'); // Ensure hidden initially

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
        this.stopSpeech();
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
            svg.prepend(defs);

            scoreCircle.setAttribute('stroke', 'url(#gradient)');
        }

        scoreCircle.style.strokeDashoffset = offset;

        // Show results screen
        this.showScreen('results');

        // Logic for "Spaced Repetition" - failed mode
        if (this.mode === 'failed') {
            // Re-evaluate if any questions remain
            const failedCount = Object.keys(this.getFailedQuestions()).length;
            if (failedCount === 0) {
                document.getElementById('results-title').textContent = "Vše opraveno! 🎉";
                document.getElementById('results-icon').textContent = "✨";
            }
        }

        // Show next button (hidden) and retry actions
        document.getElementById('quiz-actions').classList.add('hidden');

        // Show detailed review IF there are incorrect answers
        const reviewContainer = document.getElementById('results-review');
        if (reviewContainer) {
            const wrongAnswers = this.sessionHistory.filter(item => !item.isCorrect);

            if (wrongAnswers.length > 0) {
                let reviewHTML = '<h3 class="review-header">Chybné odpovědi</h3>';

                wrongAnswers.forEach(item => {
                    const q = item.question;
                    reviewHTML += `
                        <div class="review-item">
                            <div class="review-question">${q.question}</div>
                            <div class="review-answer review-answer--wrong">
                                ❌ Vaše odpověď: ${q.answers[item.selectedAnswerIndex]}
                            </div>
                            <div class="review-answer review-answer--correct">
                                ✅ Správná odpověď: ${q.answers[q.correct]}
                            </div>
                            <div class="review-explanation">
                                💡 ${q.explanation}
                            </div>
                        </div>
                    `;
                });

                reviewContainer.innerHTML = reviewHTML;
                reviewContainer.classList.remove('hidden');
            } else {
                reviewContainer.classList.add('hidden');
            }
        }
    }

    resetQuiz() {
        this.currentMode = null;
        this.currentIndex = 0;
        this.score = 0;
        this.quizActive = false;
        this.sessionHistory = [];
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.quizApp = new QuizApp();
});
