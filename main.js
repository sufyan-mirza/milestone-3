var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var formElement = document.getElementById('resumeForm');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillElement = document.getElementById('skill');
    var experienceElement = document.getElementById('experience');
    var profilePicElement = document.getElementById('profilePic');
    var summaryElement = document.getElementById('summary');
    var countryElement = document.getElementById('country');
    var expInfoElement = document.getElementById('experience-info');
    var certificationElement = document.getElementById('certification');
    if (nameElement && emailElement && phoneElement && educationElement &&
        skillElement && experienceElement && profilePicElement &&
        countryElement && summaryElement && expInfoElement && certificationElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skill = skillElement.value;
        var experience = experienceElement.value;
        var country = countryElement.value;
        var summary = summaryElement.value;
        var expYear = expInfoElement.value;
        var certification = certificationElement.value;
        var profilePic = (_a = profilePicElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '';
        var output = "\n        <div class=\"content\">\n            <div class=\"content1\">\n                <div class=\"content-img\">\n                    <img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\"/>\n                </div>\n                <div class=\"content-skill\">\n                    <h4>SKILLS</h4>\n                    <ul>\n                        <li>").concat(skill, "</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"content-container\">  \n                <div class=\"content2\">\n                    <h1>").concat(name_1, "</h1>\n                    <div class=\"content-add\">\n                        <p>").concat(country, "</p>\n                        <p>").concat(phone, "</p>\n                        <p>").concat(email, "</p>\n                    </div>\n                    <div class=\"content-summary\">\n                        <h1>SUMMARY</h1>\n                        <p>").concat(summary, "</p>\n                    </div>\n                    <div class=\"content-experience\">\n                        <h1>EXPERIENCE</h1>\n                        <p>").concat(expYear, "</p>\n                        <p><b>").concat(skill, "</b> | ").concat(country, "</p>\n                        <p>").concat(experience, "</p>\n                    </div>\n                    <div class=\"content-education\">\n                        <h1>EDUCATION</h1>\n                        <p>").concat(education, "</p>\n                    </div>\n                    <div class=\"content-certification\">\n                        <h1>Certification</h1>\n                        <ul>\n                            <li>").concat(certification, "</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>  \n        </div>\n        ");
        var outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.innerHTML = output;
        }
        else {
            console.error("Output element not found");
        }
        // Hide the form after displaying the resume
        if (formElement) {
            formElement.style.display = 'none';
        }
    }
    else {
        console.error("Some form elements are missing");
    }
});
