document.querySelectorAll(".card").forEach((card)=>{
    
    const title = card.querySelector(".card_header");
    const content = card.querySelector(".card_content");
    
    title.addEventListener("click", (e)=>{
        if (e.target.tagName === "INPUT") return;

        if (card.classList.contains("expand")) {
            content.style.maxHeight = "0";
            card.classList.remove("expand");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            card.classList.add("expand")
        }
    });
});