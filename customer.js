{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const faqList = document.getElementById("faq-list");\
const questionForm = document.getElementById("question-form");\
const questionInput = document.getElementById("question-input");\
const questionList = document.getElementById("question-list");\
\
const faqs = [\
  "How can I contact support?",\
  "Where can I find pricing information?",\
  "How do I reset my password?"\
];\
\
const savedQuestions = JSON.parse(localStorage.getItem("questions")) || [];\
\
function displayFAQs() \{\
  faqList.innerHTML = "";\
  faqs.forEach(faq => \{\
    const div = document.createElement("div");\
    div.classList.add("faq");\
    div.textContent = faq;\
    faqList.appendChild(div);\
  \});\
\}\
\
function displayQuestions() \{\
  questionList.innerHTML = "";\
  savedQuestions.forEach(q => \{\
    const div = document.createElement("div");\
    div.classList.add("question");\
    div.textContent = q;\
    questionList.appendChild(div);\
  \});\
\}\
\
questionForm.addEventListener("submit", e => \{\
  e.preventDefault();\
  const question = questionInput.value.trim();\
  if (question) \{\
    savedQuestions.push(question);\
    localStorage.setItem("questions", JSON.stringify(savedQuestions));\
    questionInput.value = "";\
    displayQuestions();\
  \}\
\});\
\
displayFAQs();\
displayQuestions();\
}