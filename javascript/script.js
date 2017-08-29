//creating character objects
$(document).ready(function(){




		/*
		DONE - draw/create clickable character box, maybe make it a button variable 
		have button/character default to character div
		one a character is clicked have all the other characters that were not clicked moved to the enemies row
		Once characters move to enemy div have them change color
		Once character moves to defender div, have them change color again
		create button for attack (hide it until an enemy is selected, then show, 
		and hide again after enemy is defeted, and show when another on is selected)
		Need to add flag to disable the character selection after choosing someone to attack
		Need to add a hide/show function for the attack button (hide when an enemy/defender hasn't been selected.)
		Hide enemies after they die 
		*/







// Declaring Character Objects
// Charater 1 ++++++++++++++++++++++++++++++++++++++
	var char1 = {

		name: "Character 1",
		health: 215,
		attack: 10,
		counter: 5,	

		updateName: function() {
			document.getElementById("char1Name").innerText = this.name 
		}

	}


var collection = [char1, char2, char3, char4];
// Charater 2 ++++++++++++++++++++++++++++++++++++++
	var char2 = {

		name: "Character 2",
		health: 100,
		attack: 5,
		counter: 2,		
	}

// Charater 3 ++++++++++++++++++++++++++++++++++++++
	var char3 = {

		name: "Character 3",
		health: 150,
		attack: 15,	
		counter: 10,	
	}

// Charater 4 ++++++++++++++++++++++++++++++++++++++
	var char4 = {

		name: "Character 4",
		health: 180,
		attack: 20,
		counter: 15,		
	}

//Global Variables
 var selectionElements = document.getElementById('selectionContainer').children;
 var attackElements = document.getElementById('attackContainer').children;

//======================================================================
	//on.click functions
//======================================================================
	
	$("button").on("click", function() {


		//determin button location

			console.log($(this).parent().attr('id'));

		//handles all of the characters in the "character selection" stage. moving them to the next row/section	
		if ($(this).parent().attr('id') === "selectionContainer") {

			//asign the button click to a global variable
			selectedCharacter = this.id;

			console.log("selected character:", selectedCharacter )

			updateSelectedChar();


				//alert(selectedCharacter);

				console.log(selectionElements);

			//$("#char2Box").appendTo("#attackContainer");
			//console.log("appended button from the", $(this).parent().attr('id'), "to the attackContainer" );

			moveCharsToAttack()

		}

		//handles all of the characters in the "character selection" stage. moving them to the next row/section	
		if ($(this).parent().attr('id') === "attackContainer") {

			//asign the button click to a global variable
			selectedCharacter = this.id;

				alert(selectedCharacter);

				console.log(attackElements);

			//$("#char2Box").appendTo("#attackContainer");
			//console.log("appended button from the", $(this).parent().attr('id'), "to the attackContainer" );

			moveEnemyToDefend()

		}

	// Handles all of the buttons in the "fightContainer". Right now the only button in there is the attack button. 
	if ($(this).parent().attr('id') === "fightContainer") {

			//asign the button click to a global variable
			//selectedCharacter = this.id;

			if (this.id === "attackButton") {

					alert("Attack Button Clicked", attackButton);
					updateSelectedChar();



			}


		}



//=====================================================================================
		//Function Section
//=====================================================================================



	function updateSelectedChar () {

	    var str = "";
	    var test ="";

	    //take the selected character and turn it into a string
	    str += selectedCharacter;
	    console.log("str:", str);

	    //now take the string and remove the "box" portion on it so we can use the "selectedCharObj" to call the object.
	    var selectedCharObj = str.substring(0, 5);

	    var index = selectedCharObj.substring(4,5);

	    alert(index);

	     var obj = collection[parseInt(index) -1];

	     obj.updateName();

	     console.log("selectedCharObj", selectedCharObj);

	 //selectedCharObj.function();


	}







		// Add function that appends all other buttons that do not equal the button pressed to the "attack container"
		// change button's classes to "btn-danger"

		function moveCharsToAttack() {

			console.log("made it into function moveCharsToAttack");
			console.log(selectedCharacter);

			var i = selectionElements.length

			while (i--) {

				if( selectionElements[i].id != selectedCharacter) {

						//console.log(selectedCharacter);
						//console.log(selectionElements[i]);

						// create an empty string with a #, concat the button/char's id to the blank string so we can us it for the add class
						// append danger class to the characters/buttons to change their color.  
						var idString = "#";
						var buttonId = selectionElements[i].id;
						console.log("selection id:", selectionElements[i].id);
						idString += buttonId; 
						$(idString).removeClass("btn-default").addClass("btn-danger");


						// Move character/button to the attackContainer
						$(selectionElements[i]).appendTo("#attackContainer");

				}

			}

		} 


//----------------------------------------------


		function moveEnemyToDefend() {

			console.log("made it into function moveEnemyToDefend");
			console.log(selectedCharacter);

			var i = attackElements.length

			while (i--) {

				if( attackElements[i].id == selectedCharacter) {

						//console.log(selectedCharacter);
						//console.log(attackElements[i]);

						// create an empty string with a #, concat the button/char's id to the blank string so we can us it for the add class
						// append danger class to the characters/buttons to change their color.  
						var idString = "#";
						var buttonId = attackElements[i].id;
						console.log("selection id:", attackElements[i].id);
						idString += buttonId; 
						$(idString).removeClass("btn-danger").addClass("btn-default characterDefend");


						//create a variable for the defending enemy. 
						defendingEnemy = attackElements[i];

						// Move character/button to the attackContainer
						$(attackElements[i]).appendTo("#defendContainer");

				}

			}

		} 


//----------------------------------------------------------
//		Game Battle Mechanics
//----------------------------------------------------------



	})

})

