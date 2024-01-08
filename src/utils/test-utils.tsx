import { RenderOptions, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@/lib/reactQuery";
import { StylesManager } from "@/styles/StylesManager";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider>
      <StylesManager>
        <BrowserRouter>{children}</BrowserRouter>
      </StylesManager>
    </QueryClientProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
