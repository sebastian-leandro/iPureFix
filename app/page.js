import { Hero, CTA, Offer, Row, Model } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="grid gap-y-24">
        <Offer />
        <Row />
        <CTA />
        <Model />
      </main>
    </>
  );
}
