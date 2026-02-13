import { Header, StatsCard, TripCard } from "components";
import { account } from "~/appwrite/client";
import { allTrips, dashboardStats } from "~/constants";
import type { Route } from "./+types/dashboard";

const { totalUsers, usersJoined, totalTrips, tripCreated, userRole } = dashboardStats;

export const clientLoader = async () => await account.get();

const Dashboard = ({ loaderData }: Route.ComponentProps) => {
  const user = loaderData as unknown as User | null;

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
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Viagens criadas</h1>
        <div className="trip-grid">
          {allTrips.slice(0, 4).map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
            <TripCard
              key={id}
              id={id.toString()}
              name={name}
              imageUrl={imageUrls[0]}
              location={itinerary?.[0]?.location ?? ""}
              tags={tags}
              price={estimatedPrice}
            />
          ))}
        </div>
      </section>
      {/* <TripCard /> */}
    </main>
  );
};

export default Dashboard;
