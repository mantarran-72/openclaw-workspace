const siteConfig = {
  phoneDisplay: "(707) 555-0148",
  phoneHref: "17075550148",
  smsIntro: "Hi, I would like help with an estimate."
};

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
if (!document.querySelector(".chat-widget")) {
  document.body.insertAdjacentHTML("beforeend", `
    <aside class="chat-widget" aria-label="Chat with the business">
      <div class="chat-panel" id="chat-panel">
        <div class="chat-head">
          <div><strong>North Bay Tree & Landscape</strong><span>Usually replies by text or phone</span></div>
          <button class="chat-close" type="button" aria-label="Close chat">x</button>
        </div>
        <div class="chat-body">
          <p>Hi, send a few details and we can help point you in the right direction.</p>
          <input id="chat-name" autocomplete="name" placeholder="Your name">
          <input id="chat-phone" autocomplete="tel" placeholder="Phone number">
          <textarea id="chat-message" placeholder="What do you need help with?"></textarea>
          <div class="chat-actions">
            <a class="button primary" id="chat-text" href="sms:17075550148">Text us</a>
            <a class="button ghost" data-phone-link href="tel:17075550148">Call now</a>
          </div>
        </div>
      </div>
      <button class="chat-toggle" type="button" aria-expanded="false" aria-controls="chat-panel">
        <span class="chat-dot" aria-hidden="true"></span>
        Chat with us
      </button>
    </aside>
  `);
}

const chatWidget = document.querySelector(".chat-widget");
const chatToggle = document.querySelector(".chat-toggle");
const chatClose = document.querySelector(".chat-close");
const chatText = document.querySelector("#chat-text");
const leadForm = document.querySelector("[data-lead-form]");

document.querySelectorAll("[data-phone-display]").forEach((node) => {
  node.textContent = siteConfig.phoneDisplay;
});

document.querySelectorAll("[data-phone-link]").forEach((node) => {
  node.href = `tel:${siteConfig.phoneHref}`;
});

document.querySelectorAll("[data-sms-link]").forEach((node) => {
  node.href = `sms:${siteConfig.phoneHref}`;
});

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function collectLead(prefix = siteConfig.smsIntro) {
  const name = document.querySelector("#lead-name, #chat-name")?.value?.trim();
  const phone = document.querySelector("#lead-phone, #chat-phone")?.value?.trim();
  const service = document.querySelector("#lead-service")?.value?.trim();
  const message = document.querySelector("#lead-message, #chat-message")?.value?.trim();

  return [
    prefix,
    name ? `Name: ${name}` : "",
    phone ? `Phone: ${phone}` : "",
    service ? `Service: ${service}` : "",
    message ? `Details: ${message}` : ""
  ].filter(Boolean).join("\n");
}

function updateChatLink() {
  if (!chatText) return;
  chatText.href = `sms:${siteConfig.phoneHref}?&body=${encodeURIComponent(collectLead())}`;
}

if (chatWidget && chatToggle && chatClose) {
  const setChatOpen = (isOpen) => {
    chatWidget.classList.toggle("is-open", isOpen);
    chatToggle.setAttribute("aria-expanded", String(isOpen));
  };

  chatToggle.addEventListener("click", () => setChatOpen(!chatWidget.classList.contains("is-open")));
  chatClose.addEventListener("click", () => setChatOpen(false));
  document.querySelectorAll("#chat-name, #chat-phone, #chat-message").forEach((field) => {
    field.addEventListener("input", updateChatLink);
  });
  updateChatLink();
}

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const body = encodeURIComponent(collectLead("New website estimate request."));
    window.location.href = `sms:${siteConfig.phoneHref}?&body=${body}`;
  });
}
