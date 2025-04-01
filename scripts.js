// --- Owner Data (Expanded & Detailed) ---
const owners = [
  {
    id: "nur_mohammad",
    displayName: "নুর মোহাম্মদ চৌধুরী পিয়ারু (পক্ষে রুহুল আমিন)",
    fullName: "নুর মোহাম্মদ চৌধুরী পিয়ারু",
    ownerContact: "+৪৪৭৮৮৬০৯৮২৩০",
    ownerAddress:
      "ফ্ল্যাট নং- তমাল ৩/এ, মাল্টিপ্ল্যান শাহজালাল সিটি, তমাল ভবন, প্লট নং- ডি/১, ব্লক-ডি, উপশহর, থানা- শাহপরান, জেলা- সিলেট",
    representative: {
      exists: true,
      name: "রুহুল আমিন",
      father: "বেলাল উদ্দিন",
      address: "গ্রামঃ রামপাশা, থানাঃ বিশ্বনাথ, জেলাঃ সিলেট",
      mobiles: "০১৭৮১-১২৮৮১৮ / ০১৩২৫-১০৫১০০",
    },
  },
  {
    id: "abdul_karim",
    displayName: "জনাব আব্দুল করিম",
    fullName: "জনাব আব্দুল করিম",
    ownerContact: "০১৬xxxxxxxx",
    ownerAddress: "বাসা নং ১২৩, রোড ৪, ব্লক সি, বনানী, ঢাকা",
    representative: { exists: false },
  },
  {
    id: "fatema_begum",
    displayName: "মোছাঃ ফাতেমা বেগম (পক্ষে মোঃ আনোয়ার হোসেন)",
    fullName: "মোছাঃ ফাতেমা বেগম",
    ownerContact: "f.begum@email.com",
    ownerAddress: "হোল্ডিং # ৭৭, সোনারগাঁও রোড, রাজশাহী",
    representative: {
      exists: true,
      name: "মোঃ আনোয়ার হোসেন",
      father: "মরহুম ইসমাইল শেখ",
      address:
        "গ্রামঃ শান্তিপুর, ডাকঘরঃ আনন্দবাজার, উপজেলাঃ নবাবগঞ্জ, জেলাঃ ঢাকা",
      mobiles: "০১৯xxxxxxxx",
    },
  },
  {
    id: "shahidul_islam",
    displayName: "মোঃ শহিদুল ইসলাম",
    fullName: "মোঃ শহিদুল ইসলাম",
    ownerContact: "০১৮xxxxxxxx",
    ownerAddress: "বাড়ি # ১০, রোড # ৫, সেক্টর # ৬, উত্তরা, ঢাকা",
    representative: { exists: false },
  },
  {
    id: "rahima_khatun",
    displayName: "রহিমা খাতুন (পক্ষে মোঃ জামাল উদ্দিন)",
    fullName: "রহিমা খাতুন",
    ownerContact: "N/A",
    ownerAddress: "২৫৫/বি, খুলশি, চট্টগ্রাম",
    representative: {
      exists: true,
      name: "মোঃ জামাল উদ্দিন",
      father: "আলী আকবর",
      address: "গ্রামঃ পূর্ব নাসিরাবাদ, থানাঃ পাঁচলাইশ, জেলাঃ চট্টগ্রাম",
      mobiles: "০১৫xxxxxxxx",
    },
  },
];

// Bengali number conversion map
const bengaliDigits = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};

// Function to convert English digits (0-9) to Bengali digits (০-৯)
function convertToBengaliNumerals(str) {
  if (!str) return "";
  return String(str).replace(/[0-9]/g, (digit) => bengaliDigits[digit] || digit);
}

// Bengali number words map for common values
const bengaliNumberWords = {
  5000: "পাঁচ হাজার",
  10000: "দশ হাজার",
  15000: "পনেরো হাজার",
  20000: "বিশ হাজার",
  25000: "পচিশ হাজার",
  30000: "ত্রিশ হাজার",
  35000: "পঁইত্রিশ হাজার",
  40000: "চল্লিশ হাজার",
  45000: "পঁয়তাল্লিশ হাজার",
  50000: "পঞ্চাশ হাজার",
  55000: "পঞ্চান্ন হাজার",
  60000: "ষাট হাজার",
  65000: "পঁষষট্টি হাজার",
  70000: "সত্তর হাজার",
  75000: "পঁচাত্তর হাজার",
  80000: "আশি হাজার",
  85000: "পঁচাশি হাজার",
  90000: "নব্বই হাজার",
  95000: "পঁচানব্বই হাজার",
  100000: "এক লক্ষ",
  105000: "এক লক্ষ পাঁচ হাজার",
};

