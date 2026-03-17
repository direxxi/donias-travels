// src/components/sections/NewsletterSection.tsx
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-3">
          Stay Connected
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Stay in the Loop
        </h2>
        <p className="text-white/60 mb-8">
          Subscribe for exclusive travel deals, tips, and destination guides — delivered straight to your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <NewsletterForm />
        </div>
        <p className="text-white/30 text-xs mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
