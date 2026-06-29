document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});c:\Users\HP\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\0405AF5CB6ECFDDF39BE9E548047766AC1ADC67D\transfers\2026-26\WhatsApp Image 2026-06-29 at 3.31.20 PM.jpeg