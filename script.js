const img = document.getElementById("hero");
const obj = new Object(img);

function Object(imageElement){
    this.imageElement = imageElement;
    this.left = parseInt(imageElement.style.left);
    this.top = parseInt(imageElement.style.top);
    this.size = imageElement.offsetHeight;

    this.getSize = function () {
        return this.size;
    }

    console.log(this.size);
    this.moveRight = function(){
        this.left += 10;
        this.imageElement.style.left = this.left + "px";
    }

    this.moveLeft = function(){
        this.left -= 10;
        this.imageElement.style.left = this.left + "px";
    }

    this.moveBottom = function(){
        this.top += 10;
        this.imageElement.style.top = this.top + "px";
    }

    this.moveTop = function(){
        this.top -= 10;
        this.imageElement.style.top = this.top + "px";
    }
}

function controlMoving(direction){
    switch (direction) {
        case 0:
            if (obj.left < window.innerWidth - obj.getSize() - 20) obj.moveRight();
            break;
        case 1:
            if (obj.top < window.innerHeight - obj.getSize() - 20) obj.moveBottom();
            break;
        case 2:
            if (obj.left > 0) obj.moveLeft();
            break;
        default:
            if (obj.top > 0) obj.moveTop();
            break;
    }
}
