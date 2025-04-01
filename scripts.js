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
  if (str === null || str === undefined) return "";
  const strValue = String(str);
  return strValue.replace(/[0-9]/g, (digit) => bengaliDigits[digit] || digit);
}

// Bengali number words map
const bengaliNumberWords = {
  0: "শূন্য",
  1: "এক",
  2: "দুই",
  3: "তিন",
  4: "চার",
  5: "পাঁচ",
  6: "ছয়",
  7: "সাত",
  8: "আট",
  9: "নয়",
  10: "দশ",
  11: "এগারো",
  12: "বারো",
  13: "তেরো",
  14: "চৌদ্দ",
  15: "পনেরো",
  16: "ষোল",
  17: "সতেরো",
  18: "আঠারো",
  19: "উনিশ",
  20: "বিশ",
  21: "একুশ",
  22: "বাইশ",
  23: "তেইশ",
  24: "চব্বিশ",
  25: "পঁচিশ",
  26: "ছাব্বিশ",
  27: "সাতাশ",
  28: "আটাশ",
  29: "ঊনত্রিশ",
  30: "ত্রিশ",
  40: "চল্লিশ",
  50: "পঞ্চাশ",
  60: "ষাট",
  70: "সত্তর",
  80: "আশি",
  90: "নব্বই",
  100: "একশত",
  1000: "এক হাজার",
  100000: "এক লক্ষ",
  10000000: "এক কোটি",
};

