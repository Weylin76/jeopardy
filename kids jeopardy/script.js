document.addEventListener('DOMContentLoaded', () => {
    const currentQuestionDisplay = document.querySelector('#current-question');
    const currentAnswerDisplay = document.querySelector('#current-answer');

    // Define the questions and answers for each button
    const questions = {
        //catorgory 1 questions
        c1_200: "Who lost her glass slipper at the ball?",
        c1_400: "Who had long hair and was locked in a tower?",
        c1_600: "Who could spin straw into gold according to a fairy tale?",
        c1_800: "Who slept for 100 years after pricking her finger?",
        c1_1000: "Who ate a poisoned apple and was saved by a prince?",
         //catorgory 2 questions
        c2_200: "What is the biggest ocean in the world?",
        c2_400: "What sea creature has eight legs and is known for its intelligence?",
        c2_600: "Which fish is known for its ability to change colors?",
        c2_800: "What mammal is known as the “king of the sea”?",
        c2_1000: "What is the name of the world's largest reef system?",
         //catorgory 3 questions
        c3_200: "What movie features a young lion who becomes king?",
        c3_400: 'Who is the ice queen in "Frozen"?',
        c3_600: 'In "Toy Story," who is the cowboy doll?',
        c3_800: "Which Disney movie is set in the underwater city of Atlantica?",
        c3_1000: "What movie features a princess with magical long hair?",
         //catorgory 4 questions
        c4_200: "What color is the Grinch's fur?",
        c4_400: "What is the name of the little Who girl who meets the Grinch when he's stealing her family's Christmas tree?",
        c4_600: "What is the name of the dog that belongs to the Grinch?",
        c4_800: "In which town does the Grinch plan to steal Christmas?",
        c4_1000: "At the end of the story, how many sizes does the Grinch's heart grow?",
         //catorgory 5 questions
        c5_200: "What is the name of the main character who is raised by elves at the North Pole?",
        c5_400: "What does Buddy the Elf love to put on his spaghetti?",
        c5_600: "What does Buddy build overnight in the store to impress his boss?",
        c5_800: "Who is Buddy's biological father?",
        c5_1000: "In the movie, what animal scares Buddy when he is traveling through the Candy Cane forest?",
         //catorgory 6 questions
        c6_200: "What is the name of the red-nosed reindeer who is famous for guiding Santa's sleigh?",
        c6_400: 'In the song "Rudolph the Red-Nosed Reindeer," which reindeer is mentioned as not letting Rudolph join in any reindeer games?',
        c6_600: "What is the name of the holiday drink that children often leave out for Santa along with cookies?",
        c6_800: "How many reindeer pull Santa's sleigh, not including Rudolph?",
        c6_1000: "Can you name the reindeer that is known for being the leader and having the strongest antlers?"
    };

    const answers = {
        //catorgory 1 Answers
        c1_200: "Cinderella.",
        c1_400: "Rapunzel.",
        c1_600: "Rumpelstiltskin.",
        c1_800: "Sleeping Beauty.",
        c1_1000: "Snow White.",
        //catorgory 2 Answers
        c2_200: "Pacific Ocean.",
        c2_400: "Octopus.",
        c2_600: "Chameleon fish or Cuttlefish.",
        c2_800: "Killer Whale or Orca.",
        c2_1000: "The Great Barrier Reef.",
        //catorgory 3 Answers
        c3_200: "The Lion King.",
        c3_400: "Elsa.",
        c3_600: "Woody.",
        c3_800: "The Little Mermaid.",
        c3_1000: "Tangled.",
        //catorgory 4 Answers
        c4_200: "Green.",
        c4_400: "Cindy Lou Who.",
        c4_600: "Max.",
        c4_800: "Whoville.",
        c4_1000: "His heart grows three sizes.",
        //catorgory 5 Answers
        c5_200: "Buddy.",
        c5_400: "Maple syrup.",
        c5_600: "A LEGO cityscape.",
        c5_800: "Walter Hobbs.",
        c5_1000: "A raccoon.",
        //catorgory 6 Answers
        c6_200: "Rudolph.",
        c6_400: "All of the other reindeer.",
        c6_600: "Milk.",
        c6_800: "Eight.",
        c6_1000: "Dasher."
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


