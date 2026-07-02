let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // දැනට පේන පින්තූරයෙන් 'active' කෑල්ල අයින් කරනවා
    slides[currentSlide].classList.remove('active');
    
    // ඊලඟ පින්තූරයේ අංකය (Index) ගන්නවා (3න් පස්සේ ආයෙත් මුලට යනවා)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // අලුත් පින්තූරයට 'active' කෑල්ල දාලා ඒක මතු කරනවා
    slides[currentSlide].classList.add('active');
}

// තත්පර 3න් 3ට (3000ms) nextSlide function එක run කරන්න
setInterval(nextSlide, 5000);
// 👈 ඔයාගේ script.js එක ඇතුලේ තියෙන code එක මෙහෙම වෙනස් කරන්න


// script.js ඇතුලත තිබිය යුතු කේතය:
 