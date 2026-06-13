// ======================================
// BOOKING FORM
// ======================================

const bookingForm =
  document.getElementById('booking-form');

if (bookingForm) {

  bookingForm.addEventListener(
    'submit',
    function (e) {

      e.preventDefault();

      const formData =
        new FormData(this);

      const data =
        Object.fromEntries(
          formData.entries()
        );

      console.log(data);

      alert(
        'Thank you. Your inquiry has been received.'
      );

      bookingForm.reset();

    }
  );

}
