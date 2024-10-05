const typewriter = document.getElementById('typewriter');
const cursor = document.getElementById('cursor');

// First sentence (default color)
const sentence = "Hehe, vaise to yaha kuch aur hona tha, but fir tum us time dekhi nhi to m socha chhodo ab koi mtlb nhi. Pr koi na bta denge tumko, shi time aane do.";

// Second sentence or continuation (with a different color)
const coloredText = " But tb tk....\u{1F92B}";

let fullText = sentence + coloredText;
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (wordIndex < fullText.length) {
    const char = fullText[charIndex];
    const span = document.createElement('span');
    span.textContent = char;

    // Apply styles for the second part of the sentence
    if (charIndex >= sentence.length) {
      span.style.color = 'red';  // Change color for the second portion
    }

    // Append the character to the typewriter div
    typewriter.appendChild(span);

    // Move cursor to the current position
    const rect = span.getBoundingClientRect();
    const typewriterRect = typewriter.getBoundingClientRect();
    cursor.style.left = `${rect.right - typewriterRect.left}px`;
    cursor.style.top = `${rect.top - typewriterRect.top}px`;

    // Move to the next character
    charIndex++;

    setTimeout(type, 100);  // Continue typing the next character
  } else {
    // Hide cursor after finishing
    cursor.style.display = 'none';
  }
}

// Start typing
type();
