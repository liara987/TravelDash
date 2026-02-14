import { ColumnDirective, ColumnsDirective, GridComponent } from "@syncfusion/ej2-react-grids";
import { Header } from "components";
import { getAllUsers } from "~/appwrite/auth";
import { cn, formatDate } from "~/lib/utils";
import type { Route } from "./+types/all-users";

export const loader = async () => {
  const { users, total } = await getAllUsers(10, 0);
  return { users, total };
};

const AllUsers = ({ loaderData }: Route.ComponentProps) => {
  const { users } = loaderData ?? [];
  return (
    <main className="all-users wrapper">
      <Header
        title="Gerenciar usuários"
        description="Filtre, ordene, e acesse detalhes dos perfis de usuários"
      />

      <GridComponent dataSource={Array.isArray(users) ? users : []}>
        <ColumnsDirective>
          {/* Nome */}
          <ColumnDirective
            field="name"
            headerText="Name"
            width="200"
            textAlign="Left"
            template={(props: UserData) => (
              <div className="flex items-center gap-1.5 px-4">
                <img
                  src={props?.imageUrl || ""}
                  alt="Foto do usuário"
                  className="rounded-full size-8 aspect-square"
                  referrerPolicy="no-referrer"
                />
                <span>{props?.name || "sem nome"}</span>
              </div>
            )}
          />

          {/* Email */}
          <ColumnDirective field="email" headerText="email" textAlign="Left" width="200" />

          {/* Data de cadastro */}
          <ColumnDirective
            field="joinedAt"
            headerText="Data de cadastro"
            textAlign="Left"
            width="120"
            template={(props: { joinedAt: string }) => formatDate(props?.joinedAt)}
          />

          {/* Etinerario */}
          <ColumnDirective
            field="status"
            headerText="Tipo"
            textAlign="Left"
            width="100"
            template={(props: UserData) =>
              props ? (
                <article
                  className={cn(
                    "status-column",
                    props?.status === "user" ? "bg-success-50" : "bg-light-300",
                  )}
                >
                  <div
                    className={cn(
                      "size-1.5 rounded-full",
                      props?.status === "user" ? "bg-success-500" : "bg-gray-500",
                    )}
                  />

                  <h3
                    className={cn(
                      "font-inter text-xs font-medium",
                      props?.status === "user" ? "text-success-700" : "text-gray-500",
                    )}
                  >
                    {props?.status || ""}
                  </h3>
                </article>
              ) : null
            }
          />
        </ColumnsDirective>
      </GridComponent>
    </main>
  );
};

export default AllUsers;
