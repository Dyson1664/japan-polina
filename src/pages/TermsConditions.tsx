import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Scale, FileText, Shield, AlertCircle } from "lucide-react";

const TERMS_SECTIONS = [
  {
    title: "1. Booking & Payment",
    content: [
      "Deposit (non-refundable): Your spot is confirmed once the USD $300 deposit is received.",
      "Balance: The remaining balance is due no later than 60 days before the tour start date.",
      "All prices are quoted and charged in United States Dollars (USD).",
      "The traveler who paid a deposit may assign/transfer that deposit and booking to another person by written notice with the new traveler’s full name and contact details. Transfer is only permitted to the same tour date and may be subject to any third-party change fees.",
      "You must be 18 years or older to make a booking."
    ]
  },
  // Special grouped layout for bullets + subheadings
  {
    title: "2. Refunds & Cancellations",
    content: [
      [
        "Client-initiated cancellations:",
        "Up to 90 days before the tour start date: 100% refund of amounts paid to Imagine Beyond Travel, minus any non-recoverable third-party fees.",
        "89 days or fewer before the tour start date: No refund; all amounts paid are forfeited."
      ],
      [
        "Imagine Beyond Travel cancellations:",
        "If Imagine Beyond Travel cancels the trip for any reason, you will receive a 100% refund of all amounts paid to Imagine Beyond Travel."
      ],
      [
        "Transfer of booking:",
        "If you or any member of your party is prevented from traveling, that person may transfer their place to someone else if:",
        "The person is introduced by you and meets all trip conditions;",
        "The outstanding balance is paid in full 60 days before the tour start date;",
        "The transferee agrees to these Terms & Conditions and all other contract terms;",
        "The transferee pays any extra fees (e.g., internal flight name changes or other carrier/admin fees)."
      ]
    ]
  },
  {
    title: "3. Travel & Medical Insurance (Mandatory)",
    content: [
      "Adequate travel insurance is a condition of travel. Your policy must cover your personal requirements including pre-existing medical conditions, cancellation charges, medical expenses, and repatriation.",
      "Proof of insurance may be requested at any time. If you choose to travel without adequate insurance cover, Imagine Beyond Travel will not be liable for losses for which insurance would otherwise have provided coverage.",
      "If you are undertaking adventure or high-risk activities, ensure your policy explicitly covers them."
    ]
  },
  {
    title: "4. Passport & Entry Requirements",
    content: [
      "By booking, you confirm that your passport will have at least six (6) months’ validity beyond the tour’s end date and that you meet all visa and health requirements for the destinations visited.",
      "Imagine Beyond Travel is not liable for denied boarding or entry due to documentation issues."
    ]
  },
  {
    title: "5. Airfare & Carriers",
    content: [
      "International flights to/from your destination are not included in our tour prices.",
      "We act only as a third-party agent for any flight providers used during a tour. We are not responsible for flight schedule changes, delays, or lost/delayed baggage by airline companies.",
      "We are not responsible for delays to ferry services or other third-party transportation."
    ]
  },
  {
    title: "6. Cardholder Declaration",
    content: [
      "You certify that the payment card used is your own (or that you have formal authority to use it) and that all details provided are true and correct."
    ]
  },
  {
    title: "7. Liability",
    content: [
      "Imagine Beyond Travel will act with reasonable care but is not liable for losses arising from circumstances beyond our control, including (but not limited to) force majeure events, government actions, or third-party defaults.",
      "Nothing in these Terms & Conditions seeks to exclude or limit any statutory consumer rights that cannot be excluded by law."
    ]
  },
  {
    title: "8. Assumption of Risk",
    content: [
      "By booking with Imagine Beyond Travel, you acknowledge that our trips can be adventurous in nature and may involve inherent risks, including traveling in locations with different political, cultural, environmental, and weather conditions than those you’re used to.",
      "We continuously monitor local information to assess conditions in destinations where our tours operate. You agree to follow safety guidance from leaders and local partners at all times."
    ]
  },
  {
    title: "9. External/Independent Tours & Free Time",
    content: [
      "If you choose to participate in any activities not arranged by Imagine Beyond Travel (including activities booked during free time), you do so at your own risk.",
      "Imagine Beyond Travel is not liable for damages or inconveniences arising from independently booked activities."
    ]
  },
  {
    title: "10. Images & Marketing",
    content: [
      "By joining a tour, you acknowledge that photos and videos may be captured by Imagine Beyond Travel, other participants, or affiliates.",
      "You grant Imagine Beyond Travel a royalty-free, worldwide, perpetual license to use images featuring you for marketing and promotional purposes."
    ]
  },
  {
    title: "11. Complaints",
    content: [
      "We aim to deliver an excellent experience. If an issue arises, please speak with your Group Leader immediately so we can attempt to resolve it on the spot.",
      "If you’re not satisfied after local resolution attempts, contact us at bookings@imaginebeyondtrvel.com. While we are not liable for third-party issues, we’ll do our best to assist promptly."
    ]
  },
  {
    title: "12. Acceptance",
    content: [
      "Completion of payment (deposit or full balance) constitutes acceptance of these Terms & Conditions.",
      "These Terms & Conditions are governed by the laws of the United States."
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
                <h2 className="text-xl font-semibold text-card-foreground mb-3">Important Notice</h2>
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
            {TERMS_SECTIONS.map((section, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  {section.title}
                </h3>

                {/* Normal sections: simple bullet list with brand-teal markers */}
                {index !== 1 ? (
                  <ul className="list-disc pl-6 space-y-3 marker:text-[var(--brand-teal)]">
                    {/* CSS var allows one place to set the color inline */}
                    <style>{`:root { --brand-teal: ${BRAND_TEAL}; }`}</style>
                    {section.content.map((item: any, i: number) => (
                      <li key={i} className="text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Refunds & Cancellations: sub-headings (no bullets) + their own bullet lists
                  <div className="space-y-6">
                    {/* 1) Client-initiated */}
                    <div>
                      <div className="text-muted-foreground font-medium leading-relaxed">
                        Client-initiated cancellations:
                      </div>
                      <ul className="mt-2 list-disc pl-6 space-y-2 marker:text-[var(--brand-teal)]">
                        <li className="text-muted-foreground leading-relaxed">
                          Up to 90 days before the tour start date: 100% refund of amounts paid to Imagine Beyond
                          Travel, minus any non-recoverable third-party fees.
                        </li>
                        <li className="text-muted-foreground leading-relaxed">
                          89 days or fewer before the tour start date: No refund; all amounts paid are forfeited.
                        </li>
                      </ul>
                    </div>

                    {/* 2) IBT cancellations */}
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

                    {/* 3) Transfer of booking */}
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
                          The transferee pays any extra fees (e.g., internal flight name changes or other carrier/admin
                          fees).
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
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
                📧 Email: bookings@imaginebeyondtrvel.com
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
