# Tenant Agreement Form System

A web-based application designed to create and manage tenant agreement forms (চুক্তিপত্র) for rental properties, specifically tailored for Multiplan Shahjalal City in Sylhet, Bangladesh. The system allows users to input tenant details, generate agreements, and save them as PDFs, with support for Bangla language and numerals.

## Features

- **Form Persistence**: Saves form data in the browser's `localStorage` to prevent data loss.
- **Dynamic Dropdowns**: Populates location-based dropdowns (e.g., municipalities, divisions, districts) dynamically.
- **Owner and Tenant Management**: Supports multiple owners with representatives and detailed tenant information.
- **Customizable Agreement**: Generates a printable rental agreement with editable conditions.
- **Bangla Support**: Uses Bangla fonts and numerals for a localized experience.
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly interface.
- **PDF Generation**: Allows users to print or save agreements as PDFs.
- **Edit Mode**: Enables real-time editing of agreement conditions.

## Project Structure

- `index.html`: The main form page for entering tenant and rental details.
- `template.html`: The agreement template page that displays the generated contract.
- `form-persistence.js`: JavaScript for saving and loading form data using `localStorage`.
- `others.js`: JavaScript for populating dropdowns with location data.
- `scripts.js`: JavaScript for rendering the agreement, handling conditions, and formatting data.

## Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- No server-side dependencies; the project runs entirely client-side.

## Setup Instructions

1. **Clone or Download the Repository**:
   ```bash
   git clone <repository-url>
   ```
   Alternatively, download the ZIP file and extract it.

2. **Open the Project**:
   - Navigate to the project folder.
   - Open `index.html` in a web browser to access the form.

3. **Ensure Font Availability**:
   - The project uses Google Fonts (`Noto Sans Bengali`) and custom Bangla fonts (`AdorshoLipi`, `Bangla`) via CDN. Ensure an internet connection for font loading, or host the fonts locally if offline use is required.

4. **Optional: Local Development**:
   - Use a local server (e.g., `live-server` via npm) for a better development experience:
     ```bash
     npm install -g live-server
     live-server
     ```

## Usage

1. **Filling the Form**:
   - Open `index.html` in your browser.
   - Select an owner from the dropdown.
   - Enter flat details, bill responsibilities, tenant information, address, and rental details.
   - Form data is automatically saved to `localStorage` as you type or change fields.

2. **Generating the Agreement**:
   - Click "চুক্তিপত্র তৈরি করুন" (Generate Agreement) to submit the form.
   - You’ll be redirected to `template.html` with the populated agreement.

3. **Editing the Agreement**:
   - On `template.html`, click "সম্পাদনা মোড" (Edit Mode) to enable editing.
   - Modify text or add/remove conditions as needed.
   - Click "সম্পাদনা বন্ধ করুন" (Stop Editing) to lock changes.

4. **Saving or Printing**:
   - Click "প্রিন্ট / PDF" to print the agreement.
   - Click "PDF হিসেবে সংরক্ষণ" to save it as a PDF (via browser print-to-PDF).

5. **Resetting**:
   - Use "ফর্ম রিসেট করুন" on `index.html` to clear the form and `localStorage`.
   - Use "রিসেট" on `template.html` to reload the original agreement.

## Customization

- **Add New Owners**: Edit the `owners` array in `scripts.js` with new owner details.
- **Update Locations**: Modify arrays (`municipalities`, `divisions`, etc.) in `others.js`.
- **Adjust Rent/Advance Options**: Update `rentOptions` and `advanceOptions` in `scripts.js`.
- **Styling**: Modify Tailwind CSS classes or custom styles in `index.html` and `template.html`.

## Notes

- **Date Format**: Dates are converted to Bangla numerals (e.g., ০১/০৪/২০২৫) for display.
- **Validation**: Basic form validation ensures end dates are after start dates.
- **Printing**: The agreement is formatted for A4 paper with proper margins.

## Limitations

- Runs entirely client-side; no backend storage or database.
- Relies on browser support for `localStorage` and printing.
- Internet connection required for CDN-hosted fonts and Tailwind CSS.

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. Suggestions for new features or bug fixes are welcome!



