import { Header } from "components";

const Dashboard = () => {
  const user = { name: "Liara" };
  const dashboard = {
    totalUsers: 12450,
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Bem vindo ${user?.name ?? "Convidado"}`}
        description="Tenha controle das atividades, destinos instagramaveis e populares em tempo real"
      />
      Dashboard page content
    </main>
  );
};

export default Dashboard;
