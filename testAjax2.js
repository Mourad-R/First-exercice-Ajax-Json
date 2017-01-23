//Variable ou se trouve les données Json
var xhttp = 'https://jsonplaceholder.typicode.com';

//Début de ma fonction qui cible l'id #get
$("#get").click(function() {
	$.ajax({
		type: "Get", //Type de requete 
		url: xhttp + "/posts/1", //Cible de l'url
		dataType: "json", //Type de données
		success: function(data) {
			console.log(data);
				}
			})
	});

//Variable ou se trouve les données Json
var country = 'https://jsonplaceholder.typicode.com';
//Début de ma fonction qui cible l'id #post
$("#post").click(function() {
	$.ajax({
		type: "Post",//Type de requete 
		url: country + "/posts",//Cible de l'url
		dataType: "json",//Type de données
		success: function(data) {
			console.log(data);
		}
	})
});

