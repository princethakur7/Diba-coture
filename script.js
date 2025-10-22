let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


const form = document.querySelector(".contact-form");
  const msg = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.style.display = "none"; // hide previous messages

    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      msg.textContent = "✅ Thank you! Your message has been sent successfully.";
      msg.style.color = "green";
      msg.style.display = "block";
      form.reset();
    } else {
      msg.textContent = "❌ Oops! Something went wrong. Please try again.";
      msg.style.color = "red";
      msg.style.display = "block";
    }
  });


  function openWhatsApp(productName, productLink) {
  const phoneNumber = "918006602398"; // Your WhatsApp number (no + sign)
  const message = `Hey, I wanted to know more about this product — ${productName}. Here’s the link: ${productLink}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}