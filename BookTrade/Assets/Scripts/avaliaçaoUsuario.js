document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    const submitReview = document.getElementById('submit-review');
    const thankYouMessage = document.getElementById('thank-you');
    const reviewContainer = document.querySelector('.review-container');

    // Recupera a avaliação do localStorage se existir
    const storedRating = localStorage.getItem('userRating');
    if (storedRating) {
        ratingValue.textContent = storedRating;
        highlightStars(storedRating);
    }

    stars.forEach(star => {
        star.addEventListener('mouseover', handleMouseOver);
        star.addEventListener('mouseout', handleMouseOut);
        star.addEventListener('click', handleClick);
    });

    submitReview.addEventListener('click', () => {
        const rating = ratingValue.textContent;
        if (rating === '0') {
            alert('Por favor, forneça uma avaliação.');
            return;
        }
        // Salva a avaliação no localStorage
        localStorage.setItem('estrelas', rating);
        alert(`Avaliação enviada!\nEstrelas: ${rating}`);
        showThankYouMessage();
        
        
    });

    function handleMouseOver(e) {
        const value = e.target.getAttribute('data-value');
        highlightStars(value);
    }

    function handleMouseOut() {
        const value = ratingValue.textContent;
        highlightStars(value);
    }

    function handleClick(e) {
        const value = e.target.getAttribute('data-value');
        ratingValue.textContent = value;
        highlightStars(value);
    }

    function highlightStars(value) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('selected');
            }
        });
    }

    function showThankYouMessage() {
        thankYouMessage.classList.remove('hidden');
        reviewContainer.style.transform = 'scale(1.05)';
        setTimeout(() => {
            reviewContainer.style.transform = 'scale(1)';
        }, 300);
        setTimeout(() => {
            thankYouMessage.classList.add('hidden');
        }, 2000);
        setTimeout(() => {
            window.location.href = "/index.html";
        }, 800);
    }
    
});

function Onload() {
    if (localStorage.getItem("token") == null) {
        document.querySelector(".foto").innerHTML += ("<img src='/Assets/Img/User-Icon.png' class='user-avatar'  alt='icone de usuario'>");
    } else {
        let user = JSON.parse(localStorage.getItem("users"))[0];
        let nome = user.nome;
        document.querySelector("h2").innerHTML += (nome)
        document.querySelector(".foto").innerHTML += ("<img src='/Assets/Img/User-Icon.png' class='user-avatar' alt='icone de usuario'>");

        var imagemPerfil = document.querySelector('.user-avatar');
        var dataURL = localStorage.getItem('imagemPerfil');

        if (dataURL) {
            imagemPerfil.src = dataURL;
            imagemPerfil.style.width = '70px';
            imagemPerfil.style.height = '70px';
            imagemPerfil.style.borderRadius = '50%';
            imagemPerfil.style.objectFit = 'cover';
            imagemPerfil.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px;';
        } else {
            imagemPerfil.src = '/Assets/Img/User-Icon.png';
        }
    }

}
window.onload = Onload;