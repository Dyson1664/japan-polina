import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Scale, Shield, AlertCircle } from "lucide-react";

// NOTE:
// - Section 2 ("Refunds & Cancellations") is rendered via custom layout (hardcoded)
// - Therefore, it is NOT included in TERMS_SECTIONS to avoid duplicate content.
// - Fixed email: bookings@imaginebeyondtravel.com

const TERMS_SECTIONS = [
  {
    title: "1. Booking & Payment",
    content: [
      "Deposit (non-refundable): Your spot is confirmed once the USD $500 deposit is received.",
      "Balance: The remaining balance is due no later than 60 days before the tour start date.",
      "Deposits and Balance payments are non refundable",
      "All prices are quoted and charged in United States Dollars (USD).",
      "The traveler who paid a deposit may assign/transfer that deposit and booking to another person by written notice with the new traveler’s full name and contact details. Transfer is only permitted to the same tour date and may be subject to any third-party change fees.",
      "You must be 18 years or older to make a booking.",
    ],
  },

  // Section 2 is intentionally excluded from TERMS_SECTIONS (see custom render below)

  {
    title: "3. Travel & Medical Insurance (Mandatory)",
    content: [
      "Adequate travel insurance is mandatory and must cover medical expenses, emergency evacuation, repatriation, trip cancellation, interruption, and personal liability.",
      "Participants are responsible for ensuring they are medically and physically fit to travel.",
      "Failure to maintain adequate insurance releases Imagine Beyond Travel (IBT) from liability for losses that would otherwise be covered.",
      "Participants acknowledge that they will be required to review and sign a separate Liability Waiver and Release Agreement prior to tour departure. Failure or refusal to sign the waiver may result in denial of participation without refund."
    ]
  },
  {
    title: "4. Health, Fitness & Medical Disclosure",
    content: [
      "Participants must disclose any medical condition, disability, pregnancy, allergy, or injury prior to departure.",
      "IBT may require medical clearance or restrict participation for safety reasons.",
      "Failure to disclose material medical information may result in denial of participation without refund.",
      "Cancellations due to medical or pregnancy-related reasons are subject to the standard cancellation policy."
    ]
  },
  {
    title: "5. Passports, Visas & Entry Requirements",
    content: [
      "Participants are responsible for complying with all passport, visa, vaccination, and entry requirements.",
      "Passports must generally be valid for at least six (6) months beyond the tour end date.",
      "IBT is not liable for denied boarding or entry."
    ]
  },
  {
    title: "6. Chargebacks & Payment Disputes",
    content: [
      "Customers agree to contact Imagine Beyond Travel (IBT) directly before initiating any chargeback or payment dispute.",
      "Initiating a chargeback or payment dispute after accepting these Terms & Conditions may be considered a breach of contract.",
      "IBT reserves the right to recover any disputed amounts, including chargeback fees and reasonable administrative or legal costs.",
      "IBT further reserves the right to pursue legal action to recover unpaid balances, damages, and costs arising from unauthorized or unjustified chargebacks, to the fullest extent permitted by law.",
      "The refund and cancellation policies outlined in these Terms & Conditions apply regardless of any chargeback or payment dispute attempt.",
      "Guests acknowledge that initiating a chargeback or payment dispute does not relieve them of their payment obligations under this agreement."
    ]
  },
  {
    title: "7. Airfare & Transportation",
    content: [
      "International flights are not included unless explicitly stated.",
      "IBT is not responsible for airline delays, cancellations, missed connections, or lost baggage.",
      "Missed tour services due to flight disruptions are non-refundable."
    ]
  },
  {
    title: "8. Cardholder Declaration",
    content: [
      "You certify that the payment card used is your own, or that you have formal authorization to use it, and that all details provided are true and correct."
    ]
  },
  {
    title: "9. Itinerary Changes",
    content: [
      "IBT reserves the right to modify itineraries, accommodations, transportation, or activities due to operational, safety, weather, or supplier reasons.",
      "Unused services are non-refundable.",
      "Alternative arrangements may be offered but are not guaranteed."
    ]
  },
  {
    title: "10. Assumption of Risk",
    content: [
      "You acknowledge that our trips may involve inherent risks, including travel in locations with different political, cultural, environmental, and weather conditions.",
      "We monitor local conditions and you agree to follow all safety instructions provided by trip leaders and local partners."
    ]
  },
  {
    title: "11. Participant Conduct",
    content: [
      "IBT reserves the right to remove any participant for unsafe, disruptive, abusive, illegal, or inappropriate behavior without refund."
    ]
  },
  {
    title: "12. Force Majeure & Extraordinary Events",
    content: [
      "IBT is not liable for delays, changes, or cancellations caused by events beyond its control, including natural disasters, pandemics, government actions, civil unrest, supplier failure, or transportation disruptions.",
      "IBT may, acting reasonably and in good faith, modify, suspend, shorten, or cancel tours where required for safety, operational, legal, or force majeure reasons, or where minimum participation requirements are not met.",
      "No refunds will be issued for fear of travel, perceived risk, or media coverage where the tour continues lawfully."
    ]
  },
  {
    title: "13. External / Independent Activities",
    content: [
      "Activities not arranged by Imagine Beyond Travel, including those booked during free time, are undertaken at your own risk.",
      "Imagine Beyond Travel is not liable for damages, losses, or inconveniences arising from independently booked activities."
    ]
  },
  {
    title: "14. Images & Marketing",
    content: [
      "By participating in an IBT tour, you grant a perpetual, worldwide, royalty-free license for the use of photos or videos featuring your likeness for marketing purposes."
    ]
  },
  {
    title: "15. Complaints",
    content: [
      "Issues must be raised immediately with the group leader during the tour.",
      "Written complaints must be submitted within 30 days of tour completion."
    ]
  },
  {
    title: "16. Governing Law & Jurisdiction",
    content: [
      "These Terms & Conditions are governed by the laws of the State of Colorado, USA. Any disputes shall be subject to the exclusive jurisdiction of Colorado courts."
    ]
  },
  {
    title: "17. Privacy & Communications",
    content: [
      "By booking, you consent to receive transactional communications related to your booking and acknowledge IBT’s Privacy Policy."
    ]
  },
  {
    title: "18. Acceptance",
    content: [
      "Payment of a deposit or full balance constitutes acceptance of these Terms & Conditions."
    ]
  }
];

