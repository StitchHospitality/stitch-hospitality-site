# GM Ownership Report OS — Delivery Automation Setup

One-time setup to turn a real Stripe purchase into an automatic delivery email.
Time: **~30 minutes end-to-end**, most of it waiting on Stripe/n8n dashboards.

The pipeline you're wiring up:

```
customer buys → Stripe → n8n webhook → verify signature → branch by amount →
   sign a 7-day download link → email link via Resend → done
```

Nothing here writes to your codebase. This is dashboard clicks and one CLI command.

---

## Prerequisites — collect these before you start

- [ ] Access to your **n8n instance** (Railway) with permission to import a workflow, add credentials, and set environment variables.
- [ ] Access to your **Stripe dashboard** (the same account where `Full OS` and `PDF Playbook` products live — confirmed already: acct starts with `1TT3X...`).
- [ ] Your **Resend API key** (you use Resend for the intake-form emails on the current site — same key).
- [ ] The **DELIVERY_LINK_SECRET** value (Step 1 below).

---

## Step 1 — Grab the signing secret

I generated a random 32-byte hex secret and set it in Vercel env vars (Development,
Preview, and Production for `stitch-hospitality-site`). You need the same value in n8n so
the two ends of the pipeline sign links with the same key.

The safety system in this chat blocked me from printing the secret to the transcript. Run
this in your own terminal:

```bash
cat /tmp/delivery-secret.txt
```

Copy the value it prints (a 64-character hex string). **Keep this tab or clipboard handy
for Step 3.**

Once you've copied it, delete the temp file:

```bash
rm /tmp/delivery-secret.txt
```

**Verify it's set in Vercel** (already done, sanity check):

```bash
cd ~/stitch-site
vercel env ls | grep DELIVERY_LINK_SECRET
```

Should show three rows (Development, Preview, Production, all "Encrypted").

**If you ever need to rotate this secret**: generate a new one with
`openssl rand -hex 32`, update it in both Vercel (`vercel env rm DELIVERY_LINK_SECRET
production` then re-add) **and** n8n (Step 3). Any download links already emailed to
buyers will stop working, so only rotate if the current one leaks.

---

## Step 2 — Import the workflow into n8n

1. In n8n, click **Workflows** → **Add workflow** → **Import from file** (usually a
   three-dot menu on the workflows page).
2. Select this file:
   `~/stitch-site/automation/n8n-workflows/gm-ownership-report-os-delivery.json`
3. n8n will open the workflow in edit mode. **Do not activate it yet** — a few nodes are
   incomplete on purpose (credential placeholder in the Resend nodes). Just save it as a
   draft.

You'll see 9 nodes wired up in this order:

```
Stripe Webhook → Verify Stripe Signature → Is checkout.session.completed?
   ├── (no)  → Respond 200 (Ignored Event)
   └── (yes) → Branch by Amount
                  ├── $99 → Sign Full OS Link  ─┐
                  ├── $29 → Sign Playbook Link ─┤→ Send Delivery Email (Resend)
                  └── other → Alert: Unexpected Amount
                                                 └→ Respond 200 to Stripe
```

**Note down the workflow's webhook URL** — click the "Stripe Webhook" node, then look for
the Production URL. It'll look like `https://<your-n8n-domain>/webhook/gm-ownership-report-os-stripe`.
You need this exact URL in Step 4.

---

## Step 3 — Set the two n8n environment variables

n8n environment variables are set at the instance level (not per-workflow), so on
Railway that means adding them to the n8n service's Environment tab and redeploying.

In Railway → your n8n service → **Variables** tab, add:

