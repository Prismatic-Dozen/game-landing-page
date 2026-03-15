import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Trophy,
  Timer,
  Target,
  Zap,
  Download,
  Play,
  Star,
  Users,
  Menu,
  X,
  TestTube,
  FlaskConical,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_e4784ebe-8fd2-4cee-a935-2bf3b5a354c8/artifacts/mlxnpz3l_ChatGPT%20Image%20Feb%2025%2C%202026%2C%2012_46_38%20PM%20%28Custom%29.png";

const HERO_BG =
  "https://images.unsplash.com/photo-1769552737387-b8367d5c3ece?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJhbGxvb25zJTIwYmx1ZSUyMHNreXxlbnwwfHx8fDE3NzMzMTExNTR8MA&ixlib=rb-4.1.0&q=85";

const COMMUNITY_IMAGE =
  "https://images.unsplash.com/photo-1758876018828-dcddb50bcf2a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwzfHxleGNpdGVkJTIwcGVyc29uJTIwcGxheWluZyUyMG1vYmlsZSUyMGdhbWV8ZW58MHx8fHwxNzczMzExMTU0fDA&ixlib=rb-4.1.0&q=85";

const stats = [
  { label: "Daily Pops", value: "2.6M+" },
  { label: "Global Players", value: "180K" },
  { label: "Top Combo Record", value: "x129" },
  { label: "Avg Session", value: "7m 42s" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Combo Chains",
    description:
      "Tap in rhythm to stack explosive combo multipliers and flood the board with bonus balloons.",
  },
  {
    icon: Timer,
    title: "60-Second Rush Rounds",
    description:
      "Perfect for quick sessions: one minute, one chance, one giant score to beat.",
  },
  {
    icon: Target,
    title: "Skill-Based Precision",
    description:
      "Special balloon patterns reward timing and strategy, not random luck.",
  },
  {
    icon: Trophy,
    title: "Seasonal Leaderboards",
    description:
      "Compete in weekly leagues, unlock shiny badges, and climb toward Elite Popper status.",
  },
  {
    icon: Sparkles,
    title: "Power-Up Surprises",
    description:
      "From rainbow blasts to freeze bursts, every match can flip in one dramatic pop.",
  },
  {
    icon: Users,
    title: "Friendly Challenges",
    description:
      "Invite friends, share your score card, and settle who really has the fastest fingers.",
  },
];

const gameModes = [
  {
    title: "Arcade Rush",
    description: "Fast-paced mode focused on nonstop popping and combo speed.",
    points: ["1-minute rounds", "Double-score streaks", "Ideal for beginners"],
  },
  {
    title: "Precision Pop",
    description:
      "Carefully planned patterns where perfect timing earns the biggest rewards.",
    points: ["Target balloons only", "Penalty for misses", "Great for mastery"],
  },
  {
    title: "Boss Balloon Blitz",
    description:
      "Big balloon bosses appear with special rules and giant bonus drops.",
    points: [
      "Unique boss mechanics",
      "Limited event unlocks",
      "Rare cosmetic rewards",
    ],
  },
];

const testimonials = [
  {
    name: "Mia R.",
    quote:
      "I downloaded it for quick breaks and now I can’t stop chasing my own score. It feels super satisfying.",
  },
  {
    name: "Jalen T.",
    quote:
      "Balloon Pop Rush is that rare game that’s easy to start but actually takes skill to master.",
  },
  {
    name: "Priya K.",
    quote:
      "The animations are joyful, the rounds are short, and every pop feels rewarding. 10/10 stress buster.",
  },
];

