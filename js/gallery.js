// ======================================
// GALLERY
// ======================================

const galleryGrid =
  document.getElementById('gallery-grid');

async function loadGallery() {

  if (!galleryGrid) return;

  try {

    const response =
      await fetch('data/gallery.json');

    const images =
      await response.json();

    images.forEach(image => {

      const item =
        document.createElement('div');

      item.className = 'gallery-item';

      item.innerHTML = `
        <img
          src="${image.image}"
          alt="${image.title}"
        />
      `;

      item.addEventListener(
        'click',
        () => openLightbox(image.image)
      );

      galleryGrid.appendChild(item);

    });

  } catch (error) {
    console.error(error);
  }

}

function openLightbox(src) {

  const overlay =
    document.createElement('div');

  overlay.className = 'lightbox';

  overlay.innerHTML = `
    <img src="${src}">
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener(
    'click',
    () => overlay.remove()
  );

}

loadGallery();
