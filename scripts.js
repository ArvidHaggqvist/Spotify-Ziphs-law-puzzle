(function(undefined){
	var m, n;
	var qi = [], songs = [], results = [];

	function inputToArray(str) {
	    var arr = str.split(" ");
	    n = parseInt(arr[0]);
	    m = parseInt(arr[1]);
	    for(i=2;i<arr.length;i=i+2) {
	        songs.push([parseInt(arr[i]), arr[i+1]]);
	    }
	}
	function songsToQiArray(songsArr) {
	    for(i=0;i<songsArr.length;i++) {
	        qi.push([songsArr[i][0] / (songsArr[0][0] / (i+1)), i]);
	    }
	}

	function sortQiArray() {
	    return qi.sort(function(a,b) {
	    	return (a[0] < b[0]) ? 1 : (a[0] > b[0] ? -1 : 0);
	    });
	}
	function getMSongsFromQiArray() {
		for(i=0;i<m;i++) {
			results.push(songs[qi[i][1]][1]);
		}
	}
	function resultsToString() {
		var resultString = "";
		for(i=0;i<results.length;i++) {
			resultString += results[i] + "\n";
		}
		return resultString;
	}
	function init(input) {
		inputToArray(input);
		songsToQiArray(songs);
		sortQiArray();
		getMSongsFromQiArray();
		return resultsToString();
	}
	console.log(init("15 3 197812 re_hash 78906 5_4 189518 tomorrow_comes_today 39453 new_genious 210492 clint_eastwood 26302 man_research 22544 punk 19727 sound_check 17535 double_bass 18782 rock_the_house 198189 19_2000 13151 latin_simone 12139 starshine 11272 slow_country 10521 m1_a1"));
	//console.log(init("20 2 20 hej 10 då 100 först"));
	//getMSongsFromQiArray(sortQiArray(qi))
})();