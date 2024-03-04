//  ANIMATED PROJECT (JS CODE) 
const scroll = new LocomotiveScroll({
  el: document.querySelector('.container'),
  smooth: true
});

var t1 = gsap.timeline();
t1.to(".titles", {
  width: "0vw",
  height: "0vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

Shery.hoverWithMediaCircle(".hvr", {
  videos: ["https://cdn.cuberto.com/cb/projects/magma/cover.mp4", "https://cdn.cuberto.com/cb/projects/flipaclip/cover.mp4", "https://cdn.cuberto.com/cb/upload/04cfbd242b0dae944688f45425c38ab2.mp4"],
});
Shery.makeMagnet(".mag", {
  duration: 0.2,
});
Shery.hoverWithMediaCircle(".hvr1", {
  videos: ["https://cdn.cuberto.com/cb/showreel/1.mp4"]
});
var hdvid = document.querySelector(".hdvid");
var class1 = document.querySelector(".class1");
var class2 = document.querySelector(".class2");
var class3 = document.querySelector(".class3");
class1.addEventListener("mouseover", () => {
  hdvid.src = "./hellohello2.mp4";
})
class2.addEventListener("mouseover", () => {
  hdvid.src = "./hellohello123.mp4";
})
class3.addEventListener("mouseover", () => {
  hdvid.src = "https://cdn.cuberto.com/cb/upload/04cfbd242b0dae944688f45425c38ab2.mp4";
})

var nav1 = document.querySelector(".nav1");
var followcir = document.querySelector(".followcir");
window.addEventListener("mousemove", (dets) => {
  gsap.to(followcir, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.05,
  });
});
nav1.addEventListener("mousemove", (dets) => {
  gsap.to(followcir, {
    scale: 3.5,
    duration: 0.1,
  });
  followcir.style.backgroundColor = "black";
  followcir.style.zIndex = 0;
  nav1.style.color = "#fff";
});
nav1.addEventListener("mouseleave", (dets) => {
  gsap.to(followcir, {
    scale: 1,
    duration: 0.1,
  });
  followcir.style.backgroundColor = "black";
  followcir.style.zIndex = 100;
  nav1.style.color = "black";
});
var nav2 = document.querySelector(".nav2");
nav2.addEventListener("mousemove", (dets) => {
  gsap.to(followcir, {
    scale: 3.5,
    duration: 0.1,
  });
  followcir.style.backgroundColor = "black";
  followcir.style.zIndex = 0;

  nav2.style.color = "#fff";
});
nav2.addEventListener("mouseleave", (dets) => {
  t1.to(followcir, {
    scale: 1,
    duration: 0.1,
  });
  followcir.style.zIndex = 100;

  followcir.style.backgroundColor = "black";
  nav2.style.color = "black";
});
var nav3 = document.querySelector(".nav3");
nav3.addEventListener("mousemove", (dets) => {
  t1.to(followcir, {
    scale: 3.5,
    duration: 0.1,
  });
  followcir.style.backgroundColor = "black";
  followcir.style.zIndex = 0;
  nav3.style.color = "#fff";
});
nav3.addEventListener("mouseleave", (dets) => {
  t1.to(followcir, {
    scale: 1,
    duration: 0.1,
  });
  followcir.style.backgroundColor = "black";
  followcir.style.zIndex = 100;
  nav3.style.color = "black";
});
var nav4 = document.querySelector(".nav4");
nav4.addEventListener("mousemove", (dets) => {
  t1.to(followcir, {
    scale: 3.5,
    duration: 0.1,
  });
  followcir.style.zIndex = 0;
  followcir.style.backgroundColor = "black";
  nav4.style.color = "#fff";
});
nav4.addEventListener("mouseleave", (dets) => {
  t1.to(followcir, {
    scale: 1,
    duration: 0.1,
  });
  followcir.style.backgroundColor = "black";
  followcir.style.zIndex = 100;
  nav4.style.color = "black";
});
var nav5 = document.querySelector(".nav5");
nav5.addEventListener("mousemove", (dets) => {
  t1.to(followcir, {
    scale: 7.5,
    duration: 0.1,
  });
  followcir.style.zIndex = 0;
  followcir.style.backgroundColor = "black";
});
nav5.addEventListener("mouseleave", (dets) => {
  t1.to(followcir, {
    scale: 1,
    duration: 0.1,
  });
  followcir.style.backgroundColor = "black";
  followcir.style.zIndex = 100;
  nav5.style.color = "black";
});
Shery.imageEffect(".img", {
  style: 5,
  duration: 3,
  gooey: true,
  config: { "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": -0.63, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.1294473248305381 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 6.98, "range": [1, 15] }, "durationOut": { "value": 3.2, "range": [0.1, 5] }, "durationIn": { "value": 2.91, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.92, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.83, "range": [0, 10] }, "metaball": { "value": 0.005548, "range": [0, 2], "_gsap": { "id": 24 } }, "discard_threshold": { "value": 1, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.84, "range": [0, 2] }, "noise_scale": { "value": 16.79, "range": [0, 100] } },
})
Shery.imageEffect(".mini img", {
  style: 5,
  config: { "a": { "value": 7.33, "range": [0, 30] }, "b": { "value": 0.63, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.49, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})
var followcir = document.querySelector(".followcir");
var mini1 = document.querySelector(".mini1");
var mini2 = document.querySelector(".mini2");
var mini3 = document.querySelector(".mini3");
mini1.addEventListener("mousemove", (dets) => {
  t1.to(followcir, {
    scale: 3.6,
    duration: 0.1,
  });
  followcir.innerHTML = "hover";
  followcir.style.zIndex = 0;
});

mini1.addEventListener("mouseleave", () => {
  t1.to(followcir, {
    scale: 1,
    duration: 0.1,
  });
  followcir.innerHTML = "";
  followcir.style.zIndex = 100;

})

mini2.addEventListener("mousemove", (dets) => {
  t1.to(followcir, {
    scale: 3.6,
    duration: 0.1,
  });
  followcir.style.zIndex = 0;

  followcir.innerHTML = "hover";
});

mini2.addEventListener("mouseleave", () => {
  t1.to(followcir, {
    scale: 1,
    duration: 0.1,
  });
  followcir.style.zIndex = 100;

  followcir.innerHTML = "";
})

mini3.addEventListener("mousemove", (dets) => {
  t1.to(followcir, {
    scale: 3.6,
    duration: 0.1,
  });
  followcir.innerHTML = "hover";
  followcir.style.zIndex = 0;

});

mini3.addEventListener("mouseleave", () => {
  t1.to(followcir, {
    scale: 1,
    duration: 0.1,
  });
  followcir.style.zIndex = 100;

  followcir.innerHTML = "";
})

var f = document.querySelector(".footer")
f.addEventListener("mousemove", () => {
  followcir.style.backgroundColor = "black"
  followcir.style.width = "65px"
  followcir.style.height = "65px"
  followcir.style.fontSize = "x-large";
  followcir.innerHTML = "GO"
});
f.addEventListener("mouseleave", () => {
  followcir.style.backgroundColor = "black"
  followcir.style.width = "30px"
  followcir.style.height = "30px"
  followcir.style.fontSize = "10px"
  followcir.innerHTML = ""
});

var circles1 = document.querySelector(".circles1")
var circles2 = document.querySelector(".circles2")
var circles3 = document.querySelector(".circles3")
var circles4 = document.querySelector(".circles4")
var circles5 = document.querySelector(".circles5")
var circles6 = document.querySelector(".circles6")
circles1.addEventListener("mousemove", () => {
  circles1.style.boxShadow = "0px 0px 45px white";
});
circles2.addEventListener("mousemove", () => {
  circles2.style.boxShadow = "0px 0px 45px white";
});
circles3.addEventListener("mousemove", () => {
  circles3.style.boxShadow = "0px 0px 45px white";
});
circles4.addEventListener("mousemove", () => {
  circles4.style.boxShadow = "0px 0px 45px white";
});
circles5.addEventListener("mousemove", () => {
  circles5.style.boxShadow = "0px 0px 45px white";
});
circles6.addEventListener("mousemove", () => {
  circles6.style.boxShadow = "0px 0px 45px white";
});

function hello1() {
  var matterp = document.querySelector(".matterp");
  matterp.style.scale = "1";
  matterp.style.opacity = "1";
  matterp.style.transition = 'all 0.5s ease-in';

}
function hello2() {
  var v = document.querySelector(".v");
  v.style.scale = "1";
  v.style.transition = 'all 1s ease-in';

}
function hello3() {
  var v = document.querySelector(".v");
  v.style.scale = "0";
  v.style.transition = 'all 1s ease-in';
}
function hello4() {
  var diabtn = document.querySelector(".diabtn");
  diabtn.style.height = "150px";
  diabtn.style.width = "300px";
  diabtn.style.transition = 'all 2.5s ease-in';
  var diapara = document.querySelectorAll(".diapara");
  diapara[0].classList.add("bounce-in-top");
  diapara[1].classList.add("bounce-in-right");
  diapara[2].classList.add("bounce-in-right");
  diapara[3].classList.add("bounce-in-bottom");
}
function hello5() {
  var pt1 = document.querySelector(".pt1");
  var pt2 = document.querySelector(".pt2");
  pt1.classList.add("tracking-in-contract-bck");
  pt2.classList.add("tracking-in-contract-bck");
}
function hello6() {
  var combo = document.querySelectorAll(".combo");
  var circles = document.querySelectorAll(".circles");
  circles[0].style.boxShadow = "0px 0px 45px white";
  combo[0].classList.add("slide-in-bl");
  combo[0].style.opacity = "1";
  combo[0].style.transition = "all 1.5s ease-in-out";
}
function hello7() {
  var combo = document.querySelectorAll(".combo");
  var circles = document.querySelectorAll(".circles");
  circles[1].style.boxShadow = "0px 0px 45px white";
  combo[1].classList.add("slide-in-br");
  combo[1].style.opacity = "1";
  combo[1].style.transition = "all 1.5s ease-in-out";
}
function hello8() {
  var combo = document.querySelectorAll(".combo");
  var circles = document.querySelectorAll(".circles");
  circles[2].style.boxShadow = "0px 0px 45px white";
  combo[2].classList.add("slide-in-bl");
  combo[2].style.opacity = "1";
  combo[2].style.transition = "all 1.5s ease-in-out";
}
function hello9() {
  var combo = document.querySelectorAll(".combo");
  var circles = document.querySelectorAll(".circles");
  circles[3].style.boxShadow = "0px 0px 45px white";
  combo[3].classList.add("slide-in-br");
  combo[3].style.opacity = "1";
  combo[3].style.transition = "all 1.5s ease-in-out";
}
function hello10() {
  var combo = document.querySelectorAll(".combo");
  var circles = document.querySelectorAll(".circles");
  circles[4].style.boxShadow = "0px 0px 45px white";
  combo[4].classList.add("slide-in-bl");
  combo[4].style.opacity = "1";
  combo[4].style.transition = "all 1.5s ease-in-out";
}
function hello11() {
  var combo = document.querySelectorAll(".combo");
  var circles = document.querySelectorAll(".circles");
  circles[5].style.boxShadow = "0px 0px 45px white";
  combo[5].classList.add("slide-in-br");
  combo[5].style.opacity = "1";
  combo[5].style.transition = "all 1.5s ease-in-out";
}
function hello12() {
  var antimfooterleft = document.querySelector(".antimfooterleft");
  antimfooterleft.style.opacity = "1";
  antimfooterleft.style.scale = "1";
  antimfooterleft.style.transition = 'all 1.5s ease-in-out';
  var antimfooterright = document.querySelector(".antimfooterright");
  antimfooterright.style.opacity = "1";
  antimfooterright.style.scale = "1";
  antimfooterright.style.transition = 'all 1.5s ease-in-out';
}
function hello14() {
  var rvideo = document.querySelector(".rvideo h2");
  rvideo.style.opacity = "1";
  rvideo.style.transition = 'all 2.5s ease-in-out';
}
function hello15() {
  var slides2 = document.querySelector(".slides2 h1");
  slides2.style.opacity = "1";
  slides2.style.transition = 'all 2.5s ease-in-out';
}
function hello16() {
  var slides = document.querySelector(".slides");
  slides.style.opacity = "1";
  slides.style.transition = 'all 2.5s ease-in-out';
}

function hello20() {
  var lockcirs = document.querySelector(".lockcirs");
  lockcirs.classList.add("lockcir");
  var fills = document.querySelector(".fills");
  fills.classList.add("ri-menu-2-fill");
  var halfs = document.querySelector(".halfs");
  halfs.classList.add("half");
  var locks3 = document.querySelector(".locks3");
  locks3.classList.add("lock3");
  var subcover1 = document.querySelector(".subcover1");
  subcover1.classList.add("subcover");
  var locks2 = document.querySelector(".locks2");
  locks2.classList.add("lock2");
  var locks1 = document.querySelector(".locks1");
  locks1.classList.add("lock1");
  var locks6 = document.querySelector(".locks6");
  locks6.classList.add("lock6");
  var coverpage1 = document.querySelector(".coverpage1");
  coverpage1.classList.add("coverpage");
  t1.from(".lockcir i", {
    scale: 10,
    duration: 1,
    ease: "power2.Out"
  })
  t1.to(".lockcir i", {
    rotate: 360,
    duration: 1,
    ease: "power2.Out"
  })
  t1.to(".lockcir i", {
    scale: 1,
    duration: 0.1,
    ease: "power2.Out"
  })
  t1.to(".half", {
    x: 0,
    y: -65,
    duration: 1,
    ease: "power2.Out"
  })
  t1.to(".lock3", {
    y: 175,
    duration: 0.5,
    ease: "power2.Out"
  })
  t1.to(".lockcir", {
    x: 180,
    y: -150,
    duration: 0.5,
    ease: "power2.Out"
  })
  t1.to(".lockcir", {
    scale: 1,
    duration: 0.1,
    ease: "power2.Out"
  })
  t1.to(".half", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.Out"
  })
  t1.to(".lock2", {
    x: 180,
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lock1", {
    x: 250,
    duration: 0.2,
    ease: "power2.Out"
  });
  t1.to(".lock1", {
    rotate: 0,
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lock3", {
    x: 100,
    rotate: 0,
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lockcir", {
    y: -315,
    opacity: 0,
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lock1", {
    y: -95,
    duration: 0.2,
    scale: 2.5,
    ease: "power2.Out"
  })
  t1.to(".lock2", {
    scale: 2.5,
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lock3", {
    scale: 2.5,
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lock1", {
    y: -200,
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lock2", {
    y: -115,
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lock3", {
    duration: 0.2,
    ease: "power2.Out"
  })
  t1.to(".lock1", {
    x: 550,
    duration: 0.2,
    ease: "power2.Out",

  })
  t1.to(".lock2", {
    x: 500,
    duration: 0.2,
    ease: "power2.Out",

  })
  t1.to(".lock3", {
    x: 425,
    duration: 0.2,
    ease: "power2.Out",

  })
  t1.to(".coverpage", {
    opacity: 0,
    zIndex: 0,
    duration: 0,
  })

}
var iconstr = document.querySelector(".iconstr");
var timevid = document.querySelector(".timevid");

iconstr.addEventListener("mouseover", function () {
  t1.to(".iconstr", {
    x: -10,
    duration: 0.5,
    ease: "power2.Out"
  });
  followcir.style.backgroundColor = "black"
  followcir.style.width = "65px"
  followcir.style.height = "65px"
  followcir.style.fontSize = "x-large";
  followcir.innerHTML = "click";
  iconstr.addEventListener("click", function () {
    timevid.src = "mp43.mp4";
  })
});
iconstr.addEventListener("mouseleave", function () {
  t1.to(".iconstr", {
    x: 0,
    duration: 0.5,
    ease: "power2.Out"
  });
  followcir.style.backgroundColor = "black"
  followcir.style.width = "30px"
  followcir.style.height = "30px"
  followcir.style.fontSize = "10px"
  followcir.innerHTML = ""
});
var iconstr1 = document.querySelector(".iconstr1");

iconstr1.addEventListener("mouseover", function () {
  t1.to(".iconstr1", {
    x: -10,
    duration: 0.5,
    ease: "power2.Out"
  });
  followcir.style.backgroundColor = "black"
  followcir.style.width = "65px"
  followcir.style.height = "65px"
  followcir.style.fontSize = "x-large";
  followcir.innerHTML = "click";
  iconstr1.addEventListener("click", function () {
    timevid.src = "mp42.mp4";
  })
});
iconstr1.addEventListener("mouseleave", function () {
  t1.to(".iconstr1", {
    x: 0,
    duration: 0.5,
    ease: "power2.Out"
  });
  followcir.style.backgroundColor = "black"
  followcir.style.width = "30px"
  followcir.style.height = "30px"
  followcir.style.fontSize = "10px"
  followcir.innerHTML = ""
});

var iconstr2 = document.querySelector(".iconstr2");

iconstr2.addEventListener("mouseover", function () {
  t1.to(".iconstr2", {
    x: -10,
    duration: 0.5,
    ease: "power2.Out"
  });
  followcir.style.backgroundColor = "black"
  followcir.style.width = "65px"
  followcir.style.height = "65px"
  followcir.style.fontSize = "x-large";
  followcir.innerHTML = "click";
  iconstr2.addEventListener("click", function () {
    timevid.src = "mp41.mp4";
  })
});
iconstr2.addEventListener("mouseleave", function () {
  t1.to(".iconstr2", {
    x: 0,
    duration: 0.5,
    ease: "power2.Out"
  });
  followcir.style.backgroundColor = "black"
  followcir.style.width = "30px"
  followcir.style.height = "30px"
  followcir.style.fontSize = "10px"
  followcir.innerHTML = ""
});