// Animations
AOS.init({
    anchorPlacement: 'top-left',
    duration: 1000
});

// Add your javascript here

// Fetch data from LinkedIn (replace with actual API call or data source)
// Example data (replace with your actual data structure)
const certifications = [
    {
        title: "Programming in Python",
        issuingOrganization: "Meta",
        issueDate: "July 2024",
        credentialID: ""
    },
    {
        title: "AWS Fargate - overview",
        issuingOrganization: "Amazon Web Services",
        issueDate: "July 2024",
        credentialID: "E-O064RV"
    },
    {
        title: "Introduction to Containers",
        issuingOrganization: "Amazon Web Services",
        issueDate: "July 2024",
        credentialID: "E-KVOJP1"
    }
    // Add more certifications as needed
];
// Function to dynamically generate HTML for certifications
function generateCertificationHTML(certification) {
    return `<div class="timeline-card timeline-card-success certification" data-aos="fade-in" data-aos-delay="200">
                <div class="timeline-head px-4 pt-3"> <div class="h5">${certification.title}</div> </div>
                <div class="timeline-body px-4 pb-4">
                    <div class="text-muted text-small mb-3">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="text-muted h6">Issuing Organization: ${certification.issuingOrganization}</div>
                                <div class="text-muted h6">Issue Date: ${certification.issueDate}</div>
                                <div class="text-muted h6">Credential ID: ${certification.credentialID}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
}

// Display certifications on the page
const certificationsContainer = document.getElementById("certificationsList");
certifications.forEach(certification => {
    certificationsContainer.innerHTML += generateCertificationHTML(certification);
});