const BRAND_TEAL = "#0FC2BF";

const TermsConditions = React.memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 rounded-full p-4">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before booking your travel with Imagine Beyond Travel.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-start space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-primary mt-0.5" />
              <div>
                <h2 className="text-xl font-semibold text-card-foreground mb-3">
                  Important Notice
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By booking a trip with Imagine Beyond Travel, you agree to be bound by these Terms & Conditions.
                  These terms form a binding agreement between you and Imagine Beyond Travel.
                  Please review them and contact us with any questions before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* One place to set the marker color */}
            <style>{`:root { --brand-teal: ${BRAND_TEAL}; }`}</style>

            {/* Section 1 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                1. Booking & Payment
              </h3>
              <ul className="list-disc pl-6 space-y-3 marker:text-[var(--brand-teal)]">
                {TERMS_SECTIONS[0].content.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 (Custom Layout) */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                2. Refunds & Cancellations
              </h3>

              <div className="space-y-6">
                {/* IBT cancellations */}
                <div>
                  <div className="text-muted-foreground font-medium leading-relaxed">
                    Imagine Beyond Travel cancellations:
                  </div>
                  <ul className="mt-2 list-disc pl-6 space-y-2 marker:text-[var(--brand-teal)]">
                    <li className="text-muted-foreground leading-relaxed">
                      If Imagine Beyond Travel cancels the trip for any reason, you will receive a 100% refund of all
                      amounts paid to Imagine Beyond Travel.
                    </li>
                  </ul>
                </div>

                {/* Transfer of booking */}
                <div>
                  <div className="text-muted-foreground font-medium leading-relaxed">
                    Transfer of booking:
                  </div>
                  <ul className="mt-2 list-disc pl-6 space-y-2 marker:text-[var(--brand-teal)]">
                    <li className="text-muted-foreground leading-relaxed">
                      If you or any member of your party is prevented from traveling, that person may transfer their
                      place to someone else if:
                    </li>
                    <li className="text-muted-foreground leading-relaxed">
                      The person is introduced by you and meets all trip conditions;
                    </li>
                    <li className="text-muted-foreground leading-relaxed">
                      The outstanding balance is paid in full 60 days before the tour start date;
                    </li>
                    <li className="text-muted-foreground leading-relaxed">
                      The transferee agrees to these Terms & Conditions and all other contract terms;
                    </li>
                    <li className="text-muted-foreground leading-relaxed">
                      The transferee pays any extra fees (e.g., internal flight name changes or other carrier/admin fees).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sections 3-12 */}
            {TERMS_SECTIONS.slice(1).map((section) => (
              <div key={section.title} className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  {section.title}
                </h3>

                <ul className="list-disc pl-6 space-y-3 marker:text-[var(--brand-teal)]">
                  {section.content.map((item: string, i: number) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Governing Law</h3>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the United States. Any disputes will be resolved pursuant to
                applicable law.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Changes to Terms</h3>
              <p className="text-muted-foreground">
                We may modify these Terms & Conditions at any time. Updates will be posted on our website and apply to
                bookings made after the effective date of the change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Questions About These Terms?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have questions about our Terms & Conditions, please reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="border" style={{ borderColor: BRAND_TEAL }}>
              <div className="px-8 py-3 rounded-lg font-semibold" style={{ color: BRAND_TEAL }}>
                📧 Email: bookings@imaginebeyondtravel.com
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

TermsConditions.displayName = "TermsConditions";

export default TermsConditions;
