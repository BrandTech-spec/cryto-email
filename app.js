import { Resend } from "resend";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const resend = new Resend("re_JhEXHoMJ_2S7vHDrPvPPcU6rzwjF6422z");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.json());


// OANDA Email Templates - Email Client Compatible (Table-based)


const getWelcomeEmailTemplate = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to OANDA</title>

</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
        <tr>
            <td align="center">
                <table width="800" cellpadding="0" cellspacing="0" style="background-color: #1e3a5f; max-width: 800px;">
                    <!-- Logo and Header Section -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="50%">
                                        <table cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding-right: 12px; vertical-align: middle;">
                                                    <!-- Logo Bars -->
                                                    <div style="display: inline-block;">
                                                        <div style="display: flex; align-items: flex-end; gap: 2px; margin-bottom: 4px;">
                                                            <div style="width: 6px; height: 14px; background-color: #22c55e; display: inline-block; margin-right: 2px;"></div>
                                                            <div style="width: 6px; height: 20px; background-color: #22c55e; display: inline-block; margin-right: 2px;"></div>
                                                            <div style="width: 6px; height: 28px; background-color: #1e3a8a; display: inline-block;"></div>
                                                        </div>
                                                        <div style="width: 28px; height: 3px; background-color: #22c55e;"></div>
                                                    </div>
                                                </td>
                                                <td style="vertical-align: middle;">
                                                    <div style="color: white; font-weight: bold; font-size: 20px; letter-spacing: 2px;">OANDA</div>
                                                    <div style="color: white; font-size: 10px; letter-spacing: 3px; opacity: 0.8;">SMARTER TRADING</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="50%" align="right" style="vertical-align: top;">
                                        <div style="color: white; font-size: 12px; line-height: 1.8; text-align: right;">
                                            <div>Date: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                                            <div>Time: ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
                                            <div>Registration Type: New Account</div>
                                            <div>Status: <span style="color: #22c55e; font-weight: bold;">Active</span></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Title -->
                    <tr>
                        <td align="center" style="padding: 20px 0; background-color: #1e3a5f;">
                            <h1 style="color: white; font-size: 28px; font-weight: bold; letter-spacing: 2px; margin: 0;">WELCOME TO OANDA</h1>
                        </td>
                    </tr>
                    
                    <!-- Content Section with Diagonal Background -->
                    <tr>
                        <td style="background-color: #e5e7eb; padding: 40px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding-bottom: 30px;">
                                        <div style="color: #374151; font-size: 12px; line-height: 1.8;">
                                            <div><strong>Username/ID:</strong> ${data.accountId || 'user12345'}</div>
                                            <div><strong>Email:</strong> ${data.email || 'user@example.com'}</div>
                                            <div><strong>Full Name:</strong> ${data.name || 'John Doe'}</div>
                                            <div><strong>Account Type:</strong> Trading Account</div>
                                            
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border-top: 2px solid #d1d5db; padding-top: 20px;">
                                        <div style="color: #374151; font-size: 14px; line-height: 1.6;">
                                            <p style="margin: 0 0 10px 0;"><strong>Welcome to the world of smarter trading!</strong></p>
                                            <p style="margin: 0;">${data.message || 'John Doe' }</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #1e3a5f; padding: 20px; text-align: center;">
                            <p style="color: #ffffff; font-size: 12px; margin: 0; opacity: 0.8;">© ${new Date().getFullYear()} OANDA. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>

