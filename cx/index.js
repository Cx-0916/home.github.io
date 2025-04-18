const showImageLink = document.getElementById('showImageLink');
        const imageContainer = document.getElementById('imageContainer');

        showImageLink.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止链接默认行为
            if (imageContainer.style.display === 'none') {
                imageContainer.style.display = 'block';
            } else {
                imageContainer.style.display = 'none';
            }
        });