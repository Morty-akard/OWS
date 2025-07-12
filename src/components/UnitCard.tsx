import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface UnitCardProps {
  title: string;
  subtitle: string;
  progress: number;
  learnedWords: number;
}

export default function UnitCard({ title, subtitle, progress, learnedWords }: UnitCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="border-b">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
        <CardAction>
          <div className="border-2 rounded-full size-12 flex items-center justify-center text-sm">
            {progress}%
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-2 py-4">
        <Progress value={progress} />
        <p className="text-sm text-muted-foreground">{learnedWords} words learned</p>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Continue</Button>
      </CardFooter>
    </Card>
  );
}
