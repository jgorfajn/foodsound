function App() {
    this.auth=localStorage.getItem('E App Name');    
}


App.prototype.pageChange=function(changeTo) {
    $(':mobile-pagecontainer').pagecontainer('change',changeTo,{changeHash:false});
}


App.prototype.q1=function() {
    $('#list_qs').append('<li><a id="q1a">test 1a</a></li>');
    $('#list_qs').append('<li><a id="q1b">test 1b</a></li>');
    $('#list_qs').append('<li><a id="q1c">test 1c</a></li>');
    $('#list_qs').append('<li><a id="q1d">test 1d</a></li>');
}


App.prototype.q2=function() {
    $('#list_qs').append('<li><a id="q2a">test 2a</a></li>');
    $('#list_qs').append('<li><a id="q2b">test 2b</a></li>');
    $('#list_qs').append('<li><a id="q2c">test 2c</a></li>');
    $('#list_qs').append('<li><a id="q2d">test 2d</a></li>');    
}

var app=new App();



$(document).ready(function() {
    $('#list_qs').empty();	
    app.q1();
    $('#list_qs').listview('refresh');
    
    $('#restart').click(function(event) {
	event.preventDefault();
	$('#list_qs').empty();	
	app.q1();
	$('#list_qs').listview('refresh');
    });
    $('#list_qs').on('click','a',function(event) {
	event.preventDefault();
	$('#list_qs').empty();
	switch (event.target.id) {
	case 'q1a': app.q2(); break;
	default: alert('unknown '+event.target.id);
	}
	$('#list_qs').listview('refresh');
	
    });

});

