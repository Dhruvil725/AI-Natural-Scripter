import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ScriptPreviewProps {
  content: string | null;
}

export function ScriptPreview({ content }: ScriptPreviewProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (content) {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "The converted text has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className="border-0 bg-transparent">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <CardTitle>Converted Text</CardTitle>
        </div>
        {content && (
          <Button
            variant="ghost"
            size="icon"
            onClick={copyToClipboard}
            className="relative"
            title="Copy to clipboard"
          >
            {copied ? (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {content ? (
          <div className="relative rounded-lg bg-card/50 p-4 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg" />
            <p className="relative whitespace-pre-wrap">{content}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground">
                Convert a script to see the magic happen
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Your converted text will appear here
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}