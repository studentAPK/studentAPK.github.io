 <!---------------- ÅLDERSTEST -------------------------------------->
	    
	<script type="text/javascript">
	var ageCheck = window.prompt("Vänligen ange din ålder:")
	if (ageCheck < 20) {
	 window.alert(" Du har angett att du är  " + ageCheck + " år.");
	 window.alert("Du måste vara minst 20 år för att få tillgång till denna sida.");
	 location.href = ("http://www.google.com");
	}
	 else if (ageCheck > 19 && ageCheck < 101 ) {
	  window.alert("Du är tillräckligt gammal, välkommen!");
	 }
	else {
	 window.alert("Fast nej, du måste vara ärlig om din ålder.");
	 location.href = ("https://www.youtube.com/watch?v=WcWM_1hBu_c");
	}
	</script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
