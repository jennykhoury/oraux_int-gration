document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid-subjects');
    const randomBtn = document.getElementById('random-btn');
    const subjectCard = document.getElementById('subject-card');
    const placeholder = document.getElementById('placeholder-message');

    const titleEl = document.getElementById('subject-title');
    const q1El = document.getElementById('q1-text');
    const q2El = document.getElementById('q2-text');

    const correctionText = document.getElementById('correction-text');
    const correctionContent = document.getElementById('correction-content');
    const toggleCorrectionBtn = document.getElementById('toggle-correction-btn');
    const evalCheckboxes = document.querySelectorAll('.eval-checkbox');
    const totalScoreEl = document.getElementById('total-score');

    // Assure that SUBJECTS variable exists (loaded from subjects.js)
    if (typeof SUBJECTS === 'undefined' || SUBJECTS.length === 0) {
        grid.innerHTML = "<p style='color:red'>Erreur: Base de données des sujets introuvable (subjects.js).</p>";
        return;
    }

    // Toggle Correction
    toggleCorrectionBtn.addEventListener('click', () => {
        if (correctionContent.classList.contains('hidden')) {
            correctionContent.classList.remove('hidden');
            toggleCorrectionBtn.innerText = "Masquer la correction";
        } else {
            correctionContent.classList.add('hidden');
            toggleCorrectionBtn.innerText = "Afficher la correction";
        }
    });

    // Score Calculator
    evalCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            let total = 0;
            evalCheckboxes.forEach(box => {
                if (box.checked) total += parseFloat(box.value);
            });
            totalScoreEl.innerText = total.toFixed(1);
        });
    });

    // Build the 36 buttons grid
    SUBJECTS.forEach(subject => {
        const btn = document.createElement('button');
        btn.className = 'subject-btn';
        btn.innerText = subject.id;
        btn.dataset.id = subject.id;
        btn.addEventListener('click', () => loadSubject(subject.id));
        grid.appendChild(btn);
    });

    randomBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * SUBJECTS.length);
        const randomId = SUBJECTS[randomIndex].id;
        loadSubject(randomId);
    });

    function loadSubject(id) {
        // Reset previously active button
        const btns = document.querySelectorAll('.subject-btn');
        btns.forEach(b => b.classList.remove('active'));

        // Highlight current button
        const activeBtn = document.querySelector(`.subject-btn[data-id="${id}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Find subject data
        const subject = SUBJECTS.find(s => s.id == id);
        if (!subject) return;

        // UI toggles
        placeholder.classList.add('hidden');
        subjectCard.classList.remove('hidden');

        // Populate content
        titleEl.innerText = `Sujet N°${subject.id}`;
        q1El.innerHTML = subject.q1;
        q2El.innerHTML = subject.q2;

        // Populate correction & Reset Evaluation UI
        correctionText.innerHTML = subject.correction || "Correction en cours de rédaction...";
        correctionContent.classList.add('hidden');
        toggleCorrectionBtn.innerText = "Afficher la correction";

        evalCheckboxes.forEach(cb => cb.checked = false);
        totalScoreEl.innerText = "0.0";

        // Stop current timer
        resetTimer();

        // Ask MathJax to typset the new injected LaTeX content
        if (window.MathJax) {
            // Reprocess the whole subject content
            MathJax.typesetPromise([subjectCard]).catch((err) => console.log('MathJax error:', err));
        }
    }

    // --- TIMER LOGIC ---
    let timerInterval = null;
    let timeLeft = 15 * 60; // 15 minutes by default
    const DEFAULT_TIME = 15 * 60;

    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-timer-btn');
    const resetBtn = document.getElementById('reset-timer-btn');
    const timerContainer = document.getElementById('timer-container');

    function updateTimerDisplay() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        timerDisplay.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        if (timeLeft <= 300) { // last 5 minutes
            timerContainer.classList.add('urgent');
            timerContainer.classList.remove('running');
        } else if (timerInterval) {
            timerContainer.classList.add('running');
            timerContainer.classList.remove('urgent');
        } else {
            timerContainer.classList.remove('running', 'urgent');
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timeLeft = DEFAULT_TIME;
        updateTimerDisplay();
        startBtn.classList.remove('hidden');
        resetBtn.classList.add('hidden');
        timerContainer.classList.remove('running', 'urgent');
    }

    startBtn.addEventListener('click', () => {
        if (!timerInterval) {
            startBtn.classList.add('hidden');
            resetBtn.classList.remove('hidden');
            timerContainer.classList.add('running');

            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    timerContainer.classList.remove('running');
                    timerContainer.classList.add('urgent');
                    alert("⏱ Temps écoulé ! L'épreuve orale est terminée.");
                }
            }, 1000);
        }
    });

    resetBtn.addEventListener('click', resetTimer);

    // Initial display
    updateTimerDisplay();

    // --- SCROLL NAVIGATION ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const scrollToBottomBtn = document.getElementById('scroll-to-bottom');
    const viewerArea = document.querySelector('.viewer-area');

    if (scrollToTopBtn && scrollToBottomBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            try {
                if (viewerArea) viewerArea.scrollTo({ top: 0, behavior: 'smooth' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch(e) {
                if (viewerArea) viewerArea.scrollTop = 0;
            }
        });

        scrollToBottomBtn.addEventListener('click', () => {
            try {
                if (viewerArea) viewerArea.scrollTo({ top: viewerArea.scrollHeight, behavior: 'smooth' });
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            } catch(e) {
                if (viewerArea) viewerArea.scrollTop = viewerArea.scrollHeight;
            }
        });
    }
});
