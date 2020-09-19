function validateForm() {
    if (document.bform.first_name.value == "") {
        alert( "Please provide your first name.");
        document.bform.first_name.focus();
        return false;
    }
    if (document.bform.last_name.value == "") {
        alert( "Please provide your last name.");
        document.bform.last_name.focus();
        return false;
    }
}