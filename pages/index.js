export default function Home() {
  return (
    <main className="container">
      <h1 className="mission">To use the power of AI to help people make healthier choices every day, so that living well is simple, joyful, and universal.</h1>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
        }
        .mission {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          text-align: center;
          max-width: 900px;
          line-height: 1.2;
        }
        @media (max-width: 600px) {
          .mission { font-size: 1.5rem; }
        }
      `}</style>
    </main>
  );
}
