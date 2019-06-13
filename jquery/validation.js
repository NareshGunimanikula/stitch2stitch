$(document).ready(function() {
	$("#first_name").focus();
	
	$("#contact_form").validate({
		rules: {
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			mob:{
				required:true,
				phoneUS: true
			},
			email: {
				required: true,
				email: true
			},
			message:{
				required:true,
			}
		},
 		messages: {
			mob: {
				mob: "*Phone number must be in valid formats"
			}
		} 
	}); // end validate
}); // end ready