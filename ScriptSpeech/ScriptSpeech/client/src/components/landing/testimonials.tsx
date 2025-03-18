import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
    quote: "This tool has revolutionized how I create content. The natural language conversion is simply amazing!"
  },
  {
    name: "Mark Thompson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    quote: "We've seen a 40% increase in engagement since using this platform for our marketing scripts."
  },
  {
    name: "Emily Chen",
    role: "Educational Tech",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    quote: "Perfect for creating engaging educational content. The customization options are invaluable."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Content Creators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our users are saying about their experience
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
