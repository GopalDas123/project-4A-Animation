window.addEventListener("load", function () {
  var road = document.querySelector("#white-cont");
  var bird = document.querySelector(".bird");
  var cloud1 = document.querySelector(".cloud1");
  var cloud2 = document.querySelector(".cloud2");

  var framesForBird = [
    { transform: "translateX(0px)" },
    { transform: "translateX(1500px)" },
  ];
  var framesForCloud = [
    { transform: "translateX(0px)" },
    { transform: "translateX(-1500px)" },
  ];
  var timingForCloud2 = {
    iterations: Infinity,

    duration: 9000,
    playbackRate: 1,
  };
  var frames = [
    { transform: "translateX(0px)" },
    { transform: "translateX(-1100px)" },
  ];
  var timing = {
    iterations: Infinity,

    duration: 5000,
    playbackRate: 1,
  };

  var againRoad = road.animate(frames, timing);
  var againBird = bird.animate(framesForBird, timing);
  var againCloud1 = cloud1.animate(framesForCloud, timing);
  var againCloud2 = cloud2.animate(framesForCloud, timingForCloud2);
  var againBird = bird.animate(framesForBird, timing);
  againRoad.currentTime = againRoad.effect.getTiming().duration / 2;

  setInterval(function () {
    if (
      againRoad.playbackRate > 0.4 &&
      againBird.playbackRate > 0.4 &&
      againCloud1.playbackRate > 0.4 &&
      againCloud2.playbackRate > 0.4 &&
      againRoad.playbackRate > 0.4
    ) {
      againRoad.playbackRate *= 0.9;
      againBird.playbackRate *= 0.9;
      againCloud1.playbackRate *= 0.9;
      againCloud2.playbackRate *= 0.9;
      againRoad.playbackRate *= 0.9;
    }
  }, 1000);
  var faster = function () {
    againRoad.playbackRate *= 1.1;
    againBird.playbackRate *= 1.1;
    againCloud1.playbackRate *= 1.1;
    againCloud2.playbackRate *= 1.1;
    againRoad.playbackRate *= 1.1;
  };
  document.addEventListener("click", faster);
});
