import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Privacy Policy - Secure Professional Platform',
  description: 'Privacy Policy for our secure professional platform - Available on App Store',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: March 2024</p>

        <div className="space-y-12 text-gray-600">
          <section>
            <p className="text-lg leading-relaxed">
              This Privacy Policy describes our commitment to protecting your privacy and securing your data on our professional platform, 
              which is available on the Apple App Store and Google Play Store.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Limited Data Collection</h2>
            <p className="text-lg leading-relaxed mb-4">
              We maintain a minimalist approach to data collection. We only collect:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Login credentials (username/email and encrypted password) that you create</li>
              <li>Basic account information necessary for platform functionality</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              We do not collect any additional personal information, tracking data, or unnecessary user data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Security Measures</h2>
            <p className="text-lg leading-relaxed mb-4">
              Your security is our top priority. We implement industry-leading security measures:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>All data is encrypted using advanced encryption protocols</li>
              <li>Passwords are securely hashed and never stored in plain text</li>
              <li>Regular security audits and updates</li>
              <li>Secure SSL/TLS encryption for all data transmission</li>
              <li>Compliance with industry security standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data Usage</h2>
            <p className="text-lg leading-relaxed">
              Your login credentials are used solely for authentication purposes and accessing our platform. 
              We do not use your data for marketing, analytics, or share it with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Control</h2>
            <p className="text-lg leading-relaxed mb-4">
              You have complete control over your account:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Change your password at any time</li>
              <li>Request account deletion</li>
              <li>Access your account information</li>
              <li>Update your login credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Platform Availability</h2>
            <p className="text-lg leading-relaxed">
              Our application is available on the Apple App Store and Google Play Store, 
              meeting their respective privacy and security requirements. We maintain regular updates 
              to ensure compliance with platform guidelines and security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Changes to This Policy</h2>
            <p className="text-lg leading-relaxed">
              We may update this Privacy Policy to reflect changes in our practices or for legal compliance. 
              We will notify you of any material changes through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
            <p className="mb-4 text-lg">If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="mt-4 space-y-1">
              <p className="font-medium text-gray-900">KRX Group</p>
              <p>Location: London</p>
              <p>Email: indiajade@cxlus.com</p>
              <p>Phone: +447908697238</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Compliance</h2>
            <p className="text-lg leading-relaxed">
              Our privacy practices comply with relevant data protection regulations and app store guidelines. 
              We regularly review and update our practices to maintain the highest standards of data protection 
              and user privacy.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 