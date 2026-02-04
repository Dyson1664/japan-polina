import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/**
 * ✅ JAPAN ONLY config
 */
const BOOKING_CONFIG = {
  countryName: "Japan",
  variantId: "45257582969011",
  shopifyDomain: "tbff.imaginebeyondtravel.com",
};

function buildShopifyCartUrl(params: {
  shopifyDomain: string;
  variantId: string;
  quantity?: number;
  attributes: Record<string, string>;
}) {
  const { shopifyDomain, variantId, quantity = 1, attributes } = params;

  const baseUrl = `https://${shopifyDomain}/cart/${variantId}:${quantity}`;

  const qs = new URLSearchParams();
  Object.entries(attributes).forEach(([key, value]) => {
    qs.append(`attributes[${key}]`, value);
  });

  return `${baseUrl}?${qs.toString()}`;
}

/**
 * ✅ Form schema (no passport fields)
 */
const schema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  mobile: z.string().trim().min(1, "Mobile number is required").max(30),
  instagram: z.string().trim().max(50).optional().or(z.literal("")),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type BookingFormData = z.infer<typeof schema>;

export default function BookingPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      instagram: "",
      termsAccepted: undefined,
    },
    mode: "onChange",
  });

  const { isValid } = form.formState;

  const onSubmit = (data: BookingFormData) => {
    setIsSubmitting(true);

    const attributes: Record<string, string> = {
      Trip: BOOKING_CONFIG.countryName,
      "Full Name": data.fullName,
      Email: data.email,
      Mobile: data.mobile,
      Instagram: data.instagram?.trim() ? data.instagram.trim() : "Not provided",
      "Terms Accepted": "Yes",
    };

    const checkoutUrl = buildShopifyCartUrl({
      shopifyDomain: BOOKING_CONFIG.shopifyDomain,
      variantId: BOOKING_CONFIG.variantId,
      quantity: 1,
      attributes,
    });

    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Complete Your Booking – {BOOKING_CONFIG.countryName}
            </h1>
            <p className="text-muted-foreground">
              Please fill in your details to continue to payment
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 234 567 8900"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram Handle (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="@yourusername"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          I confirm that I have read and agree to the{" "}
                          <a
                            href="/#/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                          >
                            Terms and Conditions
                          </a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold mt-6"
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? "Redirecting..." : "Continue to Payment"}
                </Button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  You will be redirected to Shopify checkout.
                </p>

                <div className="pt-4 text-center">
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-sm"
                    onClick={() => navigate("/")}
                  >
                    Back to homepage
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
