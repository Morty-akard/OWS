import UnitCard from "@/components/UnitCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const units = [
  { id: 1, title: "Oxford Word Skill", subtitle: "Basic vocabulary", progress: 45, learned: 120 },
  { id: 2, title: "Oxford Word Skill", subtitle: "Intermediate vocabulary", progress: 10, learned: 30 },
  { id: 3, title: "Oxford Word Skill", subtitle: "Advanced vocabulary", progress: 0, learned: 0 },
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col pb-16">
      <header className="p-4 flex justify-end">
        <Avatar>
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </header>
      <div className="flex-1 flex flex-col gap-4 p-4">
        {units.map((unit) => (
          <UnitCard
            key={unit.id}
            title={unit.title}
            subtitle={unit.subtitle}
            progress={unit.progress}
            learnedWords={unit.learned}
          />
        ))}
      </div>
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-background">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid grid-cols-3 w-full rounded-none">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="units">Units</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>
    </main>
  );
}
