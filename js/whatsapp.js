// ======================================
// WHATSAPP
// ======================================

const whatsappBtn =
  document.getElementById(
    'whatsapp-btn'
  );

if (whatsappBtn) {

  whatsappBtn.addEventListener(
    'click',
    e => {

      e.preventDefault();

      const name =
        document.querySelector(
          'input[type="text"]'
        )?.value || '';

      const phone =
        document.querySelector(
          'input[type="tel"]'
        )?.value || '';

      const date =
        document.querySelector(
          'input[type="date"]'
        )?.value || '';

      const message =
`Hello Casa Tranquila,

I would like to inquire about a stay.

Name: ${name}
Phone: ${phone}
Preferred Date: ${date}

Please share availability.

Thank you.`;

      const encoded =
        encodeURIComponent(message);

      const whatsappNumber =
        '919876543210';

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encoded}`,
        '_blank'
      );

    }
  );

}
