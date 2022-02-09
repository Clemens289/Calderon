function Bubbler() {
 	var body = document.getElementsByTagName('body')[0];

	var bubbler_wrapper = document.createElement('div');
	bubbler_wrapper.className = 'bubbler-wrapper';

	var menu_button = document.createElement('div');
	menu_button.className = 'bubbler-menu-loader ';
	menu_button.innerHTML = '<i class="fa fa-handshake-o" aria-hidden="true"></i>';

	 menu_button.onclick=function(){
		window.location.href="#crowdfunding";

	 }


	 var label_wrapper = document.createElement('label');
	 label_wrapper.className = 'bubbler-menu-item-label-wrapper';

	 var label = document.createElement('span');
	 label.className = 'bubbler-menu-item-label';
	 label.innerHTML = "Werde jetzt Partner!";

	 label_wrapper.appendChild(label);
	 menu_button.appendChild(label_wrapper);
 


	bubbler_wrapper.appendChild(menu_button);
	body.appendChild(bubbler_wrapper);
}