document.addEventListener('DOMContentLoaded', () => {
    const currentQuestionDisplay = document.querySelector('#current-question');
    const currentAnswerDisplay = document.querySelector('#current-answer');

    // Define the questions and answers for each button
    const questions = {
        //catorgory 1 questions  Characters<
        c1_200: "What is the name of Will's brother?",
        c1_400: "What is Vecna's number?",
        c1_600: "What is the name of Dustin's girlfriend in season 3 of the show?",
        c1_800: "What is eleven's birthname?",
        c1_1000: "How old was Will Byers when he disappeared?",
         //catorgory 2 questions The Upside Down
        c2_200: "What is the name of the police officer who helps Joyce Byers search for her son Will in the Upside Down world?",
        c2_400: "What form of communication is used by Joyce Byers to communicate with her son Will while he is in the Upside Down?",
        c2_600: "This structure seen in the Upside Down is a large-web organism that controls other creatures in this parallel dimension.",
        c2_800: "What common household item is needed to go into the water to help El get into the Upside Down world?",
        c2_1000: "What is the name of Dustins pet from the upside down world?",
         //catorgory 3 questions Places 
        c3_200: "Eddie Munson works at this pizza shop in Hawkins, a popular spot among the characters.",
        c3_400: "This arcade in Hawkins is where the kids play games like 'Dig Dug' and 'Dragon's Lair,' and first encounter Max.",
        c3_600: "Introduced in the third season, this location becomes a popular hangout and a key setting for supernatural events.",
        c3_800: "In Season 3, Nancy Wheeler and Jonathan Byers work at this local newspaper, where they investigate strange happenings in Hawkins.",
        c3_1000: "Joyce Byers works here, where she also gets Christmas lights to communicate with Will.",
         //catorgory 4 questions Early Episodes
        c4_200: "Upon her escape and throughout the series, this food becomes a signature favorite of Eleven, often used by her friends to comfort or bribe her.",
        c4_400: "In the series' opening scene, the main group of boys are playing this fantasy role-playing game in Mike's basement.",
        c4_600: "This character, best friend of Nancy Wheeler, disappears early in the series, becoming one of the first victims of the Upside Down.",
        c4_800: "This location in Hawkins is where Will Byers' supposed body is discovered in the early episodes, leading to a major turning point in the plot.",
        c4_1000: "In the second episode, a fake body resembling Will Byers is discovered in this location, complicating the search.",
         //catorgory 5 questions Later Episodes
        c5_200: "What was the name of the ice cream shop employee who helps decode Russian transmissions?",
        c5_400: "Who did Joyce and Murray pay to fly them to Russia in their mission to rescue Jim Hopper?",
        c5_600: "What is Papa's real name?",
        c5_800: "Nancy and Robin go undercover to meet this man in a psychiatric hospital, wrongfully imprisoned for a series of killings in Hawkins.",
        c5_1000: "Who was Vecna's first victim in season 4?",
         //catorgory 6 questions Pop Culture
        c6_200: "What 1984 film do the boys dress up as characters for Halloween?",
        c6_400: "Who is reminded of Will when listening to Should I stay or Should I Go?",
        c6_600: "What song does Dustin sing with his girlfriend on the radio?",
        c6_800: "What is Max's favorite song that saves her from Vecna?",
        c6_1000: "What is the name of the comic book character Max is dressed as for Halloween?"
    };

    const answers = {
        //catorgory 1 Answers
        c1_200: "Jonathan",
        c1_400: "001",
        c1_600: "Suzie",
        c1_800: "Jane-Ives",
        c1_1000: "12",
        //catorgory 2 Answers
        c2_200: "Jim Hopper",
        c2_400: "Christmas lights with the alphabet on the wall.",
        c2_600: "The Mind Flyer",
        c2_800: "Salt",
        c2_1000: "Dart",
        //catorgory 3 Answers
        c3_200: "What is Surfer Boy Pizza?",
        c3_400: "What is The Palace Arcade?",
        c3_600: "What is Starcourt Mall?",
        c3_800: "What is The Hawkins Post?",
        c3_1000: "What is the Hawkins General Store?",
        //catorgory 4 Answers
        c4_200: "What are Eggo waffles?",
        c4_400: "What is Dungeons & Dragons?",
        c4_600: "Who is Barbara Holland, known as Barb?",
        c4_800: "What is the Sattler Quarry?",
        c4_1000: "What is Mirkwood Forest?",
        //catorgory 5 Answers
        c5_200: "Who is Robin Buckley?",
        c5_400: "Who is Yuri Ismaylov?",
        c5_600: "Who is Dr. Martin Brenne?",
        c5_800: "Who is Victor Creel?",
        c5_1000: "Who is Chrissy Cunningham?",
        //catorgory 6 Answers
        c6_200: "What is Ghostbusters?",
        c6_400: "Who is Jonathan?",
        c6_600: "What is The NeverEnding Story",
        c6_800: "Running Up That Hill (A Deal with God) by Kate Bush.",
        c6_1000: "Mad Max."
    };

    // Function to handle question button click
    function handleQuestionButtonClick(buttonId) {
        const button = document.querySelector('#' + buttonId);
        button.addEventListener('click', () => {
            if (button.classList.contains('gray')) {
                // Button is already gray, display the answer
                currentAnswerDisplay.textContent = answers[buttonId];
            } else {
                // First click, display the question and turn button gray
                currentQuestionDisplay.textContent = questions[buttonId];
                currentAnswerDisplay.textContent = ''; // Clear any previous answer
                button.classList.add('gray')
            }
        });
    }

    // Set up event listeners for each question button
    handleQuestionButtonClick('c1_200');
    handleQuestionButtonClick('c1_400');
    handleQuestionButtonClick('c1_600');
    handleQuestionButtonClick('c1_800');
    handleQuestionButtonClick('c1_1000');
    handleQuestionButtonClick('c2_200');
    handleQuestionButtonClick('c2_400');
    handleQuestionButtonClick('c2_600');
    handleQuestionButtonClick('c2_800');
    handleQuestionButtonClick('c2_1000');
    handleQuestionButtonClick('c3_200');
    handleQuestionButtonClick('c3_400');
    handleQuestionButtonClick('c3_600');
    handleQuestionButtonClick('c3_800');
    handleQuestionButtonClick('c3_1000');
    handleQuestionButtonClick('c4_200');
    handleQuestionButtonClick('c4_400');
    handleQuestionButtonClick('c4_600');
    handleQuestionButtonClick('c4_800');
    handleQuestionButtonClick('c4_1000');
    handleQuestionButtonClick('c5_200');
    handleQuestionButtonClick('c5_400');
    handleQuestionButtonClick('c5_600');
    handleQuestionButtonClick('c5_800');
    handleQuestionButtonClick('c5_1000');
    handleQuestionButtonClick('c6_200');
    handleQuestionButtonClick('c6_400');
    handleQuestionButtonClick('c6_600');
    handleQuestionButtonClick('c6_800');
    handleQuestionButtonClick('c6_1000');
});

// Correctly retrieve the elements
const team1Score = document.querySelector('#team1Score');
const team2Score = document.querySelector('#team2Score');
const addTeam1 = document.querySelector('#btn1-add');
const minusTeam1 = document.querySelector('#btn1-subtract');
const addTeam2 = document.querySelector('#btn2-add');
const minusTeam2 = document.querySelector('#btn2-subtract');

let score1 = 0;
let score2 = 0;

const addPointsTeam1 = addTeam1.addEventListener('click', () => {
    score1 += 200;
    team1Score.textContent = score1;
});

const addPointsTeam2 = addTeam2.addEventListener('click', () => {
    score2 += 200;
    team2Score.textContent = score2;
});

const minusPointsTeam1 = minusTeam1.addEventListener('click', () => {
    score1 -= 200;
    team1Score.textContent = score1;
});

const minusPointsTeam2 = minusTeam2.addEventListener('click', () => {
    score2 -= 200;
    team2Score.textContent = score2;
});


