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

const rentOptions = {
  15000: "১৫,০০০/= (পনেরো হাজার টাকা)",
  20000: "২০,০০০/= (বিশ হাজার টাকা)",
  25000: "২৫,০০০/= (পঁচিশ হাজার টাকা)",
  30000: "৩০,০০০/= (পঁয়ত্রিশ হাজার টাকা)",
  35000: "৩৫,০০০/= (পঁইত্রিশ হাজার টাকা)",
  40000: "৪০,০০০/= (চল্লিশ হাজার টাকা)",
  45000: "৪৫,০০০/= (পঁয়তাল্লিশ হাজার টাকা)",
  50000: "৫০,০০০/= (পঞ্চাশ হাজার টাকা)",
  55000: "৫৫,০০০/= (পঞ্চান্ন হাজার টাকা)",
  60000: "৬০,০০০/= (ষাট হাজার টাকা)",
  65000: "৬৫,০০০/= (পঁয়ষট্টি হাজার টাকা)",
  70000: "৭০,০০০/= (সত্তর হাজার টাকা)",
  75000: "৭৫,০০০/= (পঁচাত্তর হাজার টাকা)",
  80000: "৮০,০০০/= (আশি হাজার টাকা)",
  85000: "৮৫,০০০/= (পঁচাশি হাজার টাকা)",
  90000: "৯০,০০০/= (নব্বই হাজার টাকা)",
  95000: "৯৫,০০০/= (পঁচানব্বই হাজার টাকা)",
  100000: "১,০০,০০০/= (এক লক্ষ টাকা)",
  105000: "১,০৫,০০০/= (এক লক্ষ পাঁচ হাজার টাকা)",
};

