"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, User, Mail, Shield } from "lucide-react";
import { toast, Toaster } from "sonner";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 font-mono">
      <Toaster />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="matrix-bg absolute inset-0 opacity-5"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="bg-[#00ff00] bg-opacity-10 p-3 rounded-full mb-4 border border-[#00ff00] border-opacity-30">
            <Shield className="h-10 w-10 text-[#00ff00]" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wider">
            SAFEBOX
          </h1>
          <div className="flex items-center justify-center mt-2 text-[#00ff00] text-xs">
            <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full mr-2 animate-pulse"></span>
            <p className="uppercase tracking-widest">Secure Vault Access</p>
          </div>
        </div>

        <Tabs
          defaultValue="login"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 mb-6 bg-[#111111] border border-[#333333]">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-[#00ff00] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff00] uppercase tracking-wider"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-[#00ff00] data-[state=active]:border-b-2 data-[state=active]:border-[#00ff00] uppercase tracking-wider"
            >
              Register
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="border border-[#333333] bg-[#111111] text-white shadow-[0_0_15px_rgba(0,255,0,0.1)] backdrop-blur-sm">
              <CardHeader className="border-b border-[#222222] pb-4">
                <CardTitle className="text-xl text-center uppercase tracking-wider">
                  System Access
                </CardTitle>
                <CardDescription className="text-gray-400 text-center text-xs">
                  <span className="text-[#00ff00]">&gt;</span> Enter credentials
                  to decrypt vault
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="username"
                        className="text-gray-400 text-xs uppercase tracking-wider"
                      >
                        Username
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="username"
                          placeholder="Enter username"
                          className="pl-10 bg-[#0a0a0a] border-[#333333] text-white focus:border-[#00ff00] focus:ring-[#00ff00] focus:ring-opacity-20"
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              username: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="masterPassword"
                        className="text-gray-400 text-xs uppercase tracking-wider"
                      >
                        Master Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="masterPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter master password"
                          className="pl-10 pr-10 bg-[#0a0a0a] border-[#333333] text-white focus:border-[#00ff00] focus:ring-[#00ff00] focus:ring-opacity-20"
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              password: e.target.value,
                            })
                          }
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1 h-8 w-8 text-gray-500 hover:text-[#00ff00] hover:bg-transparent"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            Toggle password visibility
                          </span>
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="button"
                      className="w-full bg-[#111111] hover:bg-[#1a1a1a] text-[#00ff00] border border-[#00ff00] hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all duration-300"
                      // onClick={handleLoginFormSubmit}
                    >
                      AUTHENTICATE
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-[#222222] pt-4">
                <p className="text-xs text-gray-500">
                  <span className="text-[#00ff00]">&gt;</span> Forgot
                  credentials?{" "}
                  <a href="#" className="text-[#00ff00] hover:underline">
                    Reset access
                  </a>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="border border-[#333333] bg-[#111111] text-white shadow-[0_0_15px_rgba(0,255,0,0.1)] backdrop-blur-sm">
              <CardHeader className="border-b border-[#222222] pb-4">
                <CardTitle className="text-xl text-center uppercase tracking-wider">
                  New Identity
                </CardTitle>
                <CardDescription className="text-gray-400 text-center text-xs">
                  <span className="text-[#00ff00]">&gt;</span> Create secure
                  credentials
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="newUsername"
                        className="text-gray-400 text-xs uppercase tracking-wider"
                      >
                        Username
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          autoComplete="username"
                          id="newUsername"
                          placeholder="Choose username"
                          required
                          className="pl-10 bg-[#0a0a0a] border-[#333333] text-white focus:border-[#00ff00] focus:ring-[#00ff00] focus:ring-opacity-20"
                          onChange={(e) =>
                            setRegisterForm({
                              ...registerForm,
                              username: e.target.value,
                            })
                          }
                          value={
                            registerForm.username ? registerForm.username : ""
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="newMasterPassword"
                        className="text-gray-400 text-xs uppercase tracking-wider"
                      >
                        Master Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          autoComplete="current-password"
                          id="newMasterPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create master password"
                          required
                          className="pl-10 pr-10 bg-[#0a0a0a] border-[#333333] text-white focus:border-[#00ff00] focus:ring-[#00ff00] focus:ring-opacity-20"
                          onChange={(e) =>
                            setRegisterForm({
                              ...registerForm,
                              password: e.target.value,
                            })
                          }
                          value={
                            registerForm.password ? registerForm.password : ""
                          }
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1 h-8 w-8 text-gray-500 hover:text-[#00ff00] hover:bg-transparent"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            Toggle password visibility
                          </span>
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 flex items-start">
                        <span className="text-[#00ff00] mr-1 mt-0.5">&gt;</span>
                        <span>
                          Min 12 chars with numbers and special chars for
                          optimal encryption
                        </span>
                      </p>
                    </div>

                    <Button
                      type="button"
                      className="w-full bg-[#111111] hover:bg-[#1a1a1a] text-[#00ff00] border border-[#00ff00] hover:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all duration-300"
                      // onClick={handleRegisterFormSubmit}
                    >
                      INITIALIZE IDENTITY
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-[#222222] pt-4">
                <p className="text-xs text-gray-500">
                  <span className="text-[#00ff00]">&gt;</span> Identity exists?{" "}
                  <button
                    type="button"
                    className="text-[#00ff00] hover:underline"
                    onClick={() => setActiveTab("login")}
                  >
                    Login
                  </button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center text-xs text-gray-600">
          <p className="tracking-wider">
            SAFEBOX v1.0.0 | ENCRYPTED CONNECTION
          </p>
        </div>
      </div>
    </div>
  );
}
