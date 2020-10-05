

for (let paragraph of document.getElementsByTagName("p")) {
    paragraph.innerHTML = `<a href="https:www.${paragraph.textContent}.com">${paragraph.textContent}</a>`;
}