const advanceOptions = {
  5000: "৫,০০০/= (পাঁচ হাজার টাকা)",
  10000: "১০,০০০/= (দশ হাজার টাকা)",
  15000: "১৫,০০০/= (পনেরো হাজার টাকা)",
  20000: "২০,০০০/= (বিশ হাজার টাকা)",
  25000: "২৫,০০০/= (পঁচিশ হাজার টাকা)",
  30000: "৩০,০০০/= (ত্রিশ হাজার টাকা)",
  35000: "৩৫,০০০/= (পঁয়ত্রিশ হাজার টাকা)",
  40000: "৪০,০০০/= (চল্লিশ হাজার টাকা)",
  45000: "৪৫,০০০/= (পঁয়তাল্লিশ হাজার টাকা)",
  50000: "৫০,০০০/= (পঞ্চাশ হাজার টাকা)",
  55000: "৫৫,০০০/= (পঞ্চান্ন হাজার টাকা)",
  60000: "৬০,০০০/= (ষাট হাজার টাকা)",
};
// Function to display data from URL parameters
function displayData() {
  const urlParams = new URLSearchParams(window.location.search);

  // Owner info (unchanged)
  const ownerId = urlParams.get("owner_id");
  const owner = owners.find((o) => o.id === ownerId);
  let ownerInfo = "";
  if (owner) {
    if (owner.representative.exists) {
      ownerInfo = `${owner.fullName} (পক্ষে ${
        owner.representative.name
      }), পিতাঃ ${owner.representative.father}, ঠিকানাঃ ${
        owner.ownerAddress
      }, মোবাইলঃ ${convertToBanglaNumeral(
        owner.ownerContact
      )}. প্রতিনিধির ঠিকানাঃ ${
        owner.representative.address
      }, মোবাইলঃ ${convertToBanglaNumeral(owner.representative.mobiles)}.`;
    } else {
      ownerInfo = `${owner.fullName}, ঠিকানাঃ ${
        owner.ownerAddress
      }, মোবাইলঃ ${convertToBanglaNumeral(owner.ownerContact)}.`;
    }
  } else {
    ownerInfo = "[মালিক পক্ষের তথ্য এখানে প্রদর্শিত হবে]";
  }
  document.getElementById("owner-section").innerHTML = ownerInfo;
  // Tenant info
  const tenantName = urlParams.get("tenant_name") || "";
  const voterId = urlParams.get("voter_id") || "";
  const fatherName = urlParams.get("father_name") || "";
  const motherName = urlParams.get("mother_name") || "";
  let holdingNumber = urlParams.get("holding_number") || "";
  if (holdingNumber && /^[0-9]+$/.test(holdingNumber)) {
    holdingNumber = convertToBanglaNumeral(holdingNumber);
  }
  const village = urlParams.get("village") || "";
  const postOffice = urlParams.get("post_office") || "";
  const sadar = urlParams.get("sadar") || "";
  const pourosoba = urlParams.get("pourosoba") || "";
  const zila = urlParams.get("zila") || "";
  const division = urlParams.get("division") || "";
  let mobile = urlParams.get("mobile") || "";
  if (mobile && /^[0-9]+$/.test(mobile)) {
    mobile = convertToBanglaNumeral(mobile);
  }
  let postCode = urlParams.get("post-code") || "";
  if (postCode && /^[0-9]+$/.test(postCode)) {
    postCode = convertToBanglaNumeral(postCode);
  }
  const cityCorporation = urlParams.get("city_corporation") || "";

  document.getElementById("tenant-address-div").innerHTML = `
  <strong class="font-semibold">ভাড়াটিয়ার তথ্য:</strong> 
  ${
    tenantName
      ? `নামঃ <span class="text-amber-700 print:text-black">${tenantName}</span>`
      : ""
  } 
  ${
    voterId
      ? `${
          tenantName ? ", " : ""
        }ভোটার আইডি নং- <span class="text-amber-700 print:text-black">${voterId}</span>`
      : ""
  } 
  ${
    fatherName
      ? `${
          tenantName || voterId ? ", " : ""
        }পিতাঃ <span class="text-amber-700 print:text-black">${fatherName}</span>`
      : ""
  } 
  ${
    motherName
      ? `${
          tenantName || voterId || fatherName ? ", " : ""
        }মাতাঃ <span class="text-amber-700 print:text-black">${motherName}</span>`
      : ""
  } 
  ${
    holdingNumber ||
    village ||
    postOffice ||
    sadar ||
    pourosoba ||
    zila ||
    division ||
    cityCorporation
      ? `${
          tenantName || voterId || fatherName || motherName ? ", " : ""
        }ঠিকানাঃ `
      : ""
  } 
  ${
    holdingNumber
      ? `বাসা/হোল্ডিং নং- <span class="text-amber-700 print:text-black">${holdingNumber}</span>`
      : ""
  } 
  ${
    village
      ? `${
          holdingNumber ? ", " : ""
        }গ্রাম/রাস্তা- <span class="text-amber-700 print:text-black">${village}</span>`
      : ""
  } 
  ${
    postOffice
      ? `${
          holdingNumber || village ? ", " : ""
        }ডাকঘরঃ <span class="text-amber-700 print:text-black">${postOffice}</span>${
          postCode
            ? `-<span class="text-amber-700 print:text-black">${postCode}</span>`
            : ""
        }`
      : ""
  } 
  ${
    sadar
      ? `${
          holdingNumber || village || postOffice ? ", " : ""
        }<span class="text-amber-700 print:text-black">${sadar}</span>`
      : ""
  } 
  ${
    pourosoba
      ? `${
          holdingNumber || village || postOffice || sadar ? ", " : ""
        }<span class="text-amber-700 print:text-black">${pourosoba}</span>`
      : ""
  } 
  ${
    zila
      ? `${
          holdingNumber || village || postOffice || sadar || pourosoba
            ? ", "
            : ""
        }<span class="text-amber-700 print:text-black">${zila}</span>`
      : ""
  } 
  ${
    division
      ? `${
          holdingNumber || village || postOffice || sadar || pourosoba || zila
            ? ", "
            : ""
        }<span class="text-amber-700 print:text-black">${division}</span>`
      : ""
  } 
  ${
    cityCorporation
      ? `${
          holdingNumber ||
          village ||
          postOffice ||
          sadar ||
          pourosoba ||
          zila ||
          division
            ? ", "
            : ""
        }<span class="text-amber-700 print:text-black">${cityCorporation}</span>`
      : ""
  } 
  ${
    mobile
      ? `${
          tenantName ||
          voterId ||
          fatherName ||
          motherName ||
          holdingNumber ||
          village ||
          postOffice ||
          sadar ||
          pourosoba ||
          zila ||
          division ||
          cityCorporation
            ? ", "
            : ""
        }মোবাইল নাম্বারঃ <span class="text-amber-700 print:text-black">${mobile}</span>`
      : ""
  }।
`;
  // Flat information (unchanged)
  const flat = urlParams.get("flat") || "[ফ্ল্যাট]";
  const unit = urlParams.get("unit") || "[ইউনিট]";
  document.getElementById("flat-info").textContent = flat + " " + unit;

  // Bill responsibilities (unchanged)
  const gas = urlParams.get("gas");
  document.getElementById("gas-responsibility").textContent =
    gas === "yes" ? "১ম পক্ষ/মালিক" : "২য় পক্ষ/ভাড়াটিয়া";
  const electricity = urlParams.get("electricity");
  document.getElementById("electricity-responsibility").textContent =
    electricity === "yes" ? "১ম পক্ষ/মালিক" : "২য় পক্ষ/ভাড়াটিয়া";

  // Rental information (unchanged)
  const totalRentValue = urlParams.get("total_rent") || "[মোট ভাড়া]";
  const totalRentText = rentOptions[totalRentValue] || "[মোট ভাড়া]";

  // Agreement preamble (unchanged)
  const startDate = formatBanglaDate(urlParams.get("start_date"));
  const endDate = formatBanglaDate(urlParams.get("end_date"));
  const advanceValue = urlParams.get("advance") || "[অগ্রীম]";
  const advanceText = advanceOptions[advanceValue] || "[অগ্রীম]";
  const advanceDate = formatBanglaDate(urlParams.get("advance_date"));
  const duration = urlParams.get("duration") || "[মেয়াদ]";

  function formatBanglaMoneyWithText(value) {
    const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    const banglaWords = {
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
      20: "বিশ",
      30: "ত্রিশ",
      40: "চল্লিশ",
      50: "পঞ্চাশ",
      60: "ষাট",
      70: "সত্তর",
      80: "আশি",
      90: "নব্বই",
      100: "একশত",
      1000: "এক হাজার",
      10000: "দশ হাজার",
      20000: "বিশ হাজার",
      30000: "ত্রিশ হাজার",
      40000: "চল্লিশ হাজার",
      50000: "পঞ্চাশ হাজার",
      60000: "ষাট হাজার",
      70000: "সত্তর হাজার",
      80000: "আশি হাজার",
      90000: "নব্বই হাজার",
      100000: "এক লক্ষ",
    };

    const num = parseInt(value);
    // Convert to Bangla numerals and add commas every 3 digits from left to right
    let numeralStr = num
      .toString()
      .split("")
      .map((digit) => banglaNumerals[parseInt(digit)])
      .join("");
    numeralStr = numeralStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/=";

    let wordStr = banglaWords[num];
    if (!wordStr) {
      if (num >= 10000) {
        const thousands = Math.floor(num / 1000);
        const remainder = num % 1000;
        wordStr = `${
          banglaWords[thousands * 1000] ||
          `${convertToBanglaNumeral(thousands)} হাজার`
        }${
          remainder
            ? ` ${banglaWords[remainder] || convertToBanglaNumeral(remainder)}`
            : ""
        }`;
      } else if (num >= 1000) {
        const thousands = Math.floor(num / 1000);
        const remainder = num % 1000;
        wordStr = `${banglaWords[thousands]} হাজার${
          remainder
            ? ` ${banglaWords[remainder] || convertToBanglaNumeral(remainder)}`
            : ""
        }`;
      } else {
        wordStr = convertToBanglaNumeral(num); // Fallback
      }
    }
    return `${numeralStr} (${wordStr} টাকা)`;
  }

  // Calculate due payment (total rent - advance)
  let duePaymentText = "[বাকি টাকা]";
  if (
    totalRentValue &&
    advanceValue &&
    !isNaN(totalRentValue) &&
    !isNaN(advanceValue)
  ) {
    const duePayment = parseInt(totalRentValue) - parseInt(advanceValue);
    duePaymentText = formatBanglaMoneyWithText(duePayment); // Format with commas
  }

  document.getElementById("total-rent-condition").textContent = duePaymentText;

  const preamble = `
  আমি ১ম পক্ষ তৎপক্ষে মালিক পক্ষ উল্লেখিত ফ্ল্যাট বাড়িটি ভাড়া দিতে চাইলে, আপনি ২য় পক্ষ উক্ত ফ্ল্যাট বাড়িটি ভাড়া নেওয়ার ইচ্ছা পোষণ করিলে, 
  উক্ত ফ্ল্যাট বাড়িটি আগামী ${startDate} ইংরেজি হইতে ${endDate} ইংরেজি পর্যন্ত ${duePaymentText} বাকি টাকায় ${duration} এর জন্য 
  উক্ত ফ্ল্যাট বাড়িটি ভাড়া নিতে সম্মত হন। অদ্য ${advanceDate} ইংরেজী তারিখে জামানত বাবদ অগ্রীম নগদ ${advanceText} টাকা প্রদান পূর্বক 
  আগামী ${startDate} ইংরেজি হইতে ${endDate} ইংরেজি তারিখ পর্যন্ত ভাড়া নিতে নিম্নে উল্লেখিত শর্তাবলী মানিয়া চলার অঙ্গিকারে স্বাক্ষর প্রদান করিলেন।
`;
  document.getElementById("agreement-preamble").innerHTML = preamble;
  document.getElementById("agreement-preamble").innerHTML = preamble;
}

