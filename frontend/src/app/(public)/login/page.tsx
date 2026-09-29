"use client";

import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F5F8FC] flex flex-col font-sans">
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-[#4A5568] hover:text-[#0A0C10] transition-colors font-medium">
          <ArrowLeft size={16} />
          Back to Public Site
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <MotionWrapper variant="slideUp">
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EDEDED]">
              <div className="flex justify-center mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#001B65] text-white font-serif text-xl font-medium">
                  LB
                </div>
              </div>

              <h1 className="text-2xl font-serif text-[#0A0C10] text-center mb-2">Welcome Back</h1>
              <p className="text-center text-[#4A5568] mb-8 text-sm">Secure access to the SIPL Platform.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-[#0A0C10] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your institutional or personal email"
                    className="w-full px-4 py-3 rounded-xl border border-[#001B65]/10 bg-[#F9F8F3] focus:outline-none focus:ring-2 focus:ring-[#001B65] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A0C10] mb-1.5">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-xl border border-[#001B65]/10 bg-[#F9F8F3] focus:outline-none focus:ring-2 focus:ring-[#001B65] focus:bg-white transition-all"
                  />
                </div>

                <div className="pt-2">
                  <Link href="/dashboard" passHref className="block w-full">
                    <Button className="w-full" size="lg">
                      Secure Login
                    </Button>
                  </Link>
                </div>
              </form>
            </div>

            <div className="mt-8 text-center text-sm text-[#4A5568]">
              <p className="mb-4">Role-based access is currently enforced via institutional SSO.</p>
              <div className="flex justify-center gap-4 text-xs font-medium uppercase tracking-wider text-[#0A0C10]/50">
                <span>User</span>
                <span>•</span>
                <span>Clinician</span>
                <span>•</span>
                <span>Admin</span>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}
