//creating character objects
$(document).ready(function(){


// Declaring Character Objects
	var char1 = {

		name: "Character 1",
		health: 120,
		attack: 10,
		counter: 5,	

		/*
		DONE - draw/create clickable character box, maybe make it a button variable 
		have button/character default to character div
		one a character is clicked have all the other characters that were not clicked moved to the enemies row
		Once characters move to enemy div have them change color
		Once character moves to defender div, have them change color again
		create button for attack (hide it until an enemy is selected, then show, 
		and hide again after enemy is defeted, and show when another on is selected)
		*/

	}

	var char2 = {

		name: "Character 2",
		health: 100,
		attack: 5,
		counter: 2,		
	}

	var char3 = {

		name: "Character 3",
		health: 150,
		attack: 15,	
		counter: 10,	
	}

	var char4 = {

		name: "Character 4",
		health: 180,
		attack: 20,
		counter: 15,		
	}

//Global Variables
 var selectionElements = document.getElementById('selectionContainer').children;
 //var selectionElements = document.getElementById("selectionContainer").querySelectorAll(1);

	//on.click functions

	$("button").on("click", function() {


		//determin button location

			console.log($(this).parent().attr('id'));

		//handles all of the characters in the "character selection" stage. moving them to the next row/section	
		if ($(this).parent().attr('id') === "selectionContainer") {

			//asign the button click to a global variable
			selectedCharacter = this.id;

				alert(selectedCharacter);

				console.log(selectionElements);

			//$("#char2Box").appendTo("#attackContainer");
			//console.log("appended button from the", $(this).parent().attr('id'), "to the attackContainer" );

			moveCharsToAttack()

		}



		//Function Section

		// Add function that appends all other buttons that do not equal the button pressed to the "attack container"
		// change button's classes to "btn-danger"

		function moveCharsToAttack() {

			console.log("made it into function moveCharsToAttack");
			console.log(selectedCharacter);

			var i = selectionElements.length

			while (i--) {

				if( selectionElements[i].id != selectedCharacter) {

						console.log(selectedCharacter);
						console.log(selectionElements[i]);

						$(selectionElements[i]).appendTo("#attackContainer");

				}

			}

		} 







	})

})

