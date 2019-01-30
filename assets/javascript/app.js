var $tableBody = $("#tableBody");
var trainArray = [
    {
        name: "Hogwarts Express",
        destination: "Hogwarts",
        frequency: 30,
        arrivalTime: 0934,
        minAway: 5,
    },
    {
        name: "Caboose",
        destination: "Funky Town",
        frequency: 10,
        arrivalTime: 1100,
        minAway: 10,
    }
];

for (var i = 0; i < trainArray.length; i++) {
    var $tRow = $("<tr>")
    $tRow.append($(`<td>${trainArray[i].name}</td>`))
    $tRow.append($(`<td>${trainArray[i].destination}</td>`))
    $tRow.append($(`<td>${trainArray[i].frequency}</td>`))
    $tRow.append($(`<td>${trainArray[i].arrivalTime}</td>`))
    $tRow.append($(`<td>${trainArray[i].minAway}</td>`))
    $tableBody.append($tRow);
}