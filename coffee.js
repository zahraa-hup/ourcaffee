


function navactive(){
    document.querySelector(".nav-bar").classList.toggle("active");
    document.querySelector(".fa-bars").classList.toggle("fa-xmark")
}
setInterval(() => {
    setTimeout(() => {
        document.getElementById("sec1-img1").style.transform="translateY(-30PX)";
        setTimeout(() => {
            document.getElementById("sec1-img1").style.transform="translateY(30PX)";  
        },1000);
    }, 1000);
}, 2100);


setInterval(() => {
    setTimeout(() => {
      document.getElementById("img4").style.transform="translateX(100%)";
      setTimeout(() => {
        document.getElementById("img3").style.transform="translateX(100%)";
        setTimeout(() => {
          document.getElementById("img2").style.transform="translateX(100%)";
          setTimeout(() => {
            document.getElementById("img1").style.transform="translateX(100%)";
            setTimeout(() => {
              document.getElementById("img1").style.transform="translateX(-0.05%)";
              document.getElementById("img2").style.transform="translateX(-0.05%)";
              document.getElementById("img3").style.transform="translateX(-0.05%)";
              document.getElementById("img4").style.transform="translateX(-0.05%)";
              setTimeout(() => {
                document.getElementById("img4").style.transform="translateX(-100%)";
                setTimeout(() => {
                  document.getElementById("img3").style.transform="translateX(-100%)";
                  setTimeout(() => {
                    document.getElementById("img2").style.transform="translateX(-100%)";
                    setTimeout(() => {
                      document.getElementById("img1").style.transform="translateX(-100%)";
                      setTimeout(() => {
                        document.getElementById("img1").style.transform="translateX(0.05%)";
                        document.getElementById("img2").style.transform="translateX(0.05%)";
                        document.getElementById("img3").style.transform="translateX(0.05%)";
                        document.getElementById("img4").style.transform="translateX(0.05%)";
                      },400);
                    },2000);
                  }, 2000);
                }, 2000);
              }, 2000);
            },400);
          },2000);
        }, 2000);
      }, 2000);
    }, 2000);
  
  
    
    
  }, 16000);
  function colorch(element){
    element.style.color="#333";
  }