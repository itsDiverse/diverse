$(document).ready(function() {
    $('.fraudteams_video_toggle').on('click', function(e) {
      $('.fraudteams_video_toggle').toggleClass("fraudteams_video_toggle--playing");
      $('.powerfultoolssection').toggleClass("fraudteams--video-playing");
      $('.powerful-tools-wrapper').toggleClass("visible");
      var video = document.getElementById("Video1");
      if (video.paused) {
          video.play();
       } else {
          video.pause();
       }
      e.preventDefault();
    });
    $(".fraudteams_video_toggle").hover(function () {
      $('.Helm-Tooltip').toggleClass("Helm-Tooltip--shown");
    });
    $(document).click(function (e) {
      
        if ($(e.target).is('.visible')) {
          var video = document.getElementById("Video1");
          video.pause();
          $('.fraudteams_video').addClass("video_plaing");
          $('.powerful-tools-wrapper').toggleClass("visible");
          $('.fraudteams_video_toggle').toggleClass("fraudteams_video_toggle--playing");
          $('.powerfultoolssection').toggleClass("fraudteams--video-playing");
        }
    });
});