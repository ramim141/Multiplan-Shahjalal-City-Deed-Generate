// --- START OF FILE scripts.js ---

// --- Owner Data (Expanded & Detailed) ---
const owners = [
  {
    id: "nur_mohammad",
    displayName: "নুর মোহাম্মদ চৌধুরী পিয়ারু (পক্ষে রুহুল আমিন)",
    fullName: "নুর মোহাম্মদ চৌধুরী পিয়ারু",
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
    displayName: "মোছাঃ ফাতেমা বেগম (পক্ষে মোঃ আনোয়ার হোসেন)",
    fullName: "মোছাঃ ফাতেমা বেগম",
    ownerContact: "f.begum@email.com",
    ownerAddress: "হোল্ডিং # ৭৭, সোনারগাঁও রোড, রাজশাহী",
    representative: {
      exists: true,
      name: "মোঃ আনোয়ার হোসেন",
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
    ownerAddress: "বাড়ি # ১০, রোড # ৫, সেক্টর # ৬, উত্তরা, ঢাকা",
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

// Function to convert English digits (0-9) to Bengali digits (০-৯) in a string
function convertToBengaliNumerals(str) {
  if (str === null || str === undefined) {
    return "";
  }
  const strValue = String(str);
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
  return strValue.replace(/[0-9]/g, (digit) => bengaliDigits[digit] || digit);
}

// Helper function to convert number to Bengali words
function convertToBengaliWords(numStr) {
  const num = parseInt(numStr, 10);
  if (isNaN(num)) {
    return "";
  }
  const wordsMap = {
    0: "শূন্য",
    1: "এক",
    2: "দুই",
    3: "তিন",
    4: "চার",
    5: "পাঁচ",
    6: "ছয়",
    7: "সাত",
    8: "আট",
    9: "নয়",
    10: "দশ",
    100: "একশত",
    500: "পাঁচশত",
    1000: "এক হাজার",
    2000: "দুই হাজার",
    3000: "তিন হাজার",
    4000: "চার হাজার",
    5000: "পাঁচ হাজার",
    6000: "ছয় হাজার",
    7000: "সাত হাজার",
    8000: "আট হাজার",
    9000: "নয় হাজার",
    10000: "দশ হাজার",
    11000: "এগারো হাজার",
    12000: "বারো হাজার",
    13000: "তেরো হাজার",
    14000: "চৌদ্দ হাজার",
    15000: "পনেরো হাজার",
    16000: "ষোল হাজার",
    17000: "সতেরো হাজার",
    18000: "আঠারো হাজার",
    19000: "নবেরো হাজার",
    20000: "বিশ হাজার",
    30000: "ত্রিশ হাজার",
    40000: "চল্লিশ হাজার",
    50000: "পঁচিশ হাজার",
    60000: "ছেষট্টি হাজার",
    70000: "সত্তর হাজার",
    80000: "আশি হাজার",
    90000: "নব্বই হাজার",
    100000: "এক লক্ষ",

  };
  return wordsMap[num] || convertToBengaliNumerals(num.toString());
}

// Function to calculate total duration and amount
function calculateDurationAndTotal(startDateStr, endDateStr, monthlyRent) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return { months: 0, total: 0 };
  }
  const diffTime = endDate - startDate;
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30)); // Approximate months
  const totalAmount = diffMonths * parseInt(monthlyRent || 0, 10);
  return { months: diffMonths, total: totalAmount };
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
      flatInfoScheduleEl.textContent = convertToBengaliNumerals(flatInfoVal);
    }
  } catch (error) {
    console.error("Error populating duplicates:", error);
  }
}

// Condition List Management Functions
function deleteCondition(buttonElement) {
  const listItem = buttonElement.closest("li");
  if (listItem) {
    listItem.remove();
  }
}

