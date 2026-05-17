import React from "react";
import Nav from "../component/Nav";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Bell,
  Mail,
  HeartPulse,
  Database,
  Cookie,
  Users,
} from "lucide-react";

const sections = [
  {
    id: "information-collection",
    icon: Eye,
    title: "1. Information Collection and Use",
    text: `While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
    • Name
    • Email address
    • Phone number
    • Address (for home care service inquiries)
    • Health-related information (if provided via consultation requests or intake forms)`,
  },
  {
    id: "log-data",
    icon: Database,
    title: "2. Log Data",
    text: `Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.`,
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "3. Cookies",
    text: `Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive. 
    
    We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.`,
  },
  {
    id: "use-of-information",
    icon: UserCheck,
    title: "4. Use of Your Information",
    text: `We use the information collected to:
    • Provide and maintain our home care and support services.
    • Respond to inquiries, consultation requests, and career applications.
    • Improve our website functionality and user experience.
    • Communicate with you regarding service updates, health resources, or administrative information.`,
  },
  {
    id: "hipaa-compliance",
    icon: HeartPulse,
    title: "5. HIPAA Compliance & Health Information",
    text: `As a provider of care services, we understand the sensitivity of health-related information. Any Protected Health Information (PHI) shared through our specific HIPAA-compliant intake processes is handled with the highest level of confidentiality and in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable state and federal laws.`,
  },
  {
    id: "security",
    icon: Lock,
    title: "6. Security",
    text: `The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.`,
  },
  {
    id: "third-party",
    icon: Users,
    title: "7. Third-Party Services",
    text: `We may employ third-party companies and individuals to facilitate our website (e.g., analytics, hosting providers, or CRM tools). These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.`,
  },
  {
    id: "policy-changes",
    icon: Bell,
    title: "8. Changes to This Privacy Policy",
    text: `This Privacy Policy is effective as of the date stated above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically.`,
  },
  {
    id: "contact",
    icon: Mail,
    title: "9. Contact Us",
    text: `If you have any questions about this Privacy Policy, please contact us:
    • By Email: Harmonyagency247@gmail.com
    • By Phone: 973-920-5737
    • By Mail: 1 Vernon Pl East Orange nj`,
  },
];

const Page = () => {
  const lastUpdated = "May 6, 2026";
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-slate-50 font-sans">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Harmony Support Care ("we," "our," or "us") operates the website{" "}
                <a
                  href="https://www.harmonysupport.care/"
                  className="underline hover:text-white"
                >
                  https://www.harmonysupport.care/
                </a>{" "}
                (the "Site"). This page informs you of our policies regarding
                the collection, use, and disclosure of Personal Information we
                receive from users of the Site. By using the Site, you agree to
                the collection and use of information in accordance with this
                policy.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">
                  Last updated: {lastUpdated}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="text-sm text-slate-400">
                  Effective immediately
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
              Key Principles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: HeartPulse,
                  title: "HIPAA Aligned",
                  desc: "Protected Health Information (PHI) is handled with elite healthcare privacy standards.",
                },
                {
                  icon: Lock,
                  title: "Secure Processing",
                  desc: "We use standard electronic defenses, though no method over the web is 100% guaranteeable.",
                },
                {
                  icon: UserCheck,
                  title: "Purpose Bound Data",
                  desc: "Third parties handle your data strictly to maintain operations, never for external gain.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  On This Page
                </p>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors group"
                    >
                      <section.icon className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-slate-700" />
                      <span className="truncate">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Document Content Output */}
            <div className="lg:col-span-3 space-y-14">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
                      <section.icon
                        className="text-slate-700"
                        style={{ width: "18px", height: "18px" }}
                      />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                      {section.text}
                    </p>
                  </div>
                  <div className="mt-8 border-b border-slate-100" />
                </section>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white mt-8">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Harmony Support Care. All
                rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-slate-700 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-700 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
