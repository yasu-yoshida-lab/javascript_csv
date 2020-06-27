var file = document.getElementById('file');
var result = document.getElementById('result');

if (window.File && window.FileReader && window.FileList && window.Blob) {
	function loadLocalCsv(e) {
		var fileData = e.target.files[0];
		console.log(fileData);

		if (!fileData.name.match('.csv$')) {
			alert('CSVファイルを選択してください');
			return ;
		}

		var reader = new FileReader();
		reader.onload = function() {
			var cols = reader.result.split('\n');
			var data = [];
			for (var i = 0; i < cols.length-1; i++) {
				data[i] = cols[i].split(',');
			}
			var number_row = data.length-1;
			var number_col = data[0].length;
			var id_row = document.getElementById("row");
			id_row.textContent = "行数：" + number_row.toString();
			var id_col = document.getElementById("col");
			id_col.textContent = ", 列数：" + number_col.toString();

			var insert = createTable(data);
			result.appendChild(insert);
		}
		reader.readAsText(fileData);
	}
	file.addEventListener('change', loadLocalCsv, false);
} else {
	file.style.display = 'none';
	result.innerHTML = 'File APIに対応したブラウザを利用してください'
}

function createTable(data) {
	var table = document.createElement('table');
	for (var i = 0; i < data.length; i++) {
		var tr = document.createElement('tr');
		for (var j = 0; j < data[i].length; j++) {
			var td = document.createElement('td');
			td.innerText = data[i][j];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	return table;
}