// Helper function to convert number to Bengali words
function convertToBengaliWords(numStr) {
  const num = parseInt(numStr, 10);
  if (isNaN(num)) return "";
  
  // Direct mapping for common numbers
  if (bengaliNumberWords[num] !== undefined) {
    return bengaliNumberWords[num];
  }
  
  // Handle thousands
  if (num >= 1000 && num < 100000) {
    const thousands = Math.floor(num / 1000);
    const remainder = num % 1000;
    
    let result = "";
    if (thousands === 1) {
      result = "এক হাজার";
    } else if (bengaliNumberWords[thousands]) {
      result = bengaliNumberWords[thousands] + " হাজার";
    } else {
      result = convertToBengaliNumerals(thousands) + " হাজার";
    }
    
    if (remainder > 0) {
      if (bengaliNumberWords[remainder]) {
        result += " " + bengaliNumberWords[remainder];
      } else {
        result += " " + convertToBengaliNumerals(remainder);
      }
    }
    
    return result;
  }
  
  // Handle lakhs (100,000s)
  if (num >= 100000 && num < 10000000) {
    const lakhs = Math.floor(num / 100000);
    const remainder = num % 100000;
    
    let result = "";
    if (lakhs === 1) {
      result = "এক লক্ষ";
    } else if (bengaliNumberWords[lakhs]) {
      result = bengaliNumberWords[lakhs] + " লক্ষ";
    } else {
      result = convertToBengaliNumerals(lakhs) + " লক্ষ";
    }
    
    if (remainder > 0) {
      result += " " + convertToBengaliWords(remainder);
    }
    
    return result;
  }
  
  // Default: just convert the digits
  return convertToBengaliNumerals(num.toString());
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
  try {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return { months: 0, total: 0 };
    }
    
    // Calculate months difference more accurately
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months += endDate.getMonth() - startDate.getMonth();
    
    // Adjust for day of month
    if (endDate.getDate() < startDate.getDate()) {
      months--;
    }
    
    // Ensure at least 1 month
    months = Math.max(1, months);
    
    const totalAmount = months * parseInt(monthlyRent || 0, 10);
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

// Function to populate duplicate fields
function populateDuplicates() {
  try {
    const advanceDateVal = document.getElementById("advance-date")?.textContent;
    const advanceDateInlineEl = document.getElementById("advance-date-inline");
    if (advanceDateInlineEl && advanceDateVal) {
      advanceDateInlineEl.textContent = advanceDateVal;
    }

    const flatInfoVal = document.getElementById("flat-info")?.textContent;
    const flatInfoScheduleEl = document.getElementById("flat-info-schedule");
    if (flatInfoScheduleEl && flatInfoVal) {
      flatInfoScheduleEl.textContent = flatInfoVal;
    }
  } catch (error) {
    console.error("Error populating duplicates:", error);
  }
}

// Condition List Management Functions
function deleteCondition(buttonElement) {
  const listItem = buttonElement.closest("li");
  if (listItem) {
    // Add fade-out animation
    listItem.style.transition = "opacity 0.3s ease";
    listItem.style.opacity = "0";
    
    // Remove after animation completes
    setTimeout(() => {
      listItem.remove();
      // Renumber the list items (Bengali numbers are handled by CSS counter)
    }, 300);
  }
}

function addCondition() {
  const list = document.getElementById("conditions-list");
  if (!list) {
    console.error("Error: Could not find 'conditions-list' element.");
    return;
  }
  
  const newListItem = document.createElement("li");
  newListItem.setAttribute("contenteditable", "true");
  newListItem.setAttribute("tabindex", "0");
  newListItem.className =
    "relative block cursor-text p-1 transition duration-300 ease-in-out rounded hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:ring-2 focus:ring-amber-400 print:cursor-default print:p-0 print:bg-transparent print:shadow-none print:ring-0";
  
  // Add with fade-in animation
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
  
  // Animate fade in
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
    const params = new URLSearchParams(window.location.search);
    const getParam = (key) => params.get(key) || "";

    // Populate Owner Information
    const selectedOwnerId = getParam("owner_id");
    const selectedOwner = owners.find((owner) => owner.id === selectedOwnerId) || owners[0];
    const ownerSectionEl = document.getElementById("owner-section");
    
    if (ownerSectionEl && selectedOwner) {
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

    // Populate Flat Information
    setText("flat-info", `${getParam("flat")}, ফ্ল্যাট নং- ${getParam("unit")}`);

    // Populate Tenant Information
    setText("tenant-name", getParam("tenant_name"));
    setText("voter-id", convertToBengaliNumerals(getParam("voter_id")));
    setText("father-name", getParam("father_name"));
    setText("mother-name", getParam("mother_name"));
    setText("holding-number", getParam("holding_number") ? `বাসা/হোল্ডিং- ${convertToBengaliNumerals(getParam("holding_number"))}` : "");
    setText("village", getParam("village") ? `গ্রাম/রাস্তা- ${getParam("village")}` : "");
    setText("post-office", getParam("post_office"));
    setText("sadar", getParam("sadar"));
    setText("pourosoba", getParam("pourosoba"));
    setText("zila", getParam("zila"));
    setText("division", getParam("division"));
    setText("mobile", convertToBengaliNumerals(getParam("mobile")));

    // Populate Rental Information
    const startDate = getParam("start_date");
    const endDate = getParam("end_date");
    const formattedStartDate = formatBengaliDate(startDate);
    const formattedEndDate = formatBengaliDate(endDate);
    const formattedAdvanceDate = formatBengaliDate(getParam("advance_date"));
    
    setText("start-date", formattedStartDate);
    setText("end-date", formattedEndDate);
    
    const totalRentValue = getParam("total_rent");
    const totalRentBengali = convertToBengaliNumerals(totalRentValue || "0");
    const totalRentWords = convertToBengaliWords(totalRentValue);
    
    setText("total-rent-preamble", `${totalRentBengali}/=`);
    setText("total-rent-condition", `${totalRentBengali}/=`);
    
    const advanceValue = getParam("advance");
    const advanceBengali = convertToBengaliNumerals(advanceValue || "0");
    const advanceWords = convertToBengaliWords(advanceValue);
    
    setText("advance-date", formattedAdvanceDate);

    // Populate Utility Responsibilities
    const gasResponsibility = getParam("gas") === "yes" ? "১ম পক্ষ" : "২য় পক্ষ";
    const electricityResponsibility = getParam("electricity") === "yes" ? "১ম পক্ষ" : "২য় পক্ষ";
    setText("gas-responsibility", gasResponsibility);
    setText("electricity-responsibility", electricityResponsibility);

    // Dynamic Agreement Preamble
    const flatType = getParam("flat_type"); // '1bhk' (furnished) or '2bhk' (unfurnished)
    const parking = getParam("parking"); // 'yes', 'no', or 'partial'
    const durationInfo = calculateDurationAndTotal(startDate, endDate, totalRentValue);
    const totalAmountBengali = convertToBengaliNumerals(durationInfo.total);
    const totalAmountWords = convertToBengaliWords(durationInfo.total);
    const monthsBengali = convertToBengaliNumerals(durationInfo.months);
    const monthsWords = convertToBengaliWords(durationInfo.months);

    let preambleText = "আমি ১ম পক্ষ তপশীল বর্ণিত ফ্ল্যাট বাড়িটি ";
    
    if (flatType === "1bhk" && parking === "yes") {
      preambleText += "ফার্নিচার সহ এবং কার পার্কিং সহ ";
    } else if (flatType === "1bhk" && parking === "no") {
      preambleText += "ফার্নিচার সহ এবং কার পার্কিং ছাড়া ";
    } else if (flatType === "2bhk" && parking === "yes") {
      preambleText += "ফার্নিচার ছাড়া এবং কার পার্কিং সহ ";
    } else if (flatType === "2bhk" && parking === "no") {
      preambleText += "ফার্নিচার ছাড়া এবং কার পার্কিং ছাড়া ";
    } else if (parking === "partial") {
      preambleText +=
        flatType === "1bhk"
          ? "ফার্নিচার সহ এবং আংশিক কার পার্কিং সহ "
          : "ফার্নিচার ছাড়া এবং আংশিক কার পার্কিং সহ ";
    }
    
    preambleText += `ভাড়া দিতে চাহিলে, আপনি ২য় পক্ষ উক্ত ফ্ল্যাট বাড়িটি ভাড়া নেওয়ার ইচ্ছা পোষণ করিলে, উক্ত ফ্ল্যাট বাড়িটি আগামী ${formattedStartDate} ইংরেজি হইতে ${formattedEndDate} ইংরেজি পর্যন্ত মাসিক ${totalRentBengali}/= (${totalRentWords}) টাকায় উক্ত ফ্ল্যাট বাড়িটি ভাড়া নিতে সম্মত হন। অদ্য ${formattedAdvanceDate} ইংরেজী তারিখে জামানত হিসাবে অগ্রীম নগদ ${advanceBengali}/= (${advanceWords}) টাকা প্রদান পূর্বক আগামী ${formattedStartDate} ইংরেজি হইতে ${formattedEndDate} ইংরেজি তারিখ পর্যন্ত সর্বমোট ${monthsBengali} (${monthsWords}) মাসের জন্য ${totalAmountBengali}/= (${totalAmountWords}) টাকায় ভাড়া নিতে নিম্নে উল্লেখিত শর্তাবলী মানিয়া চলার অঙ্গিকারে স্বাক্ষর প্রদান করিলেন।`;

    const preambleEl = document.getElementById("agreement-preamble");
    if (preambleEl) preambleEl.textContent = preambleText;

    populateDuplicates();
    
    // Enable edit mode toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
      // Make sure all delete buttons are properly attached
      const deleteButtons = document.querySelectorAll('.delete-item');
      deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
          deleteCondition(this);
        });
      });
    });
    
    // Store document state in localStorage for recovery
    storeDocumentState();
    
  } catch (error) {
    console.error("Error displaying data:", error);
    showErrorMessage("তথ্য লোড বা প্রদর্শন করতে একটি ত্রুটি ঘটেছে।");
  }
}

