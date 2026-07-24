const lastUpdated = "July 24, 2026";

const sections = [
  {
    title: "1. Introduction",
    body: "JobPortal is committed to protecting your privacy. This Privacy Policy explains what personal information we collect when you use our platform, how we use and share it, and the choices you have. By using JobPortal you agree to the practices described here.",
  },
  {
    title: "2. Information We Collect",
    list: [
      {
        name: "Account information",
        text: "Your name, email address, password, and the role you sign up with (job seeker, employer, or administrator).",
      },
      {
        name: "Profile information",
        text: "Details you choose to add such as your job title, location, skills, experience, education, and resume.",
      },
      {
        name: "Activity information",
        text: "Jobs you view, save, or apply to, searches you run, and jobs you post if you are an employer.",
      },
      {
        name: "Technical information",
        text: "Basic device and browser information, along with preferences such as your light/dark theme setting stored in your browser.",
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: "We use your information to create and secure your account, show you relevant job listings and companies, deliver your applications to employers, keep your saved jobs and preferences available across visits, respond to your support requests, and improve the platform over time.",
  },
  {
    title: "4. How We Share Your Information",
    body: "When you apply to a job, the employer who posted it receives your application and the profile details attached to it. We do not sell your personal information. We may share information with service providers who help us operate the platform, or where required by law.",
  },
  {
    title: "5. Data Storage and Security",
    body: "Some information — including your session, saved jobs, and applications — is stored locally in your browser so the platform works smoothly. We take reasonable technical and organizational measures to protect your data, though no method of transmission or storage is completely secure.",
  },
  {
    title: "6. Your Rights and Choices",
    body: "You can review and update your profile at any time from your account settings, delete jobs you have saved, and clear locally stored data through your browser. You may also request access to, correction of, or deletion of your personal information by contacting us.",
  },
  {
    title: "7. Cookies and Similar Technologies",
    body: "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the platform is used. See our Cookie Policy for full details on what we use and how to manage them.",
  },
  {
    title: "8. Children's Privacy",
    body: "JobPortal is not intended for use by anyone under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Any changes will be posted on this page with an updated revision date.",
  },
  {
    title: "10. Contact Us",
    body: "If you have any questions about this Privacy Policy or how we handle your data, please reach out to us through the Contact page or email support@jobportal.com.",
  },
];

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Your privacy matters to us. This Privacy Policy describes the
            personal information JobPortal collects when you browse jobs, apply
            to roles, or post opportunities, how we use that information, and
            the control you have over it.
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

export default PrivacyPolicy;
