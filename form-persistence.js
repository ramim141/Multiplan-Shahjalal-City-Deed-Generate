// Form data persistence script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tenantForm');
    const formFields = form.querySelectorAll('input, select');
    const formId = 'tenantFormData'; // Unique ID for this form's data in localStorage
    const resetButton = document.getElementById('resetFormButton');
    
    // Load saved form data if it exists
    loadFormData();
    
    // Save form data when any field changes
    formFields.forEach(field => {
        field.addEventListener('change', saveFormData);
        // For text inputs, also save on keyup with a delay
        if (field.type === 'text' || field.type === 'tel') {
            field.addEventListener('keyup', debounce(saveFormData, 500));
        }
    });
    
    // Save form data before submitting
    form.addEventListener('submit', function() {
        saveFormData();
    });
    
    // Reset button functionality
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            if (confirm('আপনি কি নিশ্চিত যে আপনি সমস্ত ডাটা মুছে ফেলতে চান?')) {
                localStorage.removeItem(formId);
                form.reset();
            }
        });
    }
    
    // Function to save all form data to localStorage
    function saveFormData() {
        const data = {};
        
        formFields.forEach(field => {
            // Save the field's value
            data[field.name] = field.value;
        });
        
        // Store the data in localStorage
        localStorage.setItem(formId, JSON.stringify(data));
    }
    
    // Function to load saved form data from localStorage
    function loadFormData() {
        const savedData = localStorage.getItem(formId);
        
        if (savedData) {
            const data = JSON.parse(savedData);
            
            // Populate form fields with saved data
            formFields.forEach(field => {
                if (data[field.name]) {
                    field.value = data[field.name];
                }
            });
        }
    }
    
    // Debounce function to limit how often a function is called
    function debounce(func, delay) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }
});