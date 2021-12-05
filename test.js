let canvasBoard = document.querySelector("canvas");
let body = document.querySelector("body");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box")
let cTool = "rect";

// let rectTool = document.querySelector(".fa-square");
// let lineTool = document.querySelector(".fa-grip-lines-vertical");


let tool = canvasBoard.getContext("2d");

let area1 = document.querySelector(".color-container");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

red.addEventListener("click", ()=>{
    tool.strokeStyle = "red";
})
green.addEventListener("click", ()=>{
    tool.strokeStyle = "green";
})
blue.addEventListener("click", ()=>{
    tool.strokeStyle = "blue";
})



let ix,iy,fx,fy;
let borderTop = canvasBoard.getBoundingClientRect().top;
let borderLeft = canvasBoard.getBoundingClientRect().left;
body.addEventListener("mousedown", (e)=>{
    ix = e.clientX -borderLeft;
    iy = e.clientY - borderTop;
})
body.addEventListener("mouseup", (e)=>{
    fx = e.clientX -borderLeft;
    fy = e.clientY - borderTop;
    let width= fx - ix;
    let height = fy - iy;
    if (cTool == "rect") {
        tool.strokeRect(ix, iy, width, height);
    } 
    else if(cTool=="line") {
        tool.beginPath(); // x,y start
        tool.moveTo(ix, iy); // move without drawing
        tool.lineTo(fx, fy); //x,y final
        tool.stroke(); //draw line bw stat and final cord.
    }
    else if(cTool== "pencil"){
        let drawingMode = false;
        body.addEventListener("mousedown", ()=>{
            drawingMode = true;
        })
        body.addEventListener("mouseup", ()=>{
            drawingMode = false;
        })

        body.addEventListener("mousemove", (e)=>{
            if(drawingMode==false)
                return;
            fx = e.clientX -borderLeft;
            fy = e.clientY - borderTop;
            tool.beginPath();
            tool.moveTo(ix,iy);
            tool.lineTo(fx, fy);
            tool.stroke();
            ix=fx;
            iy=fy;
        })
    }
    else if(cTool=="eraser"){
        console.log("eraser")
    }
})

pencil.addEventListener("click", ()=>{
    if(cTool=="pencil"){
        // document.querySelector(".sbP").style.display = "flex";
        options[0].style.display = "flex";
    }else{
        cTool="pencil";
        for(let i=0;i<options.length;i++){
            options[i].style.display = "none";
        }
    }
})
eraser.addEventListener("click", ()=>{
    if(cTool=="eraser"){
        options[1].style.display = "flex";
    }else{  
        cTool="eraser";
        for(let i=0;i<options.length;i++){
            options[i].style.display = "none";
        }
    }
})
rect.addEventListener("click", ()=>{
    if(cTool=="rect"){
        options[2].style.display = "flex";
    }else{
        cTool="rect";
        for(let i=0;i<options.length;i++){
            options[i].style.display = "none";
        }
    }
})
line.addEventListener("click", ()=>{
    if(cTool=="line"){
        options[3].style.display = "flex";
    }else{
        cTool="line";
        for(let i=0;i<options.length;i++){
            options[i].style.display = "none";
        } 
    }
})



