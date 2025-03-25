function showOverlay(title, description, price, image) {
            document.getElementById('overlayTitle').innerText = title;
            document.getElementById('overlayDescription').innerText = description;
            document.getElementById('overlayPrice').innerText = price;
            document.getElementById('overlayImage').src = image;

            document.getElementById('overlay').style.display = 'flex';
        }

        function closeOverlay() {
            document.getElementById('overlay').style.display = 'none';
        }
