import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { Header } from "components";
import { selectItems } from "~/constants";
import { formatKey } from "~/lib/utils";
import type { Route } from "./+types/create-trip";

export const loader = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,latlng,maps", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // name: string;
  // coordinates: [number, number];
  // value: string;
  // openStreetMap?: string;
  const data = await response.json();
  console.log(data);

  return data.map((country: any) => ({
    flags: country.name.flags,
    name: country.name.common,
    coordinates: country.latlng,
    value: country.name.common,
    openStreetMap: country.maps?.openStreetMap,
  }));
};

const CreateTrip = ({ loaderData }: Route.ComponentProps) => {
  const handleSubmit = async () => {};
  const countries = loaderData as Country[];

  const handlChange = (key: keyof TripFormData, value: string | number) => {};

  const countryData = countries.map((country) => {
    return {
      text: country.name,
      value: country.value,
    };
  });

  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
      <Header
        title="Adiciona uma viagem"
        description="Ver e editar Planos de viagens gerados por AI"
      />
      <section className="mt-2.5 wrapper-md">
        <form className="trip-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country">País</label>
            <ComboBoxComponent
              id="country"
              dataSource={countryData}
              fields={{ text: "text", value: "value" }}
              placeholder="Selecione um país"
              className="combo-box"
              change={(e: { value: string | undefined }) => {
                if (e.value) {
                  handlChange("country", e.value);
                }
              }}
              allowFiltering
              // filtering={(e) => {
              //   const query = e.text.toLowerCase();
              //   e.updateData(
              //     countries
              //       .filter((country) => country.name.toLocaleLowerCase().includes(query))
              //       .map((country) => {
              //         ({ text: country.name, value: country.value });
              //       }),
              //   );
              // }}
            />
          </div>
          <div>
            <label htmlFor="duration">Duração</label>
            <input
              type="number"
              id="duration"
              name="duration"
              placeholder="Entre um número de dias"
              className="form-input placheholder:text-gray-100"
              onChange={(e) => handlChange("duration", Number(e.target.value))}
            />
          </div>
          {selectItems.map((key) => (
            <div key={key}>
              <label htmlFor={key}>{formatKey(key)}</label>
            </div>
          ))}
        </form>
      </section>
    </main>
  );
};

export default CreateTrip;
