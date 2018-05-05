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

var expectedCra = Number(values / weights).toFixed(2);
var currentCra = parseFloat($('.panel-body:last > div > div').eq(1).text().replace(",", "."));

console.log("Expected CRA: " + expectedCra);
console.log("Current CRA: " + currentCra);

if (expectedCra != currentCra) {
	console.log("Your CRA has been changed!!!");
} else {
	console.log("\nNothing changed in your CRA!!!");
}
