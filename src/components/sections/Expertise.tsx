import { portfolioData } from "@/content/profile";

function ExpertiseIcon({ id }: { id: string }) {
  const paths: Record<string, string> = {
    solar: "M4 10h16l-2 10H6L4 10Zm4 0 1 10m6-10-1 10M12 2v4M3 5l2 2m16-2-2 2",
    bess: "M4 7h15v14H4V7Zm15 5h2v4h-2M8 11h7m-4-3v6",
    renewable: "M12 21c-5-3-8-7-8-11 0-3 3-5 8-7 5 2 8 4 8 7 0 4-3 8-8 11Zm0 0v-9m0 0 4-3m-4 3-4-3",
    development: "M4 20h16M6 18V9l6-5 6 5v9M9 18v-5h6v5M3 9l9-7 9 7",
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={paths[id] || paths.renewable} /></svg>;
}

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="expertise-section">
      <div className="phase2-container expertise-inner">
        <span className="phase2-pill expertise-pill"><span className="phase2-dot" />Expertise</span>
        <h2 id="expertise-title" className="expertise-heading">Renewable energy expertise,<br />grounded in development</h2>
        <div className="expertise-grid">
          {portfolioData.expertise.map(item => (
            <article className="expertise-card" key={item.id}>
              <span className="expertise-icon"><ExpertiseIcon id={item.id} /></span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
