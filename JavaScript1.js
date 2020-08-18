function postcoderegex(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getAttribute("ntt_postcode").addOnChange(postcoderegexon);

    function postcoderegexon() {
        var postcoderegexvar = /[a-zA-Z]{1,2}[0-9]{1,2}?[0-9][a-zA-Z]{2,3}$/;
        var propertypostcode = formContext.getAttribute("ntt_postcode").getValue();

        if (!postcoderegexvar.test(propertypostcode)) {
            formContext.getControl("ntt_postcode").setNotification("Please make sure that your postcode is alphanumeric with no spaces.", "WARNING");
        } else {
            formContext.getControl("ntt_postcode").clearNotification("WARNING");
        }
    }
}