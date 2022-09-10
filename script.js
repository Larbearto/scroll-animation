const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
	const triggerBottom = (window.innerHeight / 5) * 4

	console.log(window.innerHeight)
	console.log(triggerBottom)

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top

		if (boxTop < triggerBottom) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	})
}

/*

- Need a function (checkBoxes) to check because I want the check the positioning of each box.

- I need the function to also figure out the trigger point and at that trigger point, where do they slide in from.
    * (window.innerHeight) checks the height of the screen
   * I want the trigger point to be a little less than the innerHeight and I can't use a fixed number because screen size of users can be different so we will calculate the height of the screen  divided by 5 multiplied by 4.

- Then we need to bring in our boxes node list to loop through. For each box, create a top Box  and set it the curren box and use a method called 'getBoundingClientRect' to get the bounds

- Then I grab the top value from the DOMRect object by adding .top to the method and then ask if the top value which is boxTop, see if its less than the triggerBottom value which is the winder innerheight value i calculated.

- If it is then i'll add a class of 'show' to the box element, if not then i'll add a class of i want to remove the class of 'show'.
- in css the show class transforms the position translateX(0) back to its original position, if not it'll slide outscreen.
*/
