
	// $("#scene-menu a").click(function(event) {
	// 	event.preventDefault();
	// 	var path = "/js/files/",
	// 		file = $(this).data("name"),
	// 		ext	 = ".trm";

	// 	$.ajax({
	// 		url: path + file + ext,
	// 	}).done(function(data) {
	// 		dataJSON = JSON.parse(data);
	// 		displayContents(dataJSON);
	// 	});

	// });

// ready(tramaStart);

// function ready(fn) {
// 	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
// 		fn();
// 	} else {
// 		document.addEventListener('DOMContentLoaded', fn);
// 	}
// }

var sim1,
	sim2;

function tramaStart() {
	trama.loadAssets();

	var path = "/js/files/",
		ext	 = ".trm";

	var div1Id = "simulatorA",
		div2Id = "simulatorB",
		div3Id = "simulatorC";

	var scene1 = "scene",
		scene2 = "scene-homeostat",
		scene3 = "scene-sonar";

	trama.ajax({
		url: path + scene1 + ext,
		onload: function(data) {
			sim1 = new trama.Simulator({
				scene: data,
				divId: div1Id,
				width: "fit",
				height: "fit"
				// mainmenu: false,
				// compmenu: false,
			});
		}
	});

	trama.ajax({
		url: path + scene2 + ext,
		onload: function(data) {
			sim2 = new trama.Simulator({
				scene: data,
				divId: div2Id,
			});
		}
	});

	trama.ajax({
		url: path + scene3 + ext,
		onload: function(data) {
			sim3 = new trama.Simulator({
				scene: data,
				divId: div3Id
			});
		}
	});
}
