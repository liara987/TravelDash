import { Header } from "components";

const Trip = () => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Viagens"
        description="Veja e edite Planos de viagens geradas com AI"
        ctaText="Criar viagem"
        ctaUrl="/trip/create"
      />
    </main>
  );
};

export default Trip;
