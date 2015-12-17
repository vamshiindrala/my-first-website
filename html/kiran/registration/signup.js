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

			return true;
		}else{
			return false;
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
		//TODO
		return true;
	}

	/**
	* Appends the error html for the specfied jQuery Object
	* and shows the specfied message.
	*/
	function showError($obj, message){
		$obj.addClass("error").closest('td').append('<span class="errorMsg">'+message+'</span>');
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
				$(this).removeClass("error").closest('td').find('span.errorMsg').remove();
				if(val === '') {
					success = false;
					showError($(this),'Required');
				} else {
					if( $(this).attr('name') === 'email'){
						if(!isValidEmail(val)){
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