const faqs = [
  {
    question: "Is Balloon Pop Rush free to play?",
    answer:
      "Yes. The core game is free with optional cosmetic upgrades and event passes for players who want extra flair.",
  },
  {
    question: "Can I play offline?",
    answer:
      "Arcade and Precision modes can be played offline. Leaderboards and friend challenges require internet.",
  },
  {
    question: "How do combo multipliers work?",
    answer:
      "Each accurate pop increases your combo chain. Misses reset the chain, so timing and focus are key.",
  },
  {
    question: "Is the game family-friendly?",
    answer:
      "Absolutely. Balloon Pop Rush is designed to be colorful, upbeat, and suitable for all ages.",
  },
];

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Modes", href: "#modes" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function BalloonPopLandingPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main
      className="balloon-page relative overflow-hidden text-[#2f3542]"
      data-testid="balloon-pop-landing-page"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute left-[8%] top-30 h-14 w-14 rounded-full bg-[#ff4757]/40 blur-sm"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          data-testid="decorative-balloon-red"
        />
        <motion.div
          className="absolute right-[14%] top-55 h-16 w-16 rounded-full bg-[#1e90ff]/35 blur-sm"
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
          data-testid="decorative-balloon-blue"
        />
        <motion.div
          className="absolute bottom-[15%] left-[16%] h-12 w-12 rounded-full bg-[#ffd32a]/50 blur-sm"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 5.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          data-testid="decorative-balloon-yellow"
        />
      </div>

      <header
        className="sticky top-0 z-50 border-b border-white/40 surface-glass"
        data-testid="site-header"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            className="flex items-center gap-3"
            href="#home"
            data-testid="header-logo-link"
          >
            <img
              src={LOGO_URL}
              alt="Balloon Pop Rush logo"
              className="h-11 w-11 rounded-xl border border-white/70 object-cover"
              data-testid="header-logo-image"
            />
            <span
              className="text-lg font-bold text-[#1f3f7a]"
              data-testid="header-brand-name"
            >
              Balloon Pop Rush
            </span>
          </a>

          <div className="flex items-center gap-3" data-testid="header-actions">
            <nav
              className="hidden items-center gap-7 md:flex"
              data-testid="header-nav"
            >
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-semibold text-[#3566ad] transition-colors duration-200 hover:text-[#ff4757]"
                  data-testid={`header-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Button
              className="pop-btn hidden rounded-full bg-[#ff4757] px-6 py-2 font-bold text-white sm:inline-flex"
              data-testid="header-download-button"
            >
              Download
            </Button>

            <Button
              variant="outline"
              className="md:hidden"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              data-testid="mobile-nav-toggle-button"
              aria-label="Toggle mobile menu"
            >
              {mobileNavOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileNavOpen && (
          <div
            className="border-t border-white/60 bg-white px-4 py-3 md:hidden"
            data-testid="mobile-nav-menu"
          >
            <nav className="flex flex-col gap-3" data-testid="mobile-nav-links">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-lg bg-[#f4f8ff] px-3 py-2 text-sm font-bold text-[#3566ad]"
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section
        id="home"
        className="hero-ribbon relative"
        data-testid="hero-section"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
            data-testid="hero-content"
          >
            <span
              className="inline-flex items-center rounded-full bg-[#ffd32a] px-4 py-2 text-sm font-bold text-[#2f3542]"
              data-testid="hero-badge"
            >
              <Star className="mr-2 h-4 w-4" /> New Limited Event: Rainbow
              Combos
            </span>

            <h1
              className="max-w-xl text-4xl font-bold leading-tight text-[#1f3f7a] sm:text-5xl lg:text-6xl"
              data-testid="hero-heading"
            >
              Balloon Pop Rush lets you pop faster, score bigger, and rule the
              rush.
            </h1>

            <p
              className="max-w-xl text-sm font-semibold text-[#455a72] sm:text-base"
              data-testid="hero-description"
            >
              Balloon Pop Rush is the feel-good arcade game where one tap can
              launch huge combo chains. Quick rounds, colorful effects, and
              competitive leaderboards make every session exciting.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              data-testid="hero-cta-group"
            >
              <Button
                className="confetti-sheen pop-btn rounded-full bg-[#ff4757] px-8 py-6 text-base font-bold uppercase tracking-wide text-white"
                data-testid="hero-play-now-button"
              >
                <Play className="mr-2 h-4 w-4" /> Play Now
              </Button>
              <Button
                variant="outline"
                className="secondary-pop-btn rounded-full border-2 border-[#1e90ff] bg-white px-8 py-6 text-base font-bold text-[#1e90ff]"
                data-testid="hero-download-button"
              >
                <Download className="mr-2 h-4 w-4" /> Download App
              </Button>
              <a
                href="https://play.google.com/store/apps/details?id=com.skyradar.balloonpoprush"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-[#2ed573] bg-white px-8 py-6 text-base font-bold text-[#2ed573]"
                  data-testid="hero-early-testing-button"
                >
                  <FlaskConical animate="true" /> Join Early Testing
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            data-testid="hero-visual"
          >
            <div
              className="surface-glass relative overflow-hidden rounded-4xl border border-white/80 p-4 shadow-[0_15px_55px_-10px_rgba(26,69,149,0.35)]"
              data-testid="hero-phone-frame"
            >
              <img
                src={HERO_BG}
                alt="Colorful balloons in the sky"
                className="h-115 w-full rounded-[1.4rem] object-cover object-center"
                data-testid="hero-background-image"
              />

              <div
                className="absolute inset-x-8 bottom-6 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-md"
                data-testid="hero-logo-card"
              >
                <img
                  src={LOGO_URL}
                  alt="Balloon Pop Rush app icon"
                  className="mx-auto h-24 w-24 rounded-2xl object-cover"
                  data-testid="hero-logo-image"
                />
                <p
                  className="mt-3 text-center text-sm font-bold text-[#1f3f7a]"
                  data-testid="hero-logo-caption"
                >
                  Tap to launch juicy pop combos!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
        data-testid="stats-section"
      >
        <div
          className="grid gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_8px_35px_-15px_rgba(13,61,155,0.35)] sm:grid-cols-2 lg:grid-cols-4"
          data-testid="stats-grid"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-[#f8fbff] p-4"
              data-testid={`stat-card-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <p
                className="text-sm font-semibold text-[#5f6b7b]"
                data-testid={`stat-label-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </p>
              <p
                className="mt-1 text-2xl font-bold text-[#1f3f7a]"
                data-testid={`stat-value-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        data-testid="features-section"
      >
        <h2
          className="text-base font-semibold uppercase tracking-[0.18em] text-[#3566ad]"
          data-testid="features-eyebrow"
        >
          Why players love it
        </h2>
        <p
          className="mt-3 max-w-2xl text-base md:text-lg text-[#2f3542]"
          data-testid="features-heading"
        >
          Built for instant fun, fast mastery, and endless replay value.
        </p>

        <div
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          data-testid="features-grid"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="rounded-3xl border-white/60 bg-white shadow-[0_14px_42px_-22px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1"
                data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardHeader>
                  <div
                    className="mb-4 w-fit rounded-xl bg-[#eaf3ff] p-3"
                    data-testid={`feature-icon-wrap-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <Icon className="h-5 w-5 text-[#1e90ff]" />
                  </div>
                  <CardTitle
                    className="text-xl text-[#1f3f7a]"
                    data-testid={`feature-title-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className="text-sm font-medium text-[#57606f]"
                    data-testid={`feature-description-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section
        id="modes"
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        data-testid="modes-section"
      >
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-5" data-testid="modes-content">
            <h2
              className="text-base font-semibold uppercase tracking-[0.18em] text-[#3566ad]"
              data-testid="modes-eyebrow"
            >
              Gameplay modes
            </h2>
            <p
              className="max-w-2xl text-base md:text-lg text-[#2f3542]"
              data-testid="modes-heading"
            >
              One game, multiple ways to chase that perfect pop streak.
            </p>

            <div className="space-y-4" data-testid="modes-list">
              {gameModes.map((mode) => (
                <div
                  key={mode.title}
                  className="rounded-3xl border border-white/60 bg-white p-6 shadow-[0_10px_35px_-20px_rgba(0,0,0,0.35)]"
                  data-testid={`mode-card-${mode.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <h3
                    className="text-xl font-bold text-[#1f3f7a]"
                    data-testid={`mode-title-${mode.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {mode.title}
                  </h3>
                  <p
                    className="mt-2 text-sm font-medium text-[#57606f]"
                    data-testid={`mode-description-${mode.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {mode.description}
                  </p>
                  <ul
                    className="mt-4 space-y-2"
                    data-testid={`mode-points-${mode.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {mode.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm font-semibold text-[#3566ad]"
                        data-testid={`mode-point-${mode.title.toLowerCase().replace(/\s+/g, "-")}-${point.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-testid="modes-visual-panel">
            <img
              src={COMMUNITY_IMAGE}
              alt="Happy player enjoying mobile game"
              className="h-full min-h-[360px] w-full rounded-[2rem] object-cover object-center shadow-[0_20px_45px_-22px_rgba(15,53,127,0.5)]"
              data-testid="modes-community-image"
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/60 bg-white/85 p-4"
              data-testid="modes-overlay-card"
            >
              <p
                className="text-sm font-semibold text-[#5f6b7b]"
                data-testid="modes-overlay-label"
              >
                Live Tournament
              </p>
              <p
                className="mt-1 text-xl font-bold text-[#1f3f7a]"
                data-testid="modes-overlay-title"
              >
                Weekend Pop-Off starts in 03:19:27
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="community"
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        data-testid="community-section"
      >
        <h2
          className="text-base font-semibold uppercase tracking-[0.18em] text-[#3566ad]"
          data-testid="community-eyebrow"
        >
          Community feedback
        </h2>
        <p
          className="mt-3 max-w-2xl text-base md:text-lg text-[#2f3542]"
          data-testid="community-heading"
        >
          Players describe Balloon Pop Rush as the perfect mix of chill and
          challenge.
        </p>

        <div
          className="mt-8 grid gap-5 md:grid-cols-3"
          data-testid="testimonials-grid"
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/70 bg-white p-6 shadow-[0_8px_25px_-16px_rgba(0,0,0,0.3)]"
              data-testid={`testimonial-card-${item.name.toLowerCase().replace(/\W+/g, "-")}`}
            >
              <p
                className="text-sm font-semibold leading-relaxed text-[#3d4b5b]"
                data-testid={`testimonial-quote-${item.name.toLowerCase().replace(/\W+/g, "-")}`}
              >
                “{item.quote}”
              </p>
              <p
                className="mt-4 text-sm font-bold text-[#1f3f7a]"
                data-testid={`testimonial-name-${item.name.toLowerCase().replace(/\W+/g, "-")}`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
        data-testid="faq-section"
      >
        <h2
          className="text-base font-semibold uppercase tracking-[0.18em] text-[#3566ad]"
          data-testid="faq-eyebrow"
        >
          Common questions
        </h2>
        <p
          className="mt-3 text-base md:text-lg text-[#2f3542]"
          data-testid="faq-heading"
        >
          Everything you need to know before your first pop streak.
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-8 rounded-3xl border border-white/70 bg-white px-6"
          data-testid="faq-accordion"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-b border-[#eaf0f8] last:border-b-0"
              data-testid={`faq-item-${index + 1}`}
            >
              <AccordionTrigger
                className="text-left text-base font-bold text-[#1f3f7a] no-underline hover:no-underline"
                data-testid={`faq-question-${index + 1}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-sm font-medium text-[#57606f]"
                data-testid={`faq-answer-${index + 1}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section
        className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8"
        data-testid="final-cta-section"
      >
        <div className="rounded-4xl bg-linear-to-r from-[#ff6b81] via-[#ff4757] to-[#ff7f50] p-8 text-white shadow-[0_18px_45px_-18px_rgba(255,71,87,0.7)] sm:p-12">
          <h2
            className="text-4xl font-bold sm:text-5xl"
            data-testid="final-cta-heading"
          >
            Ready to start your pop legend?
          </h2>
          <p
            className="mt-4 max-w-2xl text-sm font-semibold sm:text-base"
            data-testid="final-cta-description"
          >
            Jump in now and compete for the top score before this week’s
            leaderboard season closes.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-4"
            data-testid="final-cta-buttons"
          >
            <Button
              className="rounded-full bg-white px-8 py-6 text-base font-bold text-[#ff4757] hover:bg-white hover:text-[#ff4757]"
              data-testid="final-play-button"
            >
              <Play className="mr-2 h-4 w-4" /> Play Free
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent px-8 py-6 text-base font-bold text-white"
              data-testid="final-download-button"
            >
              <Download className="mr-2 h-4 w-4" /> Download App
            </Button>
            <a
              href="https://play.google.com/store/apps/details?id=com.skyradar.balloonpoprush"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="rounded-full border-2 border-white bg-transparent px-8 py-6 text-base font-bold text-white"
                data-testid="hero-early-testing-button"
              >
                <FlaskConical animate="true" /> Join Early Testing
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer
        className="border-t border-white/70 px-4 py-8 sm:px-6 lg:px-8"
        data-testid="site-footer"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
          <p
            className="text-sm font-semibold text-[#4f5d70]"
            data-testid="footer-copyright"
          >
            © {new Date().getFullYear()} Balloon Pop Rush. Pop responsibly, have
            fun always.
          </p>
          <div className="flex items-center gap-5" data-testid="footer-links">
            <a
              href="#faq"
              className="text-sm font-bold text-[#3566ad]"
              data-testid="footer-link-faq"
            >
              FAQ
            </a>
            <a
              href="#community"
              className="text-sm font-bold text-[#3566ad]"
              data-testid="footer-link-community"
            >
              Community
            </a>
            <a
              href="#home"
              className="text-sm font-bold text-[#3566ad]"
              data-testid="footer-link-back-to-top"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
