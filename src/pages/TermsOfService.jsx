const lastUpdated = "July 24, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using JobPortal, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use the platform. We may update these terms from time to time, and your continued use of JobPortal constitutes acceptance of any changes.",
  },
  {
    title: "2. Eligibility and Accounts",
    body: "You must be at least 16 years old to create an account. You are responsible for providing accurate information, keeping your credentials confidential, and for all activity that occurs under your account. Notify us immediately if you suspect unauthorized use of your account.",
  },
  {
    title: "3. User Responsibilities",
    list: [
      {
        name: "Job seekers",
        text: "Provide truthful information in your profile and applications, and only apply to roles you genuinely intend to pursue.",
      },
      {
        name: "Employers",
        text: "Post only legitimate job openings, describe roles and compensation accurately, and handle applicant data lawfully and respectfully.",
      },
      {
        name: "All users",
        text: "Do not misrepresent your identity, harass other users, scrape the platform, or attempt to disrupt or gain unauthorized access to our systems.",
      },
    ],
  },
  {
    title: "4. Job Postings and Content",
    body: "You retain ownership of the content you submit, but grant JobPortal a non-exclusive licence to host, display, and distribute it as needed to operate the platform. We may remove any listing or content that is misleading, discriminatory, unlawful, or otherwise in breach of these terms, at our discretion and without prior notice.",
  },
  {
    title: "5. Prohibited Activities",
    body: "You may not use JobPortal to post fraudulent listings, solicit payments from applicants, distribute malware or spam, infringe intellectual property rights, or collect personal data about other users without their consent. Violations may result in suspension or permanent termination of your account.",
  },
  {
    title: "6. Disclaimer",
    body: "JobPortal is a platform that connects job seekers and employers. We do not guarantee the accuracy of any listing, the conduct of any user, or that any application will result in an interview or offer. The service is provided on an \"as is\" and \"as available\" basis without warranties of any kind.",
  },
  {
    title: "7. Limitation of Liability",
    body: "To the fullest extent permitted by law, JobPortal is not liable for any indirect, incidental, or consequential damages arising from your use of the platform, including lost opportunities, lost data, or disputes between job seekers and employers.",
  },
  {
    title: "8. Termination",
    body: "You may close your account at any time. We may suspend or terminate your access if you breach these terms or if we are required to do so by law. Provisions relating to content licences, disclaimers, and limitation of liability survive termination.",
  },
  {
    title: "9. Changes to These Terms",
    body: "We may revise these Terms of Service to reflect changes to our platform, our practices, or legal requirements. Material changes will be posted on this page with an updated revision date.",
  },
  {
    title: "10. Contact Us",
    body: "If you have any questions about these Terms of Service, please reach out to us through the Contact page or email support@jobportal.com.",
  },
];

const TermsOfService = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 relative transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-purple-200/30 dark:from-primary-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            These Terms of Service govern your use of JobPortal. They explain
            what you can expect from us and what we expect from you as a job
            seeker, employer, or visitor to the platform. Please read them
            carefully.
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {section.title}
                </h2>
                {section.body && (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section.body}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {item.name}:
                          </span>{" "}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
