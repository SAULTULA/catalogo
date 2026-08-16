document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('radioStream');
    const playBtn = document.getElementById('playBtn');
    const statusDisplay = document.getElementById('statusText');
    const vuGlass = document.getElementById('vuGlass');
    const vuNeedle = document.getElementById('vuNeedle');
    const statusLed = document.getElementById('statusLed');
    const volKnob = document.getElementById('volKnob');
    
    let isPlaying = false;
    let currentVol = 1;
    let animationId;

    // Simular el movimiento del vúmetro
    function animateVU() {
        if (!isPlaying) return;
        
        // Simular valores de volumen (0 a 1) para dar vida a la aguja
        // En una radio real, la aguja reacciona al sonido.
        // Aquí hacemos un cálculo randomizado y suavizado.
        const baseValue = Math.random() * 0.4 + 0.2; // 0.2 a 0.6
        const peak = Math.random() > 0.9 ? Math.random() * 0.4 : 0; // Picos ocasionales
        
        let finalValue = (baseValue + peak) * currentVol;
        
        // Limitar entre 0 y 1
        finalValue = Math.max(0, Math.min(1, finalValue));

        // Mapear de valor (0-1) a coordenadas X del needle en el SVG
        // Min X ~40 (Silencio), Max X ~160 (Tope rojo)
        const targetX = 40 + (finalValue * 120);

        // Actualizar SVG attribute
        vuNeedle.setAttribute('x2', targetX);

        // La animación cambia cada 100-200ms
        setTimeout(() => {
            if (isPlaying) {
                animationId = requestAnimationFrame(animateVU);
            }
        }, 100 + Math.random() * 100);
    }

    function toggleRadio() {
        if (!isPlaying) {
            statusDisplay.innerText = "SINTONIZANDO...";
            statusLed.classList.add('radio-player__led--on');
            vuGlass.classList.add('radio-player__vu-glass--on');
            playBtn.classList.add('radio-player__power-btn--on');
            
            // Movimiento inicial de encendido
            vuNeedle.setAttribute('x2', 120);
            
            audio.play().then(() => {
                isPlaying = true;
                statusDisplay.innerText = "TRANSMITIENDO EN VIVO";
                animateVU();
            }).catch(error => {
                statusDisplay.innerText = "ERROR DE CONEXIÓN";
                console.error("Error al reproducir el stream:", error);
                
                // Efecto de fallo
                vuGlass.classList.remove('radio-player__vu-glass--on');
                setTimeout(() => vuGlass.classList.add('radio-player__vu-glass--on'), 200);
                setTimeout(() => vuGlass.classList.remove('radio-player__vu-glass--on'), 400);
                
                vuNeedle.setAttribute('x2', 40);
            });
        } else {
            audio.pause();
            isPlaying = false;
            
            playBtn.classList.remove('radio-player__power-btn--on');
            statusLed.classList.remove('radio-player__led--on');
            vuGlass.classList.remove('radio-player__vu-glass--on');
            statusDisplay.innerText = "RADIO APAGADA";
            
            cancelAnimationFrame(animationId);
            vuNeedle.setAttribute('x2', 40); // Posición de descanso
        }
    }

    playBtn.addEventListener('click', toggleRadio);

    // Control simple de volumen
    volKnob.addEventListener('click', () => {
        let rotation = 0;
        if (currentVol === 1) {
            currentVol = 0.5;
            rotation = -45;
            statusDisplay.innerText = "VOLUMEN: 50%";
        } else if (currentVol === 0.5) {
            currentVol = 0.2;
            rotation = -90;
            statusDisplay.innerText = "VOLUMEN: 20%";
        } else {
            currentVol = 1;
            rotation = 0;
            statusDisplay.innerText = "VOLUMEN: 100%";
        }
        audio.volume = currentVol;
        volKnob.style.transform = `rotate(${rotation}deg)`;
        
        if(isPlaying) {
            setTimeout(() => {
                statusDisplay.innerText = "TRANSMITIENDO EN VIVO";
            }, 1500);
        } else {
            setTimeout(() => {
                statusDisplay.innerText = "RADIO APAGADA";
            }, 1500);
        }
    });
});
