
/* modal script */ 

  
  let isModalOpen = false;
  function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs 
    .sendForm (
       'service_5ue1zrs',
       'template_x5y95b3',
        event.target,
        'uaOfhrHzF6IfYqdsd'

    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += " modal__overlay--visible";
   }).catch(() => {
    loading.classList.remove('modal__overlay--visible');
    alert(
        "The email service is temporarily unavailable. Please contact me directly at jcdoyle62@gmail.com"
    );
   })

}

function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
   
    isModalOpen = true;
    document.body.classList += "modal--open";
}