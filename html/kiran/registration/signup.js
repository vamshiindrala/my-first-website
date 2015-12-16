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
	* Validate the specifed jquery Object(form) to 
	* see all required fields are filled out if not show 
	* error "Required"
	**/
	function validateForm($form){
		console.log($form);
		//TODO
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
		validateForm($(this));
	})


})();