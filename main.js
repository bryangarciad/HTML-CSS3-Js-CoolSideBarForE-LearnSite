window.onload = () => {
    
    // var slidingTagLiAfterStyle = document.createElement("style");
    // slidingTagLiAfterStyle.innerHTML = ".topic::after{"+
    //     'content: "";'+
    //     "width: 16px;"+
    //     "height: 16px;"+
    //     "border-radius: 50%;"+
    //     "background: #00b164;"+
    //     "display: block;"+
    //     "position: relative;"+
    //     'margin-left: 100.000px;'+
    //     'z-index: 2;}';

    // document.head.appendChild(slidingTagLiAfterStyle);
    
    // const displayWindowSize = () =>{
    //     console.log(document.getElementById('progress').getBoundingClientRect().left);

    //     slidingTagLiAfterStyle.innerHTML = slidingTagLiAfterStyle.innerHTML.replace(/margin-left: + ^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$ +px/, "margin-left: " + document.getElementById('progress').getBoundingClientRect().left  + "px"); 
    // }

    // window.addEventListener("resize", displayWindowSize);
    let Summary = document.getElementsByTagName('summary');
    let arrows = document.getElementsByTagName('i')
    for(let i=0; i<Summary.length; i++){
        Summary[i].addEventListener('click', () => {
            if(arrows[i]!== undefined){
                if(arrows[i].style.transform == "" || arrows[i].style.transform == "rotate(360deg)")
                    arrows[i].style.transform ='rotate(180deg)'
                else
                arrows[i].style.transform ='rotate(360deg)'
                console.log(i);
            }
        })
    }

    let sectionTopic = document.getElementsByClassName('dropContent');
    for(let i=0; i<sectionTopic.length; i++){
        sectionTopic[i].addEventListener('click', ()=>{
           console.log('click');

        })
    
    }
}
