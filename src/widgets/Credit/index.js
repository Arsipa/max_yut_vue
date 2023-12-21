function init() {
    const scriptTag = document.querySelector("script[data-script=credit]");
    scriptTag?.parentNode.removeChild(scriptTag);

    let creditScript = document.createElement("script");
    creditScript.setAttribute("data-script", "credit");
    creditScript.setAttribute(
        "src",
        "https://v-credit.su/services/easycredit/simple/js.js"
    );
    document.body.appendChild(creditScript);
}

export default init;
