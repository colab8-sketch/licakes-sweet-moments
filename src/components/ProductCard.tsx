import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  whatsappMessage?: string;
}

const ProductCard = ({ title, description, price, image, whatsappMessage }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const message = whatsappMessage || `Olá! Gostaria de encomendar um ${title}. Poderia me dar mais informações?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5531982785648?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className="card-sweet overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-playfair font-semibold text-xl mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg text-primary">
            {price}
          </span>
          <Button 
            onClick={handleWhatsAppClick}
            className="btn-whatsapp"
          >
            Fazer Pedido
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;