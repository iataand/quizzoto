import { CreateQuizzContextProvider } from "../contexts/createQuizzContext";

export default function CreateQuizzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreateQuizzContextProvider>{children}</CreateQuizzContextProvider>;
}
