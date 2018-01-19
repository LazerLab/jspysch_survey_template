
/* Initial instructions for all four surveys */
var instruction_block = {
          type: "text",
          text: "<big><big><p>Welcome to the JSPsych survey template</p>" +
              "<p>This survey is meant to provide basic code for creating surveys using the jsPsych library" +
              "<p>Press any key to continue</p></big></big>"
        };
        
/* Demographic Information */

var demographic_survey = {
    type: 'survey-text',
    preamble:"<h1><p> Demographics Questions.</p></h1> <p><big><big>Please put your answers in the text boxes below each question.</p>"+
             "<p> After you have answered each question please press the submit button at the bottom of the page.</p></big></big>",
    questions: ["In what year were you born?",
                "What is the highest degree you have earned",
                "What is your gender?"],
     columns: [6,6,6]
};


/* Initial instructions for all four surveys */
var final_block = {
          type: "text",
          text: "<big><big><p>You have completed the survey</p>" +
              "<p>Press any key to return to Volunteer Science</p></big></big>"
        };

var timeline=[];
timeline.push(instruction_block);
timeline.push(demographic_survey);
timeline.push(final_block);

function myInit() {
    jsPsych.init({
    timeline:timeline,
    display_element:$('#main-test'),
    on_finish: function() {
        jsPsych.data.displayData('csv');
        var resultString=jsPsych.data.dataAsCSV();
        submit(resultString);
        log("Now settin window location");
        window.location.href ="intro.html";
        }
    });
}


function initialize() {
    myInit();
}

    	   