</html>`;
};



const getDepositEmailTemplate = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OANDA Deposit Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
        <tr>
            <td align="center">
                <table width="800" cellpadding="0" cellspacing="0" style="background-color: #1e3a5f; max-width: 800px;">
                    <!-- Logo and Header Section -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="50%">
                                        <table cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding-right: 12px; vertical-align: middle;">
                                                    <!-- Logo Bars -->
                                                    <div style="display: inline-block;">
                                                        <div style="display: flex; align-items: flex-end; gap: 2px; margin-bottom: 4px;">
                                                            <div style="width: 6px; height: 14px; background-color: #22c55e; display: inline-block; margin-right: 2px;"></div>
                                                            <div style="width: 6px; height: 20px; background-color: #22c55e; display: inline-block; margin-right: 2px;"></div>
                                                            <div style="width: 6px; height: 28px; background-color: #1e3a8a; display: inline-block;"></div>
                                                        </div>
                                                        <div style="width: 28px; height: 3px; background-color: #22c55e;"></div>
                                                    </div>
                                                </td>
                                                <td style="vertical-align: middle;">
                                                    <div style="color: white; font-weight: bold; font-size: 20px; letter-spacing: 2px;">OANDA</div>
                                                    <div style="color: white; font-size: 10px; letter-spacing: 3px; opacity: 0.8;">SMARTER TRADING</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="50%" align="right" style="vertical-align: top;">
                                        <div style="color: white; font-size: 12px; line-height: 1.8; text-align: right;">
                                            <div>Date: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                                            <div>Time: ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
                                            <div>Transaction Type: Deposit</div>
                                            <div>Status: <span style="color: #22c55e; font-weight: bold;">Completed</span></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Title -->
                    <tr>
                        <td align="center" style="padding: 20px 0; background-color: #1e3a5f;">
                            <h1 style="color: white; font-size: 28px; font-weight: bold; letter-spacing: 2px; margin: 0;">OANDA DEPOSIT</h1>
                        </td>
                    </tr>
                    
                    <!-- Content Section -->
                    <tr>
                        <td style="background-color: #e5e7eb; padding: 40px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding-bottom: 30px;">
                                        <div style="color: #374151; font-size: 12px; line-height: 1.8;">
                                            <div><strong>Username/ID:</strong> ${data.accountId || 'user12345'}</div>
                                            <div><strong>Email:</strong> ${data.email || 'user@example.com'}</div>
                                            <div><strong>Currency:</strong> ${data.currency || 'USDT'}</div>
                                            <div><strong>Amount Deposit:</strong> ${data.amount} ${data.currency || 'USDT'}</div>
                                            <div><strong>Network Fee:</strong> 0 ${data.currency || 'USDT'}</div>
                                            <div style="color: #22c55e; font-weight: bold;"><strong>Total Sent:</strong> ${data.amount} ${data.currency || 'USDT'}</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border-top: 2px solid #d1d5db; padding-top: 20px;">
                                        <div style="color: #374151; font-size: 12px; line-height: 1.6;">
                                            <div style="margin-bottom: 10px;"><strong>Destination Wallet:</strong></div>
                                            <div style="font-family: 'Courier New', monospace; background-color: #ffffff; padding: 10px; border-radius: 4px; word-break: break-all; border: 1px solid #d1d5db;">
                                                ${data.transactionHash || 'bc1qxy2kgdygjrskjhnf0yrf2493p8poifjhx0wlh'}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #1e3a5f; padding: 20px; text-align: center;">
                            <p style="color: #ffffff; font-size: 12px; margin: 0; opacity: 0.8;">© ${new Date().getFullYear()} OANDA. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>
</html>`;
};

const getWithdrawalEmailTemplate = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OANDA Withdrawal Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
        <tr>
            <td align="center">
                <table width="800" cellpadding="0" cellspacing="0" style="background-color: #1e3a5f; max-width: 800px;">
                    <!-- Logo and Header Section -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="50%">
                                        <table cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding-right: 12px; vertical-align: middle;">
                                                    <!-- Logo Bars -->
                                                    <div style="display: inline-block;">
                                                        <div style="display: flex; align-items: flex-end; gap: 2px; margin-bottom: 4px;">
                                                            <div style="width: 6px; height: 14px; background-color: #22c55e; display: inline-block; margin-right: 2px;"></div>
                                                            <div style="width: 6px; height: 20px; background-color: #22c55e; display: inline-block; margin-right: 2px;"></div>
                                                            <div style="width: 6px; height: 28px; background-color: #1e3a8a; display: inline-block;"></div>
                                                        </div>
                                                        <div style="width: 28px; height: 3px; background-color: #22c55e;"></div>
                                                    </div>
                                                </td>
                                                <td style="vertical-align: middle;">
                                                    <div style="color: white; font-weight: bold; font-size: 20px; letter-spacing: 2px;">OANDA</div>
                                                    <div style="color: white; font-size: 10px; letter-spacing: 3px; opacity: 0.8;">SMARTER TRADING</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="50%" align="right" style="vertical-align: top;">
                                        <div style="color: white; font-size: 12px; line-height: 1.8; text-align: right;">
                                            <div>Date: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                                            <div>Time: ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
                                            <div>Transaction Type: Withdrawal</div>
                                            <div>Status: <span style="color: #22c55e; font-weight: bold;">Completed</span></div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Title -->
                    <tr>
                        <td align="center" style="padding: 20px 0; background-color: #1e3a5f;">
                            <h1 style="color: white; font-size: 28px; font-weight: bold; letter-spacing: 2px; margin: 0;">OANDA WITHDRAWAL</h1>
                        </td>
                    </tr>
                    
                    <!-- Content Section -->
                    <tr>
                        <td style="background-color: #e5e7eb; padding: 40px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding-bottom: 30px;">
                                        <div style="color: #374151; font-size: 12px; line-height: 1.8;">
                                            <div><strong>Username/ID:</strong> ${data.accountId || 'user12345'}</div>
                                            <div><strong>Email:</strong> ${data.email || 'user@example.com'}</div>
                                            <div><strong>Currency:</strong> ${data.currency || 'USDT'}</div>
                                            <div><strong>Amount Withdraw:</strong> ${data.amount} ${data.currency || 'USDT'}</div>
                                            <div><strong>Network Fee:</strong> 1 ${data.currency || 'USDT'}</div>
                                            <div style="color: #22c55e; font-weight: bold;"><strong>Total Sent:</strong> ${parseFloat(data.amount) - 1} ${data.currency || 'USDT'}</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border-top: 2px solid #d1d5db; padding-top: 20px;">
                                        <div style="color: #374151; font-size: 12px; line-height: 1.6;">
                                            <div style="margin-bottom: 10px;"><strong>Destination Wallet:</strong></div>
                                            <div style="font-family: 'Courier New', monospace; background-color: #ffffff; padding: 10px; border-radius: 4px; word-break: break-all; border: 1px solid #d1d5db;">
                                                ${data.traceId || 'bc1qxy2kgdygjrskjhnf0yrf2493p8poifjhx0wlh'}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #1e3a5f; padding: 20px; text-align: center;">
                            <p style="color: #ffffff; font-size: 12px; margin: 0; opacity: 0.8;">© ${new Date().getFullYear()} OANDA. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    
