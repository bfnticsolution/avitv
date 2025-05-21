function initializePlayer() {
    // Initialize preview player
    const previewPlayer = videojs('preview-player', {
        controls: true,
        autoplay: false,
        preload: 'auto',
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2],
        controlBar: {
            children: [
                'playToggle',
                'volumePanel',
                'currentTimeDisplay',
                'timeDivider',
                'durationDisplay',
                'progressControl',
                'liveDisplay',
                'remainingTimeDisplay',
                'customControlSpacer',
                'playbackRateMenuButton',
                'chaptersButton',
                'descriptionsButton',
                'subsCapsButton',
                'audioTrackButton',
                'fullscreenToggle'
            ]
        }
    });
    
    // Error handling
    previewPlayer.on('error', function() {
        console.error('Error occurred with the video player');
        // Fallback content or message
        const errorDisplay = document.createElement('div');
        errorDisplay.className = 'vjs-error-display';
        errorDisplay.innerHTML = `
            <div class="vjs-error-display-content">
                <h3>Erreur de lecture</h3>
                <p>Nous rencontrons des difficultés techniques. Veuillez réessayer plus tard.</p>
                <a href="live.html" class="vjs-error-retry-button">Réessayer</a>
            </div>
        `;
        this.el().appendChild(errorDisplay);
    });
    
    // Initialize fullscreen player if on live.html
    if (document.getElementById('fullscreen-player')) {
        const fullscreenPlayer = videojs('fullscreen-player', {
            controls: true,
            autoplay: true,
            preload: 'auto',
            responsive: true,
            fluid: true,
            playbackRates: [0.5, 1, 1.5, 2],
            controlBar: {
                children: [
                    'playToggle',
                    'volumePanel',
                    'currentTimeDisplay',
                    'timeDivider',
                    'durationDisplay',
                    'progressControl',
                    'liveDisplay',
                    'remainingTimeDisplay',
                    'customControlSpacer',
                    'playbackRateMenuButton',
                    'chaptersButton',
                    'descriptionsButton',
                    'subsCapsButton',
                    'audioTrackButton',
                    'fullscreenToggle'
                ]
            }
        });
        
        fullscreenPlayer.on('fullscreenchange', function() {
            if (this.isFullscreen()) {
                // Additional actions when entering fullscreen
            } else {
                // Additional actions when exiting fullscreen
            }
        });
    }
    
    // Quality selector plugin (would need additional setup)
    /*
    videojs.registerPlugin('qualitySelector', function(options) {
        // Quality selector implementation
    });
    previewPlayer.qualitySelector();
    */
}