var i = 0;
var txt = `Be prepared to connect with individuals who share your interests and create strong communities with BunchUp.
Mark your calendars, we'll be launching soon.`;
var speed = 80;

function type() {
    if (i < txt.length) {
      document.getElementById("coming_soon_sub_heading").innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

// const el = document.querySelector(".content_container");

// el?.addEventListener("mousemove", (e) => {
// el?.style.setProperty('--x', -e.offsetX /40 + "px");
// el?.style.setProperty('--y',-e.offsetY /40+ "px");
// });

function nav_bar() {
  document.getElementById("nav_menu_bars").classList.toggle("change");
  const width = document.getElementById('sidebar').style.width;
  if(width !='0px'){
    document.getElementById('sidebar').style.width = '0px';
    document.getElementById('content_container').style.display = 'block'
    document.getElementById('footer_container').style.display = 'block'
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('content_container').style.display = 'block';
    if(document.getElementById('bottom_container')){
      document.getElementById('bottom_container').style.display = 'block';
    }
  }else{
    document.getElementById('footer_container').style.display = 'none'
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('sidebar').style.width = '100%';
    document.getElementById('content_container').style.display = 'none';
    if(document.getElementById('bottom_container')){
      document.getElementById('bottom_container').style.display = 'none';
    }
    
  }
} 

function open_about(x){
  const info_display = document.getElementById(`${x}_info`).style.display;
  if(info_display == 'none'){
    document.getElementById(`${x}_info`).style.display = 'block';
  }
}

function close_about(x){
  document.getElementById(x).style.display = 'none';
}

