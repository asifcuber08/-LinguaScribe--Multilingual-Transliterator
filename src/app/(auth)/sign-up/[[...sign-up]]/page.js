import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-gray-800 shadow-2xl border border-gray-700",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-400",
              socialButtonsBlockButton: "bg-gray-700 border-gray-600 text-white hover:bg-gray-600",
              formButtonPrimary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700",
              footerActionLink: "text-indigo-400 hover:text-indigo-300",
              formFieldInput: "bg-gray-900 border-gray-700 text-white",
              formFieldLabel: "text-gray-300",
              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-indigo-400",
            }
          }}
        />
      </div>
    </div>
  );
}