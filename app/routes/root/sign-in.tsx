import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link, redirect } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader() {
  try {
    const user = await account.get();

    if (user.$id) return redirect("/");
  } catch (error) {}
}

const SignIn = () => {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/">
              <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
            </Link>
            <h1 className="p-28-bold text-dark-100">TravelTips</h1>
          </header>
          <article>
            <h2 className="p-28-semibold text-dark-100 text-center flex flex-col gap-3">
              <p className="p-18-regular text-center text-gray-100 !leading-7">
                Entre com Google para gerenciar destinos, itinerarios, e uso atividades com
                facilidade
              </p>
              <ButtonComponent
                type="button"
                iconCss="e-search-icon"
                className="button-class !h-11 !w-full"
                onClick={loginWithGoogle}
              >
                <img src="/assets/icons/google.svg" alt="logo google" className="size-6" />
                <span className="p-18-semibold text-white">Entre com google</span>
              </ButtonComponent>
            </h2>
          </article>
        </div>
      </section>
    </main>
  );
};
export default SignIn;
