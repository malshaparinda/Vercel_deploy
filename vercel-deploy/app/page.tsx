import {
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
  BadgeCheck,
  Youtube,
  ArrowRight,
} from "lucide-react";

export default function Page() {
  const links = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100092143553448",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/malsha_x/",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      url: "https://wa.link/ntlblk",
      icon: MessageCircle,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@im_malsha?lang=en",
      icon: Music2,
    },
    {
      name: "Behance",
      url: "https://www.behance.net/malshaparinda",
      icon: BadgeCheck,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@designbymalsha",
      icon: Youtube,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1e1e1e] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-gradientMove bg-[linear-gradient(135deg,#1e1e1e_0%,#0058ea_50%,#1e1e1e_100%)] bg-[length:200%_200%] opacity-90" />
        <div className="absolute -left-20 top-0 h-72 w-72 animate-floatOne rounded-full bg-[#0058ea]/25 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 animate-floatTwo rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl sm:p-7">
          <div className="text-center">
            <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-4 border-[#0058ea] bg-black sm:h-32 sm:w-32">
              <img
                src="/profile.jpg"
                alt="Malsha Parinda"
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Malsha Parinda
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-200 sm:text-base">
              Modern design and development solutions crafted to elevate and grow your business. 🚀
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#0058ea]/80 hover:bg-[#0058ea]/18 hover:shadow-[0_10px_30px_rgba(0,88,234,0.25)] active:scale-[0.98] sm:px-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0058ea]/40 bg-black/30 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0058ea]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium tracking-wide text-white sm:text-base">
                      {link.name}
                    </span>
                  </div>

                  <ArrowRight className="h-4 w-4 text-[#9cc0ff] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-center text-sm text-zinc-300 backdrop-blur-xl">
            Available for creative projects, branding, and modern web App development. Let's collaborate and bring your vision to life! 🚀
          </div>

          <footer className="mt-6 text-center text-xs tracking-wide text-zinc-300/80 sm:text-sm">
            All rights reserved @DESIGN BY MALSHA
          </footer>
        </div>
      </div>
    </main>
  );
}