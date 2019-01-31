var tableBody = $("#tableBody");



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDjgQ0_dtaVDYEKHLwvyaryxXzOxZ8Gpu0",
    authDomain: "traintime-ucd.firebaseapp.com",
    databaseURL: "https://traintime-ucd.firebaseio.com",
    projectId: "traintime-ucd",
    storageBucket: "traintime-ucd.appspot.com",
    messagingSenderId: "865325209308"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#addTrainButton").on("click", function () {
    var name = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrainTime").val().trim();
    var frequency = $("#frequency").val().trim();

    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
    })
})

database.ref().on("child_added",
    function (snapshot) {
        var dbObj = snapshot.val();
        var $tRow = $("<tr>")
        $tRow.append($(`<td>${dbObj.name}</td>`))
        $tRow.append($(`<td>${dbObj.destination}</td>`))
        $tRow.append($(`<td>${dbObj.frequency}</td>`))
        $tRow.append($(`<td>${dbObj.arrivalTime}</td>`))
        $tRow.append($(`<td>${dbObj.minAway}</td>`))
        tableBody.append($tRow);
    },
    function (error) {
        console.log(error);
    }
)