| Name                   | Value                                                    |
| ---------------------- | -------------------------------------------------------- |
| `DELIVERY_LINK_SECRET` | The 64-char hex string from Step 1                       |
| `STRIPE_WEBHOOK_SECRET`| (leave blank for now — you'll fill this in during Step 4)|

Redeploy the n8n service so it picks up the new variables. (Railway usually does this
automatically after you save.)

**Verify from inside n8n**: open the workflow, click any of the Code nodes, and confirm
`$env.DELIVERY_LINK_SECRET` and `$env.STRIPE_WEBHOOK_SECRET` are available in the
right-side expression editor (n8n autocompletes them once they're set).

---

## Step 4 — Add the webhook endpoint in Stripe

1. Go to **Stripe dashboard → Developers → Webhooks → Add endpoint**.
2. **Endpoint URL**: paste the n8n webhook URL you noted in Step 2.
3. **Events to send**: click **Select events** → search for and check exactly one event:
   - `checkout.session.completed`

   (Don't add more — the workflow's second node filters to this event type and 200s
   everything else, but subscribing to fewer events reduces noise.)

4. Click **Add endpoint**.
5. On the endpoint's detail page, click **Reveal** next to **Signing secret**. Copy the
   value (starts with `whsec_...`).

**Now go back to Railway** and paste that value into the `STRIPE_WEBHOOK_SECRET` variable
you left blank in Step 3. Save and redeploy.

---

## Step 5 — Add the Resend credential in n8n

1. In n8n, click **Credentials** (left sidebar) → **Add credential** → search for and
   select **HTTP Header Auth**.
2. Fill it in:
   - **Credential Name**: `Resend API Key` (this name is what the imported workflow
     already looks for — matching it exactly means you don't have to edit the workflow
     nodes)
   - **Name** (the header name): `Authorization`
   - **Value**: `Bearer re_YOUR_RESEND_API_KEY` (replace with your actual key — the
     `Bearer ` prefix is required)
3. Save.
4. **Get the credential ID**: after saving, look at the URL bar. It'll be something like
   `https://<n8n>/credentials/AbC123XyZ` — the last segment is the credential ID.
5. Open the workflow, click the **"Send Delivery Email (Resend)"** node → **Credentials**
   tab → replace `REPLACE_WITH_RESEND_CREDENTIAL_ID` with the ID from step 4. Do the
   same for the **"Alert: Unexpected Amount"** node.

   (If your n8n version is new enough that the workflow found the credential by name
   automatically, you'll see `Resend API Key` already selected in both nodes — nothing to
   change. Verify by looking at the credentials dropdown on each node.)

6. Save the workflow. **Now activate it** (toggle in the top-right).

---

## Step 6 — Test with a real $29 purchase

This is the only step that catches integration mistakes between all four systems
(Stripe / n8n / Vercel Blob / Resend). Do not skip.

1. **In Stripe test mode** — top-right toggle in the dashboard, switch to Test mode.
   Confirm the workflow endpoint you added in Step 4 is present in test mode too
   (Stripe webhook endpoints are separate per mode). If not, add it in test mode as
   well, and use that test-mode signing secret temporarily in `STRIPE_WEBHOOK_SECRET`.

2. Buy the PDF Playbook via the test Payment Link with Stripe's test card
   `4242 4242 4242 4242`, any future expiry, any CVC.

3. Within 30 seconds you should:
   - See a green "checkout.session.completed" event in Stripe → Webhooks with a 200
     response
   - See a successful execution in n8n → Executions
   - Receive the delivery email at whatever email you entered on the checkout page

4. Click the download link in the email. It should download `GM-Ownership-Report-OS-PDF-Playbook-v1.0.zip`.
   Unzip it — should contain the Playbook PDF.

5. **Switch Stripe back to Live mode** and repeat Step 4 there (the live webhook secret
   is a different value — update `STRIPE_WEBHOOK_SECRET` in Railway when you switch).

Then do one live test purchase of the real $29 tier (refund yourself after via Stripe
Dashboard → Payments → your test purchase → Refund).

---

## What to check if it doesn't work

| Symptom | Likely cause | Where to look |
|---|---|---|
| Stripe webhook shows 400/401 | Signature check failed | `STRIPE_WEBHOOK_SECRET` in Railway doesn't match Stripe's endpoint secret (or mode mismatch — test vs live) |
| n8n execution shows red on "Verify Stripe Signature" | Same as above | Same as above |
| n8n execution runs green but no email arrives | Resend credential broken | The Resend node in n8n — check the credential is Bearer-prefixed |
| Email arrives but the download link 403s | `DELIVERY_LINK_SECRET` mismatch | The value in Railway must **exactly** match the value in Vercel Production env vars. Regenerate and set both if unsure. |
| Download link 404s | Product name wrong | The Code nodes send `product=full-os` or `product=playbook` — must match the keys in `src/app/api/download/route.ts` (they do out of the box, don't change either without changing both) |
| No n8n execution at all when Stripe fires | Workflow inactive, or webhook URL wrong | Toggle workflow active in top-right. Confirm the URL in Stripe matches n8n's exact webhook URL |

Watching in real time:

- **n8n Executions** (left sidebar) — every webhook hit shows up here whether it worked
  or failed. Click a failed one to see which node broke.
- **Stripe Dashboard → Developers → Webhooks → your endpoint** — shows every event
  Stripe sent and what response it got.
- **Vercel dashboard → your project → Logs** — shows requests to `/api/download`, so if
  the email link is broken you can see the 403/404 here.

---

## What's *not* automated (call these out to future-you)

- **The Full OS → PDF upgrade coupon** (`UPGRADE29`, $29 off) hasn't been set up yet.
  It's a Stripe dashboard task, not something this workflow handles. See the launch
  kit's Part 6, Step 6 for the recipe.
- **Repeat downloads for the same buyer** — the current design just gives them a 7-day
  link. If they need it again after that, they email you and you (or n8n manually) send
  a fresh link. Fine at low volume.
- **Refunds/chargebacks** don't revoke the link. The signed link stays valid for its
  7-day window regardless. Not a real problem for a $29–$99 product, but worth knowing.

If any of those become a bottleneck later, they're small additions to this same
workflow, not a rebuild.
