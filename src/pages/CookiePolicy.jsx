const lastUpdated = "July 24, 2026";

const sections = [
  {
    title: "1. What Are Cookies?",
    body: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the site owners. Cookies help us remember your preferences, keep you signed in, and understand how you use JobPortal.",
  },
  {
    title: "2. How We Use Cookies",
    body: "JobPortal uses cookies and similar technologies to keep you logged in, remember your theme and display preferences, save your job searches and saved jobs, and analyze traffic so we can improve the platform. Some cookies are essential for the site to function, while others help us enhance your experience.",
  },
  {
    title: "3. Types of Cookies We Use",
    list: [
      {
        name: "Essential cookies",
        text: "Required for core functionality such as authentication and session management. The site cannot work properly without these.",
      },
      {
        name: "Preference cookies",
        text: "Remember choices you make, such as light/dark theme and language, to give you a more personalized experience.",
      },
      {
        name: "Analytics cookies",
        text: "Help us understand how visitors interact with JobPortal by collecting and reporting information anonymously.",
      },
      {
        name: "Functional cookies",
        text: "Enable enhanced features such as saved jobs and recent searches stored in your browser.",
      },
    ],
  },
  {
    title: "4. Managing Your Cookie Preferences",
    body: "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, if you disable essential cookies, some parts of JobPortal — such as signing in and saving jobs — may not work as expected.",
  },
  {
    title: "5. Third-Party Cookies",
    body: "In some cases we may use cookies provided by trusted third parties, for example analytics providers that help us measure and improve the performance of our platform. These third parties may set their own cookies subject to their respective privacy policies.",
  },
  {
    title: "6. Changes to This Policy",
    body: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Any changes will be posted on this page with an updated revision date.",
  },
  {
    title: "7. Contact Us",
    body: "If you have any questions about our use of cookies, please reach out to us through the Contact page or email support@jobportal.com.",
  },
];

const CookiePolicy = () => {
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
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            This Cookie Policy explains how JobPortal uses cookies and similar
            technologies to recognize you when you visit our platform. It
            describes what these technologies are, why we use them, and your
            rights to control their use.
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

export default CookiePolicy;
