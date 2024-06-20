import Link from "next/link"
import { getSEOTags } from "@/libs/seo"
import config from "@/config"

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
})

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Privacy Policy

1. Introduction

Welcome to Dubify! We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your data.

2. Information We Collect

Personal Data
We collect the following personal information when you use our services:

Name
Email address
Payment information
Non-Personal Data
We also collect non-personal data through web cookies to enhance your user experience.

3. Purpose of Data Collection

We use your personal data for the following purposes:

To process your orders and provide our services
To communicate with you regarding your account or transactions
4. Data Sharing

We value your privacy and do not share your personal data with any other parties.


5. Google data is only read to allow users to view their videos and upload dubbed videos.



6. Children's Privacy

Dubify does not knowingly collect any personal data from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.

7. Updates to This Privacy Policy

We may update this Privacy Policy from time to time. When we do, we will notify you via email. Please review the Privacy Policy periodically for any changes.

8. Contact Us

If you have any questions or concerns about our Privacy Policy, please contact us at https://x.com/_Moe3301.

By using our website, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  )
}

export default PrivacyPolicy
