const emailCollectorForm = document.querySelector('.email-collector')
let ourMainContent = document.querySelector('.main-content')

emailCollectorForm.addEventListener('submit', event => {
    event.preventDefault()
    let ourFormData = new FormData(event.target)
    let firstName = ourFormData.get("first-name")
    let emailAddress = ourFormData.get("email-address")

    let updatedHtmlContent = ` <h1>Congratulations, <span class="name-input">${firstName}</span></h1>
    <p class="accent-text">
        You're on your way to becoming a BBQ Master!
    </p>

    <p class="small-text">
        We'll never share your information<span
            class="text-block"
            >without your permission</span
        >
    </p> `

    ourMainContent.innerHTML = updatedHtmlContent
})