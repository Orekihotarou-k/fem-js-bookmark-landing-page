// funtion to toggle menu
const toggleMenuButton = document.querySelector(".nav-toggle--btn")
const primaryNav = document.querySelector(".primary-nav")

function toggleMenu() {
    primaryNav.classList.toggle("active")
    toggleMenuButton.classList.toggle("btn-active")
}

toggleMenuButton.addEventListener("click", toggleMenu)

// function to change features
const featureBtnOne = document.querySelector(".feature-btn-one")
const featureBtnTwo = document.querySelector(".feature-btn-two")
const featureBtnThree = document.querySelector(".feature-btn-three")

// feature elements 
const featureOne = document.querySelector(".feature-one")
const featureTwo = document.querySelector(".feature-two")
const featureThree = document.querySelector(".feature-three")

featureBtnTwo.addEventListener("click", toggleFeatureTwo)

function toggleFeatureTwo() {
    featureOne.classList.add("inactive")
    featureThree.classList.add("inactive")
    featureTwo.classList.remove("inactive")
}

featureBtnThree.addEventListener("click", toggleFeatureThree)

function toggleFeatureThree() {
    featureTwo.classList.add("inactive")
    featureOne.classList.add("inactive")
    featureThree.classList.remove("inactive")
}

featureBtnOne.addEventListener("click", toggleFeatureOne)

function toggleFeatureOne() {
    featureTwo.classList.add("inactive")
    featureThree.classList.add("inactive")
    featureOne.classList.remove("inactive")
}


// function to toggle faq 
const faq = document.querySelectorAll(".faq")
const faqQuestion = document.querySelectorAll(".faq--question")

faqQuestion.forEach(element => {
    element.addEventListener("click", toggleAnswer)
    console.log("Im happening")
})

function toggleAnswer() {
    faq.forEach(item => {
        item.classList.toggle("faq-active")
        console.log('im the faq')
    })
}