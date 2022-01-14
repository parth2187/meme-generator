// JavaScript By MediocreCoder192

console.log("Script linked");

var after = "" // For Pagination (button fetches more memes when clicked)


function fetchMemes() {
	// function fetchMemes is to be called when user clicks the button

	let parent = document.createElement('div'); // creates a div 
	parent.id = 'memes';	// gives the div an id of 'memes'
	let url = `https://www.reddit.com/r/memes.json?after=${after}`; // API url
	
	// If there is a div with id memes, it removes it when fetched
	if(document.getElementById('memes')) {
 			document.getElementById('memes').remove()
 		}
 		
	// fetch() gets the data for us
	fetch(url)
 		.then(response => response.json())
 		.then(body => {
 			after = body.data.after;
 			for(let i = 0; i < body.data.children.length; i++) {
 				if (body.data.children[i].data.post_hint === 'image') {

 					/* for the memes, I created 3 new elements which are nested like this:
					>div
						>h4
						>img
 					*/
 					let div = document.createElement('div') 
 					let h4 = document.createElement('h4')
 					let img = document.createElement('img')
 	
 					img.src = body.data.children[i].data.url_overridden_by_dest;
 					h4.textContent = body.data.children[i].data.title;
 					
 					// appendChild() adds the created elements to the page
 					div.appendChild(h4);
 					div.appendChild(img);
 					parent.appendChild(div);
 				}
 			}
 			document.body.appendChild(parent);
 		})
 	}
