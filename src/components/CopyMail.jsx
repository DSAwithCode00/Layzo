import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CopyMail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    try {
      navigator.clipboard.writeText("mohammedsadiq68005@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("Unable to copy.");
    }
  };

  return (
    <div className="group relative w-fit mx-auto p-3 bg-bgGray900 rounded-lg shadow flex items-center gap-4 transition-all duration-300">
      <code className="font-fira text-sm text-whiteText tracking-[.1rem] font-medium">
        mohammedsadiq68005@gmail.com
      </code>

      <button
        onClick={handleCopied}
        className="text-whiteText rounded-full hover:bg-bgGray800 active:scale-95 transition-all"
      >
        {copied ? (
          <Check size={18} className="text-emerald-400 animate-pulse" />
        ) : (
          <Copy size={18} />
        )}
      </button>

      {!copied && (
        <div className="absolute right-0 -top-8 text-xs bg-bgGray700 text-whiteText px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
          Copy Email
        </div>
      )}
      {copied && (
        <div className="absolute right-0 -top-8 text-xs bg-bgSuccess-600 text-whiteText px-2 py-1 rounded animate-fade-in-out">
          Copied!
        </div>
      )}
    </div>
  );
};

export default CopyMail;
