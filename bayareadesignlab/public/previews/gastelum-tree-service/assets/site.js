const chatWidget = document.querySelector('.chat-widget');
const chatToggle = document.querySelector('.chat-toggle');
const chatClose = document.querySelector('.chat-close');
const chatText = document.querySelector('#chat-text');
const chatFields = ['#chat-name', '#chat-phone', '#chat-message'].map((selector) => document.querySelector(selector));

if (chatWidget && chatToggle && chatClose && chatText && chatFields.every(Boolean)) {
  function setChatOpen(isOpen) {
    chatWidget.classList.toggle('is-open', isOpen);
    chatToggle.setAttribute('aria-expanded', String(isOpen));
  }

  function updateChatLink() {
    const [name, phone, message] = chatFields.map((field) => field.value.trim());
    const body = [
      'Hi Gastelum Tree Service, I would like help with an estimate.',
      name ? `Name: ${name}` : '',
      phone ? `Phone: ${phone}` : '',
      message ? `Details: ${message}` : ''
    ].filter(Boolean).join('\n');

    chatText.href = `sms:17077180645?&body=${encodeURIComponent(body)}`;
  }

  chatToggle.addEventListener('click', () => setChatOpen(!chatWidget.classList.contains('is-open')));
  chatClose.addEventListener('click', () => setChatOpen(false));
  chatFields.forEach((field) => field.addEventListener('input', updateChatLink));
  updateChatLink();
}

document.querySelectorAll('[data-ba-slider]').forEach((slider) => {
  const range = slider.querySelector('[data-ba-range]');
  const after = slider.querySelector('.ba-after');

  if (!range || !after) return;

  function updateSlider() {
    after.style.clipPath = `inset(0 0 0 ${range.value}%)`;
  }

  range.addEventListener('input', updateSlider);
  updateSlider();
});

const estimateForm = document.querySelector('[data-estimate-form]');
if (estimateForm) {
  estimateForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = estimateForm.querySelector('#name')?.value.trim();
    const phone = estimateForm.querySelector('#phone')?.value.trim();
    const service = estimateForm.querySelector('#service')?.value.trim();
    const details = estimateForm.querySelector('#details')?.value.trim();
    const body = [
      'Hi Gastelum Tree Service, I would like help with an estimate.',
      name ? `Name: ${name}` : '',
      phone ? `Phone: ${phone}` : '',
      service ? `Job type: ${service}` : '',
      details ? `Details: ${details}` : ''
    ].filter(Boolean).join('\n');
    window.location.href = `sms:17077180645?&body=${encodeURIComponent(body)}`;
  });
}
