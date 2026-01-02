document.addEventListener("DOMContentLoaded", () => {
    // --- CSS ---
    const style = document.createElement("style");
    style.innerHTML = `
        .snow-container {
            position: fixed;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: 99999;
        }
        .snow {
            position: absolute;
            top: -80px;
            will-change: transform;
        }
        .flake {
            display: block;
            transform-origin: center;
            animation: rotateFlake linear infinite;
            will-change: transform;
        }
        @keyframes rotateFlake {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-container";
    document.body.appendChild(snowContainer);

    let interval, active = true;

    function createSnow() {
        const snow = document.createElement("div");
        snow.className = "snow";

        const flake = new Image();
        flake.src = "../../img/snow.png"; // 👈 ඔබේ snowflake image path
        flake.className = "flake";

        const size = 5 + Math.random() * 20;
        flake.style.width = size + "px";

        // random start X position
        const startX = Math.random() * (window.innerWidth - 50);
        let x = startX;

        // random fall speed
        const speed = 6 + Math.random() * 4;

        // smooth sway amplitude & frequency
        const amplitude = 20 + Math.random() * 15; // pixels
        const frequency = 0.2 + Math.random() * 0;   // oscillations per second

        snowContainer.appendChild(snow);
        snow.appendChild(flake);

        let startTime = null;

        function animate(time) {
            if (!startTime) startTime = time;
            const elapsed = (time - startTime) / 1000; // seconds

            // vertical position
            const y = (elapsed / speed) * (window.innerHeight + 100);
            snow.style.transform = `translate(${x + amplitude * Math.sin(elapsed * frequency * 2 * Math.PI)}px, ${y}px)`;

            if (y < window.innerHeight + 100) {
                requestAnimationFrame(animate);
            } else {
                snow.remove();
            }
        }

        requestAnimationFrame(animate);
    }

    window.toggleSnow = function () {
        active = !active;
        if (active) interval = setInterval(createSnow, 200);
        else clearInterval(interval);
    };

    // auto start
    toggleSnow();
});
