
// --- START OF FILE scripts.js ---

// --- Owner Data (Expanded & Detailed) ---
const owners = [
    {
        id: 'nur_mohammad',
        displayName: 'নুর মোহাম্মদ চৌধুরী পিয়ারু (পক্ষে রুহুল আমিন)',
        fullName: 'নুর মোহাম্মদ চৌধুরী পিয়ারু',
        ownerContact: '+৪৪৭৮৮৬০৯৮২৩০', // Specific field for owner's direct contact
        ownerAddress: 'ফ্ল্যাট নং- তমাল ৩/এ, মাল্টিপ্ল্যান শাহজালাল সিটি, তমাল ভবন, প্লট নং- ডি/১, ব্লক-ডি, উপশহর, থানা- শাহপরান, জেলা- সিলেট', // Specific field for owner's address
        representative: {
            exists: true,
            name: 'রুহুল আমিন',
            father: 'বেলাল উদ্দিন',
            address: 'গ্রামঃ রামপাশা, থানাঃ বিশ্বনাথ, জেলাঃ সিলেট', // Rep's address
            mobiles: '০১৭৮১-১২৮৮১৮ / ০১৩২৫-১০৫১০০' // Rep's mobiles
        }
    },
    {
        id: 'abdul_karim',
        displayName: 'জনাব আব্দুল করিম',
        fullName: 'জনাব আব্দুল করিম',
        ownerContact: '০১৬xxxxxxxx',
        ownerAddress: 'বাসা নং ১২৩, রোড ৪, ব্লক সি, বনানী, ঢাকা',
        representative: { exists: false } // Owner signs directly
    },
    {
        id: 'fatema_begum',
        displayName: 'মোছাঃ ফাতেমা বেগম (পক্ষে মোঃ আনোয়ার হোসেন)',
        fullName: 'মোছাঃ ফাতেমা বেগম',
        ownerContact: 'f.begum@email.com',
        ownerAddress: 'হোল্ডিং # ৭৭, সোনারগাঁও রোড, রাজশাহী',
        representative: {
            exists: true,
            name: 'মোঃ আনোয়ার হোসেন',
            father: 'মরহুম ইসমাইল শেখ',
            address: 'গ্রামঃ শান্তিপুর, ডাকঘরঃ আনন্দবাজার, উপজেলাঃ নবাবগঞ্জ, জেলাঃ ঢাকা',
            mobiles: '০১৯xxxxxxxx'
        }
    },
    {
        id: 'shahidul_islam',
        displayName: 'মোঃ শহিদুল ইসলাম',
        fullName: 'মোঃ শহিদুল ইসলাম',
        ownerContact: '০১৮xxxxxxxx',
        ownerAddress: 'বাড়ি # ১০, রোড # ৫, সেক্টর # ৬, উত্তরা, ঢাকা',
        representative: { exists: false }
    },
    {
        id: 'rahima_khatun',
        displayName: 'রহিমা খাতুন (পক্ষে মোঃ জামাল উদ্দিন)',
        fullName: 'রহিমা খাতুন',
        ownerContact: 'N/A',
        ownerAddress: '২৫৫/বি, খুলশি, চট্টগ্রাম',
        representative: {
            exists: true,
            name: 'মোঃ জামাল উদ্দিন',
            father: 'আলী আকবর',
            address: 'গ্রামঃ পূর্ব নাসিরাবাদ, থানাঃ পাঁচলাইশ, জেলাঃ চট্টগ্রাম',
            mobiles: '০১৫xxxxxxxx'
        }
    }
    // Add more owners if needed, following the structure
];

// Function to convert English digits (0-9) to Bengali digits (০-৯) in a string
function convertToBengaliNumerals(str) {
    if (str === null || str === undefined) {
        return '';
    }
    const strValue = String(str);
    const bengaliDigits = {'0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'};
    return strValue.replace(/[0-9]/g, digit => bengaliDigits[digit] || digit);
}

// Helper function to convert number to Bengali words
function convertToBengaliWords(numStr) {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) {
        return '';
    }
    // Ensure this map is sufficient for your needs or use a library
    const wordsMap = { 0: 'শূন্য', 1: 'এক', 2: 'দুই', 3: 'তিন', 4: 'চার', 5: 'পাঁচ', 6: 'ছয়', 7: 'সাত', 8: 'আট', 9: 'নয়', 10: 'দশ', 100: 'একশত', 1000: 'এক হাজার', 10000: 'দশ হাজার', 15000: 'পনেরো হাজার', 100000: 'এক লক্ষ' };
    // Basic fallback for numbers not in map
    return wordsMap[num] || convertToBengaliNumerals(num.toString());
}

