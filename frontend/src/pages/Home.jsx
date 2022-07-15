import React, { useContext } from "react";
import { Context } from "./context/DefaultContext";

export default function Home() {
  const { handleChange, estado, estados, response } = useContext(Context);
  return (
    <div id="App">
      <div>
        <aside class="p-3 text-center text-white bg-black">
          <p class="text-sm font-medium text-center">
            <a
              href="https://www.geografiaopinativa.com.br/2016/02/lista-dos-estados-brasileiros-por.html"
              class="hover:opacity-75"
              rel="noopener noreferrer"
              target="_blank"
            >
              ⭐️ Lista dos estados brasileiros por população - Geografia
              Opinativa ⭐️
            </a>
          </p>
        </aside>
        <header class="sticky inset-x-0 top-0 z-50 bg-white border-b-2 border-gray-100">
          <div class="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
            <nav class="flex items-center">
              <a class="text-sm font-medium" href="/">
                Indicadores
                <span aria-hidden="true" class="ml-1.5" role="img">
                  🚀
                </span>
              </a>
              <span class="block w-px h-6 mx-4 bg-gray-100"></span>
              <div class="flex items-center sm:hidden">
                <button class="inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                  <span class="ml-1.5 text-xs font-medium">Menu</span>
                </button>
              </div>
            </nav>
            <div class="flex items-center justify-end flex-1">
              <a
                class="p-2 rounded hover:opacity-75"
                href="https://docs.google.com/spreadsheets/d/1Sx7Q3fBRSzQbZUqJYfxwAjAKFr5burDN2wpAGLh31Ek/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="sr-only"> Planilha </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </a>
              <a
                class="p-2 rounded hover:opacity-75"
                href="https://github.com/wanderpereira"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="sr-only"> GitHub </span>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
        <main role="main">
          <section>
            <div class="max-w-screen-xl px-4 py-16 mx-auto text-center lg:py-32">
              <h1 class="text-4xl w-full font-bold sm:text-6xl">
                Indicadores Populacional
              </h1>
              <p class="max-w-lg mx-auto w-full mt-4 text-sm text-gray-500">
                Os dados apresentados foram disponibilizados por Geografia
                Opinativa.
              </p>
              <p>
                Segundo dados do IBGE, o Brasil tem hoje cerca de 200 milhões de
                habitantes. Esta população divide-se desigualmente pelos vinte e
                seis estados da federação e pelo Distrito Federal. Explore
                abaixo uma lista com as 27 unidades federativas do país pela
                população absoluta.
              </p>
              <div class="mt-8 sm:justify-center sm:items-center sm:flex">
                <form>
                  <select
                    onChange={handleChange}
                    value={estado}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" selected disabled>
                      Selecione um Estado
                    </option>
                    {estados.map((option) => (
                      <option value={option.sigla} data-geo={option.regiao}>
                        {option.estado}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div class="max-w-screen-xl mt-12 px-4 py-9 mx-auto sm:justify-center sm:items-center sm:flex">
                <span
                  href=""
                  class="static flex items-center max-w-xs w-5/6 gap-5 p-5 text-white bg-blue-400 rounded-lg shadow"
                >
                  <span class="text-sm w-1/8 font-medium">{response}</span>
                </span>
              </div>
            </div>
          </section>
        </main>
        <footer class="border-t-2 border-gray-100">
          <div class="max-w-screen-xl px-4 py-6 mx-auto">
            <p class="text-sm text-center text-gray-500">
              As informações prestadas foram publicadas em 18 De Fevereiro De
              2016 por Fernando Soares De Jesus.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}