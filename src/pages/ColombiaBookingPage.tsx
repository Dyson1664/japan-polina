import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { cn } from "@/lib/utils";

// Colombia requires passport details
const REQUIRES_PASSPORT = true;

// Validation schema with passport fields (required for Colombia)
const bookingSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  mobile: z.string().trim().min(1, "Mobile number is required").max(20, "Mobile number is too long"),
  instagram: z.string().trim().max(50, "Instagram handle is too long").optional().or(z.literal("")),
  address: z.string().trim().min(1, "Address is required").max(500, "Address must be less than 500 characters"),
  // Passport fields - required for Colombia
  passportFirstName: z.string().trim().min(1, "First name/given name is required").max(100, "Name must be less than 100 characters"),
  passportSurname: z.string().trim().min(1, "Surname is required").max(100, "Name must be less than 100 characters"),
  passportNumber: z.string().trim().min(1, "Passport number is required").max(20, "Passport number is too long"),
  nationality: z.string().trim().min(1, "Nationality is required").max(50, "Nationality is too long"),
  dateOfBirth: z.date({ required_error: "Date of birth is required" }),
  passportExpiry: z.date({ required_error: "Passport expiry date is required" }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

// Colombia-specific Shopify configuration
const SHOPIFY_VARIANT_ID = "45199567650995";
const SHOPIFY_STORE_URL = "https://tbff.imaginebeyondtravel.com";

/**
 * Builds a Shopify cart permalink with line item attributes for Colombia trip
 */
function buildShopifyCartUrl(formData: BookingFormData): string {
  // Base cart URL with variant:quantity
  const baseUrl = `${SHOPIFY_STORE_URL}/cart/${SHOPIFY_VARIANT_ID}:1`;
  
  // Encode attributes as query parameters
  const attributes = new URLSearchParams();
  attributes.append("attributes[Full Name]", formData.fullName);
  attributes.append("attributes[Email]", formData.email);
  attributes.append("attributes[Mobile Number]", formData.mobile);
  attributes.append("attributes[Instagram Handle]", formData.instagram || "Not provided");
  attributes.append("attributes[Address]", formData.address);
  
  // Add passport details (always included for Colombia)
  attributes.append("attributes[Passport First Name]", formData.passportFirstName);
  attributes.append("attributes[Passport Surname]", formData.passportSurname);
  attributes.append("attributes[Passport Number]", formData.passportNumber);
  attributes.append("attributes[Nationality]", formData.nationality);
  attributes.append("attributes[Date of Birth]", format(formData.dateOfBirth, "yyyy-MM-dd"));
  attributes.append("attributes[Passport Expiry]", format(formData.passportExpiry, "yyyy-MM-dd"));
  
  attributes.append("attributes[Terms Accepted]", "Yes");
  
  return `${baseUrl}?${attributes.toString()}`;
}

const ColombiaBookingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      instagram: "",
      address: "",
      passportFirstName: "",
      passportSurname: "",
      passportNumber: "",
      nationality: "",
      dateOfBirth: undefined,
      passportExpiry: undefined,
      termsAccepted: undefined,
    },
    mode: "onChange",
  });

  const { isValid } = form.formState;

  const onSubmit = (data: BookingFormData) => {
    setIsSubmitting(true);
    const checkoutUrl = buildShopifyCartUrl(data);
    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Book Your Colombia Adventure
            </h1>
            <p className="text-muted-foreground">
              Please fill in your details to continue to payment
            </p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
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

                {/* Email */}
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

                {/* Mobile */}
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

                {/* Instagram */}
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

                {/* Address */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your full address" 
                          {...field} 
                          className="min-h-[100px] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Passport Details Section - Only shown when required */}
                {REQUIRES_PASSPORT && (
                  <div className="pt-4 border-t border-border">
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold text-foreground">Passport Details</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Required for internal flights. This information is attached to your booking only.
                      </p>
                    </div>

                    {/* Helper text for middle name */}
                    <p className="text-sm text-muted-foreground mb-4">
                      Enter middle name where it is displayed on your passport.
                    </p>

                    {/* Passport First Name / Given Name */}
                    <FormField
                      control={form.control}
                      name="passportFirstName"
                      render={({ field }) => (
                        <FormItem className="mb-5">
                          <FormLabel>First Name / Given Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="As shown on passport" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Passport Surname */}
                    <FormField
                      control={form.control}
                      name="passportSurname"
                      render={({ field }) => (
                        <FormItem className="mb-5">
                          <FormLabel>Surname *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="As shown on passport" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Passport Number */}
                    <FormField
                      control={form.control}
                      name="passportNumber"
                      render={({ field }) => (
                        <FormItem className="mb-5">
                          <FormLabel>Passport Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter passport number" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Nationality */}
                    <FormField
                      control={form.control}
                      name="nationality"
                      render={({ field }) => (
                        <FormItem className="mb-5">
                          <FormLabel>Nationality *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your nationality" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Date of Birth */}
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="flex flex-col mb-5">
                          <FormLabel>Date of Birth *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "h-11 w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Select date of birth</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                                captionLayout="dropdown-buttons"
                                fromYear={1940}
                                toYear={new Date().getFullYear()}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Passport Expiry Date */}
                    <FormField
                      control={form.control}
                      name="passportExpiry"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Passport Expiry Date *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "h-11 w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Select expiry date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                                captionLayout="dropdown-buttons"
                                fromYear={new Date().getFullYear()}
                                toYear={new Date().getFullYear() + 15}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Terms Checkbox */}
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4">
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

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold mt-6"
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? "Redirecting..." : "Continue to Payment"}
                </Button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  You will be redirected to our secure payment page
                </p>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ColombiaBookingPage;