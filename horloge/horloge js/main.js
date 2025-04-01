// Créer les graduations des minutes
        function createTicks() {
            const clock = document.querySelector('.clock');
            
            for (let i = 0; i < 60; i++) {
                const tick = document.createElement('div');
                tick.className = i % 5 === 0 ? 'tick hour' : 'tick';
                tick.style.transform = `rotate(${i * 6}deg)`;
                clock.appendChild(tick);
            }
        }

        // Mettre à jour l'horloge
        function updateClock() {
            // Obtenir l'heure de Paris
            const now = new Date();
            const options = { timeZone: 'Europe/Paris' };
            const parisTime = new Date(now.toLocaleString('en-US', options));
            
            const hours = parisTime.getHours() % 12;
            const minutes = parisTime.getMinutes();
            const seconds = parisTime.getSeconds();
            
            // Angles pour chaque aiguille
            const secondAngle = (seconds / 60) * 360;
            const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
            const hourAngle = ((hours + minutes / 60) / 12) * 360;
            
            // Appliquer les rotations
            document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
            document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
            document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
            
            // Mettre à jour l'heure numérique
            const formattedHours = parisTime.getHours().toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedSeconds = seconds.toString().padStart(2, '0');
            document.getElementById('digital-time').textContent = 
                `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }

        // Initialiser l'horloge
        document.addEventListener('DOMContentLoaded', () => {
            createTicks();
            updateClock(); // Mise à jour initiale
            setInterval(updateClock, 1000); // Mise à jour toutes les secondes
        });