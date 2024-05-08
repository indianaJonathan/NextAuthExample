import Image from "next/image"
import { BoxedSection } from "./components/boxed-section"
import { ReferenceItem } from "./components/reference-item"
import Link from "next/link"

export default async function Home() {
  return (
    <main className="flex-1 flex flex-col gap-8 p-8">
      <div>
        <span className="text-4xl font-bold">
          Next Auth Example
        </span>
        <p className="text-lg text-zinc-400">
          Essa aplicação foi criada como um exemplo de utilização do framework next-auth em sua versão beta no Next 14.1.4
        </p>
        <div className="flex flex-row gap-5">
          <div className="w-2 min-h-full bg-zinc-500" />

          <p className="text-sm text-zinc-500 italic">
            Podem existir soluções melhores. Mas com a falta de documentação e exemplos práticos, essa foi a solução mais simples que encontrei enquanto testava as novas funções da versão Beta
          </p>
        </div>
      </div>
      <BoxedSection title="Dependências">
        <div className="flex flex-row gap-4 flex-nowrap">
          <ReferenceItem href="https://www.npmjs.com/package/next-auth/v/5.0.0-beta.17">
            <div className="w-8 h-auto">
              <Image 
                src={`https://next-auth.js.org/img/logo/logo-xs.png`}
                alt="Next Auth logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span className="font-semibold">
              next-auth
            </span>
            <span className="text-sm text-zinc-900">
              5.0.0-beta.17
            </span>
          </ReferenceItem>
          <ReferenceItem href="https://www.npmjs.com/package/react-icons/v/5.2.1">
            <div className="w-12 h-auto">
              <Image 
                src={`https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg`}
                alt="React Icons Logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span className="font-semibold">
              react-icons
            </span>
            <span className="text-sm text-zinc-900">
              5.2.1
            </span>
          </ReferenceItem>
          <ReferenceItem href="https://www.npmjs.com/package/next/v/14.1.4">
            <div className="w-12 h-auto">
              <Image 
                src={`https://camo.githubusercontent.com/39791c3e4c4387b8b913628a8f258768ea3a4a71fc815ced2219f81c22c71f6a/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67`}
                alt="Next.JS logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span className="font-semibold">
              Next.js
            </span>
            <span className="text-sm text-zinc-900">
              14.1.4
            </span>
          </ReferenceItem>
        </div>
      </BoxedSection>
      <BoxedSection title="Autenticações implementadas">
        <div className="grid grid-cols-12 gap-4">
          <ReferenceItem href="https://github.com">
            <div className="w-12 h-auto">
              <Image 
                src={`https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg`}
                alt="GitHub logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span>
              GitHub
            </span>
          </ReferenceItem>
          <ReferenceItem href="https://google.com">
            <div className="w-12 h-auto">
              <Image 
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png`}
                alt="Google logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span>
              Google
            </span>
          </ReferenceItem>
          <ReferenceItem href="https://www.microsoft.com/pt-br/">
            <div className="w-12 h-auto">
              <Image 
                src={`https://cdn-icons-png.flaticon.com/512/732/732221.png`}
                alt="Microsoft logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span>
              Microsoft
            </span>
          </ReferenceItem>
          <ReferenceItem href="https://twitter.com/">
            <div className="w-12 h-auto">
              <Image 
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/640px-X_logo_2023.svg.png`}
                alt="Twitter (X) logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span>
              Twitter (X)
            </span>
          </ReferenceItem>
        </div>
      </BoxedSection>
      <BoxedSection title="Autenticações que serão implementadas">
        <div className="grid grid-cols-12 gap-4">
          <ReferenceItem href="https://apple.com">
            <div className="w-12 h-auto">
              <Image 
                src={`https://www.svgrepo.com/show/69341/apple-logo.svg`}
                alt="Apple logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span>
              Apple
            </span>
          </ReferenceItem>
          <ReferenceItem href="https://instagram.com">
            <div className="w-12 h-auto">
              <Image 
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png`}
                alt="Instagram logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span>
              Instagram
            </span>
          </ReferenceItem>
          <ReferenceItem href="https://linkedin.com">
            <div className="w-12 h-auto">
              <Image 
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png`}
                alt="LinkedIn logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <span>
              LinkedIn
            </span>
          </ReferenceItem>
        </div>
      </BoxedSection>
      <div className="flex flex-row items-center justify-center gap-8 px-8 py-12">
        <Link href="https://github.com/indianaJonathan?tab=repositories">
          <div className="rounded-l-full rounded-r-full bg-zinc-500 overflow-hidden p-2 flex flex-row gap-3 items-center">
            <div className="w-16 h-auto overflow-hidden rounded-full">
              <Image 
                src={`https://avatars.githubusercontent.com/u/22666576?v=4`}
                alt="Jonathan Hermam GitHub Page"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <div className="flex flex-col gap-1 mr-4">
              <span className="text-black text-xl font-semibold">
                Jonathan Hermam
              </span>
              <span className="text-white text-sm font-base">
                Página do GitHub do autor
              </span>
            </div>
          </div>
        </Link>
        <Link href="https://github.com/indianaJonathan/NextAuthExample">
          <div className="rounded-l-full rounded-r-full bg-zinc-500 overflow-hidden p-2 flex flex-row gap-3 items-center">
            <div className="w-16 h-auto overflow-hidden rounded-full">
              <Image 
                src={`https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg`}
                alt="GitHub logo"
                width={300}
                height={300}
                priority={false}
              />
            </div>
            <div className="flex flex-col gap-1 mr-4">
              <span className="text-black text-xl font-semibold">
                NextAuth Example
              </span>
              <span className="text-white text-sm font-base">
                Repositório do projeto
              </span>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
