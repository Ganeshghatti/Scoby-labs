export const contactTemplate = (name) => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>Thank You for Contacting Us</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #f5f5f5;
        font-family: "Segoe UI", Arial, sans-serif;
        color: #333;
        line-height: 1.6;
      }
      .container {
        max-width: 620px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 16px;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        border-top: 6px solid #2563eb;
      }
      h2 {
        margin-top: 0;
        color: #2563eb;
        font-size: 26px;
        margin-bottom: 20px;
        text-align: center;
      }
      p {
        font-size: 15px;
        margin-bottom: 18px;
        color: #4b5563;
      }
      .section {
        background: #f9fafb;
        padding: 20px 24px;
        border-radius: 12px;
        border-left: 5px solid #2563eb;
        margin: 24px 0;
        font-size: 15px;
        color: #374151;
      }
      .highlight {
        color: #2563eb;
        font-weight: bold;
      }
      .btn {
        display: inline-block;
        padding: 14px 28px;
        background: #2563eb;
        color: #fff !important;
        font-weight: bold;
        border-radius: 8px;
        text-decoration: none;
        margin-top: 24px;
        font-size: 15px;
      }
      .btn:hover {
        background: #1e40af;
      }
      .footer {
        text-align: center;
        margin-top: 40px;
        font-size: 13px;
        color: #6b7280;
      }
      .phone {
        font-size: 15px;
        font-weight: 600;
        color: #2563eb;
      }
      hr {
        border: none;
        border-top: 1px solid #ececec;
        margin: 36px 0;
      }
    </style>
  </head>

  <body>
    <div class="container">

      <h2>Thank You for Contacting Us!</h2>

      <p>Hello ${name},</p>

      <p>
        We have successfully received your message and truly appreciate you taking the time to reach out to us.
      </p>

      <div class="section">
        Our team is currently reviewing your inquiry and will respond within 
        <span class="highlight">24 hours</span>.
      </div>


      <div style="text-align:center;">
        <a href="https://www.scobylabs.com" class="btn">Visit Our Website</a>
      </div>

      <hr />

      <div class="footer">
        Warm regards,<br/>
        <strong>Scoby Labs</strong><br/>
        https://www.scobylabs.com
      </div>

    </div>
  </body>
  </html>
  `;
};
