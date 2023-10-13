let index = 0;
const ip = document.getElementById("imgPrimary");

function btn(src, n) {
    index = n;
    let imgSrc = src;
    ip.src = imgSrc;
}

const btns = document.querySelectorAll(".btnss");
const maxIndex = btns.length - 1;
var bn1 = "";
var img = "";


function addSlide(n){

    index += n; // scaderea sau adaugarea;

    if( index < 0 ) {
        index = maxIndex;
    } else if ( index > maxIndex) {
        index = 0;
    }

    const currentAttribute = btns[index].getAttribute("onclick");
 
    bn1 = currentAttribute.slice(5, -1);
    img = bn1.split("', ");

    console.log(`index: ${index} current attribute ${currentAttribute}`);
    
    btn(img[0] , index);
}

setInterval(
    function addSlide(n){
        n = 1;
        index += n;

        if( index < 0 ) {
            index = maxIndex;
        } else if ( index > maxIndex) {
            index = 0;
        }
        const currentAttribute = btns[index].getAttribute("onclick");
 
        bn1 = currentAttribute.slice(5, -1);
        img = bn1.split("', ");

        console.log(`index: ${index} current attribute ${currentAttribute}`);
        
        btn(img[0] , index);
    } 
    , 7000
)