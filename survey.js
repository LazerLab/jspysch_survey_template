




/* Initial instructions for all four surveys */
var instruction_block = {
          type: "text",
          text: "<big><big><p>Welcome to the decision simuation experiment</p>" +
              "<p>Before beginning the simulation we will ask you a few demographic questions" +
                  " and then ask you to fill out four brief surveys. " +
              "We expect it will take you about 20 minutes to fill them out, but there are no time limits. "+
                  "You make take as much time as you wish. </p>"+
              "<p>Press any key to continue</p></big></big>"
        };
        
/* Demographic Information */

var demographic_survey = {
    type: 'survey-text',
    preamble:"<h1><p> Demographics Questions.</p></h1> <p><big><big>Please put your answers in the text boxes below each question.</p>"+
             "<p> After you have answered each question please press the submit button at the bottom of the page.</p></big></big>",
    questions: ["How old are you in years?",
                "How many semesters of college education have you had?",
                "What is your gender?"],
     columns: [6,6,6]
};

var timeline=[];
timeline.push(instruction_block);
timeline.push(demographic_survey);

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

    	   