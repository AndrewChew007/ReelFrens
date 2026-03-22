// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDZhiHT15iDFEvVUj7UHOyk6mnTKHc0c_8",
authDomain: "reelfrens.firebaseapp.com",
projectId: "reelfrens",
storageBucket: "reelfrens.firebasestorage.app",
messagingSenderId: "312853025037",
appId: "1:312853025037:web:b691179a5589b479816044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


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

document.querySelectorAll(".volume_container").forEach((container)=>{
    const input = container.querySelector("#volume_number");
    const decrease = container.querySelector("#decrease");
    const increase = container.querySelector("#increase");

    increase.addEventListener("click", ()=>{
        input.stepUp();
    });
    decrease.addEventListener("click", ()=>{
        input.stepDown();
    });
});

const submit = document.querySelector("#submit_button");

submit.addEventListener("click", async (e)=>{
    e.preventDefault();

    const data = {
        cards: {}
    };

    document.querySelectorAll(".card").forEach((card)=>{
        const checkbox = card.querySelector(".card_checkbox");
        const title = card.querySelector(".card_title");

        data.cards[title.textContent] = checkbox.checked;
    });

    const number = document.querySelector("#volume_number");

    data["volume_number"] = number.value;

    const handle = document.querySelector(".submit_container input");

    data["IG_handle"] = handle.value;

    console.log(data)

    // Send to Firebase
    try {
        await addDoc(collection(db, "responses"), data);
        console.log("Data saved onto Firebase");
        alert("Response Saved!")
        submit.disabled = true;
    } catch (error) {
        console.error("Error saving data:", error);
    }
});