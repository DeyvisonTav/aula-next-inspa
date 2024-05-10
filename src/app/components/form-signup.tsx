"use client";
import { client } from "@/service/graphql/config";
import { REGISTER_USER } from "@/service/graphql/mutations/register-user";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export function FormSignupComponent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function changeName(e: any) {
    setUser({ ...user, name: e.target.value });
  }

  function changeEmail(e: any) {
    setUser({ ...user, email: e.target.value });
  }

  function changePassword(e: any) {
    setUser({ ...user, password: e.target.value });
  }
  function resetForm() {
    setUser({ name: "", email: "", password: "" });
  }

  async function registerUser() {
    setIsLoading(true);
    try {
      await client.mutate({
        mutation: REGISTER_USER,
        variables: {
          createUserInput: {
            name: user.name,
            email: user.email,
            password: user.password,
          },
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      resetForm();
      router.push("/");
    }
  }
  return (
    <div className="flex flex-col gap-8 px-14 pt-11">
      <div className="flex flex-col items-start">
        <div className="font-semibold text-3xl ">Welcome to </div>
        <div className="font-extrabold text-5xl text-[#6358DC]">
          Design School
        </div>
      </div>

      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          registerUser();
        }}
        className="flex flex-col gap-10 pt-36"
      >
        <input
          className="border border-zinc-200 bg-zinc-100 p-6 rounded-lg w-full"
          placeholder="Name"
          type="text"
          onChange={changeName}
          value={user.name}
        />

        <input
          className="border border-zinc-200 bg-zinc-100 p-6 rounded-lg w-full"
          placeholder="Email"
          type="text"
          onChange={changeEmail}
          value={user.email}
        />

        <input
          className="border border-zinc-200 bg-zinc-100 p-6 rounded-lg w-full"
          placeholder="Password"
          type="password"
          onChange={changePassword}
          value={user.password}
        />

        <button
          type="submit"
          className="text-white bg-[#6358DC] text-center py-6 rounded-lg
                           transition-all duration-500 hover:bg-[#6358DC]/70"
        >
          Registrar
        </button>
      </form>

      <div className="text-center pt-10">
        <div>
          you have an account?{" "}
          <Link className="text-[#6358DC]" href="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
