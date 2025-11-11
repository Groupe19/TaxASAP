const faqList = document.getElementById("faq-list");

const faqs = [
  {
    question: "How can I contact support?",
    answer: "You can reach our support team by emailing support@taxasap.com or using the contact form below."
  },
  {
    question: "Where can I find pricing information?",
    answer: "Visit our <a href='pricing.html'>Plans</a> page for detailed pricing and package options."
  },
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' at the login page and follow the instructions."
  }
];

function displayFAQs() {
  faqList.innerHTML = "";
  faqs.forEach(faq => {
    const div = document.createElement("div");
    div.classList.add("faq");

    const q = document.createElement("p");
    q.innerHTML = faq.question;
    q.style.fontWeight = "bold";
    q.style.cursor = "pointer";

    const a = document.createElement("p");
    a.innerHTML = faq.answer;
    a.style.display = "none";
    a.style.marginTop = "5px";

    q.addEventListener("click", () => {
      a.style.display = a.style.display === "none" ? "block" : "none";
    });

    div.appendChild(q);
    div.appendChild(a);
    faqList.appendChild(div);
  });
}

displayFAQs();


const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields before submitting.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been received. We’ll contact you at ${email} soon.`);

    contactForm.reset();
  });
}