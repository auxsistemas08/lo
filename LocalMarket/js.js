const socialFloatingIsland = document.querySelector('.social-floating-island');
        const toggleArrow = document.getElementById('toggleArrow');
        let islandVisible = true;

        // Mostrar u ocultar la isla flotante al hacer clic en la flecha
        toggleArrow.addEventListener('click', () => {
            if (islandVisible) {
                socialFloatingIsland.style.right = '-80px';
                toggleArrow.style.right= '0'; // Mueve la flecha 10px a la izquierda
            } else {
                socialFloatingIsland.style.right = '0';
                toggleArrow.style.right = '60px'; // Restaura la posición original de la flecha
            }
            islandVisible = !islandVisible;
        });