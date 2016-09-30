
var SIZE_TABLE = 4;
var table = [];
var cell = {actual: false, old: false};

for (var i = 0; i < SIZE_TABLE; i++) {
	var row = [];
	for (var j = 0; j < SIZE_TABLE; j++) {
		row.push(cell);
	}
	table.push(row);
}

table[0][0] = {actual: true, old: true};
table[1][1] = {actual: true, old: true};
table[2][0] = {actual: true, old: true};
table[2][1] = {actual: true, old: true};
table[1][2] = {actual: true, old: true};


calculateNewState();

function calculateNewState() {
	
	var pos_x = [0, 1, 1, 1, 0, -1, -1, -1];
	var pos_y = [-1, -1, 0, 1, 1, 1, 0, -1];

	for (var i = 0; i < SIZE_TABLE; i++) {
		for (var j = 0; j < SIZE_TABLE; j++) {
			var num_cells = 0;
			for (var k = 0; k < pos_x.length; k++) {
			
				if (((i+pos_y[k]) >= 0) && ((j+pos_x[k]) >= 0) &&
					((i+pos_y[k]) < SIZE_TABLE) && ((j+pos_x[k]) < SIZE_TABLE) 
					) {
		
					if (table[i+pos_y[k]][j+pos_x[k]].old) {
						num_cells += 1;
					}

				}
			}
			
			console.log("i: "+i +" -j: "+j+ " -num: "+num_cells);

		}

	}
}







