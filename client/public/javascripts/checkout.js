Stripe.setPublishableKey('pk_test_skrIIcFzraRQHffvVyvIuazb00MexzCbpd');

// import { submit, find, append, get } from "../../src/components/shop/checkout";

submit = (event) => {
    $('#charge-error').addClass('hidden');
    find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    }, stripeResponseHandler);
    return false;
};

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        find('button').prop('disabled', false); // Re-enable submission

    } else { // Token was created!

        // Get the token ID:
        var token = response.id;

        // Insert the token into the form so it gets submitted to the server:
        append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form:
        get(0).submit();

    }
}