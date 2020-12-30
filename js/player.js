let player;
const playerContainer = $('.player');


let eventsInit = () => {
    $(".player__start").click(e => {
      e.preventDefault();
    
      if (playerContainer.hasClass("paused")) {
        playerContainer.removeClass("paused");        
        player.pauseVideo();
      } else {
        playerContainer.addClass("paused");
        player.playVideo();
        $(".video__pause-big").css('opacity', '0')
      }
    });   



    $(".player__playback").click(e => {
      const bar = $(e.currentTarget);
      const clickedPosition = e.originalEvent.layerX;
      const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
      const newPlaybackPositionSec =
        (player.getDuration() / 100) * newButtonPositionPercent;
      
      $(".player__playback").css({
        left: `${newButtonPositionPercent}%`
      });
      
      player.seekTo(newPlaybackPositionSec);
    });
   
    $(".player__splash").click(e => {
      player.playVideo();
    })
      
   };

   const formalTime = timeSec => {
       const roundTime = Math.round(timeSec); 

       const minutes = addZero(Math.floor(roundTime / 60));
       const seconds = addZero(roundTime - minutes * 60); 

       function addZero(num) {
           return num < 10 ? `0${num}`: num;
       }

       return `${minutes} : ${seconds}`;
    
   }

   const onPlayerReady = () => {
    let interval;

       const durationSec = player.getDuration();

       $(".player__duration-estimate").text(formalTime(durationSec));

       if (typeof interval != 'indefined') {
           clearInterval(interval);
       }

       interval = setInterval(() => {
           const completedSec = player.getCurrentTime();
           const completedPercent = (completedSec / durationSec) * 100;

           $(".player__playback-current").css({
             left: `${completedPercent}%`
           });

          $(".player__duration-completed").text(formalTime(completedSec));
            }, 1000);
   };


 
 
   const onPlayerStateChange = event => {
    /*
      -1 (воспроизведение видео не начато)
      0 (воспроизведение видео завершено)
      1 (воспроизведение)
      2 (пауза)
      3 (буферизация)
      5 (видео подают реплики).
    */
    switch (event.data) {
      case 1:
        playerContainer.addClass("active");
        playerContainer.addClass("paused");
        break;
    
      case 2:
        playerContainer.removeClass("active");
        playerContainer.removeClass("paused");
        break;
    }
   };


function onYouTubeIframeAPIReady() {
 player = new YT.Player("yt-player", {
   height: "391",
   width: "660",
   videoId: "LXb3EKWsInQ",
   playerVars: {
    controls: 0,
    disablekb: 1,
    showinfo: 0,
    rel: 0,
    autoplay: 0,
    modestbranding: 0
  },
   events: {

     onReady: onPlayerReady,
    //  onStateChange: onPlayerStateChange
   },

   
 });
}


eventsInit();