function addCondition() {
  const list = document.getElementById("conditions-list");
  if (!list) {
    console.error(
      "Error: Could not find the conditions list element with ID 'conditions-list'."
    );
    return;
  }
  const newListItem = document.createElement("li");
  newListItem.setAttribute("contenteditable", "true");
  newListItem.setAttribute("tabindex", "0");
  newListItem.className =
    "relative block cursor-text p-1 transition duration-300 ease-in-out rounded hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:ring-2 focus:ring-amber-400 print:cursor-default print:p-0 print:bg-transparent print:shadow-none print:ring-0";
  newListItem.textContent = "[নতুন শর্ত এখানে লিখুন]";
  const deleteSpan = document.createElement("span");
  deleteSpan.className =
    "delete-item ml-2.5 text-red-500 font-bold inline-block align-middle text-xs px-1 rounded select-none hover:text-red-600 hover:bg-red-100 cursor-pointer print:hidden";
  deleteSpan.textContent = "⛔";
  deleteSpan.setAttribute("onclick", "deleteCondition(this)");
  deleteSpan.setAttribute("title", "এই শর্তটি মুছুন");
  newListItem.appendChild(deleteSpan);
  list.appendChild(newListItem);
  newListItem.focus();
}

// Main function to display data on template.html
function displayData() {
  try {
    const params = new URLSearchParams(window.location.search);
    const getParam = (key) => params.get(key) || "";

    const formatDate = (dateString) => {
      if (!dateString) {
        return "";
      }
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        return dateString;
      }
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString;
      }
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${convertToBengaliNumerals(day)}/${convertToBengaliNumerals(
        month
      )}/${convertToBengaliNumerals(year)}`;
    };

    // Populate Owner Information
    const selectedOwnerId = getParam("owner_id");
    const selectedOwner =
      owners.find((owner) => owner.id === selectedOwnerId) || owners[0];
    const ownerSectionEl = document.getElementById("owner-section");
    if (ownerSectionEl && selectedOwner) {
      let ownerHtml = `<strong class="font-semibold"></strong> নামঃ ${selectedOwner.fullName}`;
      if (selectedOwner.ownerContact && selectedOwner.ownerContact !== "N/A") {
        ownerHtml += `, (মোবাইল- ${convertToBengaliNumerals(
          selectedOwner.ownerContact
        )})`;
      if (selectedOwner.ownerAddress) {
        ownerHtml += `, ${convertToBengaliNumerals(
          selectedOwner.ownerAddress
          )}`;
        }
      if (selectedOwner.representative?.exists) {
        ownerHtml += `, এর পক্ষে ${selectedOwner.representative.name}`;
      }
        if (selectedOwner.representative.father) {
          ownerHtml += `, পিতাঃ ${selectedOwner.representative.father}`;
        }
        if (selectedOwner.representative.address) {
          ownerHtml += `, ${convertToBengaliNumerals(
            selectedOwner.representative.address
          )}`;
        }
        if (selectedOwner.representative.mobiles) {
          ownerHtml += `। মোবাইল নাম্বারঃ ${convertToBengaliNumerals(
            selectedOwner.representative.mobiles
          )}`;
        } else {
          ownerHtml += `।`;
        }
      } else ownerHtml += `।`;
      ownerSectionEl.innerHTML = ownerHtml;
    } else if (ownerSectionEl) {
      ownerSectionEl.innerHTML =
        '<span class="text-red-500 font-semibold">মালিকের তথ্য পাওয়া যায়নি।</span>';
    }

    // Populate Flat Information
    const flatInfoEl = document.getElementById("flat-info");
    if (flatInfoEl) {
      flatInfoEl.textContent = `${getParam(
        "flat"
        )}, ফ্ল্যাট নং- ${convertToBengaliNumerals(getParam("unit"))}`;
      }

    // Populate Tenant Information
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = value || "";
      }
    };
    setText("tenant-name", getParam("tenant_name"));
    setText("voter-id", convertToBengaliNumerals(getParam("voter_id")));
    setText("father-name", getParam("father_name"));
    setText("mother-name", getParam("mother_name"));
    setText(
      "holding-number",
      `বাসা/হোল্ডিং- ${convertToBengaliNumerals(getParam("holding_number"))}`
    );
    setText("village", `গ্রাম/রাস্তা- ${getParam("village")}`);
    setText("post-office", getParam("post_office"));
    setText("post-code", convertToBengaliNumerals(getParam("post_code")));
    setText("sadar", getParam("sadar"));
    setText("pourosoba", getParam("pourosoba"));
    setText("district", getParam("district"));
    setText("division", getParam("division"));
    setText("mobile", convertToBengaliNumerals(getParam("mobile")));

    // Populate Rental Information
    const startDate = getParam("start_date");
    const endDate = getParam("end_date");
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    const formattedAdvanceDate = formatDate(getParam("advance_date"));
    setText("start-date", formattedStartDate);
    setText("end-date", formattedEndDate);
    const totalRentValue = getParam("total_rent");
    const totalRentBengali = convertToBengaliNumerals(totalRentValue || "0");
    setText("total-rent-preamble", `${totalRentBengali}/=`);
    setText("total-rent-condition", `${totalRentBengali}/=`);
    const advanceValue = getParam("advance");
    const advanceBengali = convertToBengaliNumerals(advanceValue || "0");
    const advanceWords = convertToBengaliWords(advanceValue);
    setText("advance", `${advanceBengali}/= (${advanceWords})`);
    setText("advance-date", formattedAdvanceDate);

    // Dynamic Agreement Preamble
    const flatType = getParam("flat_type"); // '1bhk' (furnished) or '2bhk' (unfurnished)
    const parking = getParam("parking"); // 'yes', 'no', or 'partial'
    const durationInfo = calculateDurationAndTotal(
      startDate,
      endDate,
      totalRentValue
    );
    const totalAmountBengali = convertToBengaliNumerals(durationInfo.total);
    const totalAmountWords = convertToBengaliWords(durationInfo.total);
    const monthsBengali = convertToBengaliNumerals(durationInfo.months);
    const monthsWords = convertToBengaliWords(durationInfo.months);

    let preambleText = "আমি ১ম পক্ষ তপশীল বর্ণিত ফ্ল্যাট বাড়িটি ";
    if (flatType === "1bhk" && parking === "yes") {
      preambleText += "ফার্নিচার সহ এবং কার পার্কিং সহ ";
    } else if (flatType === "1bhk" && parking === "no") {
      preambleText += "ফার্নিচার সহ এবং কার পার্কিং ছাড়া ";
    } else if (flatType === "2bhk" && parking === "yes") {
      preambleText += "ফার্নিচার ছাড়া এবং কার পার্কিং সহ ";
    } else if (flatType === "2bhk" && parking === "no") {
      preambleText += "ফার্নিচার ছাড়া এবং কার পার্কিং ছাড়া ";
    } else if (parking === "partial") {
      preambleText +=
        flatType === "1bhk"
          ? "ফার্নিচার সহ এবং আংশিক কার পার্কিং সহ "
          : "ফার্নিচার ছাড়া এবং আংশিক কার পার্কিং সহ ";
    }
    preambleText += `ভাড়া দিতে চাহিলে, আপনি ২য় পক্ষ উক্ত ফ্ল্যাট বাড়িটি ভাড়া নেওয়ার ইচ্ছা পোষণ করিলে, উক্ত ফ্ল্যাট বাড়িটি আগামী ${formattedStartDate} ইংরেজি হইতে ${formattedEndDate} ইংরেজি পর্যন্ত মাসিক ${totalRentBengali}/= (${convertToBengaliWords(
      totalRentValue
    )}) টাকায় উক্ত ফ্ল্যাট বাড়িটি ভাড়া নিতে সম্মত হন। অদ্য ${formattedAdvanceDate} ইংরেজী তারিখে জামানত হিসাবে অগ্রীম নগদ ${advanceBengali}/= (${advanceWords}) টাকা প্রদান পূর্বক আগামী ${formattedStartDate} ইংরেজি হইতে ${formattedEndDate} ইংরেজি তারিখ পর্যন্ত সর্বমোট ${monthsBengali} (${monthsWords}) মাসের জন্য ${totalAmountBengali}/= (${totalAmountWords}) টাকায় ভাড়া নিতে নিম্নে উল্লেখিত শর্তাবলী মানিয়া চলার অঙ্গিকারে স্বাক্ষর প্রদান করিলেন।`;

    const preambleEl = document.getElementById("agreement-preamble");
    if (preambleEl) {
        preambleEl.textContent = preambleText;
    }

    populateDuplicates();
  } catch (error) {
    console.error("Error displaying data:", error);
    const errorDiv = document.createElement("div");
    errorDiv.textContent = "তথ্য লোড বা প্রদর্শন করতে একটি ত্রুটি ঘটেছে।";
    errorDiv.className =
      "text-red-600 text-center p-4 bg-red-100 border border-red-400 rounded my-4 mx-auto max-w-4xl print:hidden";
    const container =
      document.querySelector(".page-container") || document.body;
    container.prepend(errorDiv);
  }
}

// --- END OF FILE scripts.js ---
