export const adminContactNotificationTemplate = ({ name, email, interest }) => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>New Contact Form Submission</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #E6E0D4;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: #3E2F22;
        line-height: 1.6;
      }
      .email-wrapper { padding: 32px 16px; }
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
        padding: 20px 32px;
        text-align: center;
      }
      .brand-name {
        font-family: Georgia, "Times New Roman", serif;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.15em;
        color: #BFA15F;
        margin: 0;
      }
      .content { padding: 32px; }
      h2 {
        margin: 0 0 20px;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 20px;
        font-weight: 600;
        color: #3E2F22;
      }
      .info-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      .info-table td {
        padding: 12px 16px;
        border-bottom: 1px solid rgba(62, 47, 34, 0.1);
        font-size: 15px;
      }
      .info-table td:first-child {
        font-weight: 600;
        color: #3E2F22;
        width: 100px;
      }
      .info-table td:last-child { color: #3E2F22; }
      .info-table a {
        color: #BFA15F;
        text-decoration: none;
      }
      .info-table a:hover { text-decoration: underline; }
      .btn {
        display: inline-block;
        padding: 12px 24px;
        background: #BFA15F;
        color: #FDFBF7 !important;
        font-weight: 600;
        letter-spacing: 0.05em;
        font-size: 14px;
        border-radius: 4px;
        text-decoration: none;
        margin-top: 20px;
      }
      .footer {
        margin-top: 24px;
        font-size: 12px;
        color: #3E2F22;
        opacity: 0.6;
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
          <h2>New contact form submission</h2>
          <p>Someone has filled out the contact form on your website. Please reach out to them.</p>
          <table class="info-table">
            <tr>
              <td>Name</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${interest ? `
            <tr>
              <td>Interest</td>
              <td>${interest}</td>
            </tr>
            ` : ""}
          </table>
          <a href="mailto:${email}?subject=Re: Your inquiry to Scoby Labs" class="btn">Reply to ${name}</a>
          <div class="footer">Sent from scobylabs.com contact form</div>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
};
