
        function openEnvelope() {
            document.getElementById('envelope').classList.add('open');
            let heartsContainer = document.getElementById('hearts');
            heartsContainer.innerHTML = '';
            // Create 10 hearts that float on the letter
            for (let i = 0; i < 10; i++) {
                let heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = `${Math.random() * 100}px`;
                heart.style.animationDelay = `${Math.random()}s`;
                heartsContainer.appendChild(heart);
            }
        }
        function resetEnvelope() {
            document.getElementById('envelope').classList.remove('open');
            document.getElementById('hearts').innerHTML = '';
        }