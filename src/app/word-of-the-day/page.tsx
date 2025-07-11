import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WordOfTheDay() {
  return (
    <main className="flex justify-center items-center min-h-screen p-6 bg-background">
      <Card className="w-full max-w-md p-6 space-y-4 shadow-lg">
        <h1 className="text-2xl font-bold">Word of the Day</h1>
        <div>
          <p className="text-muted-foreground text-sm uppercase tracking-wide">
            Eloquent
          </p>
          <p className="text-base mt-1">/ˈɛl.ə.kwənt/</p>
          <p className="text-sm mt-2">
            Fluent or persuasive in speaking or writing. "She gave an eloquent
            speech at the event."
          </p>
        </div>
        <Input placeholder="Write your own sentence..." />
        <Button className="w-full">Save to Vocabulary</Button>
      </Card>
    </main>
  );
}
