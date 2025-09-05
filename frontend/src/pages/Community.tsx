export default function Community() {
  return (
    <section className="container-max min-h-[calc(100vh-140px)] py-8">
      <div className="card p-6">
        <h2 className="text-2xl font-bold mb-4">Community Hub</h2>
        <p className="text-slate-600">Share experiences, find NGOs, and access everyday life resources (housing, healthcare, schooling).</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-xl bg-white">
            <div className="font-semibold">Nearby NGOs</div>
            <ul className="list-disc list-inside text-sm text-slate-600">
              <li>Tenaganita – Worker support & legal aid</li>
              <li>Migrant CARE – Advocacy & outreach</li>
              <li>Suhakam – Human rights commission</li>
            </ul>
          </div>
          <div className="p-4 border rounded-xl bg-white">
            <div className="font-semibold">Peer Stories</div>
            <p className="text-sm text-slate-600">Workers can submit stories (coming soon).</p>
          </div>
          <div className="p-4 border rounded-xl bg-white">
            <div className="font-semibold">Guides</div>
            <ul className="list-disc list-inside text-sm text-slate-600">
              <li>Opening a bank account</li>
              <li>Accessing healthcare</li>
              <li>Finding safe housing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
