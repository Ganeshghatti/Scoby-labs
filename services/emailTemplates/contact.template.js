export const contactTemplate = (name) => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>Thank You for Contacting Scoby Labs</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #E6E0D4;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: #3E2F22;
        line-height: 1.6;
      }
      .email-wrapper {
        padding: 32px 16px;
      }
      .container {
        max-width: 560px;
        margin: 0 auto;
        background: #FDFBF7;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(62, 47, 34, 0.08);
      }
      .brand-header {
        background: #3E2F22;
        padding: 28px 32px;
        text-align: center;
      }
      .brand-name {
        font-family: Georgia, "Times New Roman", serif;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.15em;
        color: #BFA15F;
        margin: 0;
      }
      .content {
        padding: 36px 32px 40px;
      }
      h2 {
        margin: 0 0 24px;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 22px;
        font-weight: 600;
        color: #3E2F22;
        text-align: center;
        letter-spacing: 0.02em;
      }
      p {
        font-size: 15px;
        margin: 0 0 18px;
        color: #3E2F22;
        opacity: 0.9;
      }
      .section {
        background: rgba(230, 224, 212, 0.5);
        padding: 20px 24px;
        border-radius: 8px;
        border-left: 4px solid #BFA15F;
        margin: 24px 0;
        font-size: 15px;
        color: #3E2F22;
      }
      .highlight {
        color: #BFA15F;
        font-weight: 600;
      }
      .btn-wrapper {
        text-align: center;
        margin-top: 32px;
      }
      .btn {
        display: inline-block;
        padding: 12px 28px;
        background: #BFA15F;
        color: #FDFBF7 !important;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 12px;
        border-radius: 4px;
        text-decoration: none;
      }
      .btn:hover {
        background: #9a7d3f;
      }
      hr {
        border: none;
        border-top: 1px solid rgba(62, 47, 34, 0.12);
        margin: 32px 0;
      }
      .footer {
        text-align: center;
        font-size: 13px;
        color: #3E2F22;
        opacity: 0.7;
      }
      .footer strong {
        color: #3E2F22;
      }
      .footer a {
        color: #BFA15F;
        text-decoration: none;
      }
    </style>
  </head>

  <body>
    <div class="email-wrapper">
      <div class="container">
        <div class="brand-header">
          <p class="brand-name">Scoby Labs</p>
        </div>
        <div class="content">
          <h2>Thank You for Reaching Out</h2>

          <p>Hello ${name},</p>

          <p>
            We have received your message and appreciate you taking the time to connect with us.
          </p>

          <div class="section">
            Our team is reviewing your inquiry and will respond within
            <span class="highlight">24 hours</span>.
          </div>

          <div class="btn-wrapper">
            <a href="https://www.scobylabs.com" class="btn">Visit Our Website</a>
          </div>

          <hr />

          <div class="footer">
            Warm regards,<br/>
            <strong>Scoby Labs</strong><br/>
            <a href="https://www.scobylabs.com">scobylabs.com</a>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
};