// Helper functions (unchanged)
function convertToBanglaWords(number) {
  const banglaNumbers = {
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
    20: "বিশ",
    30: "ত্রিশ",
    40: "চল্লিশ",
    50: "পঞ্চাশ",
    60: "ষাট",
    70: "সত্তর",
    80: "আশি",
    90: "নব্বই",
  };
  number = parseInt(number);
  if (number >= 1000) {
    const thousands = Math.floor(number / 1000);
    return banglaNumbers[thousands] || thousands.toString();
  }
  return banglaNumbers[number] || number.toString();
}

function formatBanglaDate(dateString) {
  if (!dateString) return "[তারিখ]";
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const banglaDay = convertToBanglaNumeral(day);
  const banglaMonth = convertToBanglaNumeral(month);
  const banglaYear = convertToBanglaNumeral(year);
  return `${banglaDay}/${banglaMonth}/${banglaYear}`;
}

function convertToBanglaNumeral(number) {
  const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaNumerals[parseInt(digit)])
    .join("");
}

function formatBanglaMoney(amount) {
  if (!amount) return "[টাকা]";
  return convertToBanglaNumeral(amount);
}

function getParking(parkingValue) {
  if (parkingValue === "yes") return "কার পার্কিং সহ";
  if (parkingValue === "partial") return "আংশিক কার পার্কিং সহ";
  return "কার পার্কিং ছাড়া";
}

