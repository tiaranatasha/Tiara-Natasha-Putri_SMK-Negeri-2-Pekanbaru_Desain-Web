document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const src = img.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${src}" alt="Gallery Image">
                </div>
            `;
            document.body.appendChild(modal);

            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', function() {
                modal.remove();
            });
        });
    });
});
