let dragElement = document.querySelector("img");
let dropArea = document.querySelectorAll(".box");


dragElement.ondragstart = function (ev) {
        ev.dataTransfer.setData("id", this.id)
    };
dropArea.forEach(dropA => {
    dropA.ondragover = function (ev) {
        ev.preventDefault();
    }
    dropA.ondrop=function(ev){
        let id=ev.dataTransfer.getData("id");
        let dragElement=document.getElementById(id);
        this.append(dragElement);
    }
})

let dragElements=document.querySelectorAll(".numbox");
let dropAreas=document.querySelectorAll(".columb")

dragElements.forEach(element => {
    element.ondragstart=function(ev){
        ev.dataTransfer.setData("id", this.id);
    };
});

dropAreas.forEach(dropA => {
    dropA.ondragover = function (ev) {
        ev.preventDefault();
    }
    dropA.ondrop=function(ev){
        let id=ev.dataTransfer.getData("id");
        if (this.id=="columb1"&&(id=="1"||id=="2"||id=="3"||id=="4")) {
            let dragElement=document.getElementById(id);
            this.append(dragElement);
        }
        else if (this.id=="columb2"&&(id=="5"||id=="6"||id=="7"||id=="8")) {
            let dragElement=document.getElementById(id);
            this.append(dragElement);
        }
        if (this.id=="columb3"&&(id=="9"||id=="10"||id=="11"||id=="12")) {
            let dragElement=document.getElementById(id);
            this.append(dragElement);
        }
      
       
    }
})
