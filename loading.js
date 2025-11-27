// --------------------------------------
//  FULL PAGE LOADING OVERLAY (ALL IN JS)
// --------------------------------------

// 1️⃣ CREATE CSS DYNAMICALLY
const style = document.createElement("style");
style.textContent = `
    #pageLoader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.85);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 999999;
    }

    .spinner {
        width: 60px;
        height: 60px;
        border: 6px solid #ccc;
        border-top-color: #00a5fe;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);


// 2️⃣ CREATE LOADER HTML (DYNAMIC)
const loader = document.createElement("div");
loader.id = "pageLoader";
loader.innerHTML = `<div class="spinner"></div>`;
document.body.appendChild(loader);


// 3️⃣ SHOW / HIDE FUNCTIONS
function showLoader() {
    document.getElementById("pageLoader").style.display = "flex";
}

function hideLoader() {
    document.getElementById("pageLoader").style.display = "none";
}


// 4️⃣ PAGE LOAD AUTO START
showLoader();
window.addEventListener("load", hideLoader);


// 5️⃣ LINK CLICKS → Auto Loading
document.addEventListener("click", function(e) {
    if (e.target.tagName === "A" && e.target.href) {
        showLoader();
    }
});


// 6️⃣ FORM SUBMIT → Auto Loading
document.addEventListener("submit", function() {
    showLoader();
});


// 7️⃣ FETCH REQUESTS → Auto Loading
const originalFetch = window.fetch;
window.fetch = function() {
    showLoader();
    return originalFetch.apply(this, arguments).finally(() => {
        hideLoader();
    });
};


// 8️⃣ XMLHTTPREQUEST → Auto Loading
(function(open) {
    XMLHttpRequest.prototype.open = function() {
        showLoader();
        this.addEventListener('load', hideLoader);
        open.apply(this, arguments);
    };
})(XMLHttpRequest.prototype.open);

