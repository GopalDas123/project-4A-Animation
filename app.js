window.addEventListener("load", function () {
    var box = document.querySelector("#white-cont");
    var bird = document.querySelector(".bird");

    var framesForBird=[
      { transform: "translateX(0px)" },
      { transform: "translateX(1500px)" },

    ]
    var frames = [
      { transform: "translateX(0px)" },
      { transform: "translateX(-1100px)" },
    ];
    var timing = {
      iterations: Infinity,
      
      duration: 5000,
      playbackRate: 1,
    };

    box.animate(frames, timing);
    bird.animate(framesForBird, timing);
    // var birdMoves = bird.animate(framesForBird, scrnTiming);
    // birdMoves.currentTime = birdMoves.effect.getTiming().duration / 2;

    // const faster = () => {
    //     birdMoves.playbackRate += 1.1;
    // };
    // document.addEventListener("click", faster);
  });