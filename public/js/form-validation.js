$(function() {
    $('#contact-form').validate({
        messages: {
            name: "Your name is required",
            email: "Your email is required",
            message: "A message is required"
        }
    });
});
$(function() {
    $('#bookings').validate({
		rules: { 
			checkInDate: { 
				required: true, 
				dpDate: true 
			}
		},
        messages: {
            bookingName: "Your name is required",
            bookingEmail: "Your email is required",
            checkInDate: "A date is required",
			checkOutDate: "A date is required"
        }
    });
});