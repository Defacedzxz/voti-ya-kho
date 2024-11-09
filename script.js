let hasVoted = false; 


function vote(candidateId, buttonId) {
    if (hasVoted) {
        
        console.log('User has already voted');
        showAlreadyVotedPopup();
        return; 
    }

    
    const voteCountElement = document.getElementById('vote-' + candidateId);
    let currentVotes = parseInt(voteCountElement.textContent);
    currentVotes++;
    voteCountElement.textContent = currentVotes;

    
    const voteButton = document.getElementById(buttonId);
    voteButton.disabled = true;
    voteButton.style.backgroundColor = '#e74c3c'; 
    voteButton.style.cursor = 'not-allowed'; 

    
    const thankYouPopup = document.getElementById('thank-you-popup');
    thankYouPopup.style.visibility = 'visible';
    thankYouPopup.style.opacity = '1';
    thankYouPopup.style.transition = 'visibility 0s, opacity 0.5s ease-out';

    hasVoted = true; 
    console.log('Vote registered');
}


function closePopup() {
    console.log('Closing popup');
    const thankYouPopup = document.getElementById('thank-you-popup');
    const alreadyVotedPopup = document.getElementById('already-voted-popup');
    thankYouPopup.style.visibility = 'hidden';
    thankYouPopup.style.opacity = '0';
    alreadyVotedPopup.style.visibility = 'hidden';
    alreadyVotedPopup.style.opacity = '0';
    thankYouPopup.style.transition = 'visibility 0s, opacity 0.5s ease-in';
    alreadyVotedPopup.style.transition = 'visibility 0s, opacity 0.5s ease-in';
}


function showAlreadyVotedPopup() {
    console.log('Showing Already Voted popup');
    const alreadyVotedPopup = document.getElementById('already-voted-popup');
    alreadyVotedPopup.style.visibility = 'visible';
    alreadyVotedPopup.style.opacity = '1';
    alreadyVotedPopup.style.transition = 'visibility 0s, opacity 0.5s ease-out';
}
