(function(){

	/*
	* Returns true if the username is available else 
	* returns false for the specified username.
	*/
	function isUsernameAvailable(username){
		if(typeof username === "string"){
			//TODO do an ajax call to see if its available in the db.

			return true;
		}else{
			return false;
		}
	}


	/**
	* Returns true if the email is available else 
	* returns false for the specified email
	*/
	function isEmailAvailable(email){
		if(typeof email === "string"){
			//TODO do an ajax call to see if its available in the db.
			var data = {};
			data.method = "GET";
			data.url = "http://localhost:8080/data/isEmailAvailable.json";
			data.data = {"email": email};
			$.ajax(data).done(function(data){
				var $emailInput = $('input[name="email"]');
				if(data.success){
					showSuccess($emailInput, "Available");
				}else{
					showError($emailInput, "Email already taken");
				}
			});
		}
	}

	/**
	* Shows text for the specified jQuery object 
	* (input) if the text is hidden. Hides the text
	* otherwise
	*/
	function togglePassword($elem){
		var type = $elem.attr("type");
		if(type === "password"){
			$elem.attr("type", "text");
		}else{
			$elem.attr("type", "password");
		}
	}

	/**
	* Returns true if the specified email is
	* a valid email. false otherwise.
	*/
	function isValidEmail(email){
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

	/**
	* clears all both error and success messages for the specified 
	* jQuery Object
	*/
	function clearMessages($obj){
		$obj.removeClass("error").closest('td').find('span.errorMsg').remove();
		$obj.closest('td').find('span.successMsg').remove();
	}

	/**
	* Appends the error html for the specfied jQuery Object
	* and shows the specfied message.
	*/
	function showError($obj, message){
		clearMessages($obj);
		$obj.addClass("error").closest('td').append('<span class="errorMsg">'+message+'</span>');
	}

	/**
	* Appends the succecss html for the specfied jQuery Object
	* and shows the specfied message.
	*/
	function showSuccess($obj, message){
		clearMessages($obj);
		$obj.closest('td').append('<span class="successMsg">'+message+'</span>');;

	}

	/**
	* Validate the specifed jquery Object(form) to 
	* see all required fields are filled out if not show 
	* error "Required"
	**/
	function validateForm($form){
		var success = true;

		$form.find('input[type="text"], input[type="password"]')
			.each(function() {
				var val = $(this).val();
				clearMessages($(this));
				if(val === '') {
					success = false;
					showError($(this),'Required');
				} else {
					if( $(this).attr('name') === 'email'){
						if(isValidEmail(val)){
							isEmailAvailable(val);
						}else{
							showError($(this), 'Invalid Email');
						}	
					}
				}
			});

		return success;
	}

	/**
	* Submits the specified jQuery Object(form) 
	*/
	function signUp($form){
		//TODO
	}


	$("form").on('change', 'input[name="showPassword"]', function(){
		var $passwordElement = $("input[name='password']");
		togglePassword($passwordElement);
	});

	$("form").on("submit", function(e){
		e.preventDefault();
		var success = validateForm($(this));
		if(success){
			console.log("Validation successful");
			//TODO something
		}else{
			console.log("Validation failed");
		}
	})

	$('input[type="text"], input[type="password"]').on('keyup blur', function(){
		validateForm($(this).closest("form"));
	});


})();