// Helper function to convert number to Bengali words
function convertToBengaliWords(numStr) {
  if (!numStr) return "";
  const num = parseInt(numStr, 10);
  return bengaliNumberWords[num] || convertToBengaliNumerals(num);
}

// Function to format date in Bengali (DD/MM/YYYY)
function formatBengaliDate(dateString) {
  if (!dateString) return "";
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    
    return `${convertToBengaliNumerals(day)}/${convertToBengaliNumerals(month)}/${convertToBengaliNumerals(year)}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
}

// Function to calculate total duration and amount
function calculateDurationAndTotal(startDateStr, endDateStr, monthlyRent) {
  if (!startDateStr || !endDateStr || !monthlyRent) {
    return { months: 0, total: 0 };
  }
  
  try {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return { months: 0, total: 0 };
    }
    
    // Calculate months difference
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months += endDate.getMonth() - startDate.getMonth();
    
    // Adjust for day of month
    if (endDate.getDate() < startDate.getDate()) {
      months--;
    }
    
    // Ensure at least 1 month
    months = Math.max(1, months);
    
    const totalAmount = months * parseInt(monthlyRent, 10);
    return { months, total: totalAmount };
  } catch (error) {
    console.error("Error calculating duration:", error);
    return { months: 0, total: 0 };
  }
}

// Helper function to set text content safely
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value || "";
}

// Function to get URL parameter value
function getParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || "";
}

// Condition List Management Functions
function deleteCondition(buttonElement) {
  const listItem = buttonElement.closest("li");
  if (listItem) {
    listItem.style.transition = "opacity 0.3s ease";
    listItem.style.opacity = "0";
    
    setTimeout(() => {
      listItem.remove();
    }, 300);
  }
}

function addCondition() {
  const list = document.getElementById("conditions-list");
  if (!list) return;
  
  const newListItem = document.createElement("li");
  newListItem.setAttribute("contenteditable", "true");
  newListItem.setAttribute("tabindex", "0");
  newListItem.className =
    "relative block cursor-text p-1 transition duration-300 ease-in-out rounded hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:ring-2 focus:ring-amber-400 print:cursor-default print:p-0 print:bg-transparent print:shadow-none print:ring-0";
  
  newListItem.style.opacity = "0";
  newListItem.textContent = "[নতুন শর্ত এখানে লিখুন]";
  
  const deleteSpan = document.createElement("span");
  deleteSpan.className =
    "delete-item ml-2.5 text-red-500 font-bold inline-block align-middle text-xs px-1 rounded select-none hover:text-red-600 hover:bg-red-100 cursor-pointer print:hidden";
  deleteSpan.textContent = "⛔";
  deleteSpan.setAttribute("onclick", "deleteCondition(this)");
  deleteSpan.setAttribute("title", "এই শর্তটি মুছুন");
  
  newListItem.appendChild(deleteSpan);
  list.appendChild(newListItem);
  
  setTimeout(() => {
    newListItem.style.transition = "opacity 0.3s ease";
    newListItem.style.opacity = "1";
    newListItem.focus();
    
    // Select all text for easy editing
    const range = document.createRange();
    range.selectNodeContents(newListItem);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }, 10);
}

// Main function to display data on template.html
function displayData() {
  try {
    // Get all form data from URL parameters
    const owner_id = getParam("owner_id");
    const flat = getParam("flat");
    const unit = getParam("unit");
    const flat_type = getParam("flat_type");
    const parking = getParam("parking");
    const gas = getParam("gas");
    const electricity = getParam("electricity");
    const tenant_name = getParam("tenant_name");
    const father_name = getParam("father_name");
    const mother_name = getParam("mother_name");
    const voter_id = getParam("voter_id");
    const mobile = getParam("mobile");
    const village = getParam("village");
    const holding_number = getParam("holding_number");
    const post_office = getParam("post_office");
    const sadar = getParam("sadar");
    const pourosoba = getParam("pourosoba");
    const zila = getParam("zila");
    const division = getParam("division");
    const start_date = getParam("start_date");
    const end_date = getParam("end_date");
    const total_rent = getParam("total_rent");
    const advance = getParam("advance");
    const advance_date = getParam("advance_date");

    // 1. Populate Owner Information
    const selectedOwner = owners.find((owner) => owner.id === owner_id) || {};
    const ownerSectionEl = document.getElementById("owner-section");
    
    if (ownerSectionEl && selectedOwner.fullName) {
      let ownerHtml = `<strong class="font-semibold"></strong> নামঃ ${selectedOwner.fullName}`;
      
      if (selectedOwner.ownerContact && selectedOwner.ownerContact !== "N/A") {
        ownerHtml += `, (মোবাইল- ${convertToBengaliNumerals(selectedOwner.ownerContact)})`;
      }
      
      if (selectedOwner.ownerAddress) {
        ownerHtml += `, ${selectedOwner.ownerAddress}`;
      }
      
      if (selectedOwner.representative?.exists) {
        ownerHtml += `, এর পক্ষে ${selectedOwner.representative.name}`;
        
        if (selectedOwner.representative.father) {
          ownerHtml += `, পিতাঃ ${selectedOwner.representative.father}`;
        }
        
        if (selectedOwner.representative.address) {
          ownerHtml += `, ${selectedOwner.representative.address}`;
        }
        
        if (selectedOwner.representative.mobiles) {
          ownerHtml += `। মোবাইল নাম্বারঃ ${convertToBengaliNumerals(selectedOwner.representative.mobiles)}`;
        } else {
          ownerHtml += `।`;
        }
      } else {
        ownerHtml += `।`;
      }
      
      ownerSectionEl.innerHTML = ownerHtml;
    } else if (ownerSectionEl) {
      ownerSectionEl.innerHTML = '<span class="text-red-500 font-semibold">মালিকের তথ্য পাওয়া যায়নি।</span>';
    }

    // 2. Populate Flat Information
    setText("flat-info", `${flat}, ফ্ল্যাট নং- ${unit}`);

    // 3. Populate Tenant Information
    setText("tenant-name", tenant_name);
    setText("voter-id", convertToBengaliNumerals(voter_id));
    setText("father-name", father_name);
    setText("mother-name", mother_name);
    setText("holding-number", holding_number ? `বাসা/হোল্ডিং- ${convertToBengaliNumerals(holding_number)}` : "");
    setText("village", village ? `গ্রাম/রাস্তা- ${village}` : "");
    setText("post-office", post_office);
    setText("sadar", sadar);
    setText("pourosoba", pourosoba);
    setText("zila", zila);
    setText("division", division);
    setText("mobile", convertToBengaliNumerals(mobile));

    // 4. Format dates
    const formattedStartDate = formatBengaliDate(start_date);
    const formattedEndDate = formatBengaliDate(end_date);
    const formattedAdvanceDate = formatBengaliDate(advance_date);
    
    // 5. Convert numbers to Bengali
    const totalRentBengali = convertToBengaliNumerals(total_rent);
    const totalRentWords = convertToBengaliWords(total_rent);
    const advanceBengali = convertToBengaliNumerals(advance);
    const advanceWords = convertToBengaliWords(advance);
    
    // 6. Calculate duration and total amount
    const durationInfo = calculateDurationAndTotal(start_date, end_date, total_rent);
    const monthsBengali = convertToBengaliNumerals(durationInfo.months);
    const monthsWords = convertToBengaliWords(durationInfo.months.toString());
    const totalAmountBengali = convertToBengaliNumerals(durationInfo.total);
    const totalAmountWords = convertToBengaliWords(durationInfo.total.toString());

    // 7. Set utility responsibilities
    const gasResponsibility = gas === "yes" ? "১ম পক্ষ" : "২য় পক্ষ";
    const electricityResponsibility = electricity === "yes" ? "১ম পক্ষ" : "২য় পক্ষ";
    setText("gas-responsibility", gasResponsibility);
    setText("electricity-responsibility", electricityResponsibility);
    
    // 8. Set rent amount in condition
    setText("total-rent-condition", `${totalRentBengali}/=`);

    // 9. Generate Agreement Preamble
    let preambleText = "আমি ১ম পক্ষ তপশীল বর্ণিত ফ্ল্যাট বাড়িটি ";
    
    if (flat_type === "1bhk" && parking === "yes") {
      preambleText += "ফার্নিচার সহ এবং কার পার্কিং সহ ";
    } else if (flat_type === "1bhk" && parking === "no") {
      preambleText += "ফার্নিচার সহ এবং কার পার্কিং ছাড়া ";
    } else if (flat_type === "2bhk" && parking === "yes") {
      preambleText += "ফার্নিচার ছাড়া এবং কার পার্কিং সহ ";
    } else if (flat_type === "2bhk" && parking === "no") {
      preambleText += "ফার্নিচার ছাড়া এবং কার পার্কিং ছাড়া ";
    } else if (parking === "partial") {
      preambleText +=
        flat_type === "1bhk"
          ? "ফার্নিচার সহ এবং আংশিক কার পার্কিং সহ "
          : "ফার্নিচার ছাড়া এবং আংশিক কার পার্কিং সহ ";
    }
    
    preambleText += `ভাড়া দিতে চাহিলে, আপনি ২য় পক্ষ উক্ত ফ্ল্যাট বাড়িটি ভাড়া নেওয়ার ইচ্ছা পোষণ করিলে, উক্ত ফ্ল্যাট বাড়িটি আগামী ${formattedStartDate} ইংরেজি হইতে ${formattedEndDate} ইংরেজি পর্যন্ত মাসিক ${totalRentBengali}/= (${totalRentWords}) টাকায় উক্ত ফ্ল্যাট বাড়িটি ভাড়া নিতে সম্মত হন। অদ্য ${formattedAdvanceDate} ইংরেজী তারিখে জামানত হিসাবে অগ্রীম নগদ ${advanceBengali}/= (${advanceWords}) টাকা প্রদান পূর্বক আগামী ${formattedStartDate} ইংরেজি হইতে ${formattedEndDate} ইংরেজি তারিখ পর্যন্ত সর্বমোট ${monthsBengali} (${monthsWords}) মাসের জন্য ${totalAmountBengali}/= (${totalAmountWords}) টাকায় ভাড়া নিতে নিম্নে উল্লেখিত শর্তাবলী মানিয়া চলার অঙ্গিকারে স্বাক্ষর প্রদান করিলেন।`;

    const preambleEl = document.getElementById("agreement-preamble");
    if (preambleEl) preambleEl.textContent = preambleText;
    
  } catch (error) {
    console.error("Error displaying data:", error);
    alert("তথ্য লোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
}

// Toggle edit mode
function toggleEditMode() {
  const editables = document.querySelectorAll('[contenteditable]');
  const editModeBtn = document.getElementById('editModeBtn');
  const isEditable = editables[0].getAttribute('contenteditable') === 'true';
  
  editables.forEach(el => {
    el.setAttribute('contenteditable', isEditable ? 'false' : 'true');
  });
  
  if (isEditable) {
    editModeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
      সম্পাদনা মোড`;
    editModeBtn.classList.remove('bg-red-500', 'hover:bg-red-600');
    editModeBtn.classList.add('bg-green-500', 'hover:bg-green-600');
  } else {
    editModeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      সম্পাদনা বন্ধ করুন`;
    editModeBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
    editModeBtn.classList.add('bg-red-500', 'hover:bg-red-600');
  }
}

// Reset document to original state
function resetDocument() {
  if (confirm('আপনি কি নিশ্চিত যে আপনি সমস্ত পরিবর্তন বাতিল করতে চান?')) {
    location.reload();
  }
}

// Initialize when document is loaded
window.addEventListener('DOMContentLoaded', function() {
  // Load data from URL parameters
  displayData();
  
  // Add event listeners to delete buttons
  document.querySelectorAll('.delete-item').forEach(button => {
    button.addEventListener('click', function() {
      deleteCondition(this);
    });
  });
});