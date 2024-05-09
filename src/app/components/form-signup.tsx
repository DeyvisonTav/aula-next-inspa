import Link from "next/link";

export function FormSignupComponent() {
  return (
    <div className="flex flex-col gap-8 px-14 pt-11">
      <div className="flex flex-col items-start">
        <div className="font-semibold text-3xl ">Welcome to </div>
        <div className="font-extrabold text-5xl text-[#6358DC]">
          Design School
        </div>
      </div>

      <form className="flex flex-col gap-10 pt-36">
        <input
          className="border border-zinc-200 bg-zinc-100 p-6 rounded-lg w-full"
          placeholder="Name"
          type="text"
        />

        <input
          className="border border-zinc-200 bg-zinc-100 p-6 rounded-lg w-full"
          placeholder="Email"
          type="text"
        />

        <input
          className="border border-zinc-200 bg-zinc-100 p-6 rounded-lg w-full"
          placeholder="Password"
          type="password"
        />

        <button
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
