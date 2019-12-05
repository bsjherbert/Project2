var exerciseData = {};

$(document).ready(function () {
    // $("#exerciseCard").hide();

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
        exerciseData.weight = $("#exerciseWeight").val();
        $("#exerciseStatsModal").modal("hide");
        $("#exerciseNameCard").html(exerciseData.name);
        $("#exerciseCard").show();
        // console.log(exerciseData); 
        //ajax post request 
        // $.ajax({
        //     type: "POST",
        //     url: "/",//route to post new exercise
        //     data: exerciseData,
        //     success: function(data) {
        //         console.log("Successfully posted: ")
        //         console.log(data)
        //     }
        // });
    });
});




