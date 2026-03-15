import { Link } from "react-router-dom";
import { Shield, Mail, ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main
      className="balloon-page relative min-h-screen overflow-hidden bg-linear-to-br from-[#f0f6ff] via-[#fff8f0] to-[#f5f0ff] text-[#2f3542]"
      data-testid="privacy-policy-page"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[8%] top-30 h-14 w-14 rounded-full bg-[#ff4757]/40 blur-sm"></div>
        <div className="absolute right-[14%] top-55 h-16 w-16 rounded-full bg-[#1e90ff]/35 blur-sm"></div>
        <div className="absolute bottom-[15%] left-[16%] h-12 w-12 rounded-full bg-[#ffd32a]/50 blur-sm"></div>
        <div className="absolute right-[10%] bottom-[25%] h-10 w-10 rounded-full bg-[#ff4757]/30 blur-sm"></div>
      </div>

      <header className="mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e90ff] hover:text-[#1f3f7a] transition-colors"
          data-testid="back-to-home-link"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </header>

      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-[0_15px_55px_-10px_rgba(26,69,149,0.25)] sm:p-12"
          data-testid="privacy-content-card"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="rounded-xl bg-[#eaf3ff] p-3">
              <Shield className="h-8 w-8 text-[#1e90ff]" />
            </div>
            <div>
              <h1
                className="text-3xl font-bold text-[#1f3f7a] sm:text-4xl"
                data-testid="privacy-heading"
              >
                Privacy Policy
              </h1>
              <p className="text-sm font-semibold text-[#5f6b7b] mt-1">
                Last Updated: January 2026
              </p>
            </div>
          </div>

          <div className="space-y-8 text-[#455a72]">
            <div data-testid="section-introduction">
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                Introduction
              </h2>
              <p className="text-sm font-medium leading-relaxed">
                Welcome to Balloon Pop Rush! SkyRadar ("we," "us," or "our") is
                committed to protecting the privacy of all our players,
                especially those under 18 years of age. This Privacy Policy
                explains how we collect, use, and safeguard your information
                when you use our game.
              </p>
            </div>

            <div data-testid="section-information-collected">
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                Information We Collect
              </h2>
              <p className="text-sm font-medium leading-relaxed mb-3">
                We collect minimal information necessary to provide you with the
                best gaming experience:
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4757] font-bold">•</span>
                  <span>
                    <strong className="text-[#1f3f7a]">Game Progress:</strong>{" "}
                    Your scores, achievements, and game settings to save your
                    progress.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4757] font-bold">•</span>
                  <span>
                    <strong className="text-[#1f3f7a]">
                      Device Information:
                    </strong>{" "}
                    Basic device type and operating system for game
                    optimization.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4757] font-bold">•</span>
                  <span>
                    <strong className="text-[#1f3f7a]">Username:</strong> A
                    display name you choose for leaderboards (no real name
                    required).
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="rounded-2xl bg-[#fff8f0] border border-[#ffd32a]/30 p-6"
              data-testid="section-childrens-privacy"
            >
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                Children's Privacy
              </h2>
              <p className="text-sm font-medium leading-relaxed mb-3">
                Balloon Pop Rush is designed to be safe for players aged 13-17.
                We comply with the Children's Online Privacy Protection Act
                (COPPA) and take extra precautions:
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd32a] font-bold">★</span>
                  <span>
                    We do NOT collect personal information such as real names,
                    addresses, or phone numbers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd32a] font-bold">★</span>
                  <span>
                    We do NOT allow direct messaging or chat between players.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd32a] font-bold">★</span>
                  <span>
                    We do NOT share any player data with third parties for
                    advertising.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd32a] font-bold">★</span>
                  <span>
                    Parents/guardians can contact us to review or delete their
                    child's data at any time.
                  </span>
                </li>
              </ul>
            </div>

            <div data-testid="section-how-we-use">
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                How We Use Your Information
              </h2>
              <p className="text-sm font-medium leading-relaxed mb-3">
                We use collected information solely to:
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#1e90ff] font-bold">•</span>
                  <span>Save and sync your game progress across devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e90ff] font-bold">•</span>
                  <span>Display your scores on leaderboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e90ff] font-bold">•</span>
                  <span>Improve game performance and fix bugs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e90ff] font-bold">•</span>
                  <span>Provide customer support when you contact us</span>
                </li>
              </ul>
            </div>

            <div data-testid="section-data-security">
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                Data Security
              </h2>
              <p className="text-sm font-medium leading-relaxed">
                We implement industry-standard security measures to protect your
                information. All data is encrypted during transmission and
                stored securely. However, no method of electronic storage is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div data-testid="section-data-retention">
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                Data Retention
              </h2>
              <p className="text-sm font-medium leading-relaxed">
                We retain your game data as long as your account is active. If
                you request deletion of your data or uninstall the game, we will
                remove your information within 30 days, except where required by
                law.
              </p>
            </div>

            <div data-testid="section-your-rights">
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                Your Rights
              </h2>
              <p className="text-sm font-medium leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4757] font-bold">•</span>
                  <span>Access the personal data we hold about you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4757] font-bold">•</span>
                  <span>Request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4757] font-bold">•</span>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4757] font-bold">•</span>
                  <span>Opt-out of any optional data collection</span>
                </li>
              </ul>
            </div>

            {/* Changes to Policy */}
            <div data-testid="section-policy-changes">
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                Changes to This Policy
              </h2>
              <p className="text-sm font-medium leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes through the game or by
                posting a notice on our website. We encourage you to review this
                policy periodically.
              </p>
            </div>

            <div
              className="rounded-2xl bg-[#eaf3ff] border border-[#1e90ff]/20 p-6"
              data-testid="section-contact"
            >
              <h2 className="text-xl font-bold text-[#1f3f7a] mb-3">
                Contact Us
              </h2>
              <p className="text-sm font-medium leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, want to
                exercise your rights, or if a parent/guardian wishes to review
                or delete their child's information, please contact us:
              </p>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white p-2">
                  <Mail className="h-5 w-5 text-[#1e90ff]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1f3f7a]">SkyRadar</p>
                  <a
                    href="mailto:privacy@skyradar.com"
                    className="text-sm font-semibold text-[#1e90ff] hover:underline"
                    data-testid="contact-email"
                  >
                    privacy@skyradar.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#5f6b7b]">
            © 2026 SkyRadar. All rights reserved.
          </p>
          <p className="text-xs font-medium text-[#5f6b7b] mt-2">
            Balloon Pop Rush - Fun for everyone!
          </p>
        </div>
      </footer>
    </main>
  );
};

export default PrivacyPolicy;
