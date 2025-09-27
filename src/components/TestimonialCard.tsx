import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating?: number;
}

const TestimonialCard = ({ text, author, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="card-sweet">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star 
              key={i} 
              className="h-4 w-4 text-primary fill-current" 
            />
          ))}
        </div>
        <blockquote className="text-foreground mb-4 italic leading-relaxed">
          "{text}"
        </blockquote>
        <cite className="text-muted-foreground font-medium">
          – {author}
        </cite>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;