import urllib.request
import json
import re
import html
import sys

# Ensure UTF-8 output encoding for terminal
sys.stdout.reconfigure(encoding='utf-8')

base_url = "http://localhost:3000"

def clean_html(raw):
    # Unescape HTML entities (e.g. &amp; -> &, &#x20B9; -> ₹)
    text = html.unescape(raw)
    return text

routes_to_test = [
    ("/", "Veltrixa Technology"),
    ("/services", "Full-Spectrum Digital Capabilities"),
    ("/services/website-design-development", "Website Design & Development"),
    ("/services/web-application-development", "Web Application Development"),
    ("/services/mobile-app-development", "Mobile App Development"),
    ("/services/ui-ux-design", "UI/UX Design"),
    ("/services/branding-logo-design", "Branding & Logo Design"),
    ("/services/ecommerce-development", "E-commerce Development"),
    ("/services/digital-social-media-marketing", "Digital & Social Media Marketing"),
    ("/services/seo-package", "SEO Package"),
    ("/services/video-editing", "Video Editing"),
    ("/services/poster-graphic-design", "Poster & Graphic Design"),
    ("/services/maintenance-support", "Maintenance & Support"),
    ("/pricing", "3,499"),
    ("/process", "How We"),
    ("/about", "Engineering the"),
    ("/contact", "Extraordinary"),
    ("/privacy-policy", "Privacy Policy"),
    ("/terms-of-service", "Terms of Service"),
    ("/sitemap.xml", "urlset"),
    ("/robots.txt", "Sitemap:"),
]

print("=== TESTING HTTP ROUTES ===")
all_passed = True
for route, expected in routes_to_test:
    url = f"{base_url}{route}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "TestBot"})
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            raw_content = resp.read().decode("utf-8", errors="ignore")
            content = clean_html(raw_content)
            if status == 200 and expected.lower() in content.lower():
                print(f"  [PASS] {route} (Status: 200, contains '{expected}')")
            else:
                print(f"  [FAIL] {route} (Status: {status}, expected '{expected}' not found)")
                all_passed = False
    except Exception as e:
        print(f"  [ERROR] {route}: {e}")
        all_passed = False

print("\n=== TESTING /api/contact ENDPOINT ===")
# 1. Valid submission
valid_payload = {
    "fullName": "Test Client",
    "companyName": "Veltrixa Test Corp",
    "phone": "+91 98765 43210",
    "email": "test@example.com",
    "service": "Website Design & Development",
    "details": "We need a complete responsive website build with high performance.",
    "budget": "₹10,000 – ₹25,000 (Business Tier)",
    "preferredTime": "Morning (10:00 AM – 01:00 PM IST)",
}
try:
    req = urllib.request.Request(
        f"{base_url}/api/contact",
        data=json.dumps(valid_payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    with urllib.request.urlopen(req) as resp:
        res_data = json.loads(resp.read().decode("utf-8"))
        if resp.status == 200 and res_data.get("success"):
            print("  [PASS] Valid form submission: 200 OK")
        else:
            print(f"  [FAIL] Valid form submission unexpected response: {res_data}")
            all_passed = False
except Exception as e:
    print(f"  [ERROR] Valid form submission failed: {e}")
    all_passed = False

# 2. Honeypot bot submission (should be rejected with 400)
bot_payload = valid_payload.copy()
bot_payload["botField"] = "I am a malicious spam bot"
try:
    req = urllib.request.Request(
        f"{base_url}/api/contact",
        data=json.dumps(bot_payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    with urllib.request.urlopen(req) as resp:
        print(f"  [FAIL] Honeypot should have rejected but got {resp.status}")
        all_passed = False
except urllib.error.HTTPError as e:
    if e.code == 400:
        print("  [PASS] Honeypot bot blocked with 400 Bad Request")
    else:
        print(f"  [FAIL] Honeypot got unexpected HTTP status: {e.code}")
        all_passed = False
except Exception as e:
    print(f"  [ERROR] Honeypot test failed: {e}")
    all_passed = False

# 3. Invalid payload (missing required fields)
invalid_payload = {"fullName": "A"}
try:
    req = urllib.request.Request(
        f"{base_url}/api/contact",
        data=json.dumps(invalid_payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    with urllib.request.urlopen(req) as resp:
        print(f"  [FAIL] Invalid payload should have failed but got {resp.status}")
        all_passed = False
except urllib.error.HTTPError as e:
    if e.code == 400:
        print("  [PASS] Missing required fields blocked with 400 Bad Request")
    else:
        print(f"  [FAIL] Invalid payload got status: {e.code}")
        all_passed = False

print("\n=== VERIFICATION SUMMARY ===")
if all_passed:
    print("ALL TESTS PASSED! Website and API are 100% operational.")
else:
    print("SOME TESTS FAILED.")
