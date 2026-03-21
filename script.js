document.querySelectorAll(".card").forEach((card)=>{
    
    const header = card.querySelector(".card_header");
    const content = card.querySelector(".card_content");
    
    header.addEventListener("click", (e)=>{
        if (e.target.tagName === "INPUT") return;

        if (card.classList.contains("expand")) {
            content.style.maxHeight = "0";
            header.querySelector(".card_plus").style.rotate = "0deg";
            card.classList.remove("expand");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            header.querySelector(".card_plus").style.rotate = "135deg";
            card.classList.add("expand")
        }
    });
});