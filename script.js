function controlMoving(direction){
    var top = parseInt(document.getElementById("hero").style.top);
    var left = parseInt(document.getElementById("hero").style.left);
    var widthSize = document.getElementById("hero").style.width;
    var heightSize = document.getElementById("hero").style.height;
    console.log(left);
    console.log(widthSize);
    switch (direction){
        case 0:
            if (left > 0) left-=10;

            break;
        case 1:
            if (left < window.innerWidth - widthSize) left+=10;
            break;
        case 2:
            if (top > 0) top-=10;
            break;
        default:
            if (top < window.innerHeight - heightSize) top+=10;
            break;
    }
    console.log(left);
    console.log(widthSize);
    document.getElementById("hero").style.left = left + "px";
    document.getElementById("hero").style.top = top + "px";
}
