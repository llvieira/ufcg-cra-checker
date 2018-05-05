/**
 * @file UFCG CRA Checker
 * @author Lucas Lima Vieira <lima.lucaslv@gmail.com>
 * @version 1.0
 */
var rowCount = $('.table-bordered tr').length;
var weights = 0;
var values = 0;

for (var i = 1; i < rowCount; i++) {
	var weight = parseFloat($('.table-bordered tr:nth-child(' + i + ') td:nth-child(4)').text());
	var grade = parseFloat($('.table-bordered tr:nth-child(' + i + ') td:nth-child(6)').text().replace(",", "."));

	if (! isNaN(grade)) {
		weights += weight;
		values += grade * weight;	
	}
}

var gpa = Number(values / weights).toFixed(2);

console.log("GPA: " + gpa + " / 10.0");
