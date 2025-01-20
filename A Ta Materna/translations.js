function changeLanguage(lang) {
    const elements = document.getElementsByClassName('translate');

    for (let element of elements) {
        const translation = element.getAttribute(`data-${lang}`);
        if (translation) {
            element.textContent = translation;
        }
    }

    document.documentElement.lang = lang;
}

// Initialize with default language (Romanian)
document.addEventListener('DOMContentLoaded', function () {
    changeLanguage('ro');
}); 