var theme = 'biscuit'

var color_text = "#fff"
var color_fail_dark = "#8f0b0b"
var color_fail_light = '#ff8aa5'
var color_succ_dark = "#1d4b0a"
var color_succ_ligh = "#bbffca"

// runs when window started
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('b2');

	// onClick's SESSION ID logic below:
    link.addEventListener('click', function() {
        handler_id();
    });

	link = document.getElementById('b1');

    // onClick's CSFR TOKEN logic below:
    link.addEventListener('click', function() {
        handler_csf();
    });

	var cb = document.getElementById("common_box");
	var sb = document.getElementById("success_box");
	var fb = document.getElementById("fail_box");
	var fl = document.getElementById("fail_login_box");

	cb.style.display = 'block';
	sb.style.display = 'none';
	fb.style.display = 'none';
	fl.style.display = 'none';
});

// CSF TOKEN BUTTON
function handler_csf(){
	chrome.runtime.sendMessage({}, function(response) {
		if (response == null) {
			setTimeout(function(){fail_login_msg()}, 0); // fail
			return;
		};
		navigator.clipboard.writeText(response.token).then(() => {
			setTimeout(function(){s1()}, 0); 		// success
			setTimeout(function(){but1_s1()}, 0); 	// success
		  },() => {
			setTimeout(function(){f1()}, 0); 		// fail
			setTimeout(function(){but1_f1()}, 0); 	// fail
		});
	});
};

// CSF SESSION ID
function handler_id(){
	chrome.runtime.sendMessage({}, function(response) {
		if (response == null) {
			setTimeout(function(){fail_login_msg()}, 0); // fail
			return;
		};
		navigator.clipboard.writeText(response.id).then(() => {
			setTimeout(function(){s1()}, 0); 		// success
			setTimeout(function(){but2_s1()}, 0); 	// success
		  },() => {
			setTimeout(function(){f1()}, 0); 		// fail
			setTimeout(function(){but2_f1()}, 0); 	// fail
		});
	});
};

// display SUCCESS message
function s1() {
	var cb = document.getElementById("common_box");
	var sb = document.getElementById("success_box");

	var fb = document.getElementById("fail_box");
	fb.style.display = 'none';
	var fl = document.getElementById("fail_login_box");

	cb.style.display = 'none';
	sb.style.display = 'block';

	setTimeout(function(){
		cb.style.display = 'block';
		sb.style.display = 'none';

		fb.style.display = 'none';
		fl.style.display = 'none';
	}, 1000);
	setTimeout(function(){hide_popup()}, 1000);
};

// botton SUCCESS reaction
function but1_s1() {
	var But1 = document.getElementById("b1");

	var But2 = document.getElementById("b2");
	But2.style.backgroundColor = color_fail_dark;
	But2.style.color = color_text;
	
	But1.style.backgroundColor = color_succ_ligh;
	But1.style.color = color_succ_dark;
	setTimeout(function(){
		But1.style.backgroundColor = color_fail_dark;
		But1.style.color = color_text;
	}, 1000);
};
function but2_s1() {
	var But2 = document.getElementById("b2")

	var But1 = document.getElementById("b1");
	But1.style.backgroundColor = color_fail_dark;
	But1.style.color = color_text;
	
	But2.style.backgroundColor = color_succ_ligh;
	But2.style.color = color_succ_dark;
	
	setTimeout(function(){
		But2.style.backgroundColor = color_fail_dark;
		But2.style.color = color_text;
	}, 1000);
};

// display FAIL message
function f1() {
	var cb = document.getElementById("common_box");
	var fb = document.getElementById("fail_box");

	var sb = document.getElementById("success_box");
	sb.style.display = 'none';
	var fl = document.getElementById("fail_login_box");
	fl.style.display = 'none';

	cb.style.display = 'none';
	fb.style.display = 'block';

	setTimeout(function(){
		cb.style.display = 'block';
		fb.style.display = 'none';
		sb.style.display = 'none';
		fl.style.display = 'none';
	}, 2000);
	setTimeout(function(){hide_popup()}, 2000);
};

// botton FAIL reaction
function but1_f1() {
	var butClicked = document.getElementById("b1")
	var secondButton = document.getElementById("b2");

	secondButton.style.backgroundColor = color_fail_dark;
	secondButton.style.color = color_text;
	
	butClicked.style.backgroundColor = color_fail_light;
	butClicked.style.color = color_fail_dark;
	
	setTimeout(function(){
		butClicked.style.backgroundColor = color_fail_dark;
		butClicked.style.color = color_text;
	}, 2000);
	setTimeout(function(){hide_popup()}, 2000);
};
function but2_f1() {
	var butClicked = document.getElementById("b2")
	var secondButton = document.getElementById("b1");

	secondButton.style.backgroundColor = color_fail_dark;
	secondButton.style.color = color_text;
	
	butClicked.style.backgroundColor = color_fail_light;
	butClicked.style.color = color_fail_dark;
	
	setTimeout(function(){
		butClicked.style.backgroundColor = color_fail_dark;
		butClicked.style.color = color_text;
	}, 2000);
	setTimeout(function(){hide_popup()}, 2000);
};

// not logged
function fail_login_msg(){
	var cb = document.getElementById("common_box");
	var fb = document.getElementById("fail_box");
	var sb = document.getElementById("success_box");
	var fl = document.getElementById("fail_login_box");
	
	sb.style.display = 'none';
	cb.style.display = 'none';
	fb.style.display = 'none';
	fl.style.display = 'block';

	var But1 = document.getElementById("b1")
	var But2 = document.getElementById("b2");

	But1.style.backgroundColor = color_fail_light;
	But1.style.color = color_fail_dark;
	But2.style.backgroundColor = color_fail_light;
	But2.style.color = color_fail_dark;

	setTimeout(function(){
		cb.style.display = 'block';
		fb.style.display = 'none';
		sb.style.display = 'none';
		fl.style.display = 'none';

		But1.style.backgroundColor = color_fail_dark;
		But1.style.color = color_text;

		But2.style.backgroundColor = color_fail_dark;
		But2.style.color = color_text;
		}, 2000);

	setTimeout(function(){hide_popup()}, 2000);
}

// hide body
function hide_popup(){
	window.close();
}