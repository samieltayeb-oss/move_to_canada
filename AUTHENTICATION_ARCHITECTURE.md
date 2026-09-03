# AUTHENTICATION ARCHITECTURE — NEXORA MOVE

**Framework:** Supabase Auth + JWT + React 19 Context  
**Target Environment:** Isomorphic Next.js 16 App Router  
**Auth Vectors:** Email/Password, Email Verification, Session Refresh, Password Reset  

---

## 1. Authentication Lifecycle

```
[ Newcomer Visitor ]
         |
         +--> [ Browse Public Guides & Yassir Demo Mode ]
         |
         +--> [ Sign Up (Email, Password, Name) ]
                     |
                     v
         [ Supabase Auth: signUp() ]
                     |
                     +--> Verification Email Dispatched
                     |
                     v
         [ AuthContext Receives Session ]
                     |
                     v
         [ Launch 9-Step Onboarding Wizard ]
                     |
                     v
         [ Insert Private User Profile & Scenario ]
                     |
                     v
         [ Personalized Destination Dashboard ]
```

---

## 2. Session Handling & Token Security

1. **Token Storage:**
   - Supabase Auth stores encrypted session tokens with auto-refresh enabled in client browser storage.
   - Tokens carry standard JWT claims containing `sub` (matching `auth.uid()`).
2. **Offline & Build-Time Fallback:**
   - In environments without active Supabase credentials (such as static pre-rendering on CI or local dev builds), `src/lib/supabase/client.ts` falls back gracefully without throwing runtime unhandled exceptions.
3. **Password Security:**
   - Passwords are encrypted via bcrypt/Argon2 at the Supabase identity provider layer.
   - Zero user passwords or credentials touch client-side storage or application state.
4. **OAuth Readiness:**
   - Architecture supports Google OAuth via `supabase.auth.signInWithOAuth({ provider: 'google' })`.
