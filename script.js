//JQUERY FUNCTION
$(document).ready(function(){
    $("body").hover( function(){
        var div = $("#raisearm");
        startAnimation1();
        function startAnimation1(){
            div.animate({rotate:'-5deg'},"fast" );
            div.animate({rotate:'-15deg'},"fast");
            div.animate({rotate:'-10deg'},"fast");
            div.animate({rotate:'0deg'},"fast" );
            div.animate({rotate:'10deg'},"fast" );
            div.animate({rotate:'15deg'},"fast", startAnimation1 );
        };
        $(".help").show(5000);             
        
    $("#face").on("mouseenter", function(){
        finishAnimation();
        changeClass();
        function finishAnimation(){
            $("#raisearm").finish(startAnimation1);
        };
        function changeClass(){
            $("#rightArm").css({"width":"100%","height":"17%", "marginLeft":"-10px", "transform":"rotate(0deg)"});
            $("#raisearm").css({"display":"none"});
            $("#leftarm").css({"transform":"rotate(0deg)", "margin":"0 -10px 0 0", "width":"60%", "justifySelf":"right"});
            $(".huntMat").css({"display":"grid"});      
        };
    })
});
    $("#arrow").on("mousedown", function(){
        $("#arrow, #arrowHead").animate({right: "15px"});
        $("#leftarm").css({"margin":"0 -5px 0 0"});
    });
    $("#arrow").on("mouseup", function(){
        $("#face").css({"marginLeft":"40px", "transition-delay":".3s"});
        $("#leftarm").css({"margin":"0 -15px 0 0", "transition-delay":".3s"});
        $("#arrow, #arrowHead").delay(130).animate({left:"500px"},function(){
            $(".table").hide(function(){
                var div = $(".word");
                 wordAnimation();
                function wordAnimation(){
                div.animate({opacity:"1", rotate:"720deg"});
                }                
            });
        });
    });
});
//TECH SKILL STAR FUNCTION

const rating = document.querySelectorAll('.star');

rating.forEach((star)=>{
    star.addEventListener('click', ()=>{
        userRating(star)        
    })
})

function userRating(star){
    let starFam = star.parentElement.children
    const sibling = Array.from(starFam);
    const indexStar = [...starFam].indexOf(star);
    const oldSib = sibling.filter((val) => sibling.indexOf(val) <= indexStar)
    if(star){
        for (i = 0; i < starFam.length; i++ )
        starFam[i].style.color = "#ddd"
        
    }if(star.previousElementSibling !== null){    
        for (i = 0; i < oldSib.length; i++)
        oldSib[i].style.color = "gold";
      
    }else(star.style.color = "gold")
   
    let techMessage;
    if (indexStar <= 1){
    techMessage = "Thank you for your honest feedback, this will help me hone my skills."
    }else if (indexStar >= 3) {
    techMessage = "Thank you for the Confidence! Let me know if I could be of service."
    }else(techMessage = "Thank you for the feedback, opportunity would help me hone my skills.");
    document.getElementById("techImpMsg").innerText = techMessage;
    document.getElementById("techImpMsg").classList.add('newMsg');
}
// HR SKILLS BUTTON FUNCTION

let hrBtn = document.querySelectorAll("[data-modal-target]");
let backBtn = document.querySelectorAll('[data-arrow-back]');

hrBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})
backBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modal');
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null)return
    modal.classList.add('active')
}

function closeModal(modal){
    if(modal == null)return
    modal.classList.remove('active')
}

// heart and like count

let userReact = document.querySelectorAll('[data-icon-target]');

userReact.forEach((icon)=>{
    icon.addEventListener('click', ()=>{
        const reactBtn = document.querySelector(icon.dataset.iconTarget)
        likeHeart(reactBtn)        
    })
})
function likeHeart(reactBtn){
    if (reactBtn == null)return
    document.getElementById(reactBtn.id).innerHTML = parseInt(reactBtn.innerText) + 1; 

}