function addCondition() {
  const conditionsList = document.getElementById("conditions-list");
  const newCondition = document.createElement("li");
  newCondition.setAttribute("contenteditable", "true");
  newCondition.setAttribute("tabindex", "0");
  newCondition.className =
    "relative block cursor-text p-1 transition duration-300 ease-in-out rounded hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:ring-2 focus:ring-amber-400 print:cursor-default print:p-0 print:bg-transparent print:shadow-none print:ring-0";
  newCondition.textContent = "এখানে নতুন শর্ত লিখুন...";
  const deleteButton = document.createElement("span");
  deleteButton.className =
    "delete-item ml-2.5 text-red-500 font-bold inline-block align-middle text-xs px-1 rounded select-none hover:text-red-600 hover:bg-red-100 cursor-pointer print:hidden";
  deleteButton.textContent = "⛔";
  deleteButton.setAttribute("onclick", "deleteCondition(this)");
  deleteButton.setAttribute("title", "এই শর্তটি মুছুন");
  newCondition.appendChild(deleteButton);
  conditionsList.appendChild(newCondition);
  newCondition.focus();
}

function deleteCondition(button) {
  if (confirm("আপনি কি নিশ্চিত যে আপনি এই শর্তটি মুছতে চান?")) {
    button.parentElement.remove();
  }
}

// Call displayData on page load
document.addEventListener("DOMContentLoaded", displayData);
