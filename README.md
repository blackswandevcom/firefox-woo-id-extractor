<div style="text-align:center;">
   <img src="icon.png" width="84" />
</div>

# BlackSwanDev - WooCommerce Product ID Extractor

The **WooCommerce Product ID Extractor** is a Firefox extension that helps you easily extract and copy the WooCommerce product ID, variation ID, and REST API endpoint from product pages. Designed for WooCommerce developers and administrators, this tool simplifies the process of identifying product data without needing to inspect the page source.

---

## Features
- Display WooCommerce **Product ID**, **Variation ID**, and **REST API** link on product pages.
- Click any ID to copy it to the clipboard with a confirmation message.
- Automatically updates when the product or variation changes.
- Lightweight and easy to use with a non-intrusive interface.
- Supports WooCommerce events (`found_variation`, `reset_data`) to ensure real-time updates.

---

## Installation Guide

### Step 1: Download the Extension
1. Clone or download the project from the GitHub repository.
2. Ensure you have the extension files:
   - `manifest.json`
   - `content.js`
   - `styles.css`
   - `icon.png`
   - `jquery.min.js`

### Step 2: Load the Extension in Firefox
1. Open Firefox and navigate to `about:debugging`.
2. Click **"This Firefox"** in the left-hand menu.
3. Click **"Load Temporary Add-on…"**.
4. Select the `manifest.json` file from the project directory.

### Step 3: Use the Extension
1. Navigate to any WooCommerce product page.
2. Click the extension icon to activate the tool.
3. A dark-glossy transparent box will appear at the bottom-right corner, displaying the **Product ID**, **Variation ID**, and **REST API**.
4. Click on any of the IDs to copy them to the clipboard. A toast message will confirm the copy action.

---

## Permissions
The extension requires the following permissions:
- `activeTab` – Access to the currently active tab to inject scripts.
- `<all_urls>` – Allows the extension to run on WooCommerce sites.

---

## Uninstalling the Extension
1. Open Firefox and navigate to `about:debugging`.
2. Under **"Temporary Extensions"**, locate **WooCommerce Product ID Extractor**.
3. Click the **Remove** button to uninstall the extension.

---

## Contributors
Developed by **AmirhpCom** at **BlackSwanDev.com**.
Feel free to contribute by creating pull requests or submitting issues on GitHub.

---

## License
This project is licensed under the **MIT License** – feel free to use and modify the code as needed.

---

## Contact & Support
For support or feature requests, please create an issue on the GitHub repository.
Thank you for using **WooCommerce Product ID Extractor**! 🎉
