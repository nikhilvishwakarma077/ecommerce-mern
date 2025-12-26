import { Loader2 } from "lucide-react";

export function LoaderWithText({ text = "Loading..." }) {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
      <p className="text-gray-600 text-lg font-medium">{text}</p>
    </div>
  );
}