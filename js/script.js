/*- If a user clicks "Read More" on the primary column:
  - have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
  - hide the "Read More" link using ```$.hide()```
  - show the "Read Less" link using ```$.show()```

- If a user clicks "Read Less" on the primary column:
  - have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
  - show the "Read More" link using ```$.show()```

- Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```
*/




$(document).ready(function(){

	$(".readmore").click(function(event){
		event.preventDefault();
	});

		$(".readmore").click(function(){
			$("#show-this-on-click").slideDown("slow");
		});	
	
		$(".readmore").click(function(){
			$(".readmore").hide();
		});	

		$(".readmore").click(function(){
			$(".readless").show();
		});	

	$(".readless").click(function(event){
		event.preventDefault();
	});
	
		$(".readless").click(function(){
			$("#show-this-on-click").slideUp("slow");
		});		
	
		$(".readless").click(function(){
			$(".readmore").show();
		});	

		$(".readless").click(function(){
			$(".readless").hide();
		});	


	$(".learnmore").click(function(event){
		event.preventDefault();
	});

		$(".learnmore").click(function(){
			$("#learnmoretext").slideDown("slow");
		});	
	
		$(".learnmore").click(function(){
			$(".learnmore").hide();
		});	



})

