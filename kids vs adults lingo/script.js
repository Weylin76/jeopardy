document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.querySelector('#questionContainer');
    const answerContainer = document.querySelector('#answerContainer');
    const nextQuestionButton = document.querySelector('#nextQuestionButton');
    const checkAnswerButton = document.querySelector('#checkAnswerButton');

    const adultQuizQuestions = [
        { question: "What does it mean when kids say something is 'lit'?", answer: "It means something is really good, exciting, or fun." },
        { question: "If a kid says they are 'salty,' what are they feeling?", answer: "They are feeling upset, angry, or bitter." },
        { question: "What does 'ghosting' mean?", answer: "It means suddenly cutting off all communication with someone without explanation." },
        { question: "In kid lingo, what does 'flex' mean?", answer: "It means to show off or boast about something." },
        { question: "What does 'savage' mean in modern slang?", answer: "It refers to someone or something that is extremely impressive, usually in a way that is blunt or unfiltered." },
        { question: "What does 'throwing shade' mean?", answer: "It means to give someone a dirty look or to publicly criticize or express contempt for someone." },
        { question: "If someone is 'spilling the tea,' what are they doing?", answer: "They are gossiping or sharing juicy information." },
        { question: "What does 'no cap' mean?", answer: "It means 'no lie' or 'for real.'" },
        { question: "When kids talk about their 'squad,' to whom are they referring?", answer: "They are referring to their group of friends." },
        { question: "What does 'vibe' or 'vibing' mean?", answer: "It means feeling good or enjoying oneself in a particular setting or with a certain group of people." },
        { question: "What does 'clout' mean in modern slang?", answer: "It refers to influence or power, especially in a social media context." },
        { question: "What does it mean when something is 'basic'?", answer: "It means something is overly mainstream, unoriginal, or conforming to stereotypes." },
        { question: "What does 'lowkey' mean?", answer: "It means subtly or secretly; not obviously or overtly." },
        { question: "In kid slang, what does 'sus' mean?", answer: "It's short for 'suspicious' or 'suspect' and means untrustworthy or odd." },
        { question: "What does 'stan' mean?", answer: "Derived from 'stalker' and 'fan,' it means a highly dedicated and avid fan of someone or something." },
        { question: "What does 'yeet' signify?", answer: "It's an exclamation of excitement, approval, surprise, or all-around energy, often when throwing something." },
        { question: "What does 'fam' refer to?", answer: "It refers to close friends, group of friends, or sometimes used to address someone in a friendly manner." },
        { question: "What does 'slay' mean in modern lingo?", answer: "It means to do something really well, especially in a fashion or performance context." },
        { question: "If a kid says 'I'm dead' or 'I'm dying,' what do they mean?", answer: "They mean they find something extremely funny." },
        { question: "What does 'snack' mean when referring to a person?", answer: "It means someone who looks really attractive or appealing." },
        { question: "What does 'finna' mean in modern slang?", answer: "It's a contraction of 'fixing to' and means 'going to' or 'planning to.'"},
        { question: "When a kid says 'bet,' how is it typically used?", answer: "It's used as an affirmation, similar to saying 'OK' or 'Sure.'"},
        { question: "In youth slang, what does 'woke' refer to?", answer: "Being 'woke' means being aware of social injustices and inequalities."},
        { question: "What does the term 'Gucci' imply in modern slang?", answer: "It means good, cool, or going well, derived from the luxury brand."},
        { question: "If a kid says 'it's a bop,' what are they referring to?", answer: "They're saying a song is really good or catchy."},
        { question: "What does 'thirsty' mean in contemporary slang?", answer: "It describes someone who is desperate for attention, especially romantically."},
        { question: "What does 'receipts' mean in youth lingo?", answer: "It refers to evidence or proof, typically in the context of a dispute or gossip."},
        { question: "In slang, what does 'lick' often refer to?", answer: "It refers to a quick theft or robbery, often opportunistic in nature."},
        { question: "What does 'it's bussin' mean?", answer: "In modern slang, 'it's bussin' means something is really good, especially in reference to food being delicious."},
        { question: "What does 'it slaps' mean?", answer: "In current slang, 'it slaps' is used to describe something, often music, that is exceptionally good or impressive."},
        { question: "What does it mean to 'cop' something in current slang?", answer: "To 'cop' something means to buy or get something, especially something desirable or in demand."}
    ];

    const kidQuizQuestions = [
        { question: "What did it mean to 'burn a CD' in the past?", answer: "To record music, data, or files onto a blank CD." },
        { question: "What did the phrase 'Psyche!' imply when said after a statement?", answer: "It meant that the previous statement was a joke or not to be taken seriously." },
        { question: "In past slang, what did 'That's the bomb' mean?", answer: "It meant something was really cool or excellent." },
        { question: "What did 'That's sick!' mean?", answer: "It meant something was awesome or impressive." },
        { question: "What did 'Talk to the hand' imply when someone said it?", answer: "It was a dismissive phrase meaning the speaker isn't listening." },
        { question: "What did 'chill out' mean?", answer: "To relax or calm down." },
        { question: "What was meant by 'radical' or 'rad' in the past?", answer: "It meant something was really cool or impressive." },
        { question: "What did calling something 'groovy' mean?", answer: "It meant something was very pleasing, fashionable, or cool." },
        { question: "What did 'as if' imply when used in a conversation?", answer: "It expressed skepticism or disbelief." },
        { question: "What did 'booyah' express?", answer: "It was an exclamation to accompany a triumphant action or victory." },
        { question: "What did 'far out' mean in the past?", answer: "It meant something was impressive, good, or exciting." },
        { question: "What was the meaning of 'gnarly'?", answer: "It meant something was extreme, especially in a good way." },
        { question: "What does PIN stand for?", answer: "Personal Identification Number."},
        { question: "What did 'What's your damage?' mean?", answer: "It was a way of asking someone why they are being unreasonable or difficult." },
        { question: "What was the meaning of 'Word up'?", answer: "It was a phrase of agreement or a way to say 'I understand'." },
        { question: "What does ATM stand for?",answer: "Automated Teller Machine."},
        { question: "What did 'funky' mean?", answer: "It referred to something that's cool, unique, or stylish." },
        { question: "What did 'hang loose' mean?", answer: "To relax or stay calm, often associated with surfer culture." },
        { question: "What did 'wig out' mean?", answer: "To become very excited or upset about something." },
        { question: "What did 'dial-up' refer to in the past?", answer: "It referred to a type of internet connection using a telephone line, known for being slow." },
        { question: "What does 'beeper' or 'pager' mean?", answer: "A small device for receiving text messages or call notifications." },
        { question: "What did 'VHS' stand for?", answer: "Video Home System, a format for VCR tapes." },
        { question: "What was a 'Walkman'?", answer: "A portable cassette player for music." },
        { question: "What did 'rewind' mean for VHS or cassettes?", answer: "Winding tape back to the beginning or a previous point." },
        { question: "What does 'mixtape' mean?", answer: "A compilation of favorite music tracks on a cassette." },
        { question: "What was 'MySpace'?", answer: "An early social media platform before Facebook." },
        { question: "What did 'fax' or 'fax machine' refer to?", answer: "A device for sending scanned documents via phone lines." },
        { question: "What does 'brick phone' mean?", answer: "An early large and bulky mobile phone." },
        { question: "What did 'roll down the window' originally mean?", answer: "Manually lowering a car window before automatic windows." },
        { question: "What was a 'Discman'?", answer: "A portable CD player, similar to a Walkman but for CDs." },
        { question: "What did 'Blockbuster night' mean?", answer: "Going to Blockbuster to rent movies for a night in, before streaming services." }
    ];

    let currentQuestionIndex = 0;
    let isAdultQuestion = true;
    let currentAnswer = '';

    function displayQuestion() {
        if (isAdultQuestion) {
            questionContainer.textContent = adultQuizQuestions[currentQuestionIndex % adultQuizQuestions.length].question;
            currentAnswer = adultQuizQuestions[currentQuestionIndex % adultQuizQuestions.length].answer;
        } else {
            questionContainer.textContent = kidQuizQuestions[currentQuestionIndex % kidQuizQuestions.length].question;
            currentAnswer = kidQuizQuestions[currentQuestionIndex % kidQuizQuestions.length].answer;
        }
        answerContainer.textContent = ''; // Hide answer until "Check Answer" is clicked
        isAdultQuestion = !isAdultQuestion;
        currentQuestionIndex++;
    }

    nextQuestionButton.addEventListener('click', displayQuestion);

    checkAnswerButton.addEventListener('click', () => {
        answerContainer.textContent = currentAnswer; // Reveal the answer
    });
});

