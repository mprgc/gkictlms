// prevent running twice
if (!window.__snowEffectLoaded) {
window.__snowEffectLoaded = true;

document.addEventListener("DOMContentLoaded", () => {

    // inject css
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

    let snowInterval = null;

    function createSnow() {
        const snow = document.createElement("div");
        snow.className = "snow";

        const flake = new Image();
        flake.src = "../../img/snow.png";
        flake.className = "flake";

        const size = 5 + Math.random() * 20;
        flake.style.width = size + "px";

        const startX = Math.random() * (window.innerWidth - 50);
        let x = startX;
        const speed = 6 + Math.random() * 4;
        const amp = 20 + Math.random() * 15;
        const freq = 0.2 + Math.random() * 0;

        snow.appendChild(flake);
        snowContainer.appendChild(snow);

        let startTime = null;
        function animate(t) {
            if (!startTime) startTime = t;
            let elapsed = (t - startTime) / 1000;
            let y = (elapsed / speed) * (window.innerHeight + 100);
            snow.style.transform = `translate(${x + amp * Math.sin(elapsed * freq * 2 * Math.PI)}px, ${y}px)`;
            if (y < window.innerHeight + 100) requestAnimationFrame(animate);
            else snow.remove();
        }
        requestAnimationFrame(animate);
    }

    function startSnow() {
        if (!snowInterval) snowInterval = setInterval(createSnow, 200);
    }

    function stopSnow() {
        clearInterval(snowInterval);
        snowInterval = null;
    }

    // ---- Page Visibility — handle tab switch ----
    let leftTime = null;

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopSnow();
            leftTime = Date.now();    // record leaving time
        } else {
            // if away more than 2 seconds => FULL refresh
            if (leftTime && Date.now() - leftTime > 2000) {
                location.reload();
            } else {
                startSnow();
            }
        }
    });

    startSnow();
});

}


