const accountExtend = document.getElementById("account-extend");

function showAccountExtend() {
    const accountExtend = document.getElementById("account-extend");
    accountExtend.style.display = "flex";
    accountExtend.focus();
    accountExtend.addEventListener("blur", function () {
        setTimeout(() => {
            accountExtend.style.display = "none";
        }, 500);
    });
}