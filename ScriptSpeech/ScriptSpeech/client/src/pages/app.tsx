import { useState } from "react";
import { ScriptForm } from "@/components/script-form";
import { ScriptPreview } from "@/components/script-preview";
import type { ScriptConversion } from "@shared/schema";
import { convertScript } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { ArrowLeft, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (data: ScriptConversion) => {
    setIsLoading(true);
    try {
      const response = await convertScript(data);
      setResult(response.spokenScript || response.result);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to convert script. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Wand2 className="h-4 w-4 text-primary" />
            AI Script Converter
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Convert Your Script
            </h1>
            <p className="mt-2 text-muted-foreground">
              Transform your formal scripts into natural, conversational language
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl"></div>
              <div className="relative bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 shadow-xl">
                <div className="p-6">
                  <ScriptForm onSubmit={handleSubmit} isLoading={isLoading} />
                </div>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl blur-xl"></div>
              <div className="relative bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 shadow-xl">
                <div className="p-6">
                  <ScriptPreview content={result} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}