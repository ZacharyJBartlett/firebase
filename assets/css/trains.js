var config = {
    apiKey: "AIzaSyB-wbRoMjQPcbLIvKwXL-x6XxiGGD-7LXI",
    authDomain: "fir-js-fdcab.firebaseapp.com",
    databaseURL: "https://fir-js-fdcab.firebaseio.com",
    projectId: "fir-js-fdcab",
    storageBucket: "fir-js-fdcab.appspot.com",
    messagingSenderId: "903091381207"
};
firebase.initializeApp(config);

var database = firebase.database();

var train = "";
var destination = "";
var firstTrain = "";
var frequency = "";
var firstTimeConverted = "";
var currentTime = "";
var diffTime = "";
var tRemainder = "";
var minutesTillTrain = "";
var nextTrain = "";
var nextTrainFormatted = "";



$("#submit").on("click", function() {
    event.preventDefault();

    train = $("#name").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#firstTrain").val().trim();
    frequency = $("#frequency").val().trim();
    firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
    currentTime = moment();
    diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    tRemainder = diffTime % frequency;
    minutesTillTrain = frequency - tRemainder;
    nextTrain = moment().add(minutesTillTrain, "minutes");
    nextTrainFormatted = moment(nextTrain).format("hh:mm");

    database.ref().push({
        train: train,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        nextTrainFormatted: nextTrainFormatted,
        minutesTillTrain: minutesTillTrain
    });
});