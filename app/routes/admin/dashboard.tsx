import { Header, StatsCard } from "components";

const Dashboard = () => {
  const user = { name: "Liara" };
  const dashboardStats = {
    totalUsers: 12450,
    usersJoined: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 3210,
    tripCreated: { currentMonth: 150, lastMonth: 250 },
    userRole: { total: 62, currentMonth: 25, lastMonth: 15 },
  };

  const { totalUsers, usersJoined, totalTrips, tripCreated, userRole } =
    dashboardStats;
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Bem vindo ${user?.name ?? "Convidado"}`}
        description="Tenha controle das atividades, destinos instagramaveis e populares em tempo real"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total de usuários"
            total={totalTrips}
            currentMonthCount={tripCreated.currentMonth}
            lastMonthCount={tripCreated.lastMonth}
          />

          <StatsCard
            headerTitle="Total de viagens"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />

          <StatsCard
            headerTitle="Usuários ativos"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
