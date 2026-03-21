import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#09332C]">
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/erick-logo.svg" width={16} height={16} alt="" style={{ opacity: 0.3, filter: "brightness(10)" }} />
            <p className="text-sm text-[#F7EDDA]/40">
              &copy; {new Date().getFullYear()} Erick van Reenen
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="mailto:erickvanreenen@gmail.com"
              className="text-sm text-[#F7EDDA]/50 hover:text-[#F0531C] transition-colors duration-200"
            >
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#F7EDDA]/50 hover:text-[#F0531C] transition-colors duration-200"
            >
              LinkedIn
            </Link>
            <Link
              href="/projects"
              className="text-sm text-[#F7EDDA]/50 hover:text-[#F7EDDA] transition-colors duration-200"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#F7EDDA]/50 hover:text-[#F7EDDA] transition-colors duration-200"
            >
              About
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
