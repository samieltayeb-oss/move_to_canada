# NEXORA MOVE — TRANSACTIONAL EMAIL LIFECYCLE SPECIFICATION
**Version:** 3.0.0  

---

## 1. Separation of Transactional vs. Marketing Email
*   **Transactional Emails:** Mandatory service notifications (email verification, password resets, payment receipts, subscription confirmations, cancellation notices). Sent without requiring marketing opt-in.
*   **Marketing Communications:** New feature launches, relocation tips, and GCC webinars. Explicit opt-in checkbox required at signup; 1-click unsubscribe header included in all marketing emails.

---

## 2. Commercial Lifecycle Email Templates

| Template Trigger | Subject Line (EN) | Subject Line (AR) | Primary Content |
| :--- | :--- | :--- | :--- |
| `WELCOME` | Welcome to NEXORA MOVE | مرحباً بك في منصة نيكسورا موف | Account confirmation & getting started |
| `MOVE_PASS_PURCHASED` | Your Canada Move Pass is Active! | تم تفعيل تصريح Move Pass الخاص بعائلتك! | Access link to full relocation roadmap & receipt |
| `PRO_STARTED` | Welcome to Pro Career Acceleration | اشتراكك في باقة المحترف أصبح نشطاً | ATS builder link & Canadian resume tools |
| `PAYMENT_FAILED` | Action required: Payment renewal failed | تنبيه: تعذر تجديد اشتراكك الشهري | Secure link to update payment method |
| `PRO_CANCELED` | Your Pro subscription has been canceled | تم تأكيد إلغاء اشتراكك في باقة المحترف | Confirms access until period end; data preserved |
| `CONCIERGE_RECEIVED` | We received your Concierge Request | تم استلام طلب المساعد العائلي الخاص بك | Next steps to book 1-on-1 video session |
