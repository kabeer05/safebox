"use client";

import { useState, useEffect } from "react";
import {
  Copy,
  RefreshCw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast, Toaster } from "sonner";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState(0);

  // Generate password on initial load and when settings change
  useEffect(() => {
    generatePassword();
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  // Calculate password strength
  useEffect(() => {
    let score = 0;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    setStrength(score);
  }, [password]);

  const generatePassword = () => {
    let charset = "";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (charset === "") {
      setPassword("");
      return;
    }

    let newPassword = "";
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
      const randomIndex = randomValues[i] % charset.length;
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      toast("Password has been copied to clipboard.");
    }
  };

  const getStrengthIcon = () => {
    if (strength < 2) return <ShieldAlert className="h-5 w-5 text-red-500" />;
    if (strength < 4) return <Shield className="h-5 w-5 text-yellow-500" />;
    return <ShieldCheck className="h-5 w-5 text-[#00ff00]" />;
  };

  const getStrengthText = () => {
    if (strength < 2) return "Weak";
    if (strength < 4) return "Medium";
    return "Strong";
  };

  return (
    <div className="dark flex min-h-screen items-center justify-center bg-zinc-950 p-4 font-mono">
      <Toaster closeButton={true} />
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center justify-center">
          <Terminal className="mr-2 h-6 w-6 text-[#00ff00]" />
          <h1 className="font-hacker text-3xl font-bold tracking-wider text-[#00ff00]">
            SAFEBOX
          </h1>
        </div>

        <Card className="border-zinc-800 bg-zinc-900 text-zinc-100">
          <CardHeader className="border-b border-zinc-800 pb-4">
            <CardTitle className="font-hacker text-xl tracking-wide text-[#00ff00]">
              PASSWORD GENERATOR
            </CardTitle>
            <CardDescription className="font-mono text-zinc-400">
              Generate cryptographically secure passwords
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-6 flex items-center gap-2 overflow-hidden rounded-md border border-zinc-800 bg-black p-3">
              <div className="flex-1 overflow-x-auto whitespace-nowrap text-[#00ff00]">
                {password || "Generate a password"}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={copyToClipboard}
                disabled={!password}
                className="h-8 w-8 text-zinc-400 hover:text-[#00ff00]"
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy password</span>
              </Button>
            </div>

            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center gap-2">
                {getStrengthIcon()}
                <span className="text-sm font-medium">
                  {getStrengthText()} Password
                </span>
              </div>
              <div className="flex-1">
                <div className="h-1.5 w-full rounded-full bg-zinc-800">
                  <div
                    className={`h-full rounded-full ${
                      strength < 2
                        ? "bg-[#ff0000]"
                        : strength < 4
                        ? "bg-[#FCEE0C]"
                        : "bg-[#00ff00]"
                    }`}
                    style={{ width: `${(strength / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="length" className="text-sm font-medium">
                    Password Length: {length}
                  </Label>
                </div>
                <Slider
                  id="length"
                  min={8}
                  max={32}
                  step={1}
                  value={[length]}
                  onValueChange={(value) => setLength(value[0])}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="uppercase" className="text-sm font-medium">
                    Include Uppercase
                  </Label>
                  <Switch
                    id="uppercase"
                    checked={includeUppercase}
                    onCheckedChange={setIncludeUppercase}
                    className="data-[state=checked]:bg-[#00ff00]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="lowercase" className="text-sm font-medium">
                    Include Lowercase
                  </Label>
                  <Switch
                    id="lowercase"
                    checked={includeLowercase}
                    onCheckedChange={setIncludeLowercase}
                    className="data-[state=checked]:bg-[#00ff00]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="numbers" className="text-sm font-medium">
                    Include Numbers
                  </Label>
                  <Switch
                    id="numbers"
                    checked={includeNumbers}
                    onCheckedChange={setIncludeNumbers}
                    className="data-[state=checked]:bg-[#00ff00]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="symbols" className="text-sm font-medium">
                    Include Symbols
                  </Label>
                  <Switch
                    id="symbols"
                    checked={includeSymbols}
                    onCheckedChange={setIncludeSymbols}
                    className="data-[state=checked]:bg-[#00ff00]"
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-zinc-800 pt-4">
            <Button
              onClick={generatePassword}
              className="w-full bg-black text-[#00ff00] hover:bg-zinc-900 border border-[#00ff00] font-hacker tracking-wider"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              GENERATE NEW PASSWORD
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-4 text-center text-xs text-zinc-500">
          <p>SECURE • ENCRYPTED • UNHACKABLE</p>
        </div>
      </div>
    </div>
  );
}
