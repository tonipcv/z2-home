import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for our application',
}

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-gray-700">
        <p className="italic text-sm text-gray-500">Last updated: March 2024</p>

        <section>
          <p className="mb-4">
            This Privacy Policy describes how we collect, use, and handle your information when you use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-2">We collect the following types of information:</p>
          <div className="ml-4">
            <h3 className="font-semibold mb-2">Personal Information:</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number/WhatsApp</li>
              <li>Professional information (specialty, profession)</li>
              <li>Instagram handle (where applicable)</li>
            </ul>

            <h3 className="font-semibold mb-2">Business Information:</h3>
            <ul className="list-disc ml-6">
              <li>Company size (number of employees)</li>
              <li>Revenue information</li>
              <li>Business segment</li>
              <li>Technology usage</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Processing your requests and inquiries</li>
            <li>Sending relevant updates and information</li>
            <li>Analyzing and improving our service quality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            Your data is stored in secure databases with restricted access.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-2">We do not sell your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc ml-6">
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="mt-2">
            <p>KRX Group</p>
            <p>Location: London</p>
            <p>Email: indiajade@cxlus.com</p>
            <p>Phone: +447908697238</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for use by children under the age of 13. 
            We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p>
            Our service may contain links to other websites or services. 
            We are not responsible for the privacy practices of these third-party sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services 
            and comply with legal obligations.
          </p>
        </section>
      </div>
    </main>
  )
} 