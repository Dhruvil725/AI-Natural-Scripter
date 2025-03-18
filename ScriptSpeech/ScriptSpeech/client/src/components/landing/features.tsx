import { Brain, Zap, Settings2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    name: 'AI-Powered Conversion',
    description: 'Advanced AI algorithms transform your scripts into natural, human-like language.',
    icon: Brain
  },
  {
    name: 'Real-time Processing',
    description: 'Get instant results with our powerful API, perfect for high-volume content creation.',
    icon: Zap
  },
  {
    name: 'Customizable Options',
    description: 'Fine-tune tone, pace, and emotion to match your communication needs.',
    icon: Settings2
  },
];

export function Features() {
  return (
    <div className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to convert your scripts
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} className="relative overflow-hidden border-primary/10 bg-gradient-to-b from-background to-primary/5">
                <CardContent className="p-6">
                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.name}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}