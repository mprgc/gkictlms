document.addEventListener("DOMContentLoaded", () => {

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
            top: -50px;
            animation: fall linear forwards;
        }
        .flake {
            display: block;
            animation: sway ease-in-out infinite;
            transform-origin:center;
        }
        @keyframes fall {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(120vh); opacity: 0; }
        }
        @keyframes sway {
            0% { transform: translateX(0px) rotate(0deg); }
            50% { transform: translateX(25px) rotate(180deg); }
            100% { transform: translateX(-25px) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-container";
    document.body.appendChild(snowContainer);

    let interval, active = false;

    function createSnow(){
        const snow = document.createElement("div");
        snow.className = "snow";

        const flake = new Image();

        /* 🔥 PUT YOUR IMAGE PATH HERE */
        flake.src = "../../img/snow.png";   // <-- change path to match your folder
        /********************************/

        flake.className = "flake";

        const size = 12 + Math.random()*25;
        flake.style.width = size+"px";

        snow.style.left = Math.random()*window.innerWidth+"px";

        const speed = 5 + Math.random()*5;
        snow.style.animationDuration = speed+"s";
        flake.style.animationDuration = (2 + Math.random()*3) + "s";

        snow.appendChild(flake);
        snowContainer.appendChild(snow);

        setTimeout(()=>snow.remove(), speed*1000+500);
    }

    window.toggleSnow = function(){
        active = !active;
        if(active){
            interval = setInterval(createSnow, 200);
        } else clearInterval(interval);
    };

    toggleSnow();

});
