//creating character objects
$(document).ready(function(){

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


	//onclick functions

	$("button").on("click", function() {

			console.log("clicked button");

			alert($(this).parent().attr('id'));

		$("#char2Box").appendTo("#attackContainer");

			console.log("appended button");

	})

})