// Function to show error message
function showErrorMessage(message) {
  const errorDiv = document.createElement("div");
  errorDiv.textContent = message;
  errorDiv.className = "text-red-600 text-center p-4 bg-red-100 border border-red-400 rounded my-4 mx-auto max-w-4xl print:hidden";
  
  const container = document.querySelector(".page-container") || document.body;
  container.prepend(errorDiv);
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    errorDiv.style.transition = "opacity 0.5s ease";
    errorDiv.style.opacity = "0";
    setTimeout(() => errorDiv.remove(), 500);
  }, 5000);
}

// Function to store document state in localStorage
function storeDocumentState() {
  try {
    const conditionsList = document.getElementById('conditions-list');
    if (conditionsList) {
      const conditions = Array.from(conditionsList.children).map(li => {
        // Remove the delete button text when storing
        const liClone = li.cloneNode(true);
        const deleteBtn = liClone.querySelector('.delete-item');
        if (deleteBtn) deleteBtn.remove();
        return liClone.textContent.trim();
      });
      
      localStorage.setItem('tenantAgreementConditions', JSON.stringify(conditions));
    }
    
    // Store other editable content
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    const editableContent = {};
    
    editableElements.forEach(el => {
      if (el.id && !el.classList.contains('bengali-list')) {
        editableContent[el.id] = el.textContent;
      }
    });
    
    localStorage.setItem('tenantAgreementContent', JSON.stringify(editableContent));
  } catch (error) {
    console.error("Error storing document state:", error);
  }
}

// Function to restore document state from localStorage
function restoreDocumentState() {
  try {
    // Restore conditions
    const savedConditions = localStorage.getItem('tenantAgreementConditions');
    if (savedConditions) {
      const conditions = JSON.parse(savedConditions);
      const conditionsList = document.getElementById('conditions-list');
      
      if (conditionsList && conditions.length > 0) {
        // Clear existing conditions
        conditionsList.innerHTML = '';
        
        // Add saved conditions
        conditions.forEach(condition => {
          const li = document.createElement('li');
          li.setAttribute('contenteditable', 'true');
          li.setAttribute('tabindex', '0');
          li.className = 'relative block cursor-text p-1 transition duration-300 ease-in-out rounded hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:ring-2 focus:ring-amber-400 print:cursor-default print:p-0 print:bg-transparent print:shadow-none print:ring-0';
          li.textContent = condition;
          
          const deleteSpan = document.createElement('span');
          deleteSpan.className = 'delete-item ml-2.5 text-red-500 font-bold inline-block align-middle text-xs px-1 rounded select-none hover:text-red-600 hover:bg-red-100 cursor-pointer print:hidden';
          deleteSpan.textContent = '⛔';
          deleteSpan.setAttribute('onclick', 'deleteCondition(this)');
          deleteSpan.setAttribute('title', 'এই শর্তটি মুছুন');
          
          li.appendChild(deleteSpan);
          conditionsList.appendChild(li);
        });
      }
    }
    
    // Restore other editable content
    const savedContent = localStorage.getItem('tenantAgreementContent');
    if (savedContent) {
      const content = JSON.parse(savedContent);
      
      Object.keys(content).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.textContent = content[id];
        }
      });
    }
  } catch (error) {
    console.error("Error restoring document state:", error);
  }
}

// Initialize when document is loaded
window.addEventListener('DOMContentLoaded', function() {
  // First load data from URL parameters
  displayData();
  
  // Then try to restore any saved edits
  setTimeout(restoreDocumentState, 500);
});