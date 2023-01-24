import { Code, CodeSyntaxHighlighterEnabler } from "./components/Code";

export default function App() {
  return (
    <>
      <CodeSyntaxHighlighterEnabler />
      <div className="h-screen overflow-auto py-12 bg-[#24242E] text-white">
        <h1 className="mb-16 px-8 text-6xl font-thin tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-100 to-zinc-500">
          Tailwind Syntax Examples
        </h1>
        <div className="px-8 flex flex-col gap-12">
          <Card_One />
          <Card_Two />
          <Card_Three />
          <Card_Four />
          <Card_Five />
          <Card_Six />
        </div>
      </div>
    </>
  );
}

// reusable components

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-6 px-6 rounded-xl shadow-xl border-4 border-zinc-800">
      {children}
    </div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-8 text-3xl font-semibold">{children}</h2>
);
const CardSubTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2 text-md font-semibold">{children}</div>
);
const CardCodeWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-12 gap-8">{children}</div>
);
const CardCodeInput = ({ inputHTML }: { inputHTML: string }) => (
  <div className="col-span-12 lg:col-span-6">
    <CardSubTitle>Input</CardSubTitle>
    <div className="rounded-xl shadow-xl bg-[#24242E] border-4 border-zinc-800">
      <Code language="html">{inputHTML}</Code>
    </div>
  </div>
);
const CardCodeOutput = ({
  outputHTML,
  outputCSS,
}: {
  outputHTML: string;
  outputCSS: string;
}) => (
  <div className="col-span-12 lg:col-span-6">
    <CardSubTitle>Output</CardSubTitle>
    <div className="rounded-xl shadow-xl bg-[#24242E] border-4 border-zinc-800">
      <Code language="html">{outputHTML}</Code>
      <p className="mt-6 px-4 opacity-30">// css</p>
      <Code language="css">{outputCSS}</Code>
    </div>
  </div>
);

// specific components

const Card_One = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput inputHTML={`<div class="p-8"></div>`} />
        <CardCodeOutput
          outputHTML={`<div class="p-8"></div>`}
          outputCSS={`
.p-8 {
  padding: 1rem;
}
        `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Two = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput inputHTML={`<div class="p-[2rem]"></div>`} />
        <CardCodeOutput
          outputHTML={`<div class="p-[2rem]"></div>`}
          outputCSS={`
.p-[2rem] {
  padding: 2rem;
}`}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Three = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput inputHTML={`<div class="p-[calc(100%-5rem)]"></div>`} />
        <CardCodeOutput
          outputHTML={`<div class="p-[calc(100%-5rem)]"></div>`}
          outputCSS={`
.p-[calc(100%-5rem)] {
  padding: calc(100% - 5rem);
}
      `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Four = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput
          inputHTML={`<div class="p-[calc(100%-theme(space.8))]"></div>`}
        />
        <CardCodeOutput
          outputHTML={`<div class="p-[calc(100%-theme(space.8))]"></div>`}
          outputCSS={`
.p-[calc(100%-theme(space.8))] {
  padding: calc(100% - 2rem);
  /* theme(space.8) will be converted to 2rem by the compiler */
}
      `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Five = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput inputHTML={`<div class="[padding:5vw]"></div>`} />
        <CardCodeOutput
          outputHTML={`<div class="[padding:5vw]"></div>`}
          outputCSS={`
.[padding:5vw] {
  padding: 5vw;
}
      `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Six = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput
          inputHTML={`<div class="[margin:theme(space.8)]"></div>`}
        />
        <CardCodeOutput
          outputHTML={`<div class="[margin:theme(space.8)]"></div>`}
          outputCSS={`
.[margin:theme(space.8)] {
  margin: 2rem;
  /* theme(space.8) will be converted to 2rem by the compiler */
}
      `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