</body>
</html>`;
};


app.get("/", async (req, res) => {
  res.json({
    message: 'Bon Plan Finance Email API',
    endpoints: {
      'POST /send_email': 'Send welcome email',
      'POST /send_email_notification': 'Send notification email',
      'POST /send_deposit_confirmation': 'Send OANDA deposit confirmation',
      'POST /send_withdrawal_confirmation': 'Send OANDA withdrawal confirmation',
      'GET /preview_deposit': 'Preview deposit confirmation template',
      'GET /preview_withdrawal': 'Preview withdrawal confirmation template'
    }
  });
});

// New OANDA welcome email endpoint
app.post("/send_welcome_email", async (req, res) => {
  const {
    email,
    name,
    accountId,
    message
  } = req.body;

 console.log("previewied data",req.body)

  try {
    const htmlContent = getWelcomeEmailTemplate({
      email,
      name,
      accountId,
      message
    });

    const data = await resend.emails.send({
      from:"info@oantrade.com",
      to: email,
      subject: `Welcome to OANDA - Your Account is Ready!`,
      html: htmlContent,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

// New OANDA deposit confirmation endpoint
app.post("/send_deposit_confirmation", async (req, res) => {
  const {
    email,
    accountId,
    amount,
    currency = 'USDT',
    transactionHash
  } = req.body;

  console.log("previewied data",req.body)
  try {
    const htmlContent = getDepositEmailTemplate({
      email,
      accountId,
      amount,
      currency,
      transactionHash
    });

    const data = await resend.emails.send({
      from: "info@oantrade.com",
      to: email,
      subject: `OANDA Deposit Confirmation - ${amount} ${currency}`,
      html: htmlContent,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

// New OANDA withdrawal confirmation endpoint
app.post("/send_withdrawal_confirmation", async (req, res) => {
  const {
    email,
    accountId,
    amount,
    currency,
    traceId
  } = req.body;
 console.log("previewied data",req.body)
   

  try {
    const htmlContent = getWithdrawalEmailTemplate({
      email,
      accountId,
      amount,
      currency,
      traceId
    });

    const data = await resend.emails.send({
      from: "info@oantrade.com",
      to: email,
      subject: `OANDA Withdrawal Confirmation - ${amount} ${currency}`,
      html: htmlContent,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Preview endpoints for OANDA templates
app.get("/preview_welcome", async (req, res) => {
  const sampleData = {
    email: 'john.doe@example.com',
    name: 'John Doe',
    accountId: 'ACC789123'
  };

  const htmlContent = getWelcomeEmailTemplate(sampleData);
  res.send(htmlContent);
});

// Preview endpoints for OANDA templates
app.get("/preview_deposit", async (req, res) => {
  const sampleData = {
    email: 'user@example.com',
    accountId: 'user12345',
    amount: '100',
    currency: 'USDT',
    transactionHash: 'bc1qxy2kgdygjrskjhnf0yrf2493p8poifjhx0wlh'
  };

  const htmlContent = getDepositEmailTemplate(sampleData);
  res.send(htmlContent);
});



app.get("/preview_withdrawal", async (req, res) => {
  const sampleData = {
    email: 'user@example.com',
    accountId: 'user12345',
    amount: '100',
    currency: 'USDT',
    traceId: 'bc1qxy2kgdygjrskjhnf0yrf2493p8poifjhx0wlh'
  };

  const htmlContent = getWithdrawalEmailTemplate(sampleData);
  res.send(htmlContent);
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});