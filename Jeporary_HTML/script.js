document.addEventListener('DOMContentLoaded', () => {
    const currentQuestionDisplay = document.querySelector('#current-question');
    const currentAnswerDisplay = document.querySelector('#current-answer');

    // Define the questions and answers for each button
    const questions = {
        w200: "What are the four Hogwarts houses?",
        w400: "Who is the Headmaster of Hogwarts when Harry arrives?",
        w600: "Who is the main bad guy in the Harry Potter series?",
        w800: "What kind of pet does Harry own, and what is her name?",
        w1000: "What position does Harry play on the Gryffindor Quidditch team?",
        hp200: "What is the Harry Potter drink that sounds alcoholic?",
        hp400: "What actor played in both Harry Potter and Twilight?",
        hp600: "Can you name three Harry Potter characters' real names?",
        hp800: "Can you name a movie that a member of the Harry Potter cast was also in?",
        hp1000: "Name two actors from Harry Potter who have died in real life.",
        hpot200: "I'm basically famous for singing and tattooing my face, who am I?",
        hpot400: "We became a famous duo for loving the ganja. Who are we?",
        hpot600: "I started on Freaks and Geeks, I've been a neighbor and I knocked up Katherine Heigl. Who am I?",
        hpot800: "I've been around awhile in the country scene, I'm an outlaw and some might call me dick, who am I?",
        hpot1000: "I went from rap to country, I'm currently on the country charts but I need a favor. Who am I?",
        d200: "What is the famous mouse's name?",
        d400: "Name three classic Disney villains.",
        d600: "What is the kneecap bone called?",
        d800: "What is the male villain's name in Frozen?",
        d1000: "What are the 3 largest bones in the leg?",
        q200: "Name a player who has played on the Lions.",
        q400: "Who is Taylor Swift currently dating?",
        q600: "Name 5 basketball teams.",
        q800: "Name 5 NFL teams",
        q1000: "Name 3 of the original 6 hockey teams.",
        j200: "I am the pumpkin King who sometimes sings, who am I?",
        j400: "I'm jacked, white and have gone by Geralt and Kal El, who am I?",
        j600: "I'm the ladies favorite Dothraki and I've ruled the deep, who am I?",
        j800: "I've taken booty from men and women alike across the seven seas, and once a wench shat in my bed, savvy? Who am I?",
        j1000: "I'm best known for playing an angry, clawed badass! But no matter what I always try to put on the greatest show. Who am I?"
    };

    const answers = {
        w200: "Gryffindor, Ravenclaw, Slytherin, and Hufflepuff",
        w400: "Albus Dumbledore",
        w600: "Lord Voldemort",
        w800: "An owl named Hedwig",
        w1000: "Seeker",
        hp200: "Butter Beer",
        hp400: "Robert Pattinson",
        hp600: "Any 3 will do",
        hp800: "Varies",
        hp1000: "Varies",
        hpot200: "Post Malone",
        hpot400: "Cheech and Chong",
        hpot600: "Seth Rogen",
        hpot800: "Willie Nelson",
        hpot1000: "Jelly Roll",
        d200: "Mickey Mouse",
        d400: "Varies",
        d600: "Patella",
        d800: "Hans of the Southern Isles",
        d1000: "Tibia, Fibula, Femur",
        q200: "Varies",
        q400: "Travis Kelce",
        q600: "Varies",
        q800: "Varies",
        q1000: "Varies",
        j200: "Jack Skellington",
        j400: "Henry Cavill",
        j600: "Jason Momoa",
        j800: "Johnny Depp",
        j1000: "Hugh Jackman"
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
    handleQuestionButtonClick('w200');
    handleQuestionButtonClick('w400');
    handleQuestionButtonClick('w600');
    handleQuestionButtonClick('w800');
    handleQuestionButtonClick('w1000');
    handleQuestionButtonClick('hp200');
    handleQuestionButtonClick('hp400');
    handleQuestionButtonClick('hp600');
    handleQuestionButtonClick('hp800');
    handleQuestionButtonClick('hp1000');
    handleQuestionButtonClick('hpot200');
    handleQuestionButtonClick('hpot400');
    handleQuestionButtonClick('hpot600');
    handleQuestionButtonClick('hpot800');
    handleQuestionButtonClick('hpot1000');
    handleQuestionButtonClick('d200');
    handleQuestionButtonClick('d400');
    handleQuestionButtonClick('d600');
    handleQuestionButtonClick('d800');
    handleQuestionButtonClick('d1000');
    handleQuestionButtonClick('q200');
    handleQuestionButtonClick('q400');
    handleQuestionButtonClick('q600');
    handleQuestionButtonClick('q800');
    handleQuestionButtonClick('q1000');
    handleQuestionButtonClick('j200');
    handleQuestionButtonClick('j400');
    handleQuestionButtonClick('j600');
    handleQuestionButtonClick('j800');
    handleQuestionButtonClick('j1000');
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