// Function to populate duplicate fields (like dates, flat info in schedule)
function populateDuplicates() {
   try {
        const advanceDateVal = document.getElementById('advance-date')?.textContent;
        const advanceDateInlineEl = document.getElementById('advance-date-inline');
        if (advanceDateInlineEl && advanceDateVal) {
            advanceDateInlineEl.textContent = advanceDateVal;
        }

        const flatInfoVal = document.getElementById('flat-info')?.textContent;
        const flatInfoScheduleEl = document.getElementById('flat-info-schedule');
        if (flatInfoScheduleEl && flatInfoVal) {
            // Ensure schedule also has Bengali numerals if needed
             flatInfoScheduleEl.textContent = convertToBengaliNumerals(flatInfoVal);
         }
    } catch(error) { console.error("Error populating duplicates:", error); }
}

// --- Condition List Management Functions ---

// Function to delete a condition list item
function deleteCondition(buttonElement) {
    const listItem = buttonElement.closest('li');
    if (listItem) {
        listItem.remove();
        // CSS counters (if used) will automatically renumber
    }
}

// 1. Update addCondition to use Tailwind classes
function addCondition() {
    const list = document.querySelector('.bengali-list'); // Target the specific OL
    if (!list) {
        return; // Exit if the list isn't found
    }

    const newListItem = document.createElement('li');
    newListItem.setAttribute('contenteditable', 'true');
    newListItem.setAttribute('tabindex', '0'); // Make focusable

    // Apply Tailwind classes matching those in template.html for li
    // Includes layout, relative positioning, padding, editable styles, and print resets
    newListItem.className = 'mb-3 relative pl-2 block cursor-text p-1 transition duration-300 ease-in-out rounded hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:ring-2 focus:ring-amber-400 print:cursor-default print:p-0 print:bg-transparent print:shadow-none print:ring-0 print:mb-2 print:pl-0';
    newListItem.textContent = '[নতুন শর্ত এখানে লিখুন]'; // Placeholder text

    // Create the delete button/icon span using Tailwind classes
    const deleteSpan = document.createElement('span');
    // Apply Tailwind classes for the delete button (styling, positioning, hover, print visibility)
    deleteSpan.className = 'delete-item ml-2.5 text-red-500 font-bold inline-block align-middle text-xs px-1 rounded select-none hover:text-red-600 hover:bg-red-100 cursor-pointer print:hidden';
    deleteSpan.textContent = '❌'; // Use an emoji or icon font
    deleteSpan.setAttribute('onclick', 'deleteCondition(this)'); // Add the click handler
    deleteSpan.setAttribute('title', 'এই শর্তটি মুছুন');

    // Append the delete span to the new list item
    newListItem.appendChild(deleteSpan);

    // Append the new list item to the list
    list.appendChild(newListItem);

    // Optionally, focus the new item for immediate editing
    newListItem.focus();
}


