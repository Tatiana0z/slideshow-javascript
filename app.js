let index = 0;

function btn(src, n) {
    const ip = document.getElementById("imgPrimary");
    index = n;
    let imgSrc = src;
    ip.src = imgSrc;
}

function addSlide(n){
    const btns = document.querySelectorAll(".btnss");
    const maxIndex = btns.length - 1;

    index += n; // scaderea sau adaugarea;

    if( index < 0 ) {
        index = maxIndex;
    } else if ( index > maxIndex) {
        index = 0;
    }

    const currentAttribute = btns[index].getAttribute("onclick");
 
    let bn1 = currentAttribute.slice(5, -1);
    let img = bn1.split("', ");

    console.log(`index: ${index} current attribute ${currentAttribute}`);
    
    btn(img[0] , index);
}

setInterval(
    function addSlide(){
        const btns = document.querySelectorAll(".btnss");
        const currentAttribute = btns[index].getAttribute("onclick");

        let bn1 = currentAttribute.slice(5, -1);
        let img = bn1.split("', ");
        btn(img[0] , index + 1);
    }
    , 4000
)