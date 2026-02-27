export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="text-white font-extrabold text-lg">VOLT<span className="text-cyan-400">X</span></span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Your one-stop shop for the latest and greatest in consumer electronics.
            </p>
          </div>

          {/* Links */}
          {[
            { title: "Shop", links: ["Phones", "Laptops", "Audio", "Gaming"] },
            { title: "Support", links: ["Help Center", "Track Order", "Returns", "Warranty"] },
            { title: "Company", links: ["About Us", "Careers", "Press", "Contact"] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-white font-semibold text-sm mb-3">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l}>
                    <span className="text-gray-500 text-xs hover:text-cyan-400 transition-colors cursor-pointer">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>© 2026 VOLTX Electronics. All rights reserved.</p>
          <p>Made with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
