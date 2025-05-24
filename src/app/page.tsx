import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import JobList from "@/components/JobList";
import Sidebar from "@/components/Sidebar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="cycys">
      <Hero />
      <Clients />
      <section>
        <div className="cfd1l cnsl7 cwkz1 cwkio">
          <div className="coh2n cm5ip">
            <div className="cwa15 ceiqu">
              <Sidebar />
              <div className="cd11c">
                <JobList />
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
