const articles = document.querySelectorAll('article');

articles.forEach((article, index)=>{
    article.addEventListener('mouseenter', e => {
        e.currentTarget.querySelector('video').play();
    })

    article.addEventListener('mouseleave', e => {
        e.currentTarget.querySelector('video').pause();
    })
})