// Main function to display data on template.html
function displayData() {
    try {
        const params = new URLSearchParams(window.location.search);
        const getParam = (key) => params.get(key) || '';

        // 3. Ensure Date Formatting is correct (DD/MM/YYYY)
        const formatDate = (dateString) => {
             if (!dateString) {
                 return '';
             }
             try {
                 // Basic check for yyyy-mm-dd format
                 if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
                     return dateString; // Return original if not yyyy-mm-dd
                 }
                 const date = new Date(dateString);
                 if (isNaN(date.getTime())) {
                     return dateString; // Invalid date
                 }
                 // Format to DD/MM/YYYY
                 const day = String(date.getDate()).padStart(2, '0');
                 const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
                 const year = date.getFullYear();
                 return `${day}/${month}/${year}`;
             } catch (e) { console.error("Error formatting date:", dateString, e); return dateString; }
         };

        // --- Find Selected Owner ---
        const selectedOwnerId = getParam('owner_id');
        const selectedOwner = owners.find(owner => owner.id === selectedOwnerId) || owners[0]; // Default to first if not found

        // --- Populate Owner Information ---
        const ownerSectionEl = document.getElementById('owner-section');
        if (ownerSectionEl && selectedOwner) {
            // Use Tailwind classes for bolding within the string if needed, or rely on parent element styles
            let ownerHtml = `<strong class="font-semibold"></strong> নামঃ ${selectedOwner.fullName}`;
             if (selectedOwner.ownerContact && selectedOwner.ownerContact !== 'N/A') {
                ownerHtml += `, (মোবাইল- ${convertToBengaliNumerals(selectedOwner.ownerContact)})`;
            }
            if (selectedOwner.ownerAddress) {
                ownerHtml += `, ${convertToBengaliNumerals(selectedOwner.ownerAddress)}`;
            }

            if (selectedOwner.representative && selectedOwner.representative.exists) {
                ownerHtml += `, এর পক্ষে ${selectedOwner.representative.name}`;
                if (selectedOwner.representative.father) {
                    ownerHtml += `, পিতাঃ ${selectedOwner.representative.father}`;
                }
                if (selectedOwner.representative.address) {
                    ownerHtml += `, ${convertToBengaliNumerals(selectedOwner.representative.address)}`;
                }
                 if (selectedOwner.representative.mobiles) {
                    ownerHtml += `। মোবাইল নাম্বারঃ ${convertToBengaliNumerals(selectedOwner.representative.mobiles)}`;
                } else {
                     ownerHtml += `।`; // Add period if no mobile
                }
            } else {
                 ownerHtml += `।`; // Add period if no representative
            }
            ownerSectionEl.innerHTML = ownerHtml;
        } else if (ownerSectionEl) {
             // Apply Tailwind classes for error message
             ownerSectionEl.innerHTML = '<span class="text-red-500 font-semibold">মালিকের তথ্য পাওয়া যায়নি।</span>';
        }


        // --- Populate Flat Information ---
        const flatInfoEl = document.getElementById('flat-info');
        if (flatInfoEl) {
            flatInfoEl.textContent = `${getParam('flat')},  ফ্ল্যাট নং- ${convertToBengaliNumerals(getParam('unit'))}`;
        }

        // --- Populate Tenant Information ---
        // 2. Simplified setText helper (no placeholder class logic)
        const setText = (id, value) => {
            const el = document.getElementById(id);
            if (el) {
                el.textContent = value || ''; // Set text or empty string if value is falsy
            }
        };
        // Placeholder styling is now directly on spans in template.html

        setText('tenant-name', getParam('tenant_name'));
        setText('father-name', getParam('father_name'));
        setText('mother-name', getParam('mother_name'));
        setText('voter-id', convertToBengaliNumerals(getParam('voter_id')));
        setText('mobile', convertToBengaliNumerals(getParam('mobile')));

        // Tenant Address
        const village = getParam('village');
        const holding = convertToBengaliNumerals(getParam('holding_number'));
        const postOffice = getParam('post_office');
        const district = getParam('district');
        const division = getParam('division');
        // Filter empty/whitespace parts and join
        const addressParts = [village, holding, postOffice, district, division].filter(part => part && part.trim() !== '');
        setText('tenant-address', convertToBengaliNumerals(addressParts.join(', ')));


        // --- Populate Rental Information ---
        const formattedStartDate = convertToBengaliNumerals(formatDate(getParam('start_date')));
        const formattedEndDate = convertToBengaliNumerals(formatDate(getParam('end_date')));
        const formattedAdvanceDate = convertToBengaliNumerals(formatDate(getParam('advance_date')));

        setText('start-date', formattedStartDate);
        setText('end-date', formattedEndDate);
        const totalRentValue = getParam('total_rent');
        const totalRentBengali = convertToBengaliNumerals(totalRentValue || '0');
        setText('total-rent-preamble', `${totalRentBengali}/=`);
        setText('total-rent-condition', `${totalRentBengali}/=`); // Update condition list placeholder too
        const advanceValue = getParam('advance');
        const advanceBengali = convertToBengaliNumerals(advanceValue || '0');
        const advanceWords = convertToBengaliWords(advanceValue);
        setText('advance', `${advanceBengali}/= (${advanceWords})`);
        setText('advance-date', formattedAdvanceDate);

        // --- Call populateDuplicates AFTER main data is set ---
        populateDuplicates(); // Populates advance date in preamble, flat info in schedule

    } catch (error) {
        console.error("Error displaying data:", error);
         const errorDiv = document.createElement('div');
        errorDiv.textContent = "তথ্য লোড বা প্রদর্শন করতে একটি ত্রুটি ঘটেছে।";
        // Use Tailwind classes for error styling
        errorDiv.className = "text-red-600 text-center p-4 bg-red-100 border border-red-400 rounded my-4 mx-auto max-w-4xl print:hidden"; // Hide error on print
        const container = document.querySelector('.page-container') || document.body;
        container.prepend(errorDiv); // Prepend error inside the container
    }
}

// Ensure displayData runs on load (handled by body onload in template.html)

// --- END OF FILE scripts.js ---