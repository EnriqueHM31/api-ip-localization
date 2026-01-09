import PagesRoutes from "./routes/pages.routes";
import { Toaster } from "sonner";

function App() {

  return (
    <>
      <div className="w-full min-h-screen animated-bg flex pt-10 flex-col relative h-full ">
        <PagesRoutes />
      </div>
      <Toaster
        expand
        position="bottom-right"
        toastOptions={{
          className: "bg-blue-950 text-white border border-blue-800",
          style: {
            background: "#080336",
            color: "white",
            border: "1px solid white",
            borderRadius: "10px",
          },
        }}
      />
    </>

  )
}

export default App
