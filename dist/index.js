var addItem = document.getElementById('addItem') //input item
var addBtn = document.getElementById('addBtn')  //submit
var groupItems = document.getElementsByClassName('groupItems')  //display items
var delBtn = document.getElementsByClassName('delete')//remove item
var search = document.getElementById('search')//searchbar

let i = 1
let empty = false;


search.addEventListener('keyup',searchItems)

addBtn.addEventListener('click',addItems);

function addItems(e){
	e.preventDefault();

	if (addItem.value===''){
		alert('Please enter Item')

	}else {
		if (i< 4 && empty===false){	
			groupItems[i].value =addItem.value;
			i++; 
		}else if (i> 9){
			alert('Please add less than 10 items')		
		}else{
			
			if (empty ===false){
				empty=true;}
			//create new input & setup class and type
			var newInput = document.createElement('input');
			newInput.className = 'groupItems'
			newInput.type = 'text';
			newInput.name="";
			newInput.value = addItem.value
			newInput.id = i;
			
			//create new del button
			var newButton = document.createElement('button')//create new button
			newButton.className = 'delete';
			newButton.type = 'text';
			newButton.id = 'b'+i;
			newButton.setAttribute("onclick","Delete(id)");
			//newButton.onclick= Delete
			//newButton.onclick = function(){Delete(id)}

			var text = document.createTextNode('X')//create text node
			newButton.appendChild(text)

			//attach to parentnode
			var parentNode = document.querySelector('#disItems')
			//attach the new item
			parentNode.appendChild(newInput)
			//attach the new button
			parentNode.appendChild(newButton);
			i++;

			addHeight(i);			
		}
		
}}

	
function Delete(id){
	//e.preventDefault();
	let x = id
	let num = x.charAt(1)
	let delItem = document.getElementById(num);
	let delButton = document.getElementById(x);
	let parentNode = delButton.parentNode
	parentNode.removeChild(delItem);
	parentNode.removeChild(delButton);
	i--;
	//if(i===0){empty=true}
	// delItem.addEventListener('click',function(e){
	// 	e.preventDefault()
	// 	console.log(e)
	// })
	//alert(delItem);
	//alert(num);
}


function searchItems(e){

	e.preventDefault();
	//the text in the searchbar
	var text = e.target.value.toLowerCase();
	//console.log(text);
	var disItems = document.getElementById('disItems');
	let disInput = disItems.getElementsByTagName('input')
	let arrInput = Array.from(disInput)

	arrInput.forEach(function(x){
		var value = x.value.toLowerCase();
		x.style.color = '';
		if (value===text){
			console.log(1)
			x.style.color = '#EC7063'
		}
		})

}

function addHeight(i){
	let disItems = document.querySelector('.disItems')
	let height1 = disItems.offsetHeight
	disItems.style.height = (height1+30)+"px"

	if (i>5){
		let display = document.querySelector('.container');
		let height2 = display.offsetHeight;
		display.style.height = (height2+30)+"px";}
}
