import Game from "@/components/Game/Game";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <MantineProvider>
        <Game />
      </MantineProvider>
    </main>
  );
}
