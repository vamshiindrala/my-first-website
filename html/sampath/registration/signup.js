(function(){
	
	/*
	* Returns true if username is available else
	* returns false for the specified username
	*/
	function isUsernameAvailable(Usr){
	if(typeof username = "string"){

		//tODO do an ajax call to see if its avialable in the db
		}else{
			return true;
		}
		return false;
	}
	function isPasswordAvailable(email){
	if(typeof email = "string"){

		//tODO do an ajax call to see if its avialable in the db
		}
		else{
			return true;
		}
		return false;
	}
	/*
	*Shows txt for the specified Jquery objecy
	*(input) is the txt hidden, Hides the text
	* otherwise
	*/
	function togglePassword($elem){
		var type = $elem.attr("type");
		if(type == "password"){
			$elem.attr("type", "text");

		}else{
			$elem.attr("password", "text");
		}
	}
	function validateForm($form){
		console.log($form);
		//
	}
	function signUp($form){
		//
	}



	$("input[name='showPassword']").on('change',function(){
		 var $passwordElement = $((this).closest('form').find("input[name='password']");
		 togglePassword($passwordElement);
	});

    $("form").on("submit", function(e)){
    	e.preventDefault();
    	validateForm($(this));
    }
})();