// --------------------------------------
//  FULL PAGE LOADING OVERLAY (ALL IN JS)
// --------------------------------------

// Add CSS
const style = document.createElement("style");
style.textContent = `
    #pageLoader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.75);
        display: flex;
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

// Create loader div immediately (visible by default)
const loader = document.createElement("div");
loader.id = "pageLoader";
loader.innerHTML = `<div class="spinner"></div>`;
document.body.appendChild(loader);

// SHOW & HIDE loader
function showLoader() {
    loader.style.display = "flex";
    document.body.style.overflow = "hidden";  // ❗ scroll disable
}

function hideLoader() {
    loader.style.display = "none";
    document.body.style.overflow = "auto";    // ❗ scroll enable
}

// PAGE LOADING FIX (DOM ready + window load)
document.addEventListener("DOMContentLoaded", () => {
    showLoader(); 
});

// When full page loaded (images + scripts)
window.addEventListener("load", () => {
    setTimeout(hideLoader, 150);
});

// ⭐ Link click — FIX: skip # links
document.addEventListener("click", function(e) {
    const target = e.target.closest("a");
    if (target && target.getAttribute("href") && !target.getAttribute("href").startsWith("#")) {
        showLoader();
    }
});

// ⭐ Form submit
document.addEventListener("submit", function() {
    showLoader();
});

// ⭐ fetch
const originalFetch = window.fetch;
window.fetch = function() {
    showLoader();
    return originalFetch.apply(this, arguments).finally(() => hideLoader());
};

// ⭐ XHR
(function(open) {
    XMLHttpRequest.prototype.open = function() {
        showLoader();
        this.addEventListener('load', hideLoader);
        open.apply(this, arguments);
    };
})(XMLHttpRequest.prototype.open);
