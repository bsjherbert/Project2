var exerciseData = {};

$(document).ready(function () {

    $("#addExerciseSubmit").click(function () {
        $("#nameTypeModal").modal("hide");
        $("#exerciseStatsModal").modal("show");
        exerciseData.name = $("#exerciseName").val();
        exerciseData.type = $("#exerciseType").val();
        $("#modalTitle2").html(exerciseData.name);
    });
    $("#addStatsSubmit").click(function () {
        exerciseData.sets = $("#exerciseSets").val();
        exerciseData.reps = $("#exerciseReps").val();
        exerciseData.weights = $("#exerciseWeight").val();
        $("#exerciseStatsModal").modal("hide");
        console.log(exerciseData) 
        $.post('/api/exercise', exerciseData, function (results) {
            window.location.href = "/"
        });
    })
});




