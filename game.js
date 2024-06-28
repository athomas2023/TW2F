function startGame() {
    document.getElementById('title').classList.add('moved');
    document.querySelector('.start-button').style.display = 'none';
    const iframe = document.getElementById('game-frame');
    iframe.src = 'game/opening.html';
    iframe.style.display = 'block';
}

function showPopup(location, text, isContinue = false, mediaType = 'image') {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const continueOptions = document.getElementById('continue-options');
    const popupImage = document.getElementById('popup-image');

    popup.style.display = 'flex';
    popupText.textContent = text;
    continueOptions.style.display = isContinue ? 'block' : 'none';

    // Clear previous media
    popupImage.innerHTML = '';

    if (mediaType === 'video') {
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.src = `../video/${location.toLowerCase().replace(/\s+/g, '_')}.mp4`; // Assuming video files are named in a certain way
        popupImage.appendChild(videoElement);
    } else {
        const imageElement = document.createElement('img');
        imageElement.src = `../image/${location.toLowerCase().replace(/\s+/g, '_')}.jpg`; // Assuming image files are named in a certain way
        popupImage.appendChild(imageElement);
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function continueGame(option) {
    const parentIframe = parent.document.getElementById('game-frame');
    if (!parentIframe) {
        console.error('Parent iframe not found');
        return;
    }

    switch (option) {
        case 'Abolition Movement':
            parentIframe.src = 'game/section2.html';
            break;
        case 'Union Victory':
            parentIframe.src = 'game/section3.html';
            break;
        case 'Reconstruction':
            parentIframe.src = 'game/section4.html';
            break;
        case 'WWII':
            parentIframe.src = 'game/section5.html';
            break;
        case 'Nonviolent':
            parentIframe.src = 'game/section7.html';
            break;
        
        case 'BP':
             parentIframe.src = 'game/section6.html';
            break; 

            case 'cont':
                parentIframe.src = 'game/section8.html';
               break; 
               
            
        default:
            console.error('Invalid option');
            break;
    }
}

function endGame(type)
{
    const parentIframe = parent.document.getElementById('game-frame');
    if (!parentIframe) {
        console.error('Parent iframe not found');
        return;
    } 
    switch (option) {
    case 'Great':
        1 + 1 ;
        break;
    default:
        console.error("Invaild Option");
        break;

    }
}


