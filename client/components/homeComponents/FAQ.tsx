import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="faq">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Find answers to common questions about SafeBox Password Manager.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How secure is SafeBox Password Manager?
              </AccordionTrigger>
              <AccordionContent>
                SafeBox uses industry-leading end-to-end encryption (AES-256) to
                secure your data. This means your passwords are encrypted and
                decrypted locally on your device, and only you have the key to
                unlock them. Even we cannot access your stored passwords or
                sensitive information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What happens if I forget my master password?
              </AccordionTrigger>
              <AccordionContent>
                Your master password is the key to all your stored passwords,
                and for security reasons, we don't store it anywhere. If you
                forget your master password, you can use your emergency recovery
                kit that you set up during account creation. We strongly
                recommend storing this recovery kit in a safe place.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Can I use SafeBox on multiple devices?
              </AccordionTrigger>
              <AccordionContent>
                Yes! SafeBox is designed to work seamlessly across all your
                devices. Your encrypted data syncs automatically between your
                computers, smartphones, and tablets. We offer apps for Windows,
                macOS, Linux, iOS, and Android, as well as browser extensions
                for Chrome, Firefox, Safari, and Edge.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How does the password sharing feature work?
              </AccordionTrigger>
              <AccordionContent>
                SafeBox allows you to securely share passwords and secure notes
                with family members or colleagues without exposing the actual
                passwords. You can control permissions and revoke access at any
                time. All shared items remain encrypted during the sharing
                process, ensuring maximum security.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What pricing plans does SafeBox offer?
              </AccordionTrigger>
              <AccordionContent>
                SafeBox offers a free basic plan that includes essential
                password management features for a single user. Our Premium plan
                ($3.99/month) adds advanced features like secure sharing,
                priority support, and emergency access. For families and small
                teams, we offer Family ($6.99/month for up to 6 users) and
                Business ($5/user/month) plans with additional collaboration
                features.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                How does the password generator work?
              </AccordionTrigger>
              <AccordionContent>
                SafeBox includes a powerful password generator that creates
                strong, unique passwords based on your criteria. You can specify
                the length, include special characters, numbers, and uppercase
                letters. The generator creates passwords that are difficult for
                hackers to crack but easy for SafeBox to remember and autofill
                for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Can I import passwords from another password manager?
              </AccordionTrigger>
              <AccordionContent>
                Yes, SafeBox makes it easy to import your passwords from other
                password managers like LastPass, 1Password, Dashlane, and more.
                We also support importing from browser password stores like
                Chrome and Firefox. Our step-by-step import wizard guides you
                through the process to ensure a smooth transition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                Is there a limit to how many passwords I can store?
              </AccordionTrigger>
              <AccordionContent>
                No, SafeBox allows you to store unlimited passwords, secure
                notes, credit cards, and identity information across all our
                plans, including the free plan. Your data is only limited by
                your device's storage capacity, but since the encrypted data is
                very small, most users never approach this limit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
