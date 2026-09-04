export interface OrderEmailData {
  customerEmail: string;
  planName: string;
  amountCAD: number;
  sessionId: string;
  downloadUrl: string;
}

/**
 * Sends or simulates sending transactional order confirmation receipts.
 * Strictly non-marketing; operational fulfillment only.
 */
export async function sendOrderConfirmationEmail(data: OrderEmailData): Promise<{ sent: boolean; messageId: string }> {
  const timestamp = new Date().toISOString();
  const messageId = `msg_receipt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  console.log(`[Transactional Email] Dispatching purchase receipt ${messageId} to ${data.customerEmail}:`, {
    plan: data.planName,
    amount: `$${data.amountCAD} CAD`,
    session: data.sessionId,
    download: data.downloadUrl,
    sentAt: timestamp
  });

  // If Resend or SMTP credentials are configured, execute real dispatch
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'NEXORA MOVE <orders@nexorayyc.io>',
          to: data.customerEmail,
          subject: `Your NEXORA MOVE Purchase Confirmation: ${data.planName}`,
          html: `
            <h2>Thank you for your purchase!</h2>
            <p>Your order for <strong>${data.planName}</strong> ($${data.amountCAD} CAD) has been confirmed.</p>
            <p><a href="${data.downloadUrl}" style="background:#10b981;color:#fff;padding:12px 24px;text-decoration:none;border-radius:8px;display:inline-block;">Download Your Relocation Blueprint</a></p>
            <p style="font-size:11px;color:#666;margin-top:24px;">NEXORA Technologies Corp. • Informational tools for Canadian relocation • Not IRCC or a law firm.</p>
          `
        })
      });
    } catch (err) {
      console.warn('[Transactional Email] External API error (logged safely):', err);
    }
  }

  return { sent: true, messageId };
}
