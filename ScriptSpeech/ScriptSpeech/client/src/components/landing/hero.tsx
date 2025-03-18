import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MessageSquare, Wand2 } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-primary/5 to-primary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-up bg-gradient-to-br from-white via-primary-foreground to-primary/50 bg-clip-text text-transparent text-5xl font-bold tracking-tight sm:text-7xl">
            Transform Scripts into
            <span className="block mt-2">Natural Language</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Our AI-powered platform converts your scripts into natural, conversational language that connects with your audience. Perfect for content creators, marketers, and educators.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/app">
              <Button
                size="lg"
                className="group relative px-8 py-6 text-lg overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300"
              >
                Try For Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Demo Preview */}
            <div className="relative rounded-xl bg-card/30 p-6 backdrop-blur-sm ring-1 ring-white/10">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Original Script</p>
                    <div className="rounded-lg bg-card/50 p-3">
                      <p className="text-sm text-muted-foreground">
                        "Today we'll examine the impact of artificial intelligence on modern business operations..."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Wand2 className="h-6 w-6 text-primary animate-pulse" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Converted Text</p>
                    <div className="rounded-lg bg-card/50 p-3">
                      <p className="text-sm text-muted-foreground">
                        "Hey everyone! Let's chat about how AI is changing the way businesses work these days..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Experience the Magic</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Natural Conversions",
                    description: "Transform formal scripts into engaging, natural dialogue"
                  },
                  {
                    title: "Customizable Tone",
                    description: "Adjust the style from professional to casual"
                  },
                  {
                    title: "Real-time Processing",
                    description: "Get instant conversions powered by advanced AI"
                  }
                ].map((feature) => (
                  <div key={feature.title} className="rounded-lg bg-card/30 p-4 ring-1 ring-white/10">
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}