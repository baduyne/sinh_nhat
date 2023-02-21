

var to = "khánh Linh ";
var gift_url = "https://www.facebook.com/linnhln";
var gift_image_url = "https://scontent.xx.fbcdn.net/v/t1.15752-9/331748793_727822882144323_476729116245172664_n.jpg?stp=dst-jpg_s403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=us2hV6oyGMkAX8vXZdt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ0JkCNTGKeSUobEmRdl9qn2SMvY2uf2-_suaae-KR4Qg&oe=641C6A3D";

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
  document.querySelector('#card .honey').setAttribute('src', `${giftImage}`);

  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();
