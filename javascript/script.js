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
		},

		updateHealth: function() {
			document.getElementById("char1Health").innerText = this.health 
		}


	}

// Charater 2 ++++++++++++++++++++++++++++++++++++++
	var char2 = {

		name: "Character 2",
		health: 100,
		attack: 5,
		counter: 2,		

		updateName: function() {
			document.getElementById("char2Name").innerText = this.name 
		},

		updateHealth: function() {
			document.getElementById("char2Health").innerText = this.health 
		}
	}

// Charater 3 ++++++++++++++++++++++++++++++++++++++
	var char3 = {

		name: "Character 3",
		health: 150,
		attack: 15,	
		counter: 10,	

		updateName: function() {
				document.getElementById("char3Name").innerText = this.name 
			},

		updateHealth: function() {
				document.getElementById("char3Health").innerText = this.health 
			}

	}

// Charater 4 ++++++++++++++++++++++++++++++++++++++
	var char4 = {

		name: "Character 4",
		health: 180,
		attack: 20,
		counter: 15,	

		updateName: function() {
				document.getElementById("char4Name").innerText = this.name 
			},

		updateHealth: function() {
				document.getElementById("char4Health").innerText = this.health 
			}	
	}


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Global Variables (Note: there are additional global variables in the "update" functions)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 var collection = [char1, char2, char3, char4];
 var selectionElements = document.getElementById('selectionContainer').children;
 var attackElements = document.getElementById('attackContainer').children;

// things to hide.
$("#attackButton").hide();
	



//======================================================================
	//on.click functions (Handles all of the button clicks.)
//======================================================================
	
	$("button").on("click", function() {


		//determin button location

			console.log($(this).parent().attr('id'));

		//handles all of the characters in the "character selection" stage. moving them to the next row/section	
		if ($(this).parent().attr('id') === "selectionContainer") {

			//asign the button click to a global variable
			selectedCharacter = this.id;
				console.log("selected character:", selectedCharacter);

			updateSelectedChar();

			moveCharsToAttack();
		}	

		//handles all of the characters in the "character selection" stage. moving them to the next row/section	
		if ($(this).parent().attr('id') === "attackContainer") {

			//asign the button click to a global variable
			selectedEnemy = this.id;

			updateEnemyChar();

			moveEnemyToDefend()

			//unhide the attack button
			$("#attackButton").show();


		}

	// Handles all of the buttons in the "fightContainer". Right now the only button in there is the attack button. 
	if ($(this).parent().attr('id') === "fightContainer") {

			//asign the button click to a global variable
			//selectedCharacter = this.id;

			if (this.id === "attackButton") {

					//alert("Attack Button Clicked", attackButton);

					//alert("Char1 attack:", selectedCharacter.attack);

						battleCalculations();

			}


		}

//=====================================================================================
//General Function Section
//=====================================================================================

	function updateSelectedChar() {


	    var str = "";
	    var test ="";

	     // we want this unconcatinated string to hide the enemy after they die. 
	    glbCharStringId = "#";
	    glbCharStringId += selectedCharacter;

	    // lock in the user's selection
	    $(glbCharStringId).prop('disabled', true);

	    //take the selected character and turn it into a string
	     str += selectedCharacter;
	    console.log("str:", str);

	    //now take the string and remove the "box" portion on it so we can use the "selectedCharObj" to call the object.
	     selectedCharConcatString = str.substring(0, 5);

	    var index = selectedCharConcatString.substring(4,5);

	   //alert(index);

	      charObj = collection[parseInt(index) -1];

	     	console.log("selectedCharObj", selectedCharConcatString);

	     charObj.updateName();
	     charObj.updateHealth();

	    selectedCharAttack = charObj["attack"];
	     	console.log("selectedCharAttack", charObj["attack"]);     	

	 //selectedCharObj.function();

	}

//-------------------------------------------------------------

	function updateEnemyChar () {

	    var str = "";
	    var test ="";

	    // we want this unconcatinated string to hide the enemy after they die. 
	    glbEnemyStringId = "#";
	    glbEnemyStringId += selectedEnemy;

	    //take the selected character and turn it into a string
	     str += selectedEnemy;


	    console.log("str:", str);

	    //now take the string and remove the "box" portion on it so we can use the "selectedCharObj" to call the object.
	     enemyConcatString = str.substring(0, 5);

	    var index = enemyConcatString.substring(4,5);

	    //alert(index);

	      enemyObj = collection[parseInt(index) -1];

	     	console.log("selectedCharObj", enemyConcatString);

	     enemyObj.updateName();
	     enemyObj.updateHealth();

	     enemyCharAttack = enemyObj["attack"];
	     	console.log("enemyCharAttack", enemyObj["attack"]);     	

	 //selectedCharObj.function();

	}

//--------------------------------------------------------------

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
			console.log(selectedEnemy);

			var i = attackElements.length

			while (i--) {

				if( attackElements[i].id == selectedEnemy) {

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

			//disable the other enemies until the current one dies.
			$('#attackContainer').children().prop('disabled', true);
			$('#defendContainer').children().prop('disabled', true);

		} 


//----------------------------------------------------------
//		Game Battle Mechanics
//----------------------------------------------------------

characterAttackDamage = ++charObj["attack"];


// perform all of the battle calculations in this div (e.g. health subtraction for both characters and attack increase for the user/selectedChar)
function battleCalculations() {


	//alert("Made it in Battle Calcs!");


	// check the health of the user to determine what action to take.
	if (document.getElementById(selectedCharConcatString + "Health").innerText <= 0) {

		alert("You died... :-(");
		alert("Try again!");

	} else {

		//enemy damage calculation to user/selectedChar.
		document.getElementById(selectedCharConcatString + "Health").innerText -= enemyObj["attack"];
		console.log("enemyCharAttack", enemyObj["attack"]); 

	}



	// Check the health of the enemy to determine the action to take.
	if (document.getElementById(enemyConcatString + "Health").innerText <= 0) {

			alert("You Beat Them! :-)");
			alert("Do it again!");

			//reset health 
			charObj.updateHealth();

			// Enemy has died, hide them and the attack button. 
			$(glbEnemyStringId).hide();
			$("#attackButton").hide();



			// unlock the remaining enemies to allow the user to pick the next one they would like to fight.
			$('#attackContainer').children().prop('disabled', false);

	} else {

		// User damage calculation to the enemy. 

		

		//characterAttackDamage ++ 5;

		document.getElementById(enemyConcatString + "Health").innerText -= characterAttackDamage;
			console.log("selectedCharAttack", characterAttackDamage); 
		}



}	













	})

})

