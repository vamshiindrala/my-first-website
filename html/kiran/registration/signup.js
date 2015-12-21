(function(){

	/*
	* Returns true if the username is available else 
	* returns false for the specified username.
	*/
	function isUsernameAvailable(userName){

		if(typeof userName === "string"){
			//TODO do an ajax call to see if its available in the db.
			var request = $.ajax({
				method: "GET",
				url: "http://localhost:8080/data/isUserNameAvailable.json",
				data: {"userName": userName}
			});

			request.done(function(data){
				var $userNameInput = $('input[name="userName"]');
				if(data.success){
					showSuccess($userNameInput, data.message);
				}else{
					showError($userNameInput, data.message);
				}
			});
		}
	}


	/**
	* Returns true if the email is available else 
	* returns false for the specified email
	*/
	function isEmailAvailable(email){
		if(typeof email === "string"){
			//TODO do an ajax call to see if its available in the db.
			var request = $.ajax({
				method: "GET",
				url: "http://localhost:8080/data/isEmailAvailable.json",
				data: {"email": email}
			});

			request.done(function(data){
				var $emailInput = $('input[name="email"]');
				if(data.success){
					showSuccess($emailInput, data.message);
					
				}else{
					showError($emailInput, data.message);
					
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
		$obj.removeClass("error").closest('td').find('span.errorMsg').removeClass('errorMsg').html("&nbsp;");
		$obj.closest('td').find('span.successMsg').removeClass('successMsg').html("&nbsp;");
	}

	/**
	* Appends the error html for the specfied jQuery Object
	* and shows the specfied message.
	*/
	function showError($obj, message){
		clearMessages($obj);
		$obj.addClass("error").closest('td').find('span.msg').addClass("errorMsg").html(message);
	}

	/**
	* Appends the succecss html for the specfied jQuery Object
	* and shows the specfied message.
	*/
	function showSuccess($obj, message){
		clearMessages($obj);
		$obj.closest('td').find('span.msg').addClass("successMsg").html(message);

	}

	/**
	* Validate the specifed jquery Object(input)
	**/
	function validateInput($input){
		var val = $input.val();
		clearMessages($input);
		if(val === '') {
			showError($input,'Required');
			return false;
		}
	}

	/**
	* Validate the specifed jquery Object(form) to 
	* see all required fields are filled out if not show 
	* error "Required"
	**/
	function validateForm($form){
		var succecss = false;
		$form.find('input[type="text"], input[type="password"]')
			.each(function() {
				success = validateInput($(this));
			});
		return succecss;
	}

	/**
	* Submits the specified jQuery Object(form) 
	*/
	function signUp($form){
		//TODO
		console.log("Signing up");
		
	}


	$("form").on('change', 'input[name="showPassword"]', function(){
		var $passwordElement = $("input[name='password']");
		togglePassword($passwordElement);
	});

	$("form").on("submit", function(e){
		e.preventDefault();
		validateForm($(this));
		if($('.errorMsg').length === 0){
			signUp($("form"));
		}
	})


	$('input[name="email"]').on('keyup blur', function(){
		var val = $(this).val();
		if(isValidEmail(val)){
			isEmailAvailable(val);
		}else{
			showError($(this), 'Invalid Email');
		}	
	});

	$('input[name="userName"]').on('keyup blur', function(){		
		var val = $(this).val();
		if(val !== ""){
			isUsernameAvailable(val);
		}
	});

	$('input[type="text"], input[type="password"]').on('keyup blur', function(){
		validateInput($(this));
	});


})();