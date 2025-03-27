// --- START OF FILE scripts.js ---

// --- Owner Data ---
const owners = [
    {
        id: 'nur_mohammad', // Unique ID used in the select value
        displayName: 'নুর মোহাম্মদ চৌধুরী পিয়ারু (পক্ষে রুহুল আমিন)', // Text shown in the dropdown
        fullName: 'নুর মোহাম্মদ চৌধুরী পিয়ারু',
        contact: '+৪৪৭৮৮৬০৯৮২৩০', // Owner's primary contact
        address: 'ফ্ল্যাট নং- তমাল ২/ডি, মাল্টিপ্ল্যান শাহজালাল সিটি, তমাল ভবন, প্লট নং- ডি/১, ব্লক-ডি, উপশহর, থানা- শাহপরান, জেলা- সিলেট',
        representative: { // Details of the person acting on behalf of the owner
            exists: true, // Flag to indicate if there's a representative
            name: 'রুহুল আমিন',
            father: 'বেলাল উদ্দিন',
            address: 'গ্রামঃ রামপাশা, থানাঃ বিশ্বনাথ, জেলাঃ সিলেট',
            mobiles: '০১৭৮১-১২৮৮১৮ / ০১৩২৫-১০৫১০০' // Combine mobiles for display
        }
    },
    {
        id: 'owner_example_2',
        displayName: 'জনাব আব্দুল করিম', // Example without representative in display name
        fullName: 'জনাব আব্দুল করিম',
        contact: '০১৬xxxxxxxx',
        address: 'বাসা নং ১২৩, রোড ৪, ব্লক সি, বনানী, ঢাকা',
        representative: { // Example where owner might sign directly
             exists: false, // No representative acting on behalf
             // Keep other fields potentially empty or null if needed, but 'exists' is key
             name: '',
             father: '',
             address: '',
             mobiles: ''
        }
    },
    {
        id: 'owner_example_3',
        displayName: 'মোছাঃ ফাতেমা বেগম (পক্ষে মোঃ আনোয়ার হোসেন)',
        fullName: 'মোছাঃ ফাতেমা বেগম',
        contact: 'f.begum@email.com',
        address: 'হোল্ডিং # ৭৭, সোনারগাঁও রোড, রাজশাহী',
        representative: {
            exists: true,
            name: 'মোঃ আনোয়ার হোসেন',
            father: 'মরহুম ইসমাইল শেখ',
            address: 'গ্রামঃ শান্তিপুর, ডাকঘরঃ আনন্দবাজার, উপজেলাঃ নবাবগঞ্জ, জেলাঃ ঢাকা',
            mobiles: '০১৯xxxxxxxx'
        }
    }
    // Add more owner objects here as needed
];

// Function to convert English digits (0-9) to Bengali digits (০-৯) in a string
function convertToBengaliNumerals(str) {
    if (str === null || str === undefined) return ''; // Handle null/undefined input
    const strValue = String(str); // Ensure input is a string
    const bengaliDigits = {'0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'};
    // Use regex to replace all occurrences of English digits globally
    return strValue.replace(/[0-9]/g, digit => bengaliDigits[digit] || digit);
}

// --- Helper function to convert number to Bengali words (basic example) ---
function convertToBengaliWords(numStr) {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) return '';
    const wordsMap = { 0: 'শূন্য', 1: 'এক', 2: 'দুই', 3: 'তিন', 4: 'চার', 5: 'পাঁচ', 6: 'ছয়', 7: 'সাত', 8: 'আট', 9: 'নয়', 10: 'দশ', 100: 'একশত', 1000: 'এক হাজার', 10000: 'দশ হাজার', 15000: 'পনেরো হাজার', 100000: 'এক লক্ষ' };
    return wordsMap[num] || convertToBengaliNumerals(num.toString());
}

// --- Function to populate duplicate fields ---
function populateDuplicates() {
   try {
        const advanceDateVal = document.getElementById('advance-date')?.textContent;
        const advanceDateInlineEl = document.getElementById('advance-date-inline');
        if (advanceDateInlineEl && advanceDateVal) advanceDateInlineEl.textContent = advanceDateVal;

        const flatInfoVal = document.getElementById('flat-info')?.textContent;
        const flatInfoScheduleEl = document.getElementById('flat-info-schedule');
         if (flatInfoScheduleEl && flatInfoVal) {
             flatInfoScheduleEl.textContent = convertToBengaliNumerals(flatInfoVal);
         }

        // Re-check placeholders after population
         document.querySelectorAll('.placeholder').forEach(el => {
             if (!el.textContent.trim() || el.textContent === '[তথ্য নেই]') { }
         });
    } catch(error) {
        console.error("Error populating duplicates:", error);
    }
}


function displayData() {
    try {
        const params = new URLSearchParams(window.location.search);

        // Helper function to get parameter or return an empty string
        const getParam = (key) => params.get(key) || '';
        // Helper function to format date or return empty string
        const formatDate = (dateString) => {
            if (!dateString) return '';
            try {
                if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return dateString;
                const date = new Date(dateString);
                if (isNaN(date.getTime())) return dateString;
                return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
            } catch (e) { console.error("Error formatting date:", dateString, e); return dateString; }
        };

        // --- Find Selected Owner ---
        const selectedOwnerId = getParam('owner_id');
        const selectedOwner = owners.find(owner => owner.id === selectedOwnerId) || owners[0]; // Default to first owner if not found or not selected

        // --- Populate Owner Information ---
        const ownerSectionEl = document.getElementById('owner-section');
        if (ownerSectionEl && selectedOwner) {
            let ownerHtml = `<strong>১ম পক্ষ / মালিক পক্ষ:</strong> নামঃ ${selectedOwner.fullName}`;
            if (selectedOwner.contact) {
                ownerHtml += `, (মোবাইল/যোগাযোগঃ ${convertToBengaliNumerals(selectedOwner.contact)})`;
            }
            if (selectedOwner.address) {
                ownerHtml += `, ঠিকানাঃ ${convertToBengaliNumerals(selectedOwner.address)}`;
            }

            if (selectedOwner.representative && selectedOwner.representative.exists && selectedOwner.representative.name) {
                ownerHtml += `, এর পক্ষে ${selectedOwner.representative.name}`;
                if (selectedOwner.representative.father) {
                    ownerHtml += `, পিতাঃ ${selectedOwner.representative.father}`;
                }
                if (selectedOwner.representative.address) {
                    ownerHtml += `, ঠিকানাঃ ${convertToBengaliNumerals(selectedOwner.representative.address)}`;
                }
                 if (selectedOwner.representative.mobiles) {
                    ownerHtml += `। মোবাইল নাম্বারঃ ${convertToBengaliNumerals(selectedOwner.representative.mobiles)}`;
                } else {
                    ownerHtml += `।`; // End sentence if no mobile for rep
                }
            } else {
                 ownerHtml += `।`; // End sentence if no representative
            }
            ownerSectionEl.innerHTML = ownerHtml; // Use innerHTML as we constructed an HTML string
        }


        // --- Populate Flat Information ---
        const flatInfoEl = document.getElementById('flat-info');
        if (flatInfoEl) {
            const flat = getParam('flat');
            const unit = convertToBengaliNumerals(getParam('unit'));
            flatInfoEl.textContent = `ভবনের নাম- ${flat}, ফ্ল্যাট নং- ${unit}`;
        }

        // --- Populate Tenant Information ---
        const tenantNameEl = document.getElementById('tenant-name');
        if (tenantNameEl) tenantNameEl.textContent = getParam('tenant_name');
        // ... (father, mother - no conversion needed)
        const fatherNameEl = document.getElementById('father-name');
        if (fatherNameEl) fatherNameEl.textContent = getParam('father_name');
        const motherNameEl = document.getElementById('mother-name');
        if (motherNameEl) motherNameEl.textContent = getParam('mother_name');
        // ... (voter id, mobile - convert)
        const voterIdEl = document.getElementById('voter-id');
        if (voterIdEl) voterIdEl.textContent = convertToBengaliNumerals(getParam('voter_id'));
        const mobileEl = document.getElementById('mobile');
        if (mobileEl) mobileEl.textContent = convertToBengaliNumerals(getParam('mobile'));
        // ... (address - convert numbers within)
        const addressEl = document.getElementById('tenant-address');
        if (addressEl) {
            const village = getParam('village');
            const holding = convertToBengaliNumerals(getParam('holding_number'));
            const postOffice = getParam('post_office');
            const district = getParam('district');
            const division = getParam('division');
            const addressParts = [village, holding, postOffice, district, division].filter(part => part);
            addressEl.textContent = convertToBengaliNumerals(addressParts.join(', '));
        }

        // --- Populate Rental Information ---
        const startDateEl = document.getElementById('start-date');
        if (startDateEl) startDateEl.textContent = convertToBengaliNumerals(formatDate(getParam('start_date')));
        const endDateEl = document.getElementById('end-date');
        if (endDateEl) endDateEl.textContent = convertToBengaliNumerals(formatDate(getParam('end_date')));
        const totalRentPreambleEl = document.getElementById('total-rent-preamble');
        const totalRentConditionEl = document.getElementById('total-rent-condition');
        const totalRentValue = getParam('total_rent');
        const totalRentBengali = convertToBengaliNumerals(totalRentValue || '0');
        if (totalRentPreambleEl) totalRentPreambleEl.textContent = `${totalRentBengali}/=`;
        if (totalRentConditionEl) totalRentConditionEl.textContent = `${totalRentBengali}/=`;
        const advanceEl = document.getElementById('advance');
        const advanceValue = getParam('advance');
        const advanceBengali = convertToBengaliNumerals(advanceValue || '0');
        const advanceWords = convertToBengaliWords(advanceValue);
        if (advanceEl) advanceEl.textContent = `${advanceBengali}/= (${advanceWords})`;
        const advanceDateEl = document.getElementById('advance-date');
        if (advanceDateEl) advanceDateEl.textContent = convertToBengaliNumerals(formatDate(getParam('advance_date')));

        // --- Call populateDuplicates AFTER main data is set ---
        populateDuplicates();

    } catch (error) {
        console.error("Error displaying data:", error);
        // ... (error handling div remains same)
         const errorDiv = document.createElement('div');
        errorDiv.textContent = "তথ্য লোড করতে সমস্যা হয়েছে।";
        errorDiv.style.color = 'red';
        errorDiv.style.textAlign = 'center';
        errorDiv.style.padding = '20px';
        document.body.prepend(errorDiv);
    }
}

// --- END OF FILE